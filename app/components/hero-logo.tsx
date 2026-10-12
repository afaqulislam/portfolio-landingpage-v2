const LETTERS = [
  { d: "M32 32 L16 96", cls: "a1" },
  { d: "M32 32 L48 96", cls: "a2" },
  { d: "M24 66 L40 66", cls: "a3" },
  { d: "M56 80 L56 90 C56 98 82 98 82 90 L82 80", cls: "u" },
  { d: "M92 34 L92 96", cls: "i" },
];

export default function HeroLogo() {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AUI monogram, laser animated"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hero-plasma"
      >
        {LETTERS.map((l) => (
          <g key={l.cls}>
            <path pathLength={1} className={`laser wide ${l.cls}`} d={l.d} />
            <path pathLength={1} className={`laser core ${l.cls}`} d={l.d} />
          </g>
        ))}
        <circle pathLength={1} className="laser core dot" cx="92" cy="25" r="5" />
      </g>
    </svg>
  );
}