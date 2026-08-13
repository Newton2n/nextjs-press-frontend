"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  User,
  Settings,
  BookOpen,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function UserDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Dashboard
        </h1>

        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Welcome to your Prisma Press dashboard. Manage your profile,
          explore content, and keep your account information up to date.
        </p>
      </div>

      {/* Welcome Card */}
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Prisma Press</CardTitle>

          <CardDescription>
            Your account dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            From here, you can manage your account information and access
            the features available to you. Keep your profile updated so
            your account information stays accurate.
          </p>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <User className="size-5 text-primary" />
            </div>

            <CardTitle>My Profile</CardTitle>

            <CardDescription>
              View and manage your account profile.
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-auto">
            <Button asChild className="w-full cursor-pointer">
              <Link href="/dashboard/profile/me">
                View Profile
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Posts */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="size-5 text-primary" />
            </div>

            <CardTitle>Posts</CardTitle>

            <CardDescription>
              Explore and manage your posts and content.
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-auto">
            <Button
              asChild
              variant="outline"
              className="w-full cursor-pointer"
            >
              <Link href="/create-post">
                Create a Post
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Settings / Account */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Settings className="size-5 text-primary" />
            </div>

            <CardTitle>Account</CardTitle>

            <CardDescription>
              Manage your account and personal information.
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-auto">
            <Button
              asChild
              variant="outline"
              className="w-full cursor-pointer"
            >
              <Link href="/dashboard/profile/me">
                Manage Account
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="size-5" />
            Getting Started
          </CardTitle>

          <CardDescription>
            A few things you can do from your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="font-medium">Complete your profile</p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Review your profile information and keep your account
                details up to date.
              </p>

              <Button
                asChild
                variant="link"
                className="mt-2 h-auto cursor-pointer px-0"
              >
                <Link href="/dashboard/profile/me">
                  Go to profile
                  <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-medium">Create content</p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Share your ideas and publish content on Prisma Press.
              </p>

              <Button
                asChild
                variant="link"
                className="mt-2 h-auto cursor-pointer px-0"
              >
                <Link href="/create-post">
                  Create a post
                  <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-medium">Explore Prisma Press</p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Browse the latest content and discover articles from
                the community.
              </p>

              <Button
                asChild
                variant="link"
                className="mt-2 h-auto cursor-pointer px-0"
              >
                <Link href="/news">
                  Explore news
                  <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Reminder */}
      <div className="rounded-xl border bg-muted/30 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="font-semibold">
              Want to update your profile?
            </h2>

            <p className="text-sm text-muted-foreground">
              Go to your profile page to view or update your account
              information.
            </p>
          </div>

          <Button asChild className="w-full cursor-pointer sm:w-auto">
            <Link href="/dashboard/profile/me">
              My Profile
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}