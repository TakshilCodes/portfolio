export const accent = {
  cyan: {
    hex: "#22d3ee",
    text: "text-cyan",
    border: "border-cyan/30",
    borderSoft: "border-cyan/15",
    bg: "bg-cyan/10",
    shadow: "shadow-[0_0_26px_rgba(34,211,238,0.18)]",
  },
  green: {
    hex: "#22c55e",
    text: "text-green",
    border: "border-green/30",
    borderSoft: "border-green/15",
    bg: "bg-green/10",
    shadow: "shadow-[0_0_26px_rgba(34,197,94,0.18)]",
  },
  purple: {
    hex: "#a855f7",
    text: "text-purple",
    border: "border-purple/30",
    borderSoft: "border-purple/15",
    bg: "bg-purple/10",
    shadow: "shadow-[0_0_26px_rgba(168,85,247,0.18)]",
  },
  yellow: {
    hex: "#facc15",
    text: "text-yellow",
    border: "border-yellow/30",
    borderSoft: "border-yellow/15",
    bg: "bg-yellow/10",
    shadow: "shadow-[0_0_26px_rgba(250,204,21,0.14)]",
  },
  cream: {
    hex: "#f5f1d8",
    text: "text-cream",
    border: "border-cream/25",
    borderSoft: "border-cream/10",
    bg: "bg-cream/5",
    shadow: "shadow-[0_0_24px_rgba(245,241,216,0.1)]",
  },
  red: {
    hex: "#ef4444",
    text: "text-red-400",
    border: "border-red-400/30",
    borderSoft: "border-red-400/15",
    bg: "bg-red-400/10",
    shadow: "shadow-[0_0_26px_rgba(239,68,68,0.14)]",
  },
} as const;

export type AccentName = keyof typeof accent;
