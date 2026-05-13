// Vector owl mark + JIT wordmark for JIT Design Studio.
// Currentcolor-driven so it adapts to gold/ivory/midnight contexts.

type Props = {
  className?: string;
  withWordmark?: boolean;
  size?: number;
};

export function OwlMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Head + body silhouette */}
      <path d="M32 6c-9 0-16 6.5-16 15v14c0 10 7 19 16 19s16-9 16-19V21C48 12.5 41 6 32 6z" />
      {/* Ear tufts */}
      <path d="M18 11l4 6M46 11l-4 6" />
      {/* Eye discs */}
      <circle cx="24" cy="24" r="6" />
      <circle cx="40" cy="24" r="6" />
      {/* Pupils */}
      <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="40" cy="24" r="1.6" fill="currentColor" stroke="none" />
      {/* Beak */}
      <path d="M32 27l-2 5h4l-2-5z" fill="currentColor" stroke="none" />
      {/* Chest plumage */}
      <path d="M22 36c3 2 7 3 10 3s7-1 10-3" />
      <path d="M24 42c2 2 5 3 8 3s6-1 8-3" />
      {/* Perch */}
      <path d="M22 54h20" />
    </svg>
  );
}

export function JitWordmark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 120 40"
      height={size}
      className={className}
      fill="currentColor"
      aria-label="JIT"
    >
      <text
        x="0"
        y="30"
        fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
        fontSize="34"
        fontWeight={500}
        letterSpacing="6"
      >
        JIT
      </text>
    </svg>
  );
}

export function Logo({ className = "", withWordmark = true, size = 40 }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[color:var(--gold)] ${className}`}>
      <OwlMark size={size} />
      {withWordmark && <JitWordmark size={size * 0.7} />}
    </span>
  );
}
