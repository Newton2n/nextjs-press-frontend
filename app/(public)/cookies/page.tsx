import Link from "next/link";
import {
  ArrowLeft,
  Cookie,
  Lock,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type PolicySectionProps = {
  title: string;
  children: React.ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function CookiesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
      <div className="space-y-10 sm:space-y-12">
        <header className="space-y-5">
          <Button
            asChild
            variant="ghost"
            className="cursor-pointer px-0 hover:bg-transparent"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border bg-card">
                <Cookie className="size-5" />
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Cookie Policy
              </h1>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              This Cookie Policy explains how Prisma Press may use cookies and
              similar technologies to operate and improve the website.
            </p>

            <p className="text-sm text-muted-foreground">
              Last updated: August 13, 2026
            </p>
          </div>
        </header>

        <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-7">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Cookies are small pieces of information stored by a website in
            your browser. Prisma Press may use cookies and similar technologies
            where they are necessary for authentication, security,
            preferences, and other website functionality.
          </p>
        </div>

        <div className="space-y-10 rounded-xl border bg-card p-5 shadow-sm sm:space-y-12 sm:p-7 lg:p-8">
          <PolicySection title="1. Why Prisma Press Uses Cookies">
            <p>
              Cookies may help Prisma Press remember information between
              requests, maintain authenticated sessions, protect the
              application, and provide functionality that depends on browser
              state.
            </p>
          </PolicySection>

          <PolicySection title="2. Essential Cookies">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-5 shrink-0" />

              <div className="space-y-3">
                <p>
                  Some cookies may be necessary for the application to operate
                  correctly.
                </p>

                <ul className="list-disc space-y-2 pl-5">
                  <li>Authentication and session management.</li>
                  <li>Security-related functionality.</li>
                  <li>Maintaining necessary application state.</li>
                  <li>Supporting protected areas of the application.</li>
                </ul>
              </div>
            </div>
          </PolicySection>

          <PolicySection title="3. Authentication Cookies">
            <div className="flex items-start gap-3">
              <Lock className="mt-1 size-5 shrink-0" />

              <p>
                When you sign in, cookies may be used to maintain your
                authenticated session so that protected pages and account
                features can recognize your session.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="4. Preference Cookies">
            <p>
              Where implemented, cookies or browser storage may be used to
              remember preferences such as interface settings or other choices
              that improve the experience.
            </p>
          </PolicySection>

          <PolicySection title="5. Third-Party Services">
            <p>
              Some features of Prisma Press may depend on third-party services.
              Those services may use cookies or similar technologies according
              to their own policies.
            </p>

            <p>
              For example, payment-related functionality may involve
              third-party payment infrastructure.
            </p>
          </PolicySection>

          <PolicySection title="6. Analytics and Optional Technologies">
            <p>
              If analytics or other optional tracking technologies are added to
              Prisma Press, they should be disclosed and configured according
              to the applicable requirements and the choices available to
              users.
            </p>
          </PolicySection>

          <PolicySection title="7. Managing Cookies">
            <div className="flex items-start gap-3">
              <Settings className="mt-1 size-5 shrink-0" />

              <div className="space-y-3">
                <p>
                  Most modern browsers allow you to view, delete, or restrict
                  cookies through their settings.
                </p>

                <p>
                  Blocking essential cookies may prevent authentication or
                  other parts of Prisma Press from working correctly.
                </p>
              </div>
            </div>
          </PolicySection>

          <PolicySection title="8. Changes to This Cookie Policy">
            <p>
              This Cookie Policy may be updated when the website introduces new
              functionality or changes how cookies and similar technologies are
              used. Updates will be posted on this page with a revised date.
            </p>
          </PolicySection>

          <PolicySection title="9. More Information">
            <p>
              For information about how Prisma Press handles personal
              information more generally, please review our{" "}
              <Link
                href="/privacy"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p>
              If you have questions, you can also contact us through the{" "}
              <Link
                href="/contact"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Contact Us
              </Link>{" "}
              page.
            </p>
          </PolicySection>
        </div>

        <footer className="flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Prisma Press</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}