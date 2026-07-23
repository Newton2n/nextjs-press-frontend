import { Card } from "@/components/ui/card";
import { PenTool, Users, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Write & Publish",
    description: "Create beautiful blog posts with an intuitive editor. Draft, review, and publish with ease.",
  },
  {
    icon: Users,
    title: "Engage Readers",
    description: "Build community through comments and discussions. Connect with your audience directly.",
  },
  {
    icon: Zap,
    title: "Premium Features",
    description: "Unlock exclusive features with a subscription. Monetize your content and grow your platform.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your post performance, reader engagement, and growth metrics in real-time.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for modern writers and creators
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
