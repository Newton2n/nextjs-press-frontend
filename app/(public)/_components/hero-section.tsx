"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, PenLine, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { TPost } from "@/types";

const platformSlides = [
  { eyebrow: "A quieter place for good ideas", title: "Stories with room to breathe.", body: "Prisma Press brings thoughtful publishing and curious readers into one beautifully focused space.", href: "/news" },
  { eyebrow: "For independent voices", title: "Publish what deserves attention.", body: "Write, refine, and share your perspective with tools that stay out of the way.", href: "/register" },
  { eyebrow: "Read beyond the scroll", title: "Find your next rabbit hole.", body: "Explore essays, reporting, and ideas from a growing community of makers and thinkers.", href: "/news" },
];

export function HeroSection({ posts }: { posts: TPost[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slides = posts.length ? posts.slice(0, 3).map((post) => ({ ...post, href: post.isPremium ? `/premium/${post.id}` : `/news/${post.id}`, eyebrow: post.isPremium ? "Prisma Press Premium" : "Featured story", body: post.content })) : platformSlides;

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  const slide = slides[index] ?? slides[0];
  const isPost = "id" in slide && "thumbnail" in slide;
  const go = (direction: number) => setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/25">
      <div className="mx-auto grid min-h-[560px] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:min-h-[620px] lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:px-8 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div key={`${index}-copy`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -12 }} transition={{ duration: 0.45 }} className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><Sparkles className="size-3.5" /> {slide.eyebrow}</div>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">{slide.title}</h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">{slide.body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><Link href={slide.href}>Explore the press <ArrowRight data-icon="inline-end" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/register"><PenLine data-icon="inline-start" /> Start writing</Link></Button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex items-center gap-2" aria-label="Hero slides">
                {slides.map((_, dot) => <button key={dot} type="button" aria-label={`Show slide ${dot + 1}`} aria-current={dot === index} onClick={() => setIndex(dot)} className={`h-1.5 rounded-full transition-all ${dot === index ? "w-10 bg-primary" : "w-5 bg-border"}`} />)}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" aria-label="Previous slide" onClick={() => go(-1)}><ChevronLeft /></Button>
                <Button variant="outline" size="icon" aria-label="Next slide" onClick={() => go(1)}><ChevronRight /></Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative min-h-[280px] sm:min-h-[360px]">
          <div className="absolute inset-0 rounded-[2rem] border border-primary/20 bg-primary/10 [transform:rotate(3deg)]" />
          <AnimatePresence mode="wait">
            <motion.div key={`${index}-visual`} initial={reduceMotion ? false : { opacity: 0, scale: .96, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }} transition={{ duration: .55 }} className="relative flex min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[360px] sm:rounded-[2rem] border border-border bg-card shadow-2xl">
              {isPost && slide.thumbnail ? <Image src={slide.thumbnail as string} alt={slide.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" priority /> : <div className="flex flex-1 flex-col justify-between bg-primary p-8 text-primary-foreground"><div className="text-8xl font-semibold tracking-[-.12em] opacity-90">P/</div><div><p className="text-sm uppercase tracking-[.2em] opacity-75">The editorial platform</p><p className="mt-3 max-w-sm text-3xl font-semibold leading-tight">Make space for the ideas that stay with you.</p></div></div>}
              {isPost && <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-7 pt-24 text-background"><p className="text-sm font-medium">{slide.title}</p></div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
