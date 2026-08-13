"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type PageHeaderProps = {
  title: string;
  description: string;
};

type SectionCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}

function SectionCard({
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`min-w-0 rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}
    >
      <div className="p-5 sm:p-6 lg:p-7">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
        )}

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: BookOpen,
    title: "Discover Articles",
    description:
      "Explore published content through the news and post discovery experience.",
  },
  {
    icon: PenLine,
    title: "Create & Publish",
    description:
      "Authors can create, edit, and manage their own posts through the publishing workflow.",
  },
  {
    icon: MessageCircle,
    title: "Join the Discussion",
    description:
      "Readers can engage with posts through comments and participate in meaningful discussions.",
  },
  {
    icon: Users,
    title: "Author Experience",
    description:
      "Authors get dedicated tools to manage their content and track their publishing activity.",
  },
  {
    icon: CreditCard,
    title: "Premium Content",
    description:
      "Subscription features allow users to access premium content through the existing payment system.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Different user roles receive appropriate access to publishing, administration, and account features.",
  },
];

const principles = [
  "Keep the reading experience simple and focused.",
  "Give authors useful tools for publishing and managing content.",
  "Keep user interactions clear and predictable.",
  "Protect restricted features through proper access control.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 2xl:px-12 2xl:py-16">
      <div className="space-y-10 sm:space-y-12 lg:space-y-16">
        <PageHeader
          title="About Prisma Press"
          description="Prisma Press is a modern publishing platform built for discovering articles, sharing ideas, publishing content, and creating meaningful discussions between readers and authors."
        />

        <section className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm font-medium">
              <Sparkles className="size-4" />
              A place for ideas and stories
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Read. Write. Discuss. Discover.
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
              Prisma Press brings readers and authors together in one
              publishing experience. Readers can discover content and join
              discussions, while authors can create and manage their posts
              through dedicated publishing tools.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild className="w-full cursor-pointer sm:w-auto">
                <Link href="/news">
                  Explore News
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer sm:w-auto"
              >
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 hidden size-72 rounded-full border opacity-40 lg:block" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 hidden size-80 rounded-full border opacity-30 lg:block" />
        </section>

        <section className="grid min-w-0 gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          <SectionCard
            title="What is Prisma Press?"
            description="A publishing platform designed around readers and creators."
          >
            <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Prisma Press is designed to bring the core parts of a modern
                publishing platform into one place.
              </p>

              <p>
                Readers can browse articles, search for content, read posts,
                and participate in discussions. Authors can create and manage
                their content using the platform&apos;s publishing tools.
              </p>

              <p>
                The platform also supports premium content and subscriptions,
                giving creators another way to offer exclusive content to
                readers.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            title="Built Around the Publishing Experience"
            description="The platform combines content discovery, publishing, interaction, and subscriptions."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="min-w-0 rounded-lg border bg-background p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-card">
                        <Icon className="size-4" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold">{feature.title}</h3>

                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </section>

        <SectionCard
          title="How Prisma Press Works"
          description="The platform connects the main parts of the publishing journey."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative min-w-0 rounded-xl border p-5 sm:p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full border font-semibold">
                01
              </div>

              <h3 className="text-lg font-semibold">Discover</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Browse available articles and find content that matches your
                interests.
              </p>
            </div>

            <div className="relative min-w-0 rounded-xl border p-5 sm:p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full border font-semibold">
                02
              </div>

              <h3 className="text-lg font-semibold">Read & Discuss</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Read published posts and take part in conversations through
                comments.
              </p>
            </div>

            <div className="relative min-w-0 rounded-xl border p-5 sm:p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full border font-semibold">
                03
              </div>

              <h3 className="text-lg font-semibold">Create</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Authors can create, update, and manage their content through
                the publishing workflow.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
          <SectionCard
            title="For Readers"
            description="A straightforward way to discover and engage with content."
          >
            <ul className="space-y-4">
              {[
                "Discover published articles.",
                "Search for content more easily.",
                "Read individual posts.",
                "Participate in discussions through comments.",
                "Access premium content through supported subscriptions.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />

                  <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="For Authors"
            description="Tools for managing the content you publish."
          >
            <ul className="space-y-4">
              {[
                "Create new posts.",
                "Edit existing content.",
                "Manage published work.",
                "Interact with readers through comments.",
                "Use the author dashboard to manage publishing activity.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />

                  <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <SectionCard
          title="Our Principles"
          description="The product is designed around a few straightforward principles."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex min-w-0 items-start gap-3 rounded-lg border bg-background p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0" />

                <p className="text-sm leading-6 text-muted-foreground">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border bg-card p-6 text-center shadow-sm sm:p-8 lg:p-12">
          <div className="mx-auto max-w-2xl space-y-5">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Start Exploring Prisma Press
            </h2>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Explore the latest articles, discover new perspectives, or start
              creating your own content.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="w-full cursor-pointer sm:w-auto">
                <Link href="/news">
                  Browse News
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}