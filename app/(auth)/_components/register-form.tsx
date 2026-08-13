"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  User,
  Mail,
  Lock,
  FileText,
  ArrowRight,
} from "lucide-react";

import { registerAction } from "../_action/auth-action";
import { RegisterFormType } from "../types";

import {
  registerSchema,
  type RegisterFormValues,
} from "../_schema/auth";

export default function RegisterForm() {
  const router = useRouter();

  const initialState: RegisterFormType = {
    success: false,
    message: "",
    data: null,
  };

  const [state, action, pending] = useActionState(
    registerAction,
    initialState,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);

    if (values.bio) {
      formData.append("bio", values.bio);
    }

    action(formData);
  };

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("User registered successfully");

      toast("Log in to continue");

      router.push("/login");
    }
  }, [state, router]);

  return (
    <Card className="w-full max-w-md border border-border shadow-lg">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">
          Join Prisma Press
        </CardTitle>

        <CardDescription>
          Create an account to start sharing your stories
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
        >
          {/* Name */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="font-medium text-foreground"
            >
              Full Name
            </Label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                aria-invalid={!!errors.name}
                {...register("name")}
                className={`pl-10 ${
                  errors.name ? "border-destructive" : ""
                }`}
              />
            </div>

            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

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
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
                className={`pl-10 ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
            </div>

            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
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
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                aria-invalid={!!errors.password}
                {...register("password")}
                className={`pl-10 ${
                  errors.password ? "border-destructive" : ""
                }`}
              />
            </div>

            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label
              htmlFor="bio"
              className="font-medium text-foreground"
            >
              Bio (Optional)
            </Label>

            <div className="relative">
              <FileText className="absolute left-3 top-3 size-4 text-muted-foreground" />

              <textarea
                id="bio"
                placeholder="Tell us about yourself..."
                aria-invalid={!!errors.bio}
                {...register("bio")}
                className={`flex min-h-20 w-full rounded-md border bg-background px-3 py-2 pl-10 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                  errors.bio
                    ? "border-destructive"
                    : "border-border"
                }`}
              />
            </div>

            {errors.bio && (
              <p className="text-sm text-destructive">
                {errors.bio.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={pending}
            className="mt-6 w-full cursor-pointer gap-2"
          >
            {pending ? (
              "Creating account..."
            ) : (
              <>
                Get Started
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border pt-6">
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}