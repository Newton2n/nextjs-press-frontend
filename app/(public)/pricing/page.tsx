import { Footer } from "../_components/footer";
import { Check, Star } from "lucide-react";
import { PremiumBadge } from "@/components/ui/premium-badge";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    features: [
      "Access to all public articles",
      "Community discussion forum",
      "Newsletter subscription",
      "Basic search functionality",
      "Comments on posts",
    ],
    cta: "Get Started",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Unlock exclusive content",
    price: "$99",
    period: "per year",
    features: [
      "All Free features",
      "Unlimited premium articles",
      "Advanced search with filters",
      "Ad-free reading experience",
      "Offline article downloads",
      "Early access to new content",
      "Exclusive member-only tutorials",
      "Priority support",
    ],
    cta: "Subscribe Now",
    ctaHref: "/checkout?plan=premium",
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that&apos;s right for you. Upgrade or downgrade anytime, no questions asked.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? "ring-2 ring-amber-400 shadow-2xl transform md:scale-105"
                    : "border border-border shadow-lg hover:shadow-xl"
                } ${plan.highlighted ? "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40" : "bg-card"}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={plan.ctaHref}>
                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 hover:shadow-lg"
                          : "border border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Features</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I cancel my subscription anytime?",
                  a: "Yes! You can cancel your Premium subscription at any time. Your access will continue until the end of your billing period.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "We offer a 14-day money-back guarantee on annual subscriptions. If you're not satisfied, contact our support team for a full refund.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely.",
                },
                {
                  q: "Is there a free trial?",
                  a: "We don't offer a trial, but our Free plan gives you access to all public content. Upgrade to Premium anytime to access exclusive articles.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to level up?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers who are already accessing premium content and insights.
            </p>
            <Link href="/checkout?plan=premium">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Premium Access Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
