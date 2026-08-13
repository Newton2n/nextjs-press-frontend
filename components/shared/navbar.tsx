"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Menu, PenLine, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navItems = [{ label: "News", href: "/news" }, { label: "Premium", href: "/premium" }, { label: "Pricing", href: "/pricing" }, { label: "About", href: "/about" }];
type NavbarProps = { user: { success: boolean; data?: { name?: string; email?: string; role: "USER" | "ADMIN" | "AUTHOR" } } };

export function Navbar({ user }: NavbarProps) {
  const router = useRouter(); const [open, setOpen] = useState(false);
  const dashboard = user.data?.role === "ADMIN" ? "/admin-dashboard" : user.data?.role === "AUTHOR" ? "/author-dashboard" : "/dashboard";
  const handleLogout = async () => { await logout(); toast.success("You are signed out"); router.replace("/login"); router.refresh(); };
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"><Link href="/" className="flex items-center gap-2" aria-label="Prisma Press home"><span className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">P</span><span className="text-lg font-semibold tracking-[-.03em]">Prisma Press</span></Link><nav className="hidden items-center gap-7 md:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}</nav><div className="hidden items-center gap-3 md:flex"><ThemeToggle />{user.success ? <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Open profile menu"><User /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-56"><DropdownMenuLabel className="font-normal"><p className="font-medium">{user.data?.name}</p><p className="text-xs text-muted-foreground">{user.data?.email}</p></DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem asChild><Link href={dashboard}><User data-icon="inline-start" /> Dashboard</Link></DropdownMenuItem><DropdownMenuItem asChild><Link href="/create-post"><PenLine data-icon="inline-start" /> Create post</Link></DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem onClick={handleLogout}><LogOut data-icon="inline-start" /> Log out</DropdownMenuItem></DropdownMenuContent></DropdownMenu> : <><Button asChild variant="ghost"><Link href="/login">Log in</Link></Button><Button asChild><Link href="/register">Join Prisma Press</Link></Button></>}</div><div className="md:hidden"><ThemeToggle /></div><Button className="md:hidden cursor-pointer" variant="outline" size="icon" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><Menu /></Button></div>{open && <div className="border-t border-border bg-background px-6 py-5 md:hidden"><nav className="flex flex-col gap-4">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium">{item.label}</Link>)}{user.success ? <Link href={dashboard} onClick={() => setOpen(false)} className="text-sm font-medium text-primary">Dashboard</Link> : <Link href="/login" onClick={() => setOpen(false)} className="text-sm font-medium text-primary">Log in</Link>}</nav></div>}</header>;
}
