import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { getAccessToken } from "./service/refresh-token";
import { checkSubscriptionStatus } from "./app/(public)/_action/check-subscripton-status";

// This function can be marked `async` if using `await` inside
const AUTH_ROUTE = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/news"];

export async function proxy(request: NextRequest) {
  const reqPathName = request.nextUrl.pathname;

  const response = NextResponse.next();

  const refreshToken = request.cookies.get("refreshToken")?.value;
  let accessToken = request.cookies.get("accessToken")?.value;

  console.log("access token 1 ", accessToken, "end access token 1");

  let verifyAccessToken = accessToken
    ? await jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET!)
    : null;
  const verifyRefreshToken = refreshToken
    ? await jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!)
    : null;

  console.log("verify access token", verifyAccessToken);
  console.log("verify refresh  token", verifyRefreshToken);

  if (!verifyAccessToken?.success && verifyRefreshToken?.success) {
    console.log(
      "new refresh token creating block",
      verifyRefreshToken?.success,
      !verifyAccessToken?.success,
    );
    // if user has verified refreshToken but expired access token then create new
    const result = await getAccessToken();
    if (result.success) {
      const newAccessToken = await result?.data.accessToken;

      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
      });

      accessToken = newAccessToken;
      verifyAccessToken = accessToken
        ? await jwtUtils.verifyToken(
            accessToken,
            process.env.JWT_ACCESS_SECRET!,
          )
        : null;
      console.log("new access token verify", verifyAccessToken);
    }
  }

  if (!verifyAccessToken?.success) {
    response.cookies.delete("accessToken");
  }

  let userRole = null;
  if (verifyAccessToken?.success && verifyAccessToken.data) {
    userRole = verifyAccessToken?.data.role;
  }
  console.log("user role", userRole);

  // if user log in but want to go auth route
  if (verifyAccessToken?.success && AUTH_ROUTE.includes(reqPathName)) {
    if (userRole === "USER") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (userRole === "AUTHOR") {
      return NextResponse.redirect(new URL("/author-dashboard", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTE.some(
    (route) => route === reqPathName || reqPathName.startsWith(route + "/"),
  );
  const isAuthRoute = AUTH_ROUTE.some(
    (route) => route === reqPathName || reqPathName.startsWith(route + "/"),
  );

  if (!isAuthRoute && !isPublicRoute && !verifyAccessToken?.success) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (verifyAccessToken?.success && userRole) {
    if (reqPathName.startsWith("/dashboard") && userRole !== "USER") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
    if (reqPathName.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
    if (reqPathName.startsWith("/author-dashboard") && userRole !== "AUTHOR") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  if (reqPathName === "/premium") {
    const subscription = await checkSubscriptionStatus();
    console.log("subscription status in proxy ", subscription);
    if (subscription.subscriptionStatus !== "ACTIVE") {
      return NextResponse.redirect(new URL("/pricing", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|.*\\.png$).*)"],
};
