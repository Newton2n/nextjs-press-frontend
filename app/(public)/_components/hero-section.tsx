import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-medium text-primary">✨ Welcome to Prisma Press</span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight text-foreground">
            The Modern <span className="text-primary">Blog Platform</span> for Writers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create, publish, and engage with your audience. A platform built for writers, creators, and publishers who want to share their voice.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Start Writing <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/news">
            <Button size="lg" variant="outline">
              Explore Posts
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
          <div>
            <p className="text-3xl font-bold text-primary">10K+</p>
            <p className="text-sm text-muted-foreground">Active Writers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">50K+</p>
            <p className="text-sm text-muted-foreground">Published Posts</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100K+</p>
            <p className="text-sm text-muted-foreground">Monthly Readers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
