import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { withSwoop } from '@/components/ui/Swoop';

/**
 * The single page container.
 *
 * Every route renders inside one of these, so content is centred on the
 * same measure with the same gutters and the same vertical rhythm.
 * Widths are in rem, so they scale with the root font size on large
 * screens along with everything else.
 */
export function Page({
  children,
  width = 'default',
  className,
}: {
  children: React.ReactNode;
  width?: 'default' | 'wide' | 'narrow' | 'full';
  className?: string;
}) {
  const max = {
    narrow: 'max-w-[52rem]',
    default: 'max-w-[72rem]',
    wide: 'max-w-[92rem]',
    full: 'max-w-none',
  }[width];

  return <div className={cn('mx-auto w-full px-4 pb-16 sm:px-7', max, className)}>{children}</div>;
}

/**
 * Page heading.
 *
 * `highlight` names one word inside `title` to render with the gradient
 * fill and hand-drawn swoop.
 */
export function PageTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  onBack,
  trailing,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  onBack?: () => void;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="pt-9 pb-8">
      {onBack && (
        <button
          onClick={onBack}
          className="-ml-2 mb-3 inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-[0.8rem] font-semibold text-muted transition-colors duration-100 hover:bg-paper-raise hover:text-ink"
        >
          <ChevronLeft className="size-[0.95rem]" aria-hidden /> Back
        </button>
      )}

      {/* Trailing controls align to the title's own line, not the bottom of
          the whole block — otherwise a long subtitle pushes them down and
          they float beside the body text instead of the heading. Below
          `sm` there usually isn't room beside a full-width heading, so
          trailing controls drop underneath instead of squeezing it. */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 w-full sm:w-auto">
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.13em] text-muted-2 uppercase">
              <span className="label-rule" aria-hidden />
              {eyebrow}
            </p>
          )}

          <h1 className="display text-balance text-[clamp(2rem,2.4vw,2.6rem)] text-ink">
            {withSwoop(title, highlight)}
          </h1>

          {subtitle && (
            <p className="text-pretty mt-5 max-w-[46rem] text-[0.88rem] leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
        </div>

        {trailing && <div className={cn('shrink-0', eyebrow && 'mt-8')}>{trailing}</div>}
      </div>
    </div>
  );
}

/** A labelled band within a page, so sections read as deliberate groups. */
export function Section({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('mt-10 first:mt-0', className)}>
      {title && (
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.13em] text-muted uppercase">
            <span className="label-rule" aria-hidden />
            {title}
          </h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
