import {
  ArrowUpRight,
  BookOpen,
  Check,
  Layers3,
  MessageCircle,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { PostCard } from "./post-card";

import type { TPost } from "@/types";

/* -------------------------------------------------------------------------- */
/* Topics                                                                     */
/* -------------------------------------------------------------------------- */

const topics = [
  "Technology",
  "Culture",
  "Design",
  "Business",
  "Science",
  "Ideas",
];

/* -------------------------------------------------------------------------- */
/* Values                                                                     */
/* -------------------------------------------------------------------------- */

const values = [
  {
    icon: BookOpen,
    title: "Read deliberately",
    copy: "A calmer reading experience for essays, reporting, and ideas worth returning to.",
  },
  {
    icon: PenLine,
    title: "Publish clearly",
    copy: "A focused home for your work, from first draft to the finished piece.",
  },
  {
    icon: Users,
    title: "Find your people",
    copy: "Thoughtful conversations that extend the life of every story.",
  },
];

/* -------------------------------------------------------------------------- */
/* FAQs                                                                       */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    q: "What is Prisma Press?",
    a: "Prisma Press is a publishing platform for writers and readers who care about clear thinking and meaningful stories.",
  },
  {
    q: "Can I publish for free?",
    a: "Yes. Create an account to start writing and publishing with the tools already available in the platform.",
  },
  {
    q: "What does Premium include?",
    a: "Premium content is clearly marked throughout the platform and is available according to your current subscription status.",
  },
];

/* -------------------------------------------------------------------------- */
/* Home Sections                                                              */
/* -------------------------------------------------------------------------- */

export function HomeSections({
  posts,
}: {
  posts: TPost[];
}) {
  return (
    <div className="bg-background">
      {/* ------------------------------------------------------------------ */}
      {/* Latest Posts                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-primary">
              The latest
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Fresh from the press
            </h2>
          </div>

          <Button asChild variant="ghost">
            <Link href="/news">
              View all stories
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        {posts.length ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard
                key={post.id}
                {...post}
              />
            ))}
          </div>
        ) : (
          <EmptyBlock label="No published stories yet" />
        )}
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Topics                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-primary">
              Browse by instinct
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-.04em]">
              Follow the questions you are asking.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic}
                href={`/news?search=${encodeURIComponent(topic)}`}
                className="
                  rounded-full
                  border
                  border-border
                  bg-card
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-colors
                  hover:border-primary
                  hover:text-primary
                "
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why Prisma Press                                                   */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-primary">
            Why Prisma Press
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
            Less noise. More signal.
          </h2>

          <p className="mt-6 leading-7 text-muted-foreground">
            Publishing should feel like making something, not feeding a
            machine. Prisma Press is built around the rituals that help good
            work become great.
          </p>
        </div>

        <div className="grid gap-4">
          {values.map(({ icon: Icon, title, copy }) => (
            <Card
              key={title}
              className="bg-card/60"
            >
              <CardContent className="flex gap-5 p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Premium Reading                                                    */}
      {/* ------------------------------------------------------------------ */}

      {/* Uses the normal theme colors instead of reversing light/dark mode. */}
      <section className="border-y border-border bg-background text-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge variant="outline">
              <Sparkles data-icon="inline-start" />
              Premium reading
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Go deeper with the stories that reward your attention.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Support independent publishing and unlock the premium collection
              when you are ready.
            </p>

            <Button
              asChild
              className="mt-8"
              variant="secondary"
            >
              <Link href="/pricing">
                See membership options
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Feature
              icon={Search}
              title="Curated discovery"
            />

            <Feature
              icon={Layers3}
              title="Long-form reading"
            />

            <Feature
              icon={MessageCircle}
              title="Reader conversations"
            />

            <Feature
              icon={ShieldCheck}
              title="A considered platform"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Platform For Everyone                                              */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "For writers",
            "For readers",
            "For editors",
          ].map((title, i) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {
                    [
                      "Shape your voice, publish your work, and build a body of ideas you are proud of.",
                      "Follow your curiosity through a library designed for focus and discovery.",
                      "Give thoughtful work a clear, welcoming home with tools that support the whole process.",
                    ][i]
                  }
                </p>

                <Link
                  href={
                    i === 0
                      ? "/register"
                      : "/news"
                  }
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-primary
                    transition-colors
                    hover:opacity-80
                  "
                >
                  {i === 0
                    ? "Start writing"
                    : "Start exploring"}

                  <ArrowUpRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQs                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-primary">
            Questions, answered
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-.04em]">
            A few things you might want to know.
          </h2>

          <div className="mt-10 divide-y divide-border">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-5"
              >
                <summary className="cursor-pointer list-none font-medium">
                  {faq.q}

                  <span className="float-right text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Final CTA                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground sm:px-14">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
            Your next good idea needs a place to land.
          </h2>

          <p className="mt-5 max-w-xl leading-7 opacity-80">
            Join Prisma Press to read with intent or publish with purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              variant="secondary"
            >
              <Link href="/register">
                Create your account
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="
                border-primary-foreground/40
                text-primary-foreground
                hover:bg-primary-foreground/10
                hover:text-primary-foreground
              "
            >
              <Link href="/contact">
                Talk to us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature                                                                     */
/* -------------------------------------------------------------------------- */

function Feature({
  icon: Icon,
  title,
}: {
  icon: typeof Search;
  title: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-border
        bg-card
        p-4
        transition-colors
        hover:border-primary/50
      "
    >
      <Icon className="size-5 text-primary" />

      <span className="text-sm">
        {title}
      </span>

      <Check className="ml-auto size-4 text-muted-foreground" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Empty Block                                                                */
/* -------------------------------------------------------------------------- */

function EmptyBlock({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className="
        mt-10
        rounded-2xl
        border
        border-dashed
        border-border
        p-12
        text-center
        text-muted-foreground
      "
    >
      {label}
    </div>
  );
}