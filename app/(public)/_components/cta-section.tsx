import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border-y border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of writers sharing their stories on Prisma Press
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto">
              Create Your Account
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Already Have an Account?
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground pt-6">
          No credit card required • Free to start • Upgrade anytime
        </p>
      </div>
    </section>
  );
}
