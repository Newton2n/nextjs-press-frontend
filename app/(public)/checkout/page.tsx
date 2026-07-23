"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PremiumBadge } from "@/components/ui/premium-badge";
import { Check, Lock, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setPaymentComplete(true);
    setIsProcessing(false);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const formatted = cleaned.replace(/(\d{4})/g, "$1 ").trim();
    return formatted.slice(0, 19);
  };

  if (paymentComplete) {
    return (
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border border-border p-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Payment Successful!</h1>
              <p className="text-muted-foreground">
                Welcome to Premium! Your subscription is now active.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plan:</span>
                <span className="font-semibold text-foreground">Premium Annual</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-semibold text-foreground">$99.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Renewal:</span>
                <span className="font-semibold text-foreground">
                  {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to {email}
            </p>

            <div className="space-y-3">
              <Link href="/premium" className="block">
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Explore Premium Content
                </button>
              </Link>
              <Link href="/" className="block">
                <button className="w-full px-4 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  Back to Home
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/pricing" className="text-primary hover:underline text-sm font-medium mb-4 inline-block">
            ← Back to Pricing
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Complete Your Purchase</h1>
          <p className="text-muted-foreground">Secure payment. Instant access to premium content.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, "");
                        if (val.length >= 2) {
                          val = val.slice(0, 2) + "/" + val.slice(2, 4);
                        }
                        setExpiryDate(val);
                      }}
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      required
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 flex gap-3">
                  <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    Your payment information is encrypted and secure. We never store your full card details.
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Complete Purchase - $99.00/year
                    </>
                  )}
                </button>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 sticky top-4">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <PremiumBadge size="md" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Premium Annual</h3>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Premium Access</span>
                  <span className="font-semibold">$99.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Billing Period</span>
                  <span className="font-semibold">1 Year</span>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Unlimited premium articles</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ad-free experience</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Early access to content</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Priority support</span>
                </div>
              </div>

              <div className="bg-foreground/5 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">$99.00</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Cancel anytime. No questions asked. 14-day money-back guarantee.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
