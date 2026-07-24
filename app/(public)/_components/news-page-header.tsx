import Link from "next/link";

interface ActionButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface PageHeaderProps {
  title: string;
  description: string;
  isPremium?: boolean;
  badgeText?: string;
  action?: ActionButton;
  maxWidthTitle?: string;
  maxWidthDescription?: string;
}

export function PageHeader({
  title,
  description,
  isPremium = false,
  badgeText = "Exclusive Content",
  action,
  maxWidthTitle = "max-w-3xl",
  maxWidthDescription = "max-w-2xl",
}: PageHeaderProps) {
  return (
    <div className="space-y-6">
      <div>
        {/* Optional Premium Badge */}
        {isPremium && (
          <div className="inline-flex items-center gap-2 mb-4">
            {/* <PremiumBadge size="md" /> */}
            <span className="text-sm font-semibold text-primary">
              {badgeText}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 ${maxWidthTitle}`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`text-lg text-muted-foreground ${maxWidthDescription} ${action ? "mb-8" : "mb-0"}`}
        >
          {description}
        </p>

        {/* Optional Action Button */}
        {action && (
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={action.href}
              className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold text-foreground"
            >
              {action.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
