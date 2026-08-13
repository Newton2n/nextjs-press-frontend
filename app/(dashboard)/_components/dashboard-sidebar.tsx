"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  dashboardNav,
  UserRole,
} from "./dashboard-nav";

interface DashboardSidebarProps {
  role: UserRole;
}

export function DashboardSidebar({
  role,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const navItems = dashboardNav[role];

  // Only the exact current route should be active.
  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const roleLabel =
    role.charAt(0) +
    role.slice(1).toLowerCase();

  // Close the mobile sidebar after selecting a route.
  const handleNavigation = () => {
    setOpenMobile(false);
  };

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
    >
      {/* Sidebar header */}
      <SidebarHeader className="border-b border-sidebar-border">
        <Link
          href="/"
          onClick={handleNavigation}
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-md
            px-2
            font-semibold
            text-sidebar-foreground
            transition-colors
            hover:bg-sidebar-accent
            hover:text-sidebar-accent-foreground
          "
        >
          {/* Logo */}
          <span
            className="
              flex
              size-7
              shrink-0
              items-center
              justify-center
              rounded-md
              bg-primary
              text-sm
              font-bold
              text-primary-foreground
            "
          >
            P
          </span>

          <span className="truncate">
            Prisma Press
          </span>
        </Link>
      </SidebarHeader>

      {/* Sidebar navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-2">
            {roleLabel} Dashboard
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navItems.map((item) => {
                const isActive = isActiveRoute(
                  item.href,
                );

                return (
                  <SidebarMenuItem
                    key={item.href}
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link
                        href={item.href}
                        onClick={handleNavigation}
                        aria-current={
                          isActive
                            ? "page"
                            : undefined
                        }
                      >
                        <item.icon className="size-4 shrink-0" />

                        <span>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}