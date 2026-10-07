import {
  Atom,
  BookOpen,
  Briefcase,
  FlaskConical,
  HeartHandshake,
  Infinity as InfinityIcon,
  Landmark,
  Languages,
  PenTool,
  Scroll,
  Sigma,
  Triangle,
  type LucideIcon,
} from 'lucide-react';

/**
 * Subject icons, resolved by name.
 *
 * Deliberately a fixed map rather than a dynamic lookup against all of
 * lucide-react — a dynamic import would pull the entire icon set into the
 * bundle to resolve a dozen names.
 */
const ICONS: Record<string, LucideIcon> = {
  Landmark,
  BookOpen,
  Languages,
  Sigma,
  Triangle,
  Infinity: InfinityIcon,
  PenTool,
  Briefcase,
  HeartHandshake,
  Scroll,
  Atom,
  FlaskConical,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? BookOpen;
}

export function SubjectIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Cmp = getIcon(name);
  return <Cmp className={className} style={style} aria-hidden />;
}
