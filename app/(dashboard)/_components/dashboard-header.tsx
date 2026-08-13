'use client';

import { Bell, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/service/logout';
import { ThemeToggle } from '@/components/shared/theme-toggle';

interface DashboardHeaderProps {
  user: {
    name: string;
    email: string;
    role: 'ADMIN' | 'AUTHOR' | 'USER';
  };
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="flex min-w-0 items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <p className="truncate text-base font-semibold sm:text-lg">{user.name}</p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-4"><ThemeToggle />
          {/* Notifications */}
          <button className="relative cursor-pointer p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Role: <span className="font-medium">{user.role}</span>
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <LogOut className="w-4 h-4" />
                <button onClick={async(e)=>{
                e.preventDefault()
                await logout()
                }}>Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
