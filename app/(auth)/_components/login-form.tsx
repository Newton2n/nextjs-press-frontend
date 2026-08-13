"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginAction } from "../_action/auth-action";

const demoAccounts = {
  USER: {
    email: "user@gmail.com",
    password: "123456",
  },
  AUTHOR: {
    email: "author@gmail.com",
    password: "123456",
  },
  ADMIN: {
    email: "admin1@gmail.com",
    password: "123456",
  },
} as const;

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const demoRole = searchParams.get("demo") as
    | keyof typeof demoAccounts
    | null;

  const demoAccount = demoRole
    ? demoAccounts[demoRole]
    : undefined;

  const initialState = {
    success: false,
    message: "",
    data: null,
  };

  const [state, action, pending] = useActionState(
    loginAction,
    initialState,
  );

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
    } else {
      toast.error(state.message, {
        position: "top-center",
      });
    }
  }, [state, router]);

  return (
    <Card className="w-full border border-border shadow-lg">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">
          Welcome back
        </CardTitle>

        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action} className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="font-medium text-foreground"
            >
              Email
            </Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                defaultValue={demoAccount?.email ?? ""}
                required
                disabled={pending}
                className="border border-border bg-background pl-10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="font-medium text-foreground"
            >
              Password
            </Label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                defaultValue={demoAccount?.password ?? ""}
                minLength={6}
                required
                disabled={pending}
                className="border border-border bg-background pl-10"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={pending}
            className="mt-6 w-full cursor-pointer gap-2"
          >
            {pending ? (
              "Signing in..."
            ) : (
              <>
                Sign in
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border pt-6">
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}