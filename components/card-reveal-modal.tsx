"use client";

import React from "react"

import { getZodiacLabel, getSuit, type TarotCard } from "@/lib/tarot-data";
import { SuitIcon } from "@/components/suit-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Star,
  Flame,
  Wind,
  Droplets,
  Mountain,
  Heart,
  Sun,
  Moon,
} from "lucide-react";

const elementIcons: Record<string, React.ReactNode> = {
  Fire: <Flame className="h-5 w-5" />,
  Air: <Wind className="h-5 w-5" />,
  Water: <Droplets className="h-5 w-5" />,
  Earth: <Mountain className="h-5 w-5" />,
  Mercury: <Sparkles className="h-5 w-5" />,
};

const decorativeIcons = [Star, Heart, Sun, Moon, Sparkles];

export function CardRevealModal({
  card,
  open,
  onOpenChange,
  isDrawn,
}: {
  card: TarotCard | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isDrawn?: boolean;
}) {
  if (!card) return null;

  const DecorativeIcon = decorativeIcons[card.id % decorativeIcons.length];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto border-primary/20 bg-card p-0">
        {/* Top decorative banner */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(0 80% 55% / 0.35) 0%, hsl(0 40% 13%) 70%)",
            }}
          />

          {/* Animated reveal icon */}
          <div
            className={`absolute inset-0 flex items-center justify-center ${isDrawn ? "animate-card-reveal-spin" : "animate-fade-in"}`}
          >
            <div className="relative">
              {/* Pulse ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full border border-primary/30 animate-pulse-ring" />
              </div>
              <div className="h-24 w-24 rounded-full border-2 border-accent/40 flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <DecorativeIcon className="h-12 w-12 text-accent" />
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <Star className="absolute top-4 left-4 h-4 w-4 text-accent/30 animate-sparkle" />
          <Star
            className="absolute top-4 right-4 h-4 w-4 text-accent/30 animate-sparkle"
            style={{ animationDelay: "0.5s" }}
          />
          <Sparkles
            className="absolute bottom-4 left-6 h-3 w-3 text-primary/40 animate-sparkle"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute bottom-4 right-6 h-3 w-3 text-primary/40 animate-sparkle"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="px-6 pb-6">
          {/* Card header */}
          <DialogHeader className="text-center -mt-4 relative z-10 mb-4">
            <div className="inline-flex items-center justify-center">
              <Badge
                variant="outline"
                className="border-accent/30 text-accent bg-card/80 backdrop-blur-sm text-xs tracking-widest uppercase px-3 py-1"
              >
                {card.numeral}
              </Badge>
            </div>
            <DialogTitle className="font-serif text-3xl font-bold text-foreground mt-3 text-balance">
              {card.name}
            </DialogTitle>
            <DialogDescription className="text-accent text-base font-medium mt-1">
              {card.meaning}
            </DialogDescription>
          </DialogHeader>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <Star className="h-3 w-3 text-accent/50" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Description */}
          <div className="animate-slide-in-bottom" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <p className="text-foreground/80 leading-relaxed text-base">
              {card.description}
            </p>
          </div>

          {/* New Year message */}
          <div
            className="mt-5 rounded-xl bg-primary/10 border border-primary/20 p-5 animate-slide-in-bottom"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            <p className="text-sm font-semibold text-primary flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4" />
              Your 2026 New Year Message
            </p>
            <p className="text-foreground/80 leading-relaxed">
              {card.newYearMessage}
            </p>
          </div>

          {/* Keywords */}
          <div
            className="mt-5 animate-slide-in-bottom"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {card.keywords.map((kw) => (
                <Badge
                  key={kw}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground border-border px-3 py-1"
                >
                  {kw}
                </Badge>
              ))}
            </div>
          </div>

          {/* Element & Zodiac */}
          <div
            className="mt-5 flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4 animate-slide-in-bottom"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <span className="flex items-center gap-2">
              {getSuit(card) ? (
                <SuitIcon suit={getSuit(card)!} className="h-5 w-5" />
              ) : (
                elementIcons[card.element] || <Sparkles className="h-5 w-5" />
              )}
              <span>
                <span className="text-foreground/70 font-medium">{card.element}</span>
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent/50" />
              <span className="text-foreground/70 font-medium">{getZodiacLabel(card)}</span>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
