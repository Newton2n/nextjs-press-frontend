import Link from "next/link";
import {
  ArrowLeft,
  Cookie,
  Database,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
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

export default function PrivacyPage() {
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
                <ShieldCheck className="size-5" />
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Privacy Policy
              </h1>
            </div>

            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              This Privacy Policy explains how Prisma Press handles information
              when you use our website and services.
            </p>

            <p className="text-sm text-muted-foreground">
              Last updated: August 13, 2026
            </p>
          </div>
        </header>

        <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-7">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Prisma Press is a publishing platform where users can discover
            articles, create and manage posts, participate in discussions, and
            access subscription-based content. We aim to collect only the
            information necessary to operate and improve these features.
          </p>
        </div>

        <div className="space-y-10 rounded-xl border bg-card p-5 shadow-sm sm:space-y-12 sm:p-7 lg:p-8">
          <PolicySection title="1. Information We Collect">
            <p>
              Depending on how you use Prisma Press, we may process information
              such as your name, email address, account credentials, profile
              information, posts, comments, and other information you
              voluntarily provide.
            </p>

            <p>
              We may also process information necessary to operate
              subscriptions and payments through our payment provider.
            </p>

            <p>
              Technical information such as browser type, device information,
              approximate location, and interaction data may also be processed
              when necessary for security, troubleshooting, and improving the
              service.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Information">
            <p>Information may be used to:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Create and manage user accounts.</li>
              <li>Provide publishing and content features.</li>
              <li>Display posts and comments.</li>
              <li>Process subscription-related requests.</li>
              <li>Maintain application security.</li>
              <li>Respond to support and contact requests.</li>
              <li>Diagnose technical problems.</li>
              <li>Improve the functionality and reliability of the service.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Account Information">
            <div className="flex items-start gap-3">
              <UserRound className="mt-1 size-5 shrink-0" />

              <p>
                If you create an account, information associated with that
                account may be stored so that Prisma Press can authenticate you
                and provide account-specific features.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="4. Posts and Comments">
            <p>
              Content that you intentionally publish through Prisma Press,
              including posts and comments, may be visible to other users
              according to the functionality and visibility settings of the
              platform.
            </p>

            <p>
              Do not publish personal or confidential information that you do
              not want to make available to other users.
            </p>
          </PolicySection>

          <PolicySection title="5. Payments and Subscriptions">
            <p>
              Prisma Press may provide subscription and payment functionality.
              Payment processing is handled through the payment infrastructure
              used by the application.
            </p>

            <p>
              Prisma Press does not need to store your complete payment card
              details in order to provide subscription functionality. Payment
              information should be handled by the applicable payment provider
              according to its own policies.
            </p>
          </PolicySection>

          <PolicySection title="6. Cookies and Similar Technologies">
            <div className="flex items-start gap-3">
              <Cookie className="mt-1 size-5 shrink-0" />

              <p>
                Prisma Press may use cookies or similar technologies for
                authentication, maintaining preferences, security, and
                essential website functionality. For more information, see our{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </PolicySection>

          <PolicySection title="7. Authentication and Security">
            <div className="flex items-start gap-3">
              <Lock className="mt-1 size-5 shrink-0" />

              <p>
                We use reasonable technical measures to protect accounts and
                application data. However, no internet-connected service can
                guarantee absolute security.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="8. Third-Party Services">
            <p>
              Prisma Press may rely on third-party services for functionality
              such as payment processing, hosting, authentication-related
              infrastructure, analytics, email delivery, or form processing.
            </p>

            <p>
              Those providers may process information according to their own
              privacy policies and terms.
            </p>
          </PolicySection>

          <PolicySection title="9. Data Retention">
            <div className="flex items-start gap-3">
              <Database className="mt-1 size-5 shrink-0" />

              <p>
                Information may be retained for as long as reasonably necessary
                to provide the service, maintain security, meet operational
                requirements, resolve disputes, and comply with applicable
                obligations.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="10. Your Choices">
            <p>
              Depending on the functionality available to you, you may be able
              to update account information or request assistance regarding
              information associated with your account.
            </p>

            <p>
              You can also choose not to provide optional information, although
              doing so may prevent some features from working correctly.
            </p>
          </PolicySection>

          <PolicySection title="11. Children's Privacy">
            <p>
              Prisma Press is not intended to knowingly collect personal
              information from children in circumstances where such collection
              is prohibited by applicable law.
            </p>
          </PolicySection>

          <PolicySection title="12. Changes to This Policy">
            <p>
              This Privacy Policy may be updated when the application,
              functionality, or applicable requirements change. The updated
              version will be made available on this page with a revised
              effective date.
            </p>
          </PolicySection>

          <PolicySection title="13. Contact">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 size-5 shrink-0" />

              <p>
                If you have questions about this Privacy Policy or how Prisma
                Press handles information, please use our{" "}
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </div>
          </PolicySection>
        </div>

        <footer className="flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Prisma Press</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/cookies"
              className="transition-colors hover:text-foreground"
            >
              Cookie Policy
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