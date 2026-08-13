"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarTrigger } from "@/components/ui/sidebar";

import { logout } from "@/service/logout";

interface DashboardHeaderProps {
  user: {
    name: string;
    email: string;
    role: "ADMIN" | "AUTHOR" | "USER";
  };
}

export function DashboardHeader({
  user,
}: DashboardHeaderProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await logout();

      toast.success("You are signed out");
    } catch {
      toast.error("Failed to sign out");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const initials = user.name
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex min-h-16 items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {/* Mobile sidebar trigger */}
          <SidebarTrigger
            className="
              size-10
              shrink-0
              cursor-pointer
              rounded-md
              border
              border-border
              bg-muted/50
              text-foreground
              shadow-sm
              transition-all
              hover:bg-muted
              hover:shadow
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
              md:hidden
            "
          />

          {/* Welcome section */}
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground sm:text-sm">
              Welcome back
            </p>

            <p className="truncate text-sm font-semibold sm:text-base">
              {user.name}
            </p>
          </div>
        </div>

        {/* User menu */}
        <div className="flex shrink-0 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open user menu"
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-md
                  p-1.5
                  transition-colors
                  hover:bg-muted
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  sm:px-2
                "
              >
                {/* Avatar */}
                <div
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    text-sm
                    font-semibold
                    text-primary-foreground
                  "
                >
                  {initials}
                </div>

                {/* Name */}
                <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">
                  {user.name}
                </span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-60"
            >
              {/* User information */}
              <div className="px-2 py-2">
                <p className="truncate text-sm font-semibold">
                  {user.name}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {user.email}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Role:{" "}
                  <span className="font-medium text-foreground">
                    {user.role}
                  </span>
                </p>
              </div>

              <DropdownMenuSeparator />

              {/* Logout */}
              <DropdownMenuItem
                disabled={isLoggingOut}
                onSelect={(event) => {
                  event.preventDefault();
                  void handleLogout();
                }}
                className="
                  cursor-pointer
                  text-destructive
                  focus:bg-destructive/10
                  focus:text-destructive
                "
              >
                <LogOut className="mr-2 size-4" />

                <span>
                  {isLoggingOut
                    ? "Logging out..."
                    : "Log out"}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}