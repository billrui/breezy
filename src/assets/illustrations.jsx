/* Inline SVG illustrations used as brand mark, backdrop leaves and plant fallbacks. */

export function Mark() {
  return (
    <svg className="bz-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0E2618" />
      <circle cx="32" cy="32" r="30" stroke="#C9A24B" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24.5" stroke="#C9A24B" strokeOpacity="0.45" strokeWidth="0.8" />
      <path d="M32 15 C 23 24, 23 40, 32 49 C 41 40, 41 24, 32 15 Z" fill="#5C9463" />
      <path d="M32 30 C 26 27, 21 28, 18 32 C 24 34, 28 33, 32 30 Z" fill="#2F6B41" />
      <path d="M32 34 C 38 31, 43 32, 46 36 C 40 38, 36 37, 32 34 Z" fill="#2F6B41" />
      <path d="M32 49 L 32 15" stroke="#C9A24B" strokeWidth="1" strokeOpacity="0.95" />
    </svg>
  );
}

export function BgLeaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M100 8 C40 40 24 120 40 190 C 90 168 160 150 176 70 C 150 92 120 96 100 100 C 120 80 132 46 100 8 Z" />
      <path d="M100 100 C 92 130 84 160 60 182" stroke="#0E2618" strokeOpacity="0.1" strokeWidth="2.4" fill="none" />
    </svg>
  );
}

export const plantArt = {
  palm: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      <path d="M45 84 L38 60 L52 60 Z" fill="#7a5a34" />
      {[-60, -30, 0, 30, 60].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 58)`}
          d="M45 58 C 40 40 40 22 45 12 C 50 22 50 40 45 58 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
  banana: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      {[-38, -12, 12, 38].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 82)`}
          d="M45 82 C 30 60 28 30 45 10 C 62 30 60 60 45 82 Z" fill={i % 2 ? "#2F6B41" : "#4E8C5A"} />
      ))}
      <line x1="45" y1="82" x2="45" y2="16" stroke="#0E2618" strokeOpacity="0.15" strokeWidth="2" />
    </svg>
  ),
  dracaena: (
    <svg viewBox="0 0 90 96" width="66" aria-hidden="true">
      <rect x="42" y="46" width="6" height="40" rx="3" fill="#7a5a34" />
      {[-52, -26, 0, 26, 52].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 48)`}
          d="M45 48 C 43 30 43 14 45 4 C 47 14 47 30 45 48 Z" fill={i % 2 ? "#3E7A4B" : "#5C9463"} />
      ))}
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 90 96" width="72" aria-hidden="true">
      <rect x="42" y="58" width="6" height="30" rx="3" fill="#7a5a34" />
      <circle cx="45" cy="38" r="24" fill="#2F6B41" />
      <circle cx="30" cy="46" r="15" fill="#4E8C5A" />
      <circle cx="60" cy="46" r="15" fill="#4E8C5A" />
      <circle cx="45" cy="30" r="16" fill="#5C9463" />
    </svg>
  ),
  succulent: (
    <svg viewBox="0 0 90 96" width="66" aria-hidden="true">
      <path d="M30 86 L60 86 L56 66 L34 66 Z" fill="#B98A4E" opacity="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 56)`}
          d="M45 56 C 41 42 41 30 45 24 C 49 30 49 42 45 56 Z" fill={i % 2 ? "#3E7A4B" : "#6BA96E"} />
      ))}
      <circle cx="45" cy="56" r="6" fill="#A9D95C" />
    </svg>
  ),
  feather: (
    <svg viewBox="0 0 90 96" width="72" aria-hidden="true">
      <path d="M45 90 L41 52 L49 52 Z" fill="#7a5a34" />
      {[-74, -44, -16, 16, 44, 74].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 50)`}
          d="M45 50 C 43 32 39 18 45 6 C 51 18 47 32 45 50 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
  cycad: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      <ellipse cx="45" cy="80" rx="17" ry="6" fill="#B98A4E" opacity="0.5" />
      {[-76, -52, -30, -10, 10, 30, 52, 76].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 74)`}
          d="M45 74 C 44 50 44 26 45 10 C 46 26 46 50 45 74 Z" fill={i % 2 ? "#2F6B41" : "#4E8C5A"} />
      ))}
    </svg>
  ),
};

export const growthArt = {
  seed: (
    <svg viewBox="0 0 120 120" width="70" aria-hidden="true">
      <path d="M14 96 Q60 80 106 96 L106 106 Q60 92 14 106 Z" fill="#7a5a34" />
      <ellipse cx="60" cy="93" rx="7" ry="4.5" fill="#5b4423" />
      <path d="M60 93 C 60 84 60 78 60 71" stroke="#4E8C5A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="51" cy="70" rx="10" ry="5.4" fill="#6BA96E" transform="rotate(-30 51 70)" />
      <ellipse cx="69" cy="70" rx="10" ry="5.4" fill="#5C9463" transform="rotate(30 69 70)" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 120 120" width="70" aria-hidden="true">
      <path d="M16 98 Q60 88 104 98 L104 106 Q60 98 16 106 Z" fill="#7a5a34" />
      <path d="M60 98 C 60 80 60 66 60 50" stroke="#3E7A4B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="47" cy="72" rx="12" ry="6" fill="#5C9463" transform="rotate(-32 47 72)" />
      <ellipse cx="73" cy="64" rx="12" ry="6" fill="#6BA96E" transform="rotate(32 73 64)" />
      <ellipse cx="60" cy="49" rx="6" ry="11" fill="#4E8C5A" />
    </svg>
  ),
  sapling: (
    <svg viewBox="0 0 120 120" width="72" aria-hidden="true">
      <path d="M18 86 L102 86" stroke="#8a6a3a" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M60 86 C 52 96 46 100 42 110 M60 86 C 60 100 60 104 60 112 M60 86 C 68 96 74 100 78 110"
        stroke="#8a6a3a" strokeWidth="2.4" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M58 86 L58 52 L62 52 L62 86 Z" fill="#7a5a34" />
      <circle cx="60" cy="44" r="17" fill="#2F6B41" />
      <circle cx="45" cy="51" r="11" fill="#5C9463" />
      <circle cx="75" cy="51" r="11" fill="#4E8C5A" />
      <circle cx="60" cy="35" r="12" fill="#6BA96E" />
    </svg>
  ),
  planted: (
    <svg viewBox="0 0 120 120" width="74" aria-hidden="true">
      <ellipse cx="60" cy="100" rx="42" ry="9" fill="#DCEAC4" />
      <ellipse cx="60" cy="99" rx="26" ry="5.5" fill="#c9b48a" />
      <path d="M56 99 C 58 80 59 74 60 60 C 61 74 62 80 64 99 Z" fill="#7a5a34" />
      {[-60, -30, 0, 30, 60].map((r, i) => (
        <path key={i} transform={`rotate(${r} 60 58)`}
          d="M60 58 C 54 38 54 20 60 8 C 66 20 66 38 60 58 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
};
