type IconProps = { size?: number };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRight({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function PrincipleIcon({ name }: { name: "grid" | "shield" | "refresh" | "people" }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...base} className="accent-stroke">
      {name === "grid" && (
        <>
          <rect x="3" y="4" width="7" height="7" rx="1.5" />
          <rect x="14" y="4" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </>
      )}
      {name === "refresh" && (
        <>
          <path d="M20 11a8 8 0 1 0-2.3 5.7" />
          <path d="M20 4v7h-7" />
        </>
      )}
      {name === "people" && (
        <>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
          <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
          <path d="M18 14.8c1.9.7 3.1 2.6 3.5 5.2" />
        </>
      )}
    </svg>
  );
}
