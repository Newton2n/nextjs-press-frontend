"use client";

import Link from "next/link";
import { AlertTriangle, FileText, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton({ label = "Loading page" }: { label?: string }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8" aria-busy="true" aria-label={label}>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-10 w-2/3 max-w-xl" />
        <Skeleton className="h-5 w-full max-w-2xl" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <article key={index} className="flex flex-col gap-4 rounded-2xl border border-border/60 p-4">
            <Skeleton className="aspect-[16/10] w-full rounded-xl" />
            <Skeleton className="h-6 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </article>
        ))}
      </div>
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8" aria-busy="true" aria-label="Loading article">
      <Skeleton className="aspect-[16/8] w-full rounded-2xl" />
      <Skeleton className="h-12 w-11/12 max-w-4xl" />
      <Skeleton className="h-5 w-64" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
      </div>
    </div>
  );
}

export function ErrorState({ reset, title = "We couldn’t load this page" }: { reset?: () => void; title?: string }) {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-xl flex-col items-center justify-center gap-5 px-6 py-16 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive" aria-hidden="true">
        <AlertTriangle className="size-7" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm leading-6 text-muted-foreground">Something went wrong while connecting to Prisma Press. Please try again.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {reset ? <Button onClick={reset}><RotateCcw data-icon="inline-start" />Try again</Button> : null}
        <Button asChild variant="outline"><Link href="/news"><FileText data-icon="inline-start" />Browse news</Link></Button>
        <Button asChild variant="ghost"><Link href="/"><Home data-icon="inline-start" />Home</Link></Button>
      </div>
    </main>
  );
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/80 px-6 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground" aria-hidden="true"><FileText className="size-6" /></div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {description ? <p className="max-w-md text-sm leading-6 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
