"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "../_action/auth-action";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, false);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
    if (!state) return;
    console.log("state.success", state.success);
    if (!state.success) {
      toast.error("Sorry can not login", { position: "top-center" });
    }
  }, [state, router]);
  
  return (
    <Card className="w-full max-w-md border border-border shadow-lg">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <Link href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
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
          <Button type="submit" disabled={pending} className="w-full gap-2 mt-6">
            {pending ? "Signing in..." : (
              <>
                Sign in <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t border-border pt-6">
        <p className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
