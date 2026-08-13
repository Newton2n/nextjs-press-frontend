"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  LogOut,
  Menu,
  PenLine,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "../ui/button";
import { logout } from "@/service/logout";

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Premium", href: "/premium" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

type NavbarProps = {
  user: {
    success: boolean;
    data?: {
      name?: string;
      email?: string;
      role: "USER" | "ADMIN" | "AUTHOR";
    };
  };
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dashboard =
    user.data?.role === "ADMIN"
      ? "/admin-dashboard"
      : user.data?.role === "AUTHOR"
        ? "/author-dashboard"
        : "/dashboard";

  const showBackButton = pathname !== "/";

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleLogout = async () => {
    try {
      setProfileOpen(false);
      setOpen(false);

      await logout();

      toast.success("You are signed out");

      router.replace("/login");
      router.refresh();
    } catch {
      toast.error("Failed to sign out");
    }
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand and back button */}
        <div className="flex min-w-0 items-center gap-2">
          {showBackButton && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleBack}
              className="group size-9 shrink-0 cursor-pointer rounded-full shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-accent hover:shadow-md active:translate-x-0"
              aria-label="Go back"
              title="Go back"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </Button>
          )}

          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="Prisma Press home"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground shadow-sm">
              P
            </span>

            <span className="hidden truncate text-lg font-semibold tracking-tight sm:inline">
              Prisma Press
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden h-full items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex h-16 items-center border-b-2 px-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent text-foreground/60 hover:border-border/50 hover:text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          {user.success ? (
            <DropdownMenu
              open={profileOpen}
              onOpenChange={setProfileOpen}
              modal={false}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-9 cursor-pointer rounded-full"
                  aria-label="Open profile menu"
                >
                  <User className="size-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                side="bottom"
                sideOffset={8}
                className="z-[9999] w-60"
              >
                {/* User information */}
                <DropdownMenuLabel className="font-normal">
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="truncate text-sm font-medium leading-none">
                      {user.data?.name || "User"}
                    </p>

                    {user.data?.email && (
                      <p className="truncate text-xs leading-none text-muted-foreground">
                        {user.data.email}
                      </p>
                    )}
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Dashboard */}
                <DropdownMenuItem asChild>
                  <Link
                    href={dashboard}
                    className="cursor-pointer"
                    onClick={() => setProfileOpen(false)}
                  >
                    <User className="mr-2 size-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>

                {/* Create post */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/create-post"
                    className="cursor-pointer"
                    onClick={() => setProfileOpen(false)}
                  >
                    <PenLine className="mr-2 size-4" />
                    <span>Create post</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950"
                >
                  <LogOut className="mr-2 size-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="cursor-pointer"
              >
                <Link href="/login">Log in</Link>
              </Button>

              <Button
                asChild
                size="sm"
                className="cursor-pointer"
              >
                <Link href="/register">Join</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9 cursor-pointer rounded-full"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="absolute left-0 top-16 z-40 w-full border-b border-border bg-background shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {/* Main navigation */}
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block cursor-pointer rounded-r-md border-l-4 px-4 py-2.5 text-base font-medium transition-all ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-transparent text-muted-foreground hover:border-border/50 hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* User actions */}
            <div className="mt-2 border-t border-border/50 pt-4">
              {user.success ? (
                <div className="flex flex-col gap-1">
                  <Link
                    href={dashboard}
                    onClick={closeMobileMenu}
                    className="block cursor-pointer rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary/50"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/create-post"
                    onClick={closeMobileMenu}
                    className="block cursor-pointer rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary/50"
                  >
                    Create post
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full cursor-pointer rounded-md px-3 py-2.5 text-left text-base font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 px-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full cursor-pointer justify-center"
                  >
                    <Link
                      href="/login"
                      onClick={closeMobileMenu}
                    >
                      Log in
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="w-full cursor-pointer justify-center"
                  >
                    <Link
                      href="/register"
                      onClick={closeMobileMenu}
                    >
                      Join Prisma Press
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}