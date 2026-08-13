'use client'

import { useEffect } from "react";
import { ErrorState } from "@/components/shared/async-state";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
  
  }, [error]);

  return <ErrorState reset={reset} title="We couldn’t load your dashboard" />;
}
