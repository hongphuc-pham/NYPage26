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

/** Format zodiac for display (sign / decan / ruler, or "—" if none). */
export function getZodiacLabel(card: TarotCard): string {
  const z = card.zodiac;
  if (!z) return "—";
  const parts: string[] = [];
  if (z.sign) parts.push(z.sign);
  if (z.decan) parts.push(z.decan);
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
    "keywords": ["tradition", "archetype"],
    "element": "Air",
    "zodiac": { "sign": "Uranus", "decan": null, "ruler": "Uranus" },
    "newYearMessage": "Imperial Radiant Pioneer blesses your Fire Horse year with the spirit of infinite possibility. It is a year to take the leap of faith, embrace the unknown with a light heart, and begin a journey that is guided by pure instinct rather than fear."
  },
  {
    "id": 1,
    "name": "Aurora Master Creator",
    "numeral": "I",
    "meaning": "Traditional tarot meaning",
    "description": "The Magician in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Air",
    "zodiac": { "sign": "Mercury", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Aurora Master Creator signals a year of manifestation. In this Fire Horse cycle, you possess all the tools necessary to turn your visions into reality. Align your will with your actions, and watch as the universe responds to your creative command."
  },
  {
    "id": 2,
    "name": "Celestial Sacred Intuitive",
    "numeral": "II",
    "meaning": "Traditional tarot meaning",
    "description": "The High Priestess in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Water",
    "zodiac": { "sign": "Moon", "decan": null, "ruler": "Moon" },
    "newYearMessage": "Celestial Sacred Intuitive invites you to look behind the veil this year. In the fast-paced energy of the Fire Horse, your greatest strength lies in stillness and intuition. Trust the secrets revealed in your dreams and the quiet whispers of your soul."
  },
  {
    "id": 3,
    "name": "Divine Abundant Nurturer",
    "numeral": "III",
    "meaning": "Traditional tarot meaning",
    "description": "The Empress in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Earth",
    "zodiac": { "sign": "Venus", "decan": null, "ruler": "Venus" },
    "newYearMessage": "Divine Abundant Nurturer promises a year of lush growth and creativity. This Fire Horse year is your season to give birth to new ideas, nurture your body, and connect with the fertile beauty of the natural world. Abundance flows where love is planted."
  },
  {
    "id": 4,
    "name": "Divine Sovereign Leader",
    "numeral": "IV",
    "meaning": "Traditional tarot meaning",
    "description": "The Emperor in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Aries", "decan": null, "ruler": "Mars" },
    "newYearMessage": "Divine Sovereign Leader brings the blessing of structure and authority. This year, you are called to claim your throne. Use the Fire Horse's momentum to build solid foundations, establish clear boundaries, and lead your life with disciplined power."
  },
  {
    "id": 5,
    "name": "Luminous Wise Guide",
    "numeral": "V",
    "meaning": "Traditional tarot meaning",
    "description": "The Hierophant in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Earth",
    "zodiac": { "sign": "Taurus", "decan": null, "ruler": "Venus" },
    "newYearMessage": "Luminous Wise Guide connects you to sacred tradition and higher learning. This year, seek out mentors or become one yourself. It is a time to honor the wisdom of the past while finding your place within a community of shared values."
  },
  {
    "id": 6,
    "name": "Aurora Heart Harmony",
    "numeral": "VI",
    "meaning": "Traditional tarot meaning",
    "description": "The Lovers in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Aurora Heart Harmony highlights a year of significant choices and deep connections. Whether in romance or self-alignment, the Fire Horse year asks you to choose the path of the heart. Harmony is found when your values and actions become one."
  },
  {
    "id": 7,
    "name": "Starlit Victorious Driver",
    "numeral": "VII",
    "meaning": "Traditional tarot meaning",
    "description": "The Chariot in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Water",
    "zodiac": { "sign": "Cancer", "decan": null, "ruler": "Moon" },
    "newYearMessage": "Starlit Victorious Driver charges into the Fire Horse year with unstoppable determination. This is a year of triumph through willpower. Steer your conflicting emotions toward a single goal, and you will find yourself crossing the finish line in glory."
  },
  {
    "id": 8,
    "name": "Radiant Inner Lionheart",
    "numeral": "VIII",
    "meaning": "Traditional tarot meaning",
    "description": "Strength in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Leo", "decan": null, "ruler": "Sun" },
    "newYearMessage": "Radiant Inner Lionheart reminds you that true power is found in gentleness. In this high-energy year, your greatest victories will come from taming your internal 'beasts' with compassion and fortitude rather than brute force."
  },
  {
    "id": 9,
    "name": "Divine Illuminated Seeker",
    "numeral": "IX",
    "meaning": "Traditional tarot meaning",
    "description": "The Hermit in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Divine Illuminated Seeker suggests a year of profound introspection. Amidst the Fire Horse's external noise, your path is lit from within. Withdraw when necessary to find your truth; the solitude you seek will yield the wisdom you need."
  },
  {
    "id": 10,
    "name": "Starlit Wheel of Blessings",
    "numeral": "X",
    "meaning": "Traditional tarot meaning",
    "description": "Wheel of Fortune in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Jupiter", "decan": null, "ruler": "Jupiter" },
    "newYearMessage": "Starlit Wheel of Blessings announces a turning point in your destiny. The Fire Horse brings rapid shifts and karmic rewards. Stay centered as the wheel turns; a stroke of luck or a sudden change is preparing to elevate your soul's journey."
  },
  {
    "id": 11,
    "name": "Luminous Balanced Truth",
    "numeral": "XI",
    "meaning": "Traditional tarot meaning",
    "description": "Justice in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Air",
    "zodiac": { "sign": "Libra", "decan": null, "ruler": "Venus" },
    "newYearMessage": "Luminous Balanced Truth brings a year of karmic adjustment. What you have sown, you shall now reap. The Fire Horse demands integrity; act with fairness and honesty, and the scales will tip in your favor, bringing clarity and resolution."
  },
  {
    "id": 12,
    "name": "Sovereign Sacred Perspective",
    "numeral": "XII",
    "meaning": "Traditional tarot meaning",
    "description": "The Hanged Man in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Water",
    "zodiac": { "sign": "Neptune", "decan": null, "ruler": "Neptune" },
    "newYearMessage": "Sovereign Sacred Perspective invites a year of spiritual surrender. Sometimes the best way to move forward in a Fire Horse year is to pause and look at things from a different angle. Enlightenment comes when you let go of the need to control."
  },
  {
    "id": 13,
    "name": "Aurora Phoenix Transformation",
    "numeral": "XIII",
    "meaning": "Traditional tarot meaning",
    "description": "Death in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Water",
    "zodiac": { "sign": "Scorpio", "decan": null, "ruler": "Pluto" },
    "newYearMessage": "Aurora Phoenix Transformation marks a year of profound ending and rebirth. Let the old versions of yourself burn away in the Fire Horse's flames. As one chapter closes, a more authentic and powerful version of your life is ready to emerge."
  },
  {
    "id": 14,
    "name": "Golden Divine Harmony",
    "numeral": "XIV",
    "meaning": "Traditional tarot meaning",
    "description": "Temperance in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": null, "ruler": "Jupiter" },
    "newYearMessage": "Golden Divine Harmony is your guide to alchemy this year. In the heat of the Fire Horse, you are learning to blend opposing forces into a perfect middle path. Patience and moderation will turn your leaden struggles into spiritual gold."
  },
  {
    "id": 15,
    "name": "Aurora Liberated Power",
    "numeral": "XV",
    "meaning": "Traditional tarot meaning",
    "description": "The Devil in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Earth",
    "zodiac": { "sign": "Capricorn", "decan": null, "ruler": "Saturn" },
    "newYearMessage": "Aurora Liberated Power offers a year of breaking chains. Recognize the shadows or addictions that hold you back. The Fire Horse gives you the fierce energy needed to reclaim your freedom and transform your desires into constructive ambition."
  },
  {
    "id": 16,
    "name": "Radiant Awakening Lightning",
    "numeral": "XVI",
    "meaning": "Traditional tarot meaning",
    "description": "The Tower in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Mars", "decan": null, "ruler": "Mars" },
    "newYearMessage": "Radiant Awakening Lightning brings sudden, necessary change. If structures in your life were built on shaky ground, the Fire Horse year will clear them away. Trust the breakthrough; what remains will be the absolute truth of who you are."
  },
  {
    "id": 17,
    "name": "Radiant Hopeful Light",
    "numeral": "XVII",
    "meaning": "Traditional tarot meaning",
    "description": "The Star in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Air",
    "zodiac": { "sign": "Aquarius", "decan": null, "ruler": "Saturn" },
    "newYearMessage": "Radiant Hopeful Light shines upon your path after the storm. This year brings healing, inspiration, and renewed faith. Trust that you are being guided by the stars; your Fire Horse year is filled with grace and spiritual serenity."
  },
  {
    "id": 18,
    "name": "Starlit Dream Illuminator",
    "numeral": "XVIII",
    "meaning": "Traditional tarot meaning",
    "description": "The Moon in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": null, "ruler": "Moon" },
    "newYearMessage": "Starlit Dream Illuminator guides you through the realm of the subconscious. This year, things may not be as they seem. Use the Fire Horse's intuition to navigate the shadows, honoring your emotions while staying grounded in reality."
  },
  {
    "id": 19,
    "name": "Imperial Radiant Joy",
    "numeral": "XIX",
    "meaning": "Traditional tarot meaning",
    "description": "The Sun in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Sun", "decan": null, "ruler": "Sun" },
    "newYearMessage": "Imperial Radiant Joy promises a year of absolute vitality and success. Under the Fire Horse sun, everything you touch is destined to glow. Expect clarity, happiness, and a celebration of your most authentic self."
  },
  {
    "id": 20,
    "name": "Imperial Soul Awakening",
    "numeral": "XX",
    "meaning": "Traditional tarot meaning",
    "description": "Judgement in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Fire",
    "zodiac": { "sign": "Pluto", "decan": null, "ruler": "Pluto" },
    "newYearMessage": "Imperial Soul Awakening calls you to rise to a higher purpose. This Fire Horse year is a time of reckoning and renewal. Hear the call of your soul, forgive the past, and step into a new life with a clear conscience and a bright vision."
  },
  {
    "id": 21,
    "name": "Ethereal Golden Completion",
    "numeral": "XXI",
    "meaning": "Traditional tarot meaning",
    "description": "The World in its traditional tarot interpretation.",
    "keywords": ["tradition", "archetype"],
    "element": "Earth",
    "zodiac": { "sign": "Saturn", "decan": null, "ruler": "Saturn" },
    "newYearMessage": "Ethereal Golden Completion marks the successful end of a major cycle. You have traveled far, and the Fire Horse year brings the reward of wholeness. Celebrate your achievements and prepare to step into a wider world of possibilities."
  },
  {
    "id": 22,
    "name": "Sovereign Ace of Wands",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "ace"],
    "element": "Fire",
    "zodiac": { "sign": null, "decan": null, "ruler": null },
    "newYearMessage": "Sovereign Ace of Wands sparks a year of pure creative fire. In this Fire Horse year, a new passion or project will ignite your soul. Seize the spark—this is the beginning of something truly exhilarating and high-energy."
  },
  {
    "id": 23,
    "name": "Divine Two of Wands",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "two"],
    "element": "Fire",
    "zodiac": { "sign": "Aries", "decan": "1st decan", "ruler": "Mars" },
    "newYearMessage": "Divine Two of Wands places the world in your hands. This year, the Fire Horse encourages you to plan your conquest. You are standing at the threshold of greatness; look toward the horizon and decide where your ambition will take you next."
  },
  {
    "id": 24,
    "name": "Radiant Three of Wands",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "three"],
    "element": "Fire",
    "zodiac": { "sign": "Aries", "decan": "2nd decan", "ruler": "Sun" },
    "newYearMessage": "Radiant Three of Wands signals that your ships are coming in. The Fire Horse year expands your horizons. Your past efforts are starting to show results; stay optimistic and ready to expand your influence across new territories."
  },
  {
    "id": 25,
    "name": "Velvet Four of Wands",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "four"],
    "element": "Fire",
    "zodiac": { "sign": "Aries", "decan": "3rd decan", "ruler": "Venus" },
    "newYearMessage": "Velvet Four of Wands brings a year of celebration and homecoming. The Fire Horse year offers a stable foundation for your joy. Whether it’s a wedding, a new home, or a milestone, take time to celebrate the beauty you have built."
  },
  {
    "id": 26,
    "name": "Ethereal Five of Wands",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "five"],
    "element": "Fire",
    "zodiac": { "sign": "Leo", "decan": "1st decan", "ruler": "Saturn" },
    "newYearMessage": "Ethereal Five of Wands suggests a year of healthy competition. The Fire Horse energy can be chaotic; use this friction to sharpen your skills. Don't fear the struggle—it is through this challenge that your best ideas will be forged."
  },
  {
    "id": 27,
    "name": "Imperial Six of Wands",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "six"],
    "element": "Fire",
    "zodiac": { "sign": "Leo", "decan": "2nd decan", "ruler": "Jupiter" },
    "newYearMessage": "Imperial Six of Wands crowns you with victory. In this Fire Horse year, your public recognition is assured. You are the hero of your own story; accept the applause and let your confidence lead you to even greater heights."
  },
  {
    "id": 28,
    "name": "Ethereal Seven of Wands",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "seven"],
    "element": "Fire",
    "zodiac": { "sign": "Leo", "decan": "3rd decan", "ruler": "Mars" },
    "newYearMessage": "Ethereal Seven of Wands calls you to defend your position. The Fire Horse year may bring challengers, but you have the high ground. Stand firm in your convictions; your courage will ensure that you remain undefeated."
  },
  {
    "id": 29,
    "name": "Radiant Eight of Wands",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "eight"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": "1st decan", "ruler": "Mercury" },
    "newYearMessage": "Radiant Eight of Wands signals a year of rapid movement. The Fire Horse is at full gallop now. Expect swift communications, travel, and things falling into place at high speed. Clear the path—the time for waiting is over."
  },
  {
    "id": 30,
    "name": "Golden Nine of Wands",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "nine"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": "2nd decan", "ruler": "Moon" },
    "newYearMessage": "Golden Nine of Wands acknowledges your resilience. The Fire Horse year has tested you, but you are almost at the end of the struggle. Hold the line just a little longer; your stamina is your greatest blessing this year."
  },
  {
    "id": 31,
    "name": "Ethereal Ten of Wands",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "ten"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": "3rd decan", "ruler": "Saturn" },
    "newYearMessage": "Ethereal Ten of Wands warns of burnout in the Fire Horse year. You are carrying a heavy load, perhaps more than you should. This year, learn to delegate or put down the burdens that no longer serve your growth."
  },
  {
    "id": 32,
    "name": "Ethereal Page of Wands",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "page"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": null, "ruler": "Jupiter" },
    "newYearMessage": "Ethereal Page of Wands brings a message of inspiration. This Fire Horse year, stay curious and enthusiastic like a child. A new adventure or a creative spark is arriving—embrace it with an open mind and a daring spirit."
  },
  {
    "id": 33,
    "name": "Imperial Knight of Wands",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "knight"],
    "element": "Fire",
    "zodiac": { "sign": "Sagittarius", "decan": null, "ruler": "Jupiter" },
    "newYearMessage": "Imperial Knight of Wands is the embodiment of the Fire Horse energy. This year is about bold action, passion, and adventure. Chase your desires with full intensity, but remember to keep a steady hand on the reins."
  },
  {
    "id": 34,
    "name": "Velvet Queen of Wands",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "queen"],
    "element": "Fire",
    "zodiac": { "sign": "Leo", "decan": null, "ruler": "Sun" },
    "newYearMessage": "Velvet Queen of Wands blesses you with charisma and confidence. This year, lead with your warmth and your fire. You have the power to influence others through your passion; let your inner light shine brightly and unapologetically."
  },
  {
    "id": 35,
    "name": "Sovereign King of Wands",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Wands in traditional tarot symbolism.",
    "keywords": ["wands", "king"],
    "element": "Fire",
    "zodiac": { "sign": "Aries", "decan": null, "ruler": "Mars" },
    "newYearMessage": "Sovereign King of Wands is the visionary leader of the Fire Horse year. You have the maturity to turn your passion into a legacy. Step into your power, take the lead, and inspire others with your bold, creative vision."
  },
  {
    "id": 36,
    "name": "Luminous Ace of Cups",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "ace"],
    "element": "Water",
    "zodiac": { "sign": null, "decan": null, "ruler": null },
    "newYearMessage": "Luminous Ace of Cups overflows with emotional renewal. In this Fire Horse year, your heart is opening to new love, spiritual peace, or creative joy. Let your feelings flow freely; a new wellspring of happiness is appearing."
  },
  {
    "id": 37,
    "name": "Ethereal Two of Cups",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "two"],
    "element": "Water",
    "zodiac": { "sign": "Cancer", "decan": "1st decan", "ruler": "Venus" },
    "newYearMessage": "Ethereal Two of Cups brings the blessing of soul connections. The Fire Horse year will see your relationships deepen through mutual respect and love. Whether new or old, a partnership is evolving into a beautiful harmony."
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
    "newYearMessage": "Sacred Three of Cups celebrates your community. This Fire Horse year is about shared joy, friendship, and sisterhood/brotherhood. Raise your glass to the people who support you—success is much sweeter when celebrated together."
  },
  {
    "id": 39,
    "name": "Celestial Four of Cups",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "four"],
    "element": "Water",
    "zodiac": { "sign": "Cancer", "decan": "3rd decan", "ruler": "Moon" },
    "newYearMessage": "Celestial Four of Cups warns against apathy. In the rush of the Fire Horse, you might feel emotionally withdrawn or bored. Look up—the universe is offering you a gift that you might miss if you keep focusing on what's lacking."
  },
  {
    "id": 40,
    "name": "Sovereign Five of Cups",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "five"],
    "element": "Water",
    "zodiac": { "sign": "Scorpio", "decan": "1st decan", "ruler": "Mars" },
    "newYearMessage": "Sovereign Five of Cups offers healing through grief. You may face a disappointment this year, but do not lose hope. The Fire Horse year reminds you that while some cups have spilled, others remain full. Turn around and see what still survives."
  },
  {
    "id": 41,
    "name": "Imperial Six of Cups",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "six"],
    "element": "Water",
    "zodiac": { "sign": "Scorpio", "decan": "2nd decan", "ruler": "Sun" },
    "newYearMessage": "Imperial Six of Cups brings nostalgic blessings. This year, you may reconnect with your past or find joy in simple, childhood pleasures. The Fire Horse year invites you to bring the innocence and kindness of the past into your present."
  },
  {
    "id": 42,
    "name": "Radiant Seven of Cups",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "seven"],
    "element": "Water",
    "zodiac": { "sign": "Scorpio", "decan": "3rd decan", "ruler": "Venus" },
    "newYearMessage": "Radiant Seven of Cups presents you with many choices. The Fire Horse year is full of illusions and dreams. Be careful not to get lost in fantasy; choose one path with your heart and commit to making it real."
  },
  {
    "id": 43,
    "name": "Luminous Eight of Cups",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "eight"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": "1st decan", "ruler": "Saturn" },
    "newYearMessage": "Luminous Eight of Cups is your signal to move on. In this Fire Horse year, you may realize that what once fulfilled you is no longer enough. Walking away toward a higher spiritual goal is not a failure—it's a brave new beginning."
  },
  {
    "id": 44,
    "name": "Starlit Nine of Cups",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "nine"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": "2nd decan", "ruler": "Jupiter" },
    "newYearMessage": "Starlit Nine of Cups is the 'Wish Card.' This Fire Horse year brings deep emotional satisfaction and the fulfillment of a heart's desire. Enjoy the abundance; you have earned this moment of comfort and contentment."
  },
  {
    "id": 45,
    "name": "Sacred Ten of Cups",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "ten"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": "3rd decan", "ruler": "Mars" },
    "newYearMessage": "Sacred Ten of Cups promises domestic bliss and emotional completion. The Fire Horse year brings your family and loved ones into a circle of harmony. This is a year to savor the love that surrounds you and the home you have created."
  },
  {
    "id": 46,
    "name": "Ethereal Page of Cups",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "page"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": null, "ruler": "Neptune" },
    "newYearMessage": "Ethereal Page of Cups brings a surprise of the heart. This year, stay open to emotional messages, perhaps from a younger person or a new creative hobby. Let the Fire Horse year surprise you with its gentle, poetic side."
  },
  {
    "id": 47,
    "name": "Aurora Knight of Cups",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "knight"],
    "element": "Water",
    "zodiac": { "sign": "Pisces", "decan": null, "ruler": "Neptune" },
    "newYearMessage": "Aurora Knight of Cups is the romantic messenger. This year, follow your dreams and your heart. Whether it’s an artistic pursuit or a new romance, the Fire Horse year encourages you to ride toward your ideals with grace."
  },
  {
    "id": 48,
    "name": "Sacred Queen of Cups",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "queen"],
    "element": "Water",
    "zodiac": { "sign": "Scorpio", "decan": null, "ruler": "Pluto" },
    "newYearMessage": "Sacred Queen of Cups embodies empathy and psychic depth. This year, your emotional intelligence is your greatest asset. In the heat of the Fire Horse, be the calm water that heals and understands others."
  },
  {
    "id": 49,
    "name": "Aurora King of Cups",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Cups in traditional tarot symbolism.",
    "keywords": ["cups", "king"],
    "element": "Water",
    "zodiac": { "sign": "Cancer", "decan": null, "ruler": "Moon" },
    "newYearMessage": "Aurora King of Cups brings emotional maturity. This year, you are the master of your feelings. Use the Fire Horse's energy to provide a stable, compassionate presence for yourself and those you lead."
  },
  {
    "id": 50,
    "name": "Aurora Ace of Swords",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "ace"],
    "element": "Air",
    "zodiac": { "sign": null, "decan": null, "ruler": null },
    "newYearMessage": "Aurora Ace of Swords brings a breakthrough of the mind. This Fire Horse year, a moment of absolute clarity will cut through the confusion. It is a year to speak your truth and wield your intellect like a sharp blade."
  },
  {
    "id": 51,
    "name": "Velvet Two of Swords",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "two"],
    "element": "Air",
    "zodiac": { "sign": "Libra", "decan": "1st decan", "ruler": "Moon" },
    "newYearMessage": "Velvet Two of Swords suggests a year of difficult decisions. You may feel stuck between two paths in this Fire Horse year. Take off the blindfold and look at the facts; peace will come only once you choose."
  },
  {
    "id": 52,
    "name": "Sacred Three of Swords",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "three"],
    "element": "Air",
    "zodiac": { "sign": "Libra", "decan": "2nd decan", "ruler": "Saturn" },
    "newYearMessage": "Sacred Three of Swords acknowledges a period of heartache. The Fire Horse year may bring a painful truth to light. Use this time to release sorrow and heal; through this pain, your heart will grow stronger and wiser."
  },
  {
    "id": 53,
    "name": "Velvet Four of Swords",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "four"],
    "element": "Air",
    "zodiac": { "sign": "Libra", "decan": "3rd decan", "ruler": "Jupiter" },
    "newYearMessage": "Velvet Four of Swords calls for mental rest. The Fire Horse year is exhausting; you must take time to retreat and recover. Quiet your mind through meditation or a sabbatical, and you will return with renewed strength."
  },
  {
    "id": 54,
    "name": "Aurora Five of Swords",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "five"],
    "element": "Air",
    "zodiac": { "sign": "Aquarius", "decan": "1st decan", "ruler": "Venus" },
    "newYearMessage": "Aurora Five of Swords warns of hollow victories. This year, winning at all costs may leave you alone. In the competitive Fire Horse energy, choose your battles wisely and remember that some fights aren't worth the price."
  },
  {
    "id": 55,
    "name": "Imperial Six of Swords",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "six"],
    "element": "Air",
    "zodiac": { "sign": "Aquarius", "decan": "2nd decan", "ruler": "Mercury" },
    "newYearMessage": "Imperial Six of Swords brings a year of transition. You are moving away from troubled waters toward a calmer shore. The Fire Horse year supports travel and the mental shift required to leave the past behind."
  },
  {
    "id": 56,
    "name": "Sovereign Seven of Swords",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "seven"],
    "element": "Air",
    "zodiac": { "sign": "Aquarius", "decan": "3rd decan", "ruler": "Moon" },
    "newYearMessage": "Sovereign Seven of Swords suggests a year of strategy and stealth. You may need to work behind the scenes in this Fire Horse year. Be clever and protect your interests, but avoid the trap of deceit."
  },
  {
    "id": 57,
    "name": "Aurora Eight of Swords",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "eight"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": "1st decan", "ruler": "Jupiter" },
    "newYearMessage": "Aurora Eight of Swords reminds you that your limitations are mental. You may feel trapped this year, but the exit is right in front of you. In the Fire Horse year, use your intellect to break free from self-imposed prisons."
  },
  {
    "id": 58,
    "name": "Celestial Nine of Swords",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "nine"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": "2nd decan", "ruler": "Mars" },
    "newYearMessage": "Celestial Nine of Swords addresses anxiety and night-terrors. Don't let the intensity of the Fire Horse year overwhelm your mind. Reach out for help; your worries are likely larger in your head than they are in reality."
  },
  {
    "id": 59,
    "name": "Luminous Ten of Swords",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "ten"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": "3rd decan", "ruler": "Sun" },
    "newYearMessage": "Luminous Ten of Swords marks the absolute end of a struggle. The worst is over. As the Fire Horse sun rises, a painful situation concludes, and you are finally free to start over with a clean slate."
  },
  {
    "id": 60,
    "name": "Divine Page of Swords",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "page"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Divine Page of Swords brings mental agility. This year, stay alert and curious. News or a new idea will spark your interest; use the Fire Horse's speed to learn quickly and communicate with precision."
  },
  {
    "id": 61,
    "name": "Velvet Knight of Swords",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "knight"],
    "element": "Air",
    "zodiac": { "sign": "Gemini", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Velvet Knight of Swords charges forward with truth. This is a year of swift action and intellectual debate. The Fire Horse year encourages you to fight for your ideas, but be careful not to trample others in your haste."
  },
  {
    "id": 62,
    "name": "Celestial Queen of Swords",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "queen"],
    "element": "Air",
    "zodiac": { "sign": "Aquarius", "decan": null, "ruler": "Saturn" },
    "newYearMessage": "Celestial Queen of Swords brings clarity and independence. This year, you see the world with cool objectivity. The Fire Horse year asks you to use your sharp wit and clear boundaries to protect your path and your peace."
  },
  {
    "id": 63,
    "name": "Starlit King of Swords",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Swords in traditional tarot symbolism.",
    "keywords": ["swords", "king"],
    "element": "Air",
    "zodiac": { "sign": "Libra", "decan": null, "ruler": "Venus" },
    "newYearMessage": "Starlit King of Swords embodies the power of truth and logic. This year, you are the final authority. Use your intellect to lead and solve problems; the Fire Horse year rewards those who act with justice and clear-headedness."
  },
  {
    "id": 64,
    "name": "Sovereign Ace of Pentacles",
    "numeral": "Ace",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ace of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "ace"],
    "element": "Earth",
    "zodiac": { "sign": null, "decan": null, "ruler": null },
    "newYearMessage": "Sovereign Ace of Pentacles plants a seed of prosperity. In this Fire Horse year, a new financial or career opportunity will manifest. This is the year to ground your dreams in reality and begin building something of lasting value."
  },
  {
    "id": 65,
    "name": "Starlit Two of Pentacles",
    "numeral": "Two",
    "meaning": "Traditional minor arcana meaning",
    "description": "Two of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "two"],
    "element": "Earth",
    "zodiac": { "sign": "Capricorn", "decan": "1st decan", "ruler": "Jupiter" },
    "newYearMessage": "Starlit Two of Pentacles brings a year of balance and adaptability. The Fire Horse year is busy; you'll be juggling many responsibilities. Stay flexible and find the rhythm in the chaos, and you will manage it all with ease."
  },
  {
    "id": 66,
    "name": "Velvet Three of Pentacles",
    "numeral": "Three",
    "meaning": "Traditional minor arcana meaning",
    "description": "Three of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "three"],
    "element": "Earth",
    "zodiac": { "sign": "Capricorn", "decan": "2nd decan", "ruler": "Mars" },
    "newYearMessage": "Velvet Three of Pentacles focuses on teamwork and craftsmanship. This year, collaboration is the key to success. Combine your skills with others; the Fire Horse year rewards shared effort and professional excellence."
  },
  {
    "id": 67,
    "name": "Velvet Four of Pentacles",
    "numeral": "Four",
    "meaning": "Traditional minor arcana meaning",
    "description": "Four of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "four"],
    "element": "Earth",
    "zodiac": { "sign": "Capricorn", "decan": "3rd decan", "ruler": "Sun" },
    "newYearMessage": "Velvet Four of Pentacles warns against being too rigid. You may feel the need to cling to your resources in this Fire Horse year. While stability is good, remember that energy (and wealth) must flow to grow."
  },
  {
    "id": 68,
    "name": "Sacred Five of Pentacles",
    "numeral": "Five",
    "meaning": "Traditional minor arcana meaning",
    "description": "Five of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "five"],
    "element": "Earth",
    "zodiac": { "sign": "Taurus", "decan": "1st decan", "ruler": "Mercury" },
    "newYearMessage": "Sacred Five of Pentacles addresses temporary hardship. If you feel left out in the cold this year, remember that help is nearby. The Fire Horse year tests your resourcefulness; look for the light in the window and ask for support."
  },
  {
    "id": 69,
    "name": "Velvet Six of Pentacles",
    "numeral": "Six",
    "meaning": "Traditional minor arcana meaning",
    "description": "Six of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "six"],
    "element": "Earth",
    "zodiac": { "sign": "Taurus", "decan": "2nd decan", "ruler": "Moon" },
    "newYearMessage": "Velvet Six of Pentacles brings a year of generosity and balance. Whether you are giving or receiving, the Fire Horse year ensures that resources are shared. Your kindness will return to you tenfold in this cycle of abundance."
  },
  {
    "id": 70,
    "name": "Radiant Seven of Pentacles",
    "numeral": "Seven",
    "meaning": "Traditional minor arcana meaning",
    "description": "Seven of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "seven"],
    "element": "Earth",
    "zodiac": { "sign": "Taurus", "decan": "3rd decan", "ruler": "Saturn" },
    "newYearMessage": "Radiant Seven of Pentacles is a year of patience. You have planted the seeds; now you must wait for the harvest. In the fast Fire Horse year, this card reminds you that true quality cannot be rushed. Evaluate your progress and wait."
  },
  {
    "id": 71,
    "name": "Luminous Eight of Pentacles",
    "numeral": "Eight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Eight of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "eight"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": "1st decan", "ruler": "Sun" },
    "newYearMessage": "Luminous Eight of Pentacles focuses on mastery and dedication. This is a year to hone your craft. Use the Fire Horse's energy to work hard on your skills; your attention to detail will lead to significant professional growth."
  },
  {
    "id": 72,
    "name": "Imperial Nine of Pentacles",
    "numeral": "Nine",
    "meaning": "Traditional minor arcana meaning",
    "description": "Nine of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "nine"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": "2nd decan", "ruler": "Venus" },
    "newYearMessage": "Imperial Nine of Pentacles brings a year of independence and luxury. You have achieved a level of self-sufficiency that allows you to enjoy the finer things. The Fire Horse year celebrates your success and your refined taste."
  },
  {
    "id": 73,
    "name": "Ethereal Ten of Pentacles",
    "numeral": "Ten",
    "meaning": "Traditional minor arcana meaning",
    "description": "Ten of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "ten"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": "3rd decan", "ruler": "Mercury" },
    "newYearMessage": "Ethereal Ten of Pentacles promises a legacy of wealth. This year is about long-term stability and family foundations. The Fire Horse year supports investments and building something that will last for generations to come."
  },
  {
    "id": 74,
    "name": "Radiant Page of Pentacles",
    "numeral": "Page",
    "meaning": "Traditional minor arcana meaning",
    "description": "Page of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "page"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Radiant Page of Pentacles brings news of a practical nature. This year, stay focused on your goals and be ready to learn new financial skills. A small but promising opportunity is arriving—treat it with care and it will grow."
  },
  {
    "id": 75,
    "name": "Celestial Knight of Pentacles",
    "numeral": "Knight",
    "meaning": "Traditional minor arcana meaning",
    "description": "Knight of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "knight"],
    "element": "Earth",
    "zodiac": { "sign": "Virgo", "decan": null, "ruler": "Mercury" },
    "newYearMessage": "Celestial Knight of Pentacles brings a year of steady, reliable progress. While the Fire Horse wants to run, you are the one who ensures the path is safe. Your diligence and routine will lead you to certain success this year."
  },
  {
    "id": 76,
    "name": "Ethereal Queen of Pentacles",
    "numeral": "Queen",
    "meaning": "Traditional minor arcana meaning",
    "description": "Queen of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "queen"],
    "element": "Earth",
    "zodiac": { "sign": "Taurus", "decan": null, "ruler": "Venus" },
    "newYearMessage": "Ethereal Queen of Pentacles blesses you with the spirit of the 'Earth Mother.' This year, you find success through nurturing your home and your business alike. The Fire Horse year provides the energy; you provide the practical magic."
  },
  {
    "id": 77,
    "name": "Aurora King of Pentacles",
    "numeral": "King",
    "meaning": "Traditional minor arcana meaning",
    "description": "King of Pentacles in traditional tarot symbolism.",
    "keywords": ["pentacles", "king"],
    "element": "Earth",
    "zodiac": { "sign": "Capricorn", "decan": null, "ruler": "Saturn" },
    "newYearMessage": "Aurora King of Pentacles is the master of the material world. This year, your financial wisdom and leadership are at their peak. Use the Fire Horse cycle to expand your empire and secure your long-term prosperity."
  }
]