import Link from "next/link";
import {
  Calendar,
  Eye,
  FileText,
  Mail,
  MessageCircle,
  Pencil,
  Plus,
  Star,
  Trash2,
  User,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Profile {
  id: string;
  profilePhoto: string | null;
  bio: string | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN" | "AUTHOR";
  activeStatus: "ACTIVE" | "INACTIVE";
  createdAt: string;
  profile: Profile | null;
}

interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  authorId: string;
  tags: string[];
  views: number;
  created_at: string;
  updated_at: string;
  isPremium: boolean;
  author: {
    id: string;
    name: string;
    email: string;
    activeStatus: "ACTIVE" | "INACTIVE";
    role: "USER" | "ADMIN";
    createdAt: string;
    updatedAt: string;
  };
  _count: {
    comment: number;
  };
  comment: unknown[];
}

interface ProfileViewProps {
  user: User;
  posts: Post[];
  isOwner?: boolean;
}

export default function ProfileView({
  user,
  posts,
  isOwner = false,
}: ProfileViewProps) {
  const premiumPosts = posts && posts.filter((post) => post.isPremium).length;

  const totalComments =
    posts && posts.reduce((total, post) => total + post._count.comment, 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* User Information */}
              <div className="flex items-start gap-5">
                {/* Profile Photo */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                  {user.profile?.profilePhoto ? (
                    <Image
                      src={user.profile.profilePhoto}
                      alt={user.name}
                      height={100}
                      width={100}
                    />
                  ) : (
                    <User className="h-10 w-10 text-primary" />
                  )}
                </div>

                {/* User Details */}
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                    {user.profile?.bio || "No bio added yet."}
                  </p>

                  {/* User Status */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                      {user.activeStatus}
                    </span>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {isOwner && (
                <div className="flex flex-wrap gap-3">
                  <Link href="/edit-profile">
                    <Button variant="outline">Edit Profile</Button>
                  </Link>

                  <Link href="/create-post">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Post
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-3 border-t">
            {/* Total Posts */}
            <div className="p-5 text-center">
              <p className="text-2xl font-bold">{posts.length}</p>

              <p className="text-sm text-muted-foreground">Posts</p>
            </div>

            {/* Premium Posts */}
            <div className="border-x p-5 text-center">
              <p className="text-2xl font-bold">{premiumPosts}</p>

              <p className="text-sm text-muted-foreground">Premium</p>
            </div>

            {/* Total Comments */}
            <div className="p-5 text-center">
              <p className="text-2xl font-bold">{totalComments}</p>

              <p className="text-sm text-muted-foreground">Comments</p>
            </div>
          </div>
        </Card>

        {/* Posts Section */}
        <section className="mt-10">
          {/* Section Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {isOwner ? "My Posts" : `${user.name}'s Posts`}
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {isOwner
                  ? "Manage your posts and content."
                  : `Explore posts published by ${user.name}.`}
              </p>
            </div>

            {isOwner && (
              <Link href="/create-post">
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </Link>
            )}
          </div>

          {/* Empty State */}
          {posts.length === 0 ? (
            <Card className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <FileText className="mb-4 h-12 w-12 text-muted-foreground" />

              <h3 className="text-lg font-semibold">No posts yet</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {isOwner
                  ? "You haven't created any posts yet."
                  : "This user hasn't created any posts yet."}
              </p>

              {isOwner && (
                <Link href="/create-post" className="mt-6">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Post
                  </Button>
                </Link>
              )}
            </Card>
          ) : (
            /* Posts Grid */
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.id} className="group overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <FileText className="h-10 w-10 text-muted-foreground" />
                      </div>
                    )}

                    {/* Premium Badge */}
                    {post.isPremium && (
                      <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                        <Star className="h-3 w-3 fill-current" />
                        Premium
                      </div>
                    )}

                    {/* Featured Badge */}
                    {post.isFeatured && (
                      <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        {post.status}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="mt-3 line-clamp-2 text-lg font-semibold">
                      <Link
                        href={
                          post.isPremium
                            ? `/premium/${post.id}`
                            : `/news/${post.id}`
                        }
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {post.content}
                    </p>

                    {/* Tags */}
                    {/* {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )} */}

                    {/* Post Stats */}
                    <div className="mt-5 flex items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </span>

                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post._count.comment}
                      </span>
                    </div>
                  </div>

                  {/* Owner Actions */}
                  {isOwner && (
                    <div className="flex gap-2 border-t p-4">
                      <Link href={`/edit-post/${post.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
