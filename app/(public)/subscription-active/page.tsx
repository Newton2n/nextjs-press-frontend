
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { checkSubscriptionStatus } from "../_action/check-subscripton-status";

export default async function ActiveSubscriptionPage() {
  const subscription = await checkSubscriptionStatus();

  const subscriptionDetails = {
    planName: "Yearly Pro Plan",
    status: subscription.subscriptionStatus,
    renewalDate: new Date(
      subscription.currentPeriodEnd
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    amountPaid: "৳999.00 / year",
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg">
        <Card className="overflow-hidden border-border/60 shadow-2xl shadow-black/5">
          {/* Success Header */}
          <CardHeader className="px-6 pb-6 pt-8 text-center sm:px-8 sm:pt-10">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/5">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>

            <Badge
              variant="outline"
              className="mx-auto mb-4 gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {subscriptionDetails.status}
            </Badge>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              You&apos;re All Set!
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Your Pro subscription is active. Enjoy unlimited access to all
              premium features.
            </p>
          </CardHeader>

          <CardContent className="space-y-5 px-6 sm:px-8">
            {/* Plan Card */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.03] p-5">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Current Plan
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold">
                    {subscriptionDetails.planName}
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">
                    {subscriptionDetails.amountPaid.split(" / ")[0]}
                  </p>
                  <p className="text-xs text-muted-foreground">per year</p>
                </div>
              </div>
            </div>

            {/* Subscription Details */}
            <div className="rounded-2xl border bg-card">
              <div className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Next Renewal</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Your subscription renews on{" "}
                    <span className="font-medium text-foreground">
                      {subscriptionDetails.renewalDate}
                    </span>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">Billing Cycle</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Annual subscription
                  </p>
                </div>

                <Badge variant="secondary">Yearly</Badge>
              </div>

              <Separator />

              <div className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">Subscription Status</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Your premium access is active
                  </p>
                </div>

                <Check className="h-5 w-5 text-emerald-500" />
              </div>
            </div>

            {/* Info Message */}
            <div className="rounded-xl bg-muted/50 px-4 py-3 text-center text-xs leading-5 text-muted-foreground">
              Your subscription will automatically renew on the date shown
              above unless you cancel it before the renewal date.
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 px-6 pb-7 pt-6 sm:px-8">
            <Button asChild className="w-full gap-2" size="lg">
              <Link href="/">
                Continue to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Thank you for being a Pro member.
        </p>
      </div>
    </main>
  );
}
