import Jwt from "jsonwebtoken";
interface TJwtPayload {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN" | "AUTHOR";
}

// verify jwt token
const verifyToken = async (token: string, secretKey: string) => {
  try {
  
    const verify = Jwt.verify(token, secretKey);
    console.log("verify token in jwt util",verify)
    return {
      success: true,
      data: verify as TJwtPayload,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const jwtUtils = { verifyToken };
