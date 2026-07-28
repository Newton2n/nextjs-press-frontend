import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PremiumBadge } from "@/components/ui/premium-badge";
import {
  Calendar,
  User,
  MessageCircle,
  Eye,
  Sparkles,
} from "lucide-react";
import { TPost } from "@/types";

const statusColors = {
  PUBLISHED:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  DRAFT:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  ARCHIVED:
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
};

export function PostCard({
  id,
  title,
  content,
  author,
  createdAt,
  status,
  tags = [],
  isPremium = false,
  views = 0,
  _count = { comment: 0 },
  isFeatured = false,
  thumbnail,
}: TPost) {
  const newsLink = isPremium ? `/premium/${id}` : `/news/${id}`;
  return (
    <Link href={newsLink} className="block">
      <Card
        className={`overflow-hidden border cursor-pointer relative transition-shadow duration-300 hover:shadow-md ${
          isFeatured
            ? "border-primary/50 bg-primary/2 dark:bg-primary/4"
            : "border-border"
        }`}
      >
        {/* Thumbnail */}
        {thumbnail && (
          <div className="w-full overflow-hidden bg-muted">
            <Image
              src={thumbnail}
              alt={title}
              width={1200}
              height={800}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Status, Premium, Featured and Metrics */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={statusColors[status]}>
                {status}
              </Badge>

              {isPremium && <PremiumBadge size="sm" />}

              {isFeatured && (
                <Badge
                  variant="secondary"
                  className="gap-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                >
                  <Sparkles className="w-3 h-3" />
                  Featured
                </Badge>
              )}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {views}
              </span>

              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                {_count?.comment ?? 0}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {content}
          </p>

          {/* Tags */}
          {/* {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )} */}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>

              <span className="text-sm font-medium text-foreground">
                {author.name}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />

              {/* {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })} */}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}