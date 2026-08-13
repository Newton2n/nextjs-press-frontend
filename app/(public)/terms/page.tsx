import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="space-y-8">
        <header className="space-y-4">
          <div className="flex size-12 items-center justify-center rounded-xl border bg-muted/50">
            <FileText className="size-6 text-muted-foreground" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms of Service
            </h1>

            <p className="text-sm text-muted-foreground sm:text-base">
              Please read these terms carefully before using Prisma Press.
            </p>

            <p className="text-xs text-muted-foreground">
              Last updated: August 13, 2026
            </p>
          </div>
        </header>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="space-y-8 p-5 sm:p-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                By accessing or using Prisma Press, you agree to these Terms
                of Service. If you do not agree with these terms, please do
                not use the application.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">2. About Prisma Press</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Prisma Press is a publishing and content platform that allows
                users to discover, create, manage, and interact with posts and
                other available content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">3. User Accounts</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Some features may require an account. You are responsible for
                providing accurate information and keeping your account
                credentials secure.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                You are responsible for activity performed through your
                account. If you believe your account has been accessed without
                authorization, you should contact us as soon as possible.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">4. User Content</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Users may be able to create and publish content on Prisma
                Press. You are responsible for the content you submit,
                publish, or otherwise make available through the platform.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                You must not submit content that violates applicable laws,
                infringes another person's rights, or attempts to abuse,
                disrupt, or compromise the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">
                5. Prohibited Activities
              </h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                You may not use Prisma Press to engage in unlawful activity,
                attempt unauthorized access, interfere with the service,
                distribute malicious software, abuse other users, or
                intentionally circumvent security or access controls.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">6. Subscriptions and Payments</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Prisma Press may provide paid subscription features. Where
                applicable, pricing, billing, renewal, cancellation, and
                access conditions will be presented during the subscription
                process.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Payment processing may be handled by third-party payment
                providers. Prisma Press does not directly handle or store
                sensitive payment card information through the application.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">7. Intellectual Property</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                The Prisma Press application, branding, interface, software,
                and original materials are protected by applicable intellectual
                property laws.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                You may not copy, modify, distribute, or commercially exploit
                platform materials without appropriate authorization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">8. Third-Party Services</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Prisma Press may use third-party services for functionality
                such as authentication, payments, hosting, analytics, or
                communications. Your use of those services may also be subject
                to their respective terms and policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">9. Availability of the Service</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                We may modify, suspend, or discontinue parts of Prisma Press
                when necessary for maintenance, security, development, or
                other operational reasons.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                We do not guarantee that the service will always be available,
                uninterrupted, or completely free from errors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">10. Account Suspension</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Access to an account or specific features may be restricted or
                suspended when there is a reasonable basis to believe that
                these terms, applicable laws, or platform security requirements
                have been violated.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">11. Disclaimer</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Prisma Press is provided on an "as available" basis. To the
                extent permitted by applicable law, we make no guarantees that
                the platform will meet every user's requirements or operate
                without interruption or errors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">12. Changes to These Terms</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                These Terms of Service may be updated as Prisma Press changes
                or as legal and operational requirements develop. The updated
                version will be published on this page with a revised
                effective date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">13. Contact</h2>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                If you have questions about these Terms of Service, you can
                contact us through the Prisma Press contact page.
              </p>

              <Button asChild className="cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </section>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="w-full cursor-pointer sm:w-auto"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full cursor-pointer sm:w-auto"
          >
            <Link href="/privacy">Privacy Policy</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full cursor-pointer sm:w-auto"
          >
            <Link href="/cookies">Cookie Policy</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}