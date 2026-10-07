import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * CSS-driven staggered entrance.
 *
 * Replaces Framer Motion's variant stagger on lists. A JS stagger creates
 * one animation instance and one subscription per row; on a 40-row list
 * that is 40 React update loops a frame. This is a single compositor
 * keyframe whose delay comes from a custom property, so a list of any
 * length costs the same.
 *
 * `prefers-reduced-motion` is handled by the global media query in
 * index.css, which collapses the animation duration.
 */
export function Rise({
  i = 0,
  as: Tag = 'div',
  variant = 'rise',
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  /** Index in the list — drives the delay. */
  i?: number;
  as?: React.ElementType;
  /** `fade` skips the translate, for dense grids where movement is noise. */
  variant?: 'rise' | 'fade';
}) {
  return (
    <Tag
      className={cn(variant === 'fade' ? 'fade-in' : 'rise', className)}
      style={{ ...style, ['--i' as string]: i }}
      {...props}
    />
  );
}
