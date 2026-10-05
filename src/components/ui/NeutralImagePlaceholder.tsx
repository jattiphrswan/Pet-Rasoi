import React from "react";

interface NeutralImagePlaceholderProps {
  title?: string;
  category?: string;
  className?: string;
}

export function NeutralImagePlaceholder({
  title,
  category,
  className = "aspect-[4/3] w-full",
}: NeutralImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-cream-surface border border-border/70 p-6 text-center select-none ${className}`}
      aria-label={title ? `Image pending for ${title}` : "Image pending"}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light/60 text-sage-dark mb-3">
        {/* Subtle, neutral bowl / dish outline symbol */}
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M5 10v6a4 4 0 004 4h6a4 4 0 004-4v-6M9 6h6"
          />
        </svg>
      </div>

      {category && (
        <span className="text-[10px] font-semibold uppercase tracking-wider text-sage-dark mb-1">
          {category}
        </span>
      )}

      {title ? (
        <p className="text-xs font-medium text-ink-muted max-w-[200px] line-clamp-2">
          {title}
        </p>
      ) : (
        <p className="text-xs text-ink-subtle">Pet Rasoi Kitchen Item</p>
      )}

      <span className="mt-2 text-[10px] text-ink-subtle/80 italic">
        Awaiting supplied photo
      </span>
    </div>
  );
}
