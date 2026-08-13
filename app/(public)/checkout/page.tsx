"use client";

import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { subscribePremium } from "../_action/subscribe-premium";

export default function CheckoutPage() {
  const [state, action, pending] = useActionState(subscribePremium, null);

  return (
    <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/pricing"
            className="text-primary hover:underline text-sm font-medium mb-4 inline-block"
          >
            ← Back to Pricing
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-muted-foreground">
            Secure payment. Instant access to premium content.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border p-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Welcome to Checkout
              </h1>
              <form action={action} className="space-y-6">
                {/* Security Notice */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 flex gap-3">
                  <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    Your payment information is encrypted and secure. We never
                    store your full card details.
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {pending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Complete Purchase - ৳999.00/year
                    </>
                  )}
                  
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
