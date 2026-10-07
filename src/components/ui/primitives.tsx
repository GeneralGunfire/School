import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { EASE_OUT_EXPO, ease } from '@/lib/motion';

/* ── Button ───────────────────────────────────────────────────────────────
   Every variant is a gradient with a lit top edge and a layered shadow, so
   a button reads as a physical control. The ::after rule adds a highlight
   sweep across the top — the same treatment the cards get. */

const buttonVariants = cva(
  'relative isolate inline-flex select-none items-center justify-center gap-1.5 overflow-hidden ' +
    'whitespace-nowrap rounded-[10px] text-[13px] font-semibold ' +
    'transition-[background,border-color,box-shadow,transform,color] duration-110 ' +
    'active:translate-y-px disabled:pointer-events-none disabled:opacity-40 ' +
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 ' +
    // Top highlight sweep.
    "after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:content-['']",
  {
    variants: {
      variant: {
        /** Solid — the single high-emphasis action on a page. */
        primary:
          'text-[var(--btn-solid-fg)] [border:1px_solid_var(--btn-solid-border)] [background:var(--btn-solid)] ' +
          'shadow-[0_1px_1px_var(--shadow-contact),0_3px_8px_-2px_var(--shadow-mid),0_8px_18px_-8px_var(--shadow-ambient)] ' +
          'after:[background:linear-gradient(90deg,transparent,var(--btn-solid-inset)_20%,var(--btn-solid-inset)_80%,transparent)] ' +
          'hover:[background:var(--btn-solid-hover)] ' +
          'hover:shadow-[0_1px_1px_var(--shadow-contact),0_5px_12px_-2px_var(--shadow-mid),0_14px_26px_-10px_var(--shadow-ambient)]',
        /** Default — a raised neutral chip. */
        secondary:
          'text-ink [border:1px_solid_var(--edge)] [background:var(--surface-raise)] ' +
          'shadow-[inset_0_1px_0_var(--surface-inset-top),0_1px_1px_var(--shadow-contact),0_2px_5px_-2px_var(--shadow-mid)] ' +
          'after:[background:linear-gradient(90deg,transparent,var(--surface-inset-top)_22%,var(--surface-inset-top)_78%,transparent)] ' +
          'hover:[border-color:color-mix(in_srgb,var(--color-ink)_18%,transparent)] ' +
          'hover:shadow-[inset_0_1px_0_var(--surface-inset-top),0_1px_1px_var(--shadow-contact),0_5px_12px_-3px_var(--shadow-mid)]',
        /** No chrome until hovered. */
        ghost: 'border border-transparent text-muted after:hidden hover:bg-paper-raise hover:text-ink',
        /** Blue, for navigational emphasis. */
        accent:
          'text-accent-foreground [border:1px_solid_var(--color-accent-soft)] ' +
          '[background:linear-gradient(170deg,color-mix(in_srgb,var(--color-accent)_82%,white)_0%,var(--color-accent)_55%,var(--color-accent-soft)_100%)] ' +
          'shadow-[0_1px_1px_var(--shadow-contact),0_3px_10px_-2px_var(--color-accent-ring)] ' +
          "after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4)_22%,rgba(255,255,255,0.4)_78%,transparent)] " +
          'hover:shadow-[0_1px_1px_var(--shadow-contact),0_6px_16px_-3px_var(--color-accent-ring)]',
        danger:
          'text-white [border:1px_solid_var(--color-critical)] ' +
          '[background:linear-gradient(170deg,color-mix(in_srgb,var(--color-critical)_82%,white)_0%,var(--color-critical)_100%)] ' +
          'shadow-[0_1px_1px_var(--shadow-contact),0_3px_8px_-2px_var(--shadow-mid)] ' +
          "after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.32)_22%,rgba(255,255,255,0.32)_78%,transparent)] " +
          'hover:brightness-108',
      },
      size: {
        sm: 'h-8 px-3 text-[12.5px] [&_svg]:size-3.5',
        md: 'h-9.5 px-4 [&_svg]:size-4',
        lg: 'h-11 px-5 text-[14px] [&_svg]:size-4',
        icon: 'size-9.5 [&_svg]:size-4',
        'icon-sm': 'size-8 [&_svg]:size-3.5',
      },
    },
    defaultVariants: { variant: 'secondary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = 'Button';

/* ── SegmentedControl ─────────────────────────────────────────────────── */

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
  size = 'md',
  layoutId,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { id: T; label: string; icon?: React.ElementType; disabled?: boolean }[];
  size?: 'sm' | 'md';
  layoutId: string;
}) {
  return (
    <div
      role="tablist"
      className="inline-flex items-center gap-0.5 rounded-[11px] border p-[3px]"
      style={{
        borderColor: 'var(--edge)',
        background: 'var(--surface-sunken)',
        boxShadow: 'inset 0 2px 4px -2px var(--shadow-contact)',
      }}
    >
      {options.map((o) => {
        const Icon = o.icon;
        const active = value === o.id;
        return (
          <button
            key={o.id}
            role="tab"
            aria-selected={active}
            disabled={o.disabled}
            onClick={() => onChange(o.id)}
            className={cn(
              'relative inline-flex items-center gap-1.5 rounded-[8px] font-semibold transition-colors duration-100',
              size === 'sm' ? 'px-2.5 py-1.5 text-[12px]' : 'px-3.5 py-2 text-[12.5px]',
              active ? 'text-ink' : 'text-muted hover:text-ink',
              o.disabled && 'cursor-not-allowed opacity-40',
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 -z-10 rounded-[8px] border"
                style={{
                  borderColor: 'var(--edge)',
                  background: 'var(--surface-raise)',
                  boxShadow:
                    'inset 0 1px 0 var(--surface-inset-top), 0 1px 2px var(--shadow-contact), 0 2px 6px -2px var(--shadow-mid)',
                }}
                transition={{ type: 'spring', stiffness: 780, damping: 48, mass: 0.45 }}
              />
            )}
            {Icon && <Icon className="size-3.5" aria-hidden />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Card ─────────────────────────────────────────────────────────────── */

export function Card({
  className,
  interactive,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return <div className={cn('card', interactive && 'card-interactive', className)} {...props} />;
}

/** Gradient header strip for a card, with the small rule motif. */
export function CardHeader({
  title,
  action,
  icon: Icon,
}: {
  title: string;
  action?: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <div
      className="surface-header relative flex items-center justify-between gap-3 border-b px-5 py-3"
      style={{ borderColor: 'var(--edge)' }}
    >
      <p className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] text-muted uppercase">
        {Icon ? <Icon className="size-3.5" aria-hidden /> : <span className="label-rule" aria-hidden />}
        {title}
      </p>
      {action}
    </div>
  );
}

/* ── Panel ────────────────────────────────────────────────────────────────
   Popovers, dropdowns and the notification tray. Heavier shadow than a card
   so it clearly floats above the page. */

export function Panel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('overflow-hidden rounded-[13px] border', className)}
      style={{
        borderColor: 'var(--edge)',
        background: 'var(--surface)',
        boxShadow:
          'inset 0 1px 0 var(--surface-inset-top), 0 2px 4px var(--shadow-contact), 0 12px 24px -6px var(--shadow-mid), 0 32px 60px -20px var(--shadow-ambient)',
      }}
      {...props}
    />
  );
}

/* ── Badge ────────────────────────────────────────────────────────────── */

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-[7px] border px-2 py-0.5 text-[11px] font-semibold',
  {
    variants: {
      tone: {
        neutral: 'border-[var(--edge)] text-muted [background:var(--surface-raise)]',
        strong: 'border-[var(--edge)] text-ink [background:var(--surface-raise)]',
        accent:
          'border-[color-mix(in_srgb,var(--color-accent)_34%,transparent)] bg-accent-wash text-accent-soft',
        positive:
          'border-[color-mix(in_srgb,var(--color-positive)_34%,transparent)] bg-positive-wash text-positive',
        caution:
          'border-[color-mix(in_srgb,var(--color-caution)_34%,transparent)] bg-caution-wash text-caution',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

/* ── ProgressBar ──────────────────────────────────────────────────────── */

export function ProgressBar({
  value,
  color,
  className,
  height = 6,
  delay = 0,
}: {
  value: number;
  color?: string;
  className?: string;
  height?: number;
  delay?: number;
}) {
  const pct = Math.max(0, Math.min(100, value));
  // Default fill is an ink gradient, so progress reads without colour.
  const fill =
    color ?? 'linear-gradient(90deg, color-mix(in srgb, var(--color-ink) 55%, transparent), var(--color-ink))';
  return (
    <div
      className={cn('w-full overflow-hidden rounded-full border', className)}
      style={{
        height,
        borderColor: 'var(--edge)',
        background: 'var(--surface-sunken)',
        boxShadow: 'inset 0 1px 3px -1px var(--shadow-contact)',
      }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          background: fill,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.05 + delay }}
      />
    </div>
  );
}

/* ── SubjectDot ───────────────────────────────────────────────────────── */

export function SubjectDot({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(160deg, color-mix(in srgb, ${color} 72%, white), ${color})`,
        boxShadow: `inset 0 0.5px 0 rgba(255,255,255,0.4), 0 0 0 2.5px color-mix(in srgb, ${color} 14%, transparent)`,
      }}
    />
  );
}

/* ── IconTile ─────────────────────────────────────────────────────────────
   A raised square holding an icon. Used wherever a row or card needs a
   visual anchor at its left edge. */

export function IconTile({
  icon: Icon,
  color,
  size = 'md',
}: {
  icon: React.ElementType;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = { sm: 'size-8 rounded-[9px]', md: 'size-10 rounded-[11px]', lg: 'size-12 rounded-[13px]' }[size];
  const icon = { sm: 'size-4', md: 'size-[18px]', lg: 'size-5' }[size];
  return (
    <span
      className={cn('relative grid shrink-0 place-items-center border', dims)}
      style={{
        borderColor: 'var(--edge)',
        background: 'var(--surface-raise)',
        boxShadow: 'inset 0 1px 0 var(--surface-inset-top), 0 1px 2px var(--shadow-contact)',
      }}
    >
      <Icon className={icon} style={{ color: color ?? 'var(--color-ink)' }} aria-hidden />
    </span>
  );
}

/* ── EmptyState ───────────────────────────────────────────────────────── */

export function EmptyState({
  icon: Icon,
  title,
  body,
  action,
}: {
  icon: React.ElementType;
  title: string;
  body?: string;
  action?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={ease}
      className="flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <IconTile icon={Icon} size="lg" color="var(--color-muted-2)" />
      <p className="mt-4 text-[15px] font-semibold text-ink">{title}</p>
      {body && <p className="text-pretty mt-1.5 max-w-sm text-[13px] leading-relaxed text-muted">{body}</p>}
      {action && <div className="mt-5">{action}</div>}
    </motion.div>
  );
}
