"use client";

import React from "react";
import Image from "next/image";
import type { TarotCard } from "@/lib/tarot-data";
import {
  Sparkles,
  Star,
  Heart,
  Sun,
  Moon,
  Flame,
  Wind,
  Droplets,
  Mountain,
} from "lucide-react";

const elementIcons: Record<string, React.ReactNode> = {
  Fire: <Flame className="h-3 w-3" />,
  Air: <Wind className="h-3 w-3" />,
  Water: <Droplets className="h-3 w-3" />,
  Earth: <Mountain className="h-3 w-3" />,
  Mercury: <Sparkles className="h-3 w-3" />,
};

const decorativeIcons = [Star, Heart, Sun, Moon, Sparkles];

export function TarotCardItem({
  card,
  index,
  revealed,
  onSelect,
}: {
  card: TarotCard;
  index: number;
  revealed: boolean;
  onSelect: (card: TarotCard) => void;
}) {
  const DecorativeIcon = decorativeIcons[index % decorativeIcons.length];

  return (
    <div
      className="card-flip w-full"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <button
        type="button"
        onClick={() => onSelect(card)}
        className={`card-flip-inner w-full relative cursor-pointer ${revealed ? "flipped" : ""}`}
        style={{ minHeight: "280px" }}
        aria-label={
          revealed
            ? `View ${card.name} - ${card.meaning}`
            : "Reveal this card"
        }
      >
        {/* BACK - Fiery Horse */}
        <div className="card-front absolute inset-0 rounded-xl border-2 border-accent/20 overflow-hidden group hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_25px_hsl(0_80%_55%/0.25)]">
          <div className="relative h-full w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/card-back.jpg`}
              alt="Tarot card back"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
            {/* Ornate border overlay */}
            <div className="absolute inset-2 border border-accent/20 rounded-lg" />
            <div className="absolute inset-4 border border-accent/10 rounded-md" />
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center backdrop-blur-sm border border-accent/20 animate-glow">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
            </div>
            {/* Bottom hint */}
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-[9px] tracking-[0.3em] uppercase text-accent/50 group-hover:text-accent/80 transition-colors">
                Tap to reveal
              </span>
            </div>
          </div>
        </div>

        {/* FRONT - Card Face */}
        <div className="card-back absolute inset-0 rounded-xl border-2 border-primary/30 bg-card overflow-hidden">
          <div className="h-full flex flex-col items-center justify-center p-4 gap-3 relative">
            {/* Subtle background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(0 80% 55% / 0.08) 0%, transparent 70%)",
              }}
            />
            {/* Numeral */}
            <span className="font-serif text-[10px] tracking-[0.3em] text-muted-foreground uppercase relative z-10">
              {card.numeral}
            </span>
            {/* Icon */}
            <div className="relative flex items-center justify-center z-10">
              <div className="h-14 w-14 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                <DecorativeIcon className="h-6 w-6 text-accent" />
              </div>
            </div>
            {/* Name */}
            <div className="text-center relative z-10">
              <h3 className="font-serif text-sm font-bold text-foreground text-balance leading-tight">
                {card.name}
              </h3>
              <p className="text-[11px] text-accent font-medium mt-1">
                {card.meaning}
              </p>
            </div>
            {/* Element */}
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground relative z-10">
              {elementIcons[card.element] || (
                <Sparkles className="h-3 w-3" />
              )}
              <span>{card.element}</span>
            </div>
            {/* View hint */}
            <span className="text-[9px] text-primary/60 tracking-widest uppercase relative z-10 mt-1">
              Tap for full reading
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
