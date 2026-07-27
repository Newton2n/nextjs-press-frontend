import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Crown,
  Eye,
  Lock,
  MessageCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { TPost } from "@/types";
import { PremiumLockedContent } from "./premium-content";

interface SinglePostProps {
  post: TPost;
  hasPremiumAccess?: boolean;
  backHref?: string;
}

export function SinglePost({
  post,
  hasPremiumAccess = false,
  backHref = "/news",
}: SinglePostProps) {
  const isLocked =
    post.isPremium && !hasPremiumAccess;

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back */}
        <Link href={backHref}>
          <Button
            variant="ghost"
            className="-ml-2 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stories
          </Button>
        </Link>

        {/* Header */}
        <header className="space-y-6">

          {/* Badges */}
          <div className="flex flex-wrap gap-2">

            {post.isPremium && (
              <Badge>
                <Crown className="mr-1 h-3 w-3" />
                Premium
              </Badge>
            )}

            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
              >
                #{tag}
              </Badge>
            ))}

          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

            <span className="font-medium text-foreground">
              {post.author.name}
            </span>

            {/* <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />

              {new Date(
                post.createdAt
              ).toLocaleDateString()}
            </span> */}

            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {post.views} views
            </span>

            <span className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              {post._count?.comment} comments
            </span>

          </div>
        </header>

        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-xl border">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="mt-10">

          {isLocked ? (
            <PremiumLockedContent />
          ) : (
            <article className="prose prose-neutral max-w-none dark:prose-invert">
              <p className="whitespace-pre-wrap text-lg leading-8">
                {post.content}
              </p>
            </article>
          )}

        </div>

        <Separator className="my-10" />

        {/* Footer */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-muted-foreground">
              Written by
            </p>

            <p className="font-semibold">
              {post.author.name}
            </p>
          </div>

          <Link href={backHref}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              More Stories
            </Button>
          </Link>

        </div>

      </article>
    </main>
  );
}