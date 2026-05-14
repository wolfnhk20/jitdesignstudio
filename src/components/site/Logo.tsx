// JIT Design Studio mark - uses the bespoke owl artwork supplied by the studio.
import owlSrc from "@/assets/jit-owl.png";

type Props = {
  className?: string;
  withWordmark?: boolean;
  size?: number;
};

export function OwlMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={owlSrc}
      alt="JIT Design Studio owl mark"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="eager"
      decoding="async"
    />
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
