"use client";

import React from "react";
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { tarotCards, type TarotCard } from "@/lib/tarot-data";
import { CardRevealModal } from "@/components/card-reveal-modal";
import { Sparkles, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

type DrawPhase = "idle" | "shuffling" | "drawing" | "revealed";

export function DrawDeck() {
  const [phase, setPhase] = useState<DrawPhase>("idle");
  const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawnHistory, setDrawnHistory] = useState<TarotCard[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addToHistory = useCallback((card: TarotCard) => {
    setDrawnHistory((prev) => {
      const filtered = prev.filter((c) => c.id !== card.id);
      return [card, ...filtered].slice(0, 8);
    });
  }, []);

  const drawCard = useCallback(() => {
    if (phase !== "idle") return;
    setSearchError("");
    setPhase("shuffling");

    setTimeout(() => {
      setPhase("drawing");
      const randomCard =
        tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setDrawnCard(randomCard);

      setTimeout(() => {
        setPhase("revealed");
        setModalOpen(true);
        addToHistory(randomCard);
        setTimeout(() => setPhase("idle"), 300);
      }, 800);
    }, 1400);
  }, [phase, addToHistory]);

  const handleSearch = useCallback(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return;
    setSearchError("");

    const match = tarotCards.find(
      (card) =>
        card.name.toLowerCase().includes(query) ||
        card.meaning.toLowerCase().includes(query) ||
        card.keywords.some((kw) => kw.toLowerCase().includes(query)) ||
        card.element.toLowerCase().includes(query) ||
        card.zodiac.toLowerCase().includes(query)
    );

    if (match) {
      setDrawnCard(match);
      setModalOpen(true);
      addToHistory(match);
      setSearchValue("");
    } else {
      setSearchError("No card found -- try \"love\", \"strength\", or \"success\"");
    }
  }, [searchValue, addToHistory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Draw deck area */}
      <div className="relative flex items-center justify-center h-[280px] w-[200px]">
        {/* Stacked cards behind */}
        {[4, 3, 2, 1, 0].map((i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-xl border border-accent/20 overflow-hidden ${phase === "shuffling" ? "animate-card-stack" : ""}`}
            style={
              {
                transform: `translateX(${i * 2}px) translateY(${i * 2}px) rotate(${i * 0.5}deg)`,
                zIndex: 5 - i,
                "--stack-x": `${(i % 2 === 0 ? 1 : -1) * (20 + i * 10)}px`,
                "--stack-y": `${(i % 2 === 0 ? -1 : 1) * (5 + i * 3)}px`,
                "--stack-r": `${(i % 2 === 0 ? 1 : -1) * (5 + i * 3)}deg`,
                animationDelay: `${i * 0.08}s`,
              } as React.CSSProperties
            }
          >
            <div className="relative h-full w-full">
              <Image
                src="card-back.jpg"
                alt="Card back"
                fill
                className="object-cover"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-background/30" />
              <div className="absolute inset-2 border border-accent/10 rounded-lg" />
            </div>
          </div>
        ))}

        {/* Top interactive card */}
        <button
          onClick={drawCard}
          disabled={phase !== "idle"}
          className={`absolute inset-0 z-10 rounded-xl border-2 border-accent/30 overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent/60 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(0_80%_55%/0.3)] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-accent/30 disabled:hover:shadow-none group ${
            phase === "shuffling" ? "animate-shuffle" : ""
          } ${phase === "drawing" ? "animate-card-draw" : ""}`}
          aria-label="Draw a tarot card"
          type="button"
        >
          <div className="relative h-full w-full">
            <Image
              src="card-back.jpg"
              alt="Draw a card"
              fill
              className="object-cover"
              sizes="200px"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
            <div className="absolute inset-2 border border-accent/15 rounded-lg" />
            <div className="absolute inset-4 border border-accent/10 rounded-md" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="h-16 w-16 rounded-full border border-accent/30 flex items-center justify-center bg-background/40 backdrop-blur-sm animate-glow">
                <Sparkles className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-accent/80 group-hover:text-accent transition-colors font-medium bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {phase === "shuffling"
                  ? "Shuffling..."
                  : phase === "drawing"
                    ? "Drawing..."
                    : "Tap to Draw"}
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-md px-4">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          or search
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Search bar */}
      <div className="w-full max-w-md px-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search by name, meaning, keyword..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setSearchError("");
              }}
              onKeyDown={handleKeyDown}
              className="pl-11 pr-10 py-5 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-full focus-visible:ring-primary/30 focus-visible:border-primary/40 transition-all"
              aria-label="Search tarot cards"
            />
            {searchValue && (
              <button
                onClick={() => {
                  setSearchValue("");
                  setSearchError("");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                type="button"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={handleSearch}
            type="button"
            disabled={!searchValue.trim()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all cursor-pointer hover:shadow-[0_0_20px_hsl(0_80%_55%/0.3)] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <Sparkles className="h-4 w-4" />
            <span>Reveal</span>
          </button>
        </div>
        {searchError && (
          <p className="text-center text-xs text-primary/70 mt-3 animate-fade-in-up">
            {searchError}
          </p>
        )}
      </div>

      {/* Draw history */}
      {drawnHistory.length > 0 && (
        <div className="text-center animate-fade-in-up px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Recently Revealed
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {drawnHistory.map((card) => (
              <button
                type="button"
                key={card.id}
                onClick={() => {
                  setDrawnCard(card);
                  setModalOpen(true);
                }}
                className="px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-secondary-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground transition-all cursor-pointer"
              >
                {card.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reveal modal */}
      <CardRevealModal
        card={drawnCard}
        open={modalOpen}
        onOpenChange={setModalOpen}
        isDrawn
      />
    </div>
  );
}
