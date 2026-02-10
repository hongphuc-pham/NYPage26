"use client";

import { useState, useCallback, useRef } from "react";
import { tarotCards, type TarotCard } from "@/lib/tarot-data";
import { TarotCardItem } from "@/components/tarot-card";
import { SearchBar } from "@/components/search-bar";
import { CardRevealModal } from "@/components/card-reveal-modal";
import { Sparkles } from "lucide-react";

export function CardGrid() {
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set());
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [wiggleIds, setWiggleIds] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback((query: string) => {
    if (!query) {
      // Clear: flip everything back face-down
      setRevealedIds(new Set());
      setHasSearched(false);
      setWiggleIds(new Set());
      return;
    }

    setHasSearched(true);
    const q = query.toLowerCase();
    const matchingIds = new Set<number>();

    tarotCards.forEach((card) => {
      const matches =
        card.name.toLowerCase().includes(q) ||
        card.meaning.toLowerCase().includes(q) ||
        card.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
        card.element.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q);

      if (matches) matchingIds.add(card.id);
    });

    // First wiggle all cards, then reveal matches with stagger
    setWiggleIds(new Set(tarotCards.map((c) => c.id)));
    setTimeout(() => {
      setWiggleIds(new Set());
      // Stagger the reveals
      const idsArray = Array.from(matchingIds);
      idsArray.forEach((id, i) => {
        setTimeout(() => {
          setRevealedIds((prev) => new Set([...prev, id]));
        }, i * 120);
      });
      // Flip non-matching ones back down
      setRevealedIds((prev) => {
        const next = new Set<number>();
        prev.forEach((id) => {
          if (matchingIds.has(id)) next.add(id);
        });
        return next;
      });
    }, 500);
  }, []);

  const handleSelect = (card: TarotCard) => {
    if (revealedIds.has(card.id)) {
      // Already revealed - open the full modal
      setSelectedCard(card);
      setModalOpen(true);
    } else {
      // Not yet revealed - flip this single card
      setRevealedIds((prev) => new Set([...prev, card.id]));
    }
  };

  const resultCount = hasSearched ? revealedIds.size : 0;

  return (
    <section className="px-4 pb-20 max-w-7xl mx-auto">
      <SearchBar
        onSearch={handleSearch}
        resultCount={resultCount}
        totalCount={tarotCards.length}
        hasSearched={hasSearched}
      />

      <div
        ref={gridRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
      >
        {tarotCards.map((card, index) => (
          <div
            key={card.id}
            className={`animate-fade-in-up ${wiggleIds.has(card.id) ? "animate-card-wiggle" : ""}`}
            style={{ animationDelay: `${0.05 + index * 0.03}s`, opacity: 0 }}
          >
            <TarotCardItem
              card={card}
              index={index}
              revealed={revealedIds.has(card.id)}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </div>

      {hasSearched && revealedIds.size === 0 && (
        <div className="text-center py-16 animate-fade-in-up">
          <Sparkles className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-30" />
          <p className="text-muted-foreground text-base font-serif">
            No cards match your search
          </p>
          <p className="text-sm text-muted-foreground/60 mt-1">
            Try &ldquo;love&rdquo;, &ldquo;success&rdquo;, or
            &ldquo;fire&rdquo;
          </p>
        </div>
      )}

      <CardRevealModal
        card={selectedCard}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
