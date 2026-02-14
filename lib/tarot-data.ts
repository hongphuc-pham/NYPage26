export interface ZodiacInfo {
  sign: string | null;
  decan: string | null;
  ruler: string | null;
}

export interface TarotCard {
  id: number;
  name: string;
  numeral: string;
  meaning: string;
  description: string;
  keywords: string[];
  element: string;
  zodiac: ZodiacInfo;
  newYearMessage: string;
}

/** Minor arcana suit from card keywords, or null for major arcana. */
export type TarotSuit = "wands" | "cups" | "swords" | "pentacles";

export function getSuit(card: TarotCard): TarotSuit | null {
  const suit = card.keywords.find((k) =>
    (["wands", "cups", "swords", "pentacles"] as const).includes(k as TarotSuit)
  );
  return (suit as TarotSuit) ?? null;
}

/** Format zodiac for display (sign / ruler or sign only, or "—" if none). */
export function getZodiacLabel(card: TarotCard): string {
  const z = card.zodiac;
  if (!z) return "—";
  const parts: string[] = [];
  if (z.sign) parts.push(z.sign);
  if (z.ruler && z.ruler !== z.sign) parts.push(z.ruler);
  return parts.length ? parts.join(" / ") : "—";
}

/** Search by name (or part), id, numeral, meaning, keywords, element, description, zodiac. Returns all matches. */
export function searchTarotCards(query: string): TarotCard[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const byId =
    /^\d+$/.test(q) && Number(q) >= 0 && Number(q) <= 77
      ? tarotCards.find((c) => c.id === Number(q))
      : null;
  if (byId) return [byId];

  const matches = tarotCards.filter((card) => {
    if (card.name.toLowerCase().includes(q)) return true;
    if (card.numeral.toLowerCase().includes(q)) return true;
    if (card.meaning.toLowerCase().includes(q)) return true;
    if (card.description.toLowerCase().includes(q)) return true;
    if (card.keywords.some((kw) => kw.toLowerCase().includes(q))) return true;
    if (card.element.toLowerCase().includes(q)) return true;
    const z = card.zodiac;
    if (
      (z.sign && z.sign.toLowerCase().includes(q)) ||
      (z.ruler && z.ruler.toLowerCase().includes(q)) ||
      (z.decan && z.decan.toLowerCase().includes(q))
    )
      return true;
    return false;
  });

  return matches;
}

