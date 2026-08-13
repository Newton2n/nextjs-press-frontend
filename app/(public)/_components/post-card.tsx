import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PremiumBadge } from "@/components/ui/premium-badge";
import { Calendar, User, MessageCircle, Eye, Sparkles, ArrowUpRight } from "lucide-react";
import { TPost } from "@/types";

export function PostCard({ id, title, content, author, createdAt, status, isPremium = false, views = 0, _count = { comment: 0 }, isFeatured = false, thumbnail }: TPost) {
  const newsLink = isPremium ? `/premium/${id}` : `/news/${id}`;
  const date = new Date(createdAt);
  const formattedDate = Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return <Link href={newsLink} className="group block h-full"><Card className={`flex h-full flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl ${isFeatured ? "border-primary/40" : ""}`}>
    <div className="relative aspect-[16/10] overflow-hidden bg-muted">{thumbnail ? <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /> : <div className="flex h-full items-center justify-center text-5xl font-semibold tracking-[-.12em] text-primary/30">P/</div>}<div className="absolute left-4 top-4 flex flex-wrap gap-2">{isPremium && <PremiumBadge size="sm" />}{isFeatured && <Badge variant="secondary"><Sparkles data-icon="inline-start" /> Featured</Badge>}</div></div>
    <div className="flex flex-1 flex-col gap-4 p-6"><div className="flex items-center justify-between gap-3 text-xs text-muted-foreground"><span className="uppercase tracking-[.14em]">{status === "PUBLISHED" ? "Published" : status}</span><span className="flex items-center gap-1"><Calendar className="size-3.5" />{formattedDate}</span></div><h3 className="line-clamp-2 text-xl font-semibold tracking-[-.025em] transition-colors group-hover:text-primary">{title}</h3><p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{content}</p><div className="mt-auto flex items-center justify-between border-t border-border pt-4"><span className="flex items-center gap-2 text-sm font-medium"><span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary"><User className="size-4" /></span>{author.name}</span><span className="flex items-center gap-3 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Eye className="size-3.5" />{views}</span><span className="flex items-center gap-1"><MessageCircle className="size-3.5" />{_count.comment}</span><ArrowUpRight className="size-4 text-primary" /></span></div></div>
  </Card></Link>;
}
