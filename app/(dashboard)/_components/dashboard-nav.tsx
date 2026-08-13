import {
  FileText,
  LayoutDashboard,
  User,
} from "lucide-react";

export type UserRole = "ADMIN" | "AUTHOR" | "USER";

export const dashboardNav = {
  ADMIN: [
    {
      title: "Overview",
      href: "/admin-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Posts",
      href: "/admin-dashboard/posts",
      icon: FileText,
    },
    {
      title: "Profile",
      href: "/admin-dashboard/profile",
      icon: User,
    },
  ],

  AUTHOR: [
    {
      title: "Overview",
      href: "/author-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Posts",
      href: "/author-dashboard/posts",
      icon: FileText,
    },
    {
      title: "Profile",
      href: "/author-dashboard/profile",
      icon: User,
    },
  ],

  USER: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Profile",
      href: "/dashboard/profile/me",
      icon: User,
    },
  ],
} as const;