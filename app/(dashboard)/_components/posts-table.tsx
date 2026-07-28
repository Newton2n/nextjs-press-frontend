"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DataTable, TableColumn, TableRow } from "./data-table";

interface Post {
  id: string;
  title: string;
  status: string;
  isPremium: boolean;
  views?: number;
  created_at?: string;
  author?: { name: string } | null;
  _count?: {
    comment?: number;
  };
}

interface PostsTableProps {
  posts: Post[];
  showAuthor?: boolean;
  title?: string;
  description?: string;
}

export function PostsTable({
  posts,
  showAuthor = false,
  title,
  description,
}: PostsTableProps) {
  const columns: TableColumn[] = [
    {
      key: "title",
      label: "Title",
      render: (value, row) => (
        <Link
          href={row.isPremium ? `/premium/${row.id}` : `/news/${row.id}`}
          className="font-semibold text-primary hover:underline"
        >
          {value}
        </Link>
      ),
    },
    ...(showAuthor ? [{ key: "author", label: "Author" }] : []),
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <Badge
          className={`${
            value === "PUBLISHED"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : value === "DRAFT"
                ? "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "isPremium",
      label: "Premium",
      render: (_, row) =>
        row.isPremium ? (
          <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Premium
          </Badge>
        ) : (
          "-"
        ),
    },
    {
      key: "views",
      label: "Views",
      render: (value) => value ?? "0",
    },
    {
      key: "created_at",
      label: "Created",
      render: (value) => (value ? new Date(value).toLocaleDateString() : "-"),
    },
    {
      key: "comments",
      label: "Comments",
      render: (_, row) => row._count?.comment ?? 0,
    },
  ];

  const rows: TableRow[] = posts.map((post) => ({
    id: post.id,
    title: post.title,
    author: post.author?.name ?? "Unknown",
    status: post.status,
    isPremium: post.isPremium,
    views: post.views,
    created_at: post.created_at,
    comments: post._count?.comment ?? 0,
    _count: post._count,
  }));

  return (
    <DataTable
      title={title}
      description={description}
      columns={columns}
      rows={rows}
    />
  );
}
