import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Lock } from "lucide-react";
import Link from "next/link";

export function PremiumLockedContent() {
  return (
    <Card className="border-primary/20">
      <CardContent className="flex flex-col items-center px-6 py-14 text-center">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Lock className="h-6 w-6 text-primary" />
        </div>

        <h2 className="text-xl font-semibold">
          Premium Content
        </h2>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          This story is available exclusively
          to premium members.
        </p>

        <Link
          href="/subscription"
          className="mt-6"
        >
          <Button>
            <Crown className="mr-2 h-4 w-4" />
            Get Premium Access
          </Button>
        </Link>

      </CardContent>
    </Card>
  );
}