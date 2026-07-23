"use client";

import { useActionState, useEffect } from "react";
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
import { registerAction } from "../_action/auth-action";
import { RegisterFormType } from "../types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Lock, FileText, ArrowRight } from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();
  const initialState: RegisterFormType = {
    success: false,
    message: "",
    data: null,
  };

  const [state, action, pending] = useActionState(registerAction, initialState);
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
        <CardTitle className="text-2xl">Join Prisma Press</CardTitle>
        <CardDescription>
          Create an account to start sharing your stories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="pl-10 border border-border bg-background"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="pl-10 border border-border bg-background"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="pl-10 border border-border bg-background"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-foreground font-medium">Bio (Optional)</Label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself..."
                className="flex min-h-20 w-full rounded-md border border-border bg-background px-3 py-2 pl-10 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
          </div>
          <Button type="submit" disabled={pending} className="w-full gap-2 mt-6">
            {pending ? "Creating account..." : (
              <>
                Get Started <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
