"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background:
              sparkle.id % 3 === 0
                ? "hsl(42, 85%, 58%)"
                : sparkle.id % 3 === 1
                  ? "hsl(0, 80%, 60%)"
                  : "hsl(40, 30%, 92%)",
            animation: `sparkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingLanterns() {
  const [lanterns, setLanterns] = useState<
    { id: number; x: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 4,
      size: Math.random() * 20 + 20,
    }));
    setLanterns(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute opacity-20"
          style={{
            left: `${lantern.x}%`,
            bottom: `${-10 + lantern.id * 12}%`,
            width: `${lantern.size}px`,
            height: `${lantern.size * 1.3}px`,
            background:
              "radial-gradient(ellipse, hsl(0, 80%, 55%) 0%, hsl(42, 85%, 58%) 50%, transparent 70%)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            animation: `float ${lantern.duration}s ease-in-out ${lantern.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
