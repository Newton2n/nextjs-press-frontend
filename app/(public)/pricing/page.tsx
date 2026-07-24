import Link from "next/link";
import { Footer } from "../_components/footer";
import { Check, Star, Zap, TrendingUp } from "lucide-react";

export default function PricingPage() {
  const features = {
    free: [
      "Access to free articles",
      "Basic search and filtering",
      "Community comments",
      "Standard support",
      "Monthly newsletter",
    ],
    premium: [
      "Unlimited premium articles",
      "Advanced search and filters",
      "Priority community features",
      "24/7 priority support",
      "Weekly expert insights",
      "Download as PDF",
      "Early access to new content",
      "Exclusive Q&A sessions",
      "Ad-free experience",
      "API access",
    ],
  };

  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Limited Time Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Unlock Unlimited Knowledge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Get access to exclusive premium articles, expert insights, and
            advanced tutorials from industry leaders. Cancel anytime, no
            questions asked.
          </p>
          <p className="text-lg text-primary font-semibold">
            Just <span className="text-2xl">৳999</span> per year (less than
            ৳83.25/month)
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Premium Plan */}
            <div className="relative border-2 border-primary rounded-2xl p-8 bg-linear-to-br from-primary/5 to-primary/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Most Popular Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="w-5 h-5 fill-current" />
                  MOST POPULAR
                </div>
              </div>

              <div className="mb-8 pt-2">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Premium
                </h3>
                <p className="text-muted-foreground">
                  For serious learners and professionals
                </p>
              </div>

              <div className="mb-8 bg-primary/10 rounded-lg p-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">
                    ৳999
                  </span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="text-sm text-primary font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Save 35% vs monthly billing (৳83.25/month)
                </p>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold mb-8 text-lg"
              >
                Start Premium Now
              </Link>

              <p className="text-center text-sm text-muted-foreground mb-6">
                No credit card required. 14-day free trial.
              </p>

              <div className="space-y-4">
                {features.premium.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
