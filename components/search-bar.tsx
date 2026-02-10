"use client";

import React from "react"

import { useState } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultCount: number;
  totalCount: number;
  hasSearched: boolean;
}

export function SearchBar({
  onSearch,
  resultCount,
  totalCount,
  hasSearched,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="relative max-w-lg mx-auto mb-10 animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Name, meaning, or keyword..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-11 pr-10 py-5 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-full focus-visible:ring-primary/30 focus-visible:border-primary/40 transition-all"
            aria-label="Search tarot cards"
          />
          {inputValue && (
            <button
              onClick={handleClear}
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
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all cursor-pointer hover:shadow-[0_0_20px_hsl(0_80%_55%/0.3)] active:scale-95"
        >
          <Sparkles className="h-4 w-4" />
          <span>Reveal</span>
        </button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">
        {hasSearched ? (
          resultCount > 0 ? (
            <>
              Revealed{" "}
              <span className="text-accent font-medium">{resultCount}</span>{" "}
              matching {resultCount === 1 ? "card" : "cards"}
            </>
          ) : (
            <span className="text-primary/70">
              No cards match - try &ldquo;love&rdquo;, &ldquo;success&rdquo;, or
              &ldquo;strength&rdquo;
            </span>
          )
        ) : (
          <>
            Search to reveal cards from{" "}
            <span className="text-accent font-medium">{totalCount}</span>{" "}
            in the deck
          </>
        )}
      </p>
    </div>
  );
}
