"use client";

import React from "react";
import { Star, Wand, Swords } from "lucide-react";
import type { TarotSuit } from "@/lib/tarot-data";

/** Chalice/cup icon for Cups suit. */
function CupIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 3h8v4a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V3Z" />
      <path d="M6 7v2a6 6 0 0 0 6 6 6 6 0 0 0 6-6V7" />
      <path d="M6 21h12" />
    </svg>
  );
}

/** Five-point star for Pentacles suit. */
function PentaclesStarIcon({ className }: { className?: string }) {
  return <Star className={className} fill="currentColor" />;
}

const suitIcons: Record<
  TarotSuit,
  React.ComponentType<{ className?: string }>
> = {
  pentacles: PentaclesStarIcon,
  cups: CupIcon,
  swords: Swords,
  wands: Wand,
};

export function getSuitIconComponent(
  suit: TarotSuit
): React.ComponentType<{ className?: string }> {
  return suitIcons[suit];
}

export function SuitIcon({
  suit,
  className = "h-5 w-5",
}: {
  suit: TarotSuit;
  className?: string;
}) {
  const Icon = suitIcons[suit];
  return <Icon className={className} />;
}
