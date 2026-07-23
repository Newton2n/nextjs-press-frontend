"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Plus, X, Check } from "lucide-react";

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

interface PostFormProps {
  initialData?: Post;
  isEditing?: boolean;
  authorId?: string;
  authorName?: string;
}

export function PostForm({
  initialData,
  isEditing = false,
  authorId = "user-1",
  authorName = "John Doe",
}: PostFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    tags: initialData?.tags || [],
    isPremium: initialData?.isPremium || false,
    status: (initialData?.status || "DRAFT") as "PUBLISHED" | "DRAFT" | "ARCHIVED",
  });

  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required";
    }
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }
    if (formData.tags.length === 0) {
      newErrors.tags = "Add at least one tag";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({
          ...formData,
          tags: [...formData.tags, tagInput.trim()],
        });
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const posts = JSON.parse(localStorage.getItem("posts") || "[]");

      if (isEditing && initialData) {
        // Update existing post
        const updatedPosts = posts.map((p: Post) =>
          p.id === initialData.id
            ? {
                ...p,
                ...formData,
                updatedAt: new Date().toISOString(),
              }
            : p
        );
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
      } else {
        // Create new post
        const newPost: Post = {
          id: `post-${Date.now()}`,
          author: { id: authorId, name: authorName },
          publishedDate: new Date().toISOString(),
          commentCount: 0,
          ...formData,
        };
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
      }

      router.push(`/profile/${authorId}`);
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-foreground font-semibold">
          Post Title
        </Label>
        <Input
          id="title"
          placeholder="Enter an engaging title for your post"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          className={errors.title ? "border-red-500" : ""}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title}</p>
        )}
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <Label htmlFor="excerpt" className="text-foreground font-semibold">
          Excerpt
        </Label>
        <textarea
          id="excerpt"
          placeholder="Write a brief excerpt (150-200 characters)"
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({ ...formData, excerpt: e.target.value })
          }
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground ${
            errors.excerpt ? "border-red-500" : "border-border"
          }`}
          rows={3}
        />
        {errors.excerpt && (
          <p className="text-red-500 text-sm">{errors.excerpt}</p>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label htmlFor="content" className="text-foreground font-semibold">
          Full Content
        </Label>
        <textarea
          id="content"
          placeholder="Write your full article content here..."
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground ${
            errors.content ? "border-red-500" : "border-border"
          }`}
          rows={8}
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content}</p>
        )}
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label htmlFor="tags" className="text-foreground font-semibold">
          Tags
        </Label>
        <div className="flex gap-2">
          <Input
            id="tags"
            placeholder="Type tag and press Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
          <Button
            type="button"
            onClick={() => {
              if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
                setFormData({
                  ...formData,
                  tags: [...formData.tags, tagInput.trim()],
                });
                setTagInput("");
              }
            }}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </div>

        {/* Tag Display */}
        {formData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {formData.tags.map((tag) => (
              <div
                key={tag}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-2 text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:text-primary/70"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        {errors.tags && (
          <p className="text-red-500 text-sm">{errors.tags}</p>
        )}
      </div>

      {/* Premium and Status */}
      <div className="grid grid-cols-2 gap-4">
        {/* Premium Checkbox */}
        <div className="flex items-center gap-3 border border-border rounded-lg p-4">
          <input
            type="checkbox"
            id="premium"
            checked={formData.isPremium}
            onChange={(e) =>
              setFormData({ ...formData, isPremium: e.target.checked })
            }
            className="w-5 h-5 rounded cursor-pointer"
          />
          <div>
            <Label htmlFor="premium" className="cursor-pointer font-semibold text-foreground">
              Premium Content
            </Label>
            <p className="text-xs text-muted-foreground">
              Only premium subscribers can read this
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status" className="text-foreground font-semibold">
            Status
          </Label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value as "PUBLISHED" | "DRAFT" | "ARCHIVED",
              })
            }
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 gap-2"
        >
          {isSubmitting ? (
            <>Loading...</>
          ) : (
            <>
              <Check className="w-4 h-4" />
              {isEditing ? "Update Post" : "Create Post"}
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
