import { Sparkles, FloatingLanterns } from "@/components/sparkles";
import { HeroSection } from "@/components/hero-section";
import { Star, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background effects */}
      <Sparkles />
      <FloatingLanterns />

      {/* Radial glow behind hero */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(0, 80%, 55%) 0%, hsl(0, 45%, 12%) 50%, transparent 70%)",
        }}
      />

      {/* Hero with Draw Deck */}
      <div className="flex-1">
        <HeroSection />
      </div>

      {/* Footer */}
      <footer className="relative text-center py-10 px-4 border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="h-3 w-3 text-accent opacity-40" />
          <Heart className="h-3 w-3 text-primary opacity-40" />
          <Star className="h-3 w-3 text-accent opacity-40" />
        </div>
        <p className="text-sm text-muted-foreground font-serif">
          May the stars guide your path in 2026
        </p>
        <p className="text-xs text-muted-foreground/40 mt-2">
          All readings are for entertainment and positive inspiration
        </p>
      </footer>
    </main>
  );
}
