import {
  Code2,
  Eye,
  Fingerprint,
  Lightbulb,
  Palette,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** String → Lucide icon, so content files stay serializable. */
const icons: Record<string, LucideIcon> = {
  Palette,
  Code2,
  TrendingUp,
  Search,
  Fingerprint,
  ShieldCheck,
  Lightbulb,
  Zap,
  Target,
  Eye,
};

export function IconByName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Zap;
  return <Icon className={className} aria-hidden />;
}
