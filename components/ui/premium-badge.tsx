import { Star } from "lucide-react";

interface PremiumBadgeProps {
  size?: "sm" | "md" | "lg";
}

export function PremiumBadge({ size = "md" }: PremiumBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={`inline-flex items-center ${sizeClasses[size]} rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 font-semibold shadow-md`}>
      <Star className={`${iconSizes[size]} fill-current`} />
      <span>Premium</span>
    </div>
  );
}
