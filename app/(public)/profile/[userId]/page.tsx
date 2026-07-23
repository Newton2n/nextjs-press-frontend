"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { PostCard } from "../../_components/post-card";
import { Button } from "@/components/ui/button";
import { PremiumBadge } from "@/components/ui/premium-badge";
import { User, Mail, Calendar, FileText, Edit, Trash2, Plus } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    id: string;
  };
  publishedDate: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  tags: string[];
  isPremium: boolean;
  commentCount: number;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  joinDate: string;
  posts: Post[];
  stats: {
    totalPosts: number;
    totalPremium: number;
    totalComments: number;
    avgReadTime: string;
  };
}

export default function ProfilePage({ params }: { params: { userId: string } }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    // Mock user data
    const mockUser: UserProfile = {
      id: "user-1",
      name: "John Doe",
      email: "john@example.com",
      bio: "Passionate developer and tech writer sharing insights about modern web development.",
      joinDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
      posts: [],
      stats: {
        totalPosts: 0,
        totalPremium: 0,
        totalComments: 0,
        avgReadTime: "5 min",
      },
    };

    // Fetch posts from localStorage
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const userPosts = posts.filter((p: Post) => p.author.id === params.userId);

    mockUser.posts = userPosts;
    mockUser.stats.totalPosts = userPosts.length;
    mockUser.stats.totalPremium = userPosts.filter((p: Post) => p.isPremium).length;
    mockUser.stats.totalComments = userPosts.reduce((sum: number, p: Post) => sum + p.commentCount, 0);

    setUser(mockUser);
    setLoading(false);
  }, [params.userId]);

  const handleDeletePost = (postId: string) => {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = posts.filter((p: Post) => p.id !== postId);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Update local state
    if (user) {
      setUser({
        ...user,
        posts: user.posts.filter((p) => p.id !== postId),
        stats: {
          ...user.stats,
          totalPosts: user.posts.length - 1,
          totalPremium: user.posts.filter((p) => p.isPremium && p.id !== postId).length,
          totalComments: user.posts.reduce((sum, p) => (p.id !== postId ? sum + p.commentCount : sum), 0),
        },
      });
    }
    setDeleteConfirm(null);
  };

  if (loading) {
    return (
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">User not found</p>
          <Link href="/" className="text-primary hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:underline text-sm font-medium mb-6 inline-block">
            ← Back to Home
          </Link>

          <Card className="border border-border p-8 bg-gradient-to-br from-card to-card/80">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{user.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {new Date(user.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-foreground max-w-xl">{user.bio}</p>
                </div>
              </div>

              <Link href="/create-post">
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Post
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">{user.stats.totalPosts}</p>
                <p className="text-sm text-muted-foreground">Total Posts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 mb-1">{user.stats.totalPremium}</p>
                <p className="text-sm text-muted-foreground">Premium Posts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-1">{user.stats.totalComments}</p>
                <p className="text-sm text-muted-foreground">Total Comments</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-1">{user.stats.avgReadTime}</p>
                <p className="text-sm text-muted-foreground">Avg Read Time</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Posts Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              My Posts ({user.posts.length})
            </h2>
          </div>

          {user.posts.length === 0 ? (
            <Card className="border border-border p-12 text-center">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              </div>
              <p className="text-muted-foreground mb-6">You haven&apos;t created any posts yet.</p>
              <Link href="/create-post">
                <Button>Create Your First Post</Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.posts.map((post) => (
                <div key={post.id} className="relative group">
                  {/* Post Card */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                    <Link href={`/edit-post/${post.id}`}>
                      <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors" title="Edit post">
                        <Edit className="w-4 h-4" />
                      </button>
                    </Link>
                    <button
                      onClick={() => setDeleteConfirm(post.id)}
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      title="Delete post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <PostCard {...post} />

                  {/* Delete Confirmation Modal */}
                  {deleteConfirm === post.id && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                      <Card className="border border-border p-6 max-w-md">
                        <h3 className="text-xl font-bold text-foreground mb-2">Delete Post?</h3>
                        <p className="text-muted-foreground mb-6">
                          Are you sure you want to delete &quot;{post.title}&quot;? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-foreground"
                          >
                            Cancel
                          </button>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
