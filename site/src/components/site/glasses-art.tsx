import { cn } from "@/lib/utils";

type Variant = "grau" | "sol" | "lente";

/**
 * Ilustração vetorial de óculos em traço dourado — placeholder premium
 * até as fotos de produto chegarem (D-007).
 */
export function GlassesArt({
  variant = "grau",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 140"
      fill="none"
      aria-hidden
      className={cn("text-gold-400", className)}
    >
      <defs>
        <linearGradient id={`ga-${variant}`} x1="0" y1="0" x2="320" y2="140">
          <stop offset="0%" stopColor="#e3bf63" />
          <stop offset="55%" stopColor="#c99422" />
          <stop offset="100%" stopColor="#a87718" />
        </linearGradient>
      </defs>

      {variant === "lente" ? (
        <>
          <circle
            cx="110"
            cy="70"
            r="46"
            stroke={`url(#ga-${variant})`}
            strokeWidth="3"
          />
          <circle
            cx="110"
            cy="70"
            r="32"
            stroke={`url(#ga-${variant})`}
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle
            cx="210"
            cy="70"
            r="46"
            stroke={`url(#ga-${variant})`}
            strokeWidth="3"
            opacity="0.45"
          />
          <circle
            cx="210"
            cy="70"
            r="32"
            stroke={`url(#ga-${variant})`}
            strokeWidth="1.5"
            opacity="0.3"
          />
        </>
      ) : (
        <>
          {/* lente esquerda */}
          <rect
            x="30"
            y="38"
            width="110"
            height="72"
            rx="34"
            stroke={`url(#ga-${variant})`}
            strokeWidth="4"
            fill={variant === "sol" ? "currentColor" : "none"}
            fillOpacity={variant === "sol" ? 0.18 : 0}
          />
          {/* lente direita */}
          <rect
            x="180"
            y="38"
            width="110"
            height="72"
            rx="34"
            stroke={`url(#ga-${variant})`}
            strokeWidth="4"
            fill={variant === "sol" ? "currentColor" : "none"}
            fillOpacity={variant === "sol" ? 0.18 : 0}
          />
          {/* ponte */}
          <path
            d="M140 62 C 150 52, 170 52, 180 62"
            stroke={`url(#ga-${variant})`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* hastes */}
          <path
            d="M30 58 L 8 50"
            stroke={`url(#ga-${variant})`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M290 58 L 312 50"
            stroke={`url(#ga-${variant})`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* brilho na lente */}
          <path
            d="M52 56 C 60 46, 76 42, 88 44"
            stroke={`url(#ga-${variant})`}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  );
}
