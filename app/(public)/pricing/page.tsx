import Link from "next/link";
import { Footer } from "../_components/footer";
import { Check, Star, Zap, Award, TrendingUp } from "lucide-react";

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

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual subscriptions.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for new premium members. No credit card required to start your trial.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can upgrade, downgrade, or change your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your saved articles, bookmarks, and preferences are preserved. If you resubscribe, you'll have access to everything.",
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer: "Yes! Contact our sales team for custom enterprise solutions with bulk pricing and advanced features.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Unlock Unlimited Knowledge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Get access to exclusive premium articles, expert insights, and advanced tutorials from industry leaders. Cancel anytime, no questions asked.
          </p>
          <p className="text-lg text-primary font-semibold">
            Just <span className="text-2xl">$99</span> per year (less than $9/month)
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Free Plan */}
            <div className="border border-border rounded-2xl p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">Free</h3>
                <p className="text-muted-foreground">Perfect for exploring our content</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Always free, forever</p>
              </div>

              <Link href="/news" className="block w-full text-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold text-foreground mb-8">
                Get Started Free
              </Link>

              <div className="space-y-4">
                {features.free.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative border-2 border-primary rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Most Popular Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="w-5 h-5 fill-current" />
                  MOST POPULAR
                </div>
              </div>

              <div className="mb-8 pt-2">
                <h3 className="text-3xl font-bold text-foreground mb-2">Premium</h3>
                <p className="text-muted-foreground">For serious learners and professionals</p>
              </div>

              <div className="mb-8 bg-primary/10 rounded-lg p-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">$99</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="text-sm text-primary font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Save 35% vs monthly billing ($8.25/month)
                </p>
              </div>

              <Link href="/checkout" className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold mb-8 text-lg">
                Start Premium Now
              </Link>

              <p className="text-center text-sm text-muted-foreground mb-6">No credit card required. 14-day free trial.</p>

              <div className="space-y-4">
                {features.premium.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="bg-muted/30 rounded-2xl p-8 border border-border mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Complete Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold text-foreground text-lg">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground text-lg">Free</th>
                    <th className="text-center py-4 px-4 font-bold text-primary text-lg">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Article Access", free: true, premium: true },
                    { name: "Premium Content", free: false, premium: true },
                    { name: "Download as PDF", free: false, premium: true },
                    { name: "Priority Support", free: false, premium: true },
                    { name: "API Access", free: false, premium: true },
                    { name: "Early Access", free: false, premium: true },
                    { name: "Q&A Sessions", free: false, premium: true },
                    { name: "Offline Reading", free: false, premium: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{row.name}</td>
                      <td className="text-center py-4 px-4">
                        {row.free ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.premium ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-bold text-foreground mb-3 text-lg">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 border-2 border-primary/30 rounded-2xl p-12 text-center mb-20">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-foreground mb-4">Ready to Level Up?</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of developers and professionals who are already enjoying unlimited access to premium content, expert tutorials, and exclusive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg">
                Start Premium Now
              </Link>
              <Link href="/premium" className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-bold text-lg">
                Browse Premium Articles
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Trusted by over 10,000+ developers and professionals</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-muted-foreground text-sm">Premium Articles</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-muted-foreground text-sm">Active Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">4.9★</p>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
