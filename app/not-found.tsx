// app/not-found.tsx
import Link from "next/link";
import { FileQuestion, MoveLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center antialiased">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-[0.05] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" />

      <div className="max-w-md space-y-6">
        {/* Animated Visual Anchor */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-muted text-muted-foreground animate-bounce duration-1000">
          <FileQuestion className="h-12 w-12" />
        </div>

        {/* Error Text */}
        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Page not found
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons using shadcn components */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            asChild
            variant="default"
            className="w-full sm:w-auto shadow-sm"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

        
        </div>
      </div>
    </div>
  );
}
