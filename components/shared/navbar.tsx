"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Premium", href: "/premium" },
  { label: "Subscribe", href: "/pricing" }
];

const userMenuItems = [
  {
    label: "Create Post",
    icon: Settings,
    href: "/create-post",
    action: "create",
  },
];

type NavbarProps = {
  user: {
    success: boolean;
    message: string;
    data: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: "USER" | "ADMIN" | "AUTHOR";
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string | null;
        bio: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();

  const handleUserMenuAction = async (actionName: string) => {
    if (actionName === "logout") {
      await logout();

      toast.success("User logout successfully", {
        position: "top-center",
      });

      router.replace("/login");
      router.refresh();
    }
  };

  const getDashboardUrl = () => {
    switch (user.data.role) {
      case "ADMIN":
        return "/admin-dashboard";

      case "AUTHOR":
        return "/author-dashboard";

      case "USER":
      default:
        return "/dashboard";
    }
  };

  return (
    <nav className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-primary">
              NextJs Press
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Dropdown */}
          {user.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">
                      {user.data?.name || "John"}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {user.data?.email || "john@example.com"}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Role-Based Dashboard */}
                <Link href={getDashboardUrl()} className="block w-full">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </Link>

                {/* Other Menu Items */}
                {userMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.action}
                      href={item.href}
                      className="block w-full"
                    >
                      <DropdownMenuItem>
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{item.label}</span>
                      </DropdownMenuItem>
                    </Link>
                  );
                })}

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={() => handleUserMenuAction("logout")}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="cursor-pointer">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
