'use client'

import { useEffect } from "react";
import { ErrorState } from "@/components/shared/async-state";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Dashboard route error", error.digest ?? "unknown");
  }, [error]);

  return <ErrorState reset={reset} title="We couldn’t load your dashboard" />;
}