export const tarotCards: TarotCard[] = [
  {
    "id": 0,
    "name": "Imperial Radiant Pioneer",
    "numeral": "0",
    "meaning": "Traditional tarot meaning",
    "description": "The Fool in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Uranus",
      "decan": null,
      "ruler": "Uranus"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 1,
    "name": "Aurora Master Creator",
    "numeral": "I",
    "meaning": "Traditional tarot meaning",
    "description": "The Magician in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Mercury",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 2,
    "name": "Celestial Sacred Intuitive",
    "numeral": "II",
    "meaning": "Traditional tarot meaning",
    "description": "The High Priestess in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Moon",
      "decan": null,
      "ruler": "Moon"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 3,
    "name": "Divine Abundant Nurturer",
    "numeral": "III",
    "meaning": "Traditional tarot meaning",
    "description": "The Empress in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Venus",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 4,
    "name": "Divine Sovereign Leader",
    "numeral": "IV",
    "meaning": "Traditional tarot meaning",
    "description": "The Emperor in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": null,
      "ruler": "Mars"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 5,
    "name": "Luminous Wise Guide",
    "numeral": "V",
    "meaning": "Traditional tarot meaning",
    "description": "The Hierophant in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Taurus",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 6,
    "name": "Aurora Heart Harmony",
    "numeral": "VI",
    "meaning": "Traditional tarot meaning",
    "description": "The Lovers in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 7,
    "name": "Starlit Victorious Driver",
    "numeral": "VII",
    "meaning": "Traditional tarot meaning",
    "description": "The Chariot in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": null,
      "ruler": "Moon"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 8,
    "name": "Radiant Inner Lionheart",
    "numeral": "VIII",
    "meaning": "Traditional tarot meaning",
    "description": "Strength in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Leo",
      "decan": null,
      "ruler": "Sun"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 9,
    "name": "Divine Illuminated Seeker",
    "numeral": "IX",
    "meaning": "Traditional tarot meaning",
    "description": "The Hermit in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 10,
    "name": "Starlit Wheel of Blessings",
    "numeral": "X",
    "meaning": "Traditional tarot meaning",
    "description": "Wheel of Fortune in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Jupiter",
      "decan": null,
      "ruler": "Jupiter"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 11,
    "name": "Luminous Balanced Truth",
    "numeral": "XI",
    "meaning": "Traditional tarot meaning",
    "description": "Justice in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 12,
    "name": "Sovereign Sacred Perspective",
    "numeral": "XII",
    "meaning": "Traditional tarot meaning",
    "description": "The Hanged Man in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Neptune",
      "decan": null,
      "ruler": "Neptune"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 13,
    "name": "Aurora Phoenix Transformation",
    "numeral": "XIII",
    "meaning": "Traditional tarot meaning",
    "description": "Death in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Scorpio",
      "decan": null,
      "ruler": "Pluto"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 14,
    "name": "Golden Divine Harmony",
    "numeral": "XIV",
    "meaning": "Traditional tarot meaning",
    "description": "Temperance in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": null,
      "ruler": "Jupiter"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 15,
    "name": "Aurora Liberated Power",
    "numeral": "XV",
    "meaning": "Traditional tarot meaning",
    "description": "The Devil in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 16,
    "name": "Radiant Awakening Lightning",
    "numeral": "XVI",
    "meaning": "Traditional tarot meaning",
    "description": "The Tower in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Mars",
      "decan": null,
      "ruler": "Mars"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 17,
    "name": "Radiant Hopeful Light",
    "numeral": "XVII",
    "meaning": "Traditional tarot meaning",
    "description": "The Star in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Aquarius",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 18,
    "name": "Starlit Dream Illuminator",
    "numeral": "XVIII",
    "meaning": "Traditional tarot meaning",
    "description": "The Moon in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": null,
      "ruler": "Moon"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 19,
    "name": "Imperial Radiant Joy",
    "numeral": "XIX",
    "meaning": "Traditional tarot meaning",
    "description": "The Sun in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sun",
      "decan": null,
      "ruler": "Sun"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 20,
    "name": "Imperial Soul Awakening",
    "numeral": "XX",
    "meaning": "Traditional tarot meaning",
    "description": "Judgement in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Pluto",
      "decan": null,
      "ruler": "Pluto"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 21,
    "name": "Ethereal Golden Completion",
    "numeral": "XXI",
    "meaning": "Traditional tarot meaning",
    "description": "The World in its traditional tarot interpretation.",
    "keywords": [
      "tradition",
      "archetype"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Saturn",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "Fire Horse 2026 urges bold, conscious action aligned with this card."
  },
  {
    "id": 22,
    "name": "Sovereign Ace of Wands",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "ace"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": null,
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 23,
    "name": "Divine Two of Wands",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "two"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": "1st decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 24,
    "name": "Radiant Three of Wands",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "three"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": "2nd decan",
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 25,
    "name": "Velvet Four of Wands",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "four"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": "3rd decan",
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 26,
    "name": "Ethereal Five of Wands",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "five"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Leo",
      "decan": "1st decan",
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 27,
    "name": "Imperial Six of Wands",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "six"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Leo",
      "decan": "2nd decan",
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 28,
    "name": "Ethereal Seven of Wands",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "seven"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Leo",
      "decan": "3rd decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 29,
    "name": "Radiant Eight of Wands",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "eight"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": "1st decan",
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 30,
    "name": "Golden Nine of Wands",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "nine"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": "2nd decan",
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 31,
    "name": "Ethereal Ten of Wands",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "ten"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": "3rd decan",
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 32,
    "name": "Ethereal Page of Wands",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "page"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Aries",
      "decan": null,
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 33,
    "name": "Imperial Knight of Wands",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "knight"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Leo",
      "decan": null,
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 34,
    "name": "Velvet Queen of Wands",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "queen"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": null,
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 35,
    "name": "Sovereign King of Wands",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Wands in traditional tarot symbolism.",
    "keywords": [
      "wands",
      "king"
    ],
    "element": "Fire",
    "zodiac": {
      "sign": "Sagittarius",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 36,
    "name": "Luminous Ace of Cups",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "ace"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": null,
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 37,
    "name": "Ethereal Two of Cups",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "two"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": "1st decan",
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 38,
    "name": "Sacred Three of Cups",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "three"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": "2nd decan",
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 39,
    "name": "Celestial Four of Cups",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "four"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": "3rd decan",
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 40,
    "name": "Sovereign Five of Cups",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "five"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Scorpio",
      "decan": "1st decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 41,
    "name": "Imperial Six of Cups",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "six"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Scorpio",
      "decan": "2nd decan",
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 42,
    "name": "Radiant Seven of Cups",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "seven"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Scorpio",
      "decan": "3rd decan",
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 43,
    "name": "Luminous Eight of Cups",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "eight"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": "1st decan",
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 44,
    "name": "Starlit Nine of Cups",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "nine"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": "2nd decan",
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 45,
    "name": "Sacred Ten of Cups",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "ten"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": "3rd decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 46,
    "name": "Ethereal Page of Cups",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "page"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Cancer",
      "decan": null,
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 47,
    "name": "Aurora Knight of Cups",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "knight"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Scorpio",
      "decan": null,
      "ruler": "Pluto"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 48,
    "name": "Sacred Queen of Cups",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "queen"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": null,
      "ruler": "Neptune"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 49,
    "name": "Aurora King of Cups",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Cups in traditional tarot symbolism.",
    "keywords": [
      "cups",
      "king"
    ],
    "element": "Water",
    "zodiac": {
      "sign": "Pisces",
      "decan": null,
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 50,
    "name": "Aurora Ace of Swords",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "ace"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 51,
    "name": "Velvet Two of Swords",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "two"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": "1st decan",
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 52,
    "name": "Sacred Three of Swords",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "three"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": "2nd decan",
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 53,
    "name": "Velvet Four of Swords",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "four"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": "3rd decan",
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 54,
    "name": "Aurora Five of Swords",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "five"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Aquarius",
      "decan": "1st decan",
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 55,
    "name": "Imperial Six of Swords",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "six"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Aquarius",
      "decan": "2nd decan",
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 56,
    "name": "Sovereign Seven of Swords",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "seven"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Aquarius",
      "decan": "3rd decan",
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 57,
    "name": "Aurora Eight of Swords",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "eight"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": "1st decan",
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 58,
    "name": "Celestial Nine of Swords",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "nine"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": "2nd decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 59,
    "name": "Luminous Ten of Swords",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "ten"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": "3rd decan",
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 60,
    "name": "Divine Page of Swords",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "page"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Libra",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 61,
    "name": "Velvet Knight of Swords",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "knight"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Aquarius",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 62,
    "name": "Celestial Queen of Swords",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "queen"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 63,
    "name": "Starlit King of Swords",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Swords in traditional tarot symbolism.",
    "keywords": [
      "swords",
      "king"
    ],
    "element": "Air",
    "zodiac": {
      "sign": "Gemini",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 64,
    "name": "Sovereign Ace of Pentacles",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "ace"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 65,
    "name": "Starlit Two of Pentacles",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "two"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": "1st decan",
      "ruler": "Jupiter"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 66,
    "name": "Velvet Three of Pentacles",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "three"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": "2nd decan",
      "ruler": "Mars"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 67,
    "name": "Velvet Four of Pentacles",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "four"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": "3rd decan",
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 68,
    "name": "Sacred Five of Pentacles",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "five"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Taurus",
      "decan": "1st decan",
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 69,
    "name": "Velvet Six of Pentacles",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "six"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Taurus",
      "decan": "2nd decan",
      "ruler": "Moon"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 70,
    "name": "Radiant Seven of Pentacles",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "seven"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Taurus",
      "decan": "3rd decan",
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 71,
    "name": "Luminous Eight of Pentacles",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "eight"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": "1st decan",
      "ruler": "Sun"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 72,
    "name": "Imperial Nine of Pentacles",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "nine"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": "2nd decan",
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 73,
    "name": "Ethereal Ten of Pentacles",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "ten"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": "3rd decan",
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 74,
    "name": "Radiant Page of Pentacles",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "page"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Capricorn",
      "decan": null,
      "ruler": "Saturn"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 75,
    "name": "Celestial Knight of Pentacles",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "knight"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Taurus",
      "decan": null,
      "ruler": "Venus"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 76,
    "name": "Ethereal Queen of Pentacles",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "queen"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  },
  {
    "id": 77,
    "name": "Aurora King of Pentacles",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Pentacles in traditional tarot symbolism.",
    "keywords": [
      "pentacles",
      "king"
    ],
    "element": "Earth",
    "zodiac": {
      "sign": "Virgo",
      "decan": null,
      "ruler": "Mercury"
    },
    "newYearMessage": "In Fire Horse 2026, this energy moves fast and rewards clarity and courage."
  }
]