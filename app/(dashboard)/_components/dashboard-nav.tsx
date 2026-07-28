import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  User,
  BarChart3,
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
      title: "Users",
      href: "/admin-dashboard/users",
      icon: Users,
    },
    {
      title: "Posts",
      href: "/admin-dashboard/posts",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/admin-dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/admin-dashboard/settings",
      icon: Settings,
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
    {
      title: "Settings",
      href: "/author-dashboard/settings",
      icon: Settings,
    },
  ],

  USER: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Profile",
      href: "/dashboard/profile/me",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/profile/me",
      icon: Settings,
    },
  ],
};
