/**
 * The Scholar mark — an open book rendered as two facing pages beneath a
 * rising gradient arc (the "S" curve of growth/progress). Drawn as pure
 * geometry, not a stock icon, so it reads as a real identity rather than a
 * placeholder square-with-a-letter.
 *
 * Used at two sizes: small in the sidebar/title bar (`Mark`, via
 * `Sidebar.tsx`), and large on the splash screen (`Logo`).
 */
export function Logo({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      role="img"
      aria-label="Scholar"
    >
      <defs>
        {/* Literal hex, not `var(--grad-a)`: some WebViews (older WebView2/
            Edge in particular) don't resolve CSS custom properties inside
            SVG presentation attributes like `stop-color`, and silently fall
            back to black instead of the fallback value. */}
        <linearGradient id="logo-grad" x1="12" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16306e" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38a8e8" />
        </linearGradient>
        <linearGradient id="logo-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0.72" />
        </linearGradient>
      </defs>

      {/* Rounded square ground, matching the app's tile language. */}
      <rect x="2" y="2" width="92" height="92" rx="23" fill="url(#logo-grad)" />
      <rect x="2.5" y="2.5" width="91" height="91" rx="22.5" stroke="white" strokeOpacity="0.14" />

      {/* Open book — left and right pages, each a gentle curve meeting at
          the spine, so it reads instantly as "book" at a glance. */}
      <path
        d="M48 34c-6-6-16-9-25-8-1 .1-1.8 1-1.8 2v34c0 1.2 1.1 2.1 2.3 1.9 8.4-1.3 17.7 1.4 24.5 7.1 1 .8 2 .1 2-1V35c0-.4-.2-.8-.5-1Z"
        fill="url(#logo-page)"
      />
      <path
        d="M48 34c6-6 16-9 25-8 1 .1 1.8 1 1.8 2v34c0 1.2-1.1 2.1-2.3 1.9-8.4-1.3-17.7 1.4-24.5 7.1-1 .8-2 .1-2-1V35c0-.4.2-.8.5-1Z"
        fill="url(#logo-page)"
        opacity="0.88"
      />
      <path d="M48 35v45" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />

      {/* Three page-lines on each side, echoing the sidebar Mark's rule motif. */}
      <path d="M28 40h12M28 47h14M28 54h11" stroke="#2563eb" strokeOpacity="0.55" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M56 40h12M54 47h14M57 54h11" stroke="#2563eb" strokeOpacity="0.55" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** Flat monochrome version for places that need a single-colour mark (favicons, print). */
export function LogoMark({ size = 24, color = 'currentColor', className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 8.2c-1.5-1.4-3.9-2.1-6.1-1.9-.3 0-.5.3-.5.5v8.4c0 .3.3.5.6.5 2-.3 4.3.3 6 1.7.2.2.5 0 .5-.2V8.5c0-.1 0-.2-.1-.3Z"
        fill={color}
        fillOpacity="0.92"
      />
      <path
        d="M12 8.2c1.5-1.4 3.9-2.1 6.1-1.9.3 0 .5.3.5.5v8.4c0 .3-.3.5-.6.5-2-.3-4.3.3-6 1.7-.2.2-.5 0-.5-.2V8.5c0-.1 0-.2.1-.3Z"
        fill={color}
        fillOpacity="0.78"
      />
    </svg>
  );
}
