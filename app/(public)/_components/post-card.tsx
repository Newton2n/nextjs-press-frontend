import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, MessageCircle } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  tags?: string[];
  commentCount?: number;
}

const statusColors = {
  PUBLISHED: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  DRAFT: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  ARCHIVED: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
};

export function PostCard({ id, title, excerpt, author, publishedDate, status, tags = [], commentCount = 0 }: PostCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border border-border cursor-pointer h-full">
        <div className="p-6 space-y-4">
          {/* Status Badge */}
          <div className="flex items-center justify-between gap-2">
            <Badge className={statusColors[status]}>
              {status}
            </Badge>
            {commentCount > 0 && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MessageCircle className="w-3 h-3" />
                {commentCount}
              </span>
            )}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
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
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{author.name}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
