import Link from "next/link";
import { ExternalLink, Globe, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
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
  {
    label: "",
    href: "https://x.com/Newton2n",
    icon: "x",
  },
  {
    label: "GitHub",
    href: "https://github.com/Newton2n",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/newton-bepari/",
    icon: "linkedin",
  },
  {
    label: "Portfolio",
    href: "https://newtondev.vercel.app/",
    icon: "portfolio",
  },
  {
    label: "Email",
    href: "mailto:newton.bepari.dev@gmail.com",
    icon: "email",
  },
];

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.555 20.452h3.558V8.999H3.555v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "x":
      return <XIcon />;

    case "github":
      return <GitHubIcon />;

    case "linkedin":
      return <LinkedInIcon />;

    case "portfolio":
      return <Globe className="size-4" />;

    case "email":
      return <Mail className="size-4" />;

    default:
      return <ExternalLink className="size-4" />;
  }
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 xl:px-10 2xl:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Branding */}
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex cursor-pointer text-xl font-bold text-primary transition-opacity hover:opacity-80 sm:text-2xl"
            >
              Prisma Press
            </Link>

            <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6">
              A modern platform for writers, creators, and publishers.
            </p>

            {/* Social links */}
            <div className="mt-4 flex max-w-full flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {socialLinks.map((social) => {
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <a
                    key={`${social.icon}-${social.href}`}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.label || "X"}
                    title={social.label || "X"}
                    className="
                      inline-flex
                      size-8
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-border
                      bg-background
                      text-muted-foreground
                      transition-colors
                      hover:bg-muted
                      hover:text-foreground
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                      focus-visible:ring-offset-2
                      sm:h-9
                      sm:w-auto
                      sm:gap-2
                      sm:px-2.5
                    "
                  >
                    <SocialIcon type={social.icon} />

                    {social.label && (
                      <span className="hidden text-sm font-medium sm:inline">
                        {social.label}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer link columns */}
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="min-w-0"
            >
              <h4 className="mb-3 text-sm font-semibold text-foreground sm:mb-4">
                {column.title}
              </h4>

              <ul className="flex flex-col gap-2 sm:gap-3">
                {column.links.map((link) => (
                  <li
                    key={link.href}
                    className="min-w-0"
                  >
                    <Link
                      href={link.href}
                      className="
                        inline-block
                        max-w-full
                        cursor-pointer
                        break-words
                        text-xs
                        leading-5
                        text-muted-foreground
                        transition-colors
                        hover:text-primary
                        sm:text-sm
                        sm:leading-6
                      "
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
        <div
          className="
            mt-8
            flex
            flex-col
            gap-2
            border-t
            border-border
            pt-5
            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:pt-7
          "
        >
          <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
            © {new Date().getFullYear()} Prisma Press. All rights reserved.
          </p>

          <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6 sm:text-right">
            Crafted with care for writers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}