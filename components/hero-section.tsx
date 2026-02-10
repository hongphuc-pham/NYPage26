"use client";

import { Sparkles, Star } from "lucide-react";
import { DrawDeck } from "@/components/draw-deck";

export function HeroSection() {
  return (
    <header className="relative text-center py-12 px-4 md:py-20">
      {/* Decorative floating stars */}
      <div className="absolute top-8 left-[15%] animate-float">
        <Star className="h-4 w-4 text-accent opacity-20" />
      </div>
      <div
        className="absolute top-16 right-[20%] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="h-3 w-3 text-primary opacity-30" />
      </div>
      <div
        className="absolute bottom-12 left-[25%] animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Star className="h-3 w-3 text-accent opacity-15" />
      </div>
      <div
        className="absolute top-24 left-[10%] animate-float"
        style={{ animationDelay: "3s" }}
      >
        <Star className="h-2 w-2 text-primary opacity-20" />
      </div>
      <div
        className="absolute bottom-20 right-[15%] animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Sparkles className="h-2 w-2 text-accent opacity-20" />
      </div>

      {/* Title area */}
      <div className="animate-fade-in-up mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-10 bg-accent/30" />
          <Sparkles className="h-4 w-4 text-accent" />
          <div className="h-px w-10 bg-accent/30" />
        </div>

        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3 font-medium">
          New Year 2026
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
          Draw Your Fortune
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Shuffle the deck and draw a card to reveal your positive message for
          the year ahead
        </p>
      </div>

      {/* Draw Deck */}
      <DrawDeck />
    </header>
  );
}
