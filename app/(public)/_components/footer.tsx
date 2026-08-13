import Link from "next/link";
import { Mail, Code2, Share2, MessageSquare } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/news" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { icon: MessageSquare, href: "https://twitter.com", label: "Twitter" },
  { icon: Code2, href: "https://github.com", label: "GitHub" },
  { icon: Share2, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@prismapress.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Main Footer */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mb-12 md:grid-cols-4">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-primary">Prisma Press</h3>
            <p className="text-sm text-muted-foreground">
              A modern platform for writers, creators, and publishers.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:gap-4 sm:pt-8">
          <p className="text-sm text-muted-foreground">
            © 2024 Prisma Press. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with care for writers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
