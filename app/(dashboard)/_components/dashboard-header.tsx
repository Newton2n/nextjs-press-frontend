'use client';

import { Bell, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

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
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <p className="text-lg font-semibold">{user.name}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
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
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
