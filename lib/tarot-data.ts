export interface TarotCard {
  id: number;
  name: string;
  numeral: string;
  meaning: string;
  description: string;
  keywords: string[];
  element: string;
  zodiac: string;
  newYearMessage: string;
}

export const tarotCards: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    numeral: "0",
    meaning: "New Beginnings",
    description:
      "A fresh start awaits you! The Fool brings the courage to leap into the unknown with joy and trust.",
    keywords: ["adventure", "freedom", "spontaneity", "trust"],
    element: "Air",
    zodiac: "Uranus",
    newYearMessage:
      "This year, embrace every new adventure with childlike wonder. Your boldest leap will be your greatest gift.",
  },
  {
    id: 1,
    name: "The Magician",
    numeral: "I",
    meaning: "Manifestation",
    description:
      "You have all the tools you need. The Magician empowers you to turn dreams into reality.",
    keywords: ["willpower", "creation", "skill", "resourcefulness"],
    element: "Mercury",
    zodiac: "Mercury",
    newYearMessage:
      "You hold all the power to manifest your dreams in 2026. Channel your energy and watch magic unfold.",
  },
  {
    id: 2,
    name: "The High Priestess",
    numeral: "II",
    meaning: "Intuition",
    description:
      "Trust your inner voice. The High Priestess reveals hidden wisdom waiting to be discovered.",
    keywords: ["mystery", "wisdom", "serenity", "intuition"],
    element: "Water",
    zodiac: "Moon",
    newYearMessage:
      "Listen to your heart this year. Your intuition will guide you to your deepest truths and most beautiful discoveries.",
  },
  {
    id: 3,
    name: "The Empress",
    numeral: "III",
    meaning: "Abundance",
    description:
      "Nature's bounty flows to you. The Empress brings fertility, beauty, and nurturing love.",
    keywords: ["growth", "beauty", "nature", "nurturing"],
    element: "Earth",
    zodiac: "Venus",
    newYearMessage:
      "Abundance overflows in your life this year. Creative projects bloom and love grows in unexpected places.",
  },
  {
    id: 4,
    name: "The Emperor",
    numeral: "IV",
    meaning: "Authority & Stability",
    description:
      "Structure and leadership bring success. The Emperor provides the foundation for your ambitions.",
    keywords: ["leadership", "stability", "structure", "authority"],
    element: "Fire",
    zodiac: "Aries",
    newYearMessage:
      "Take charge of your destiny in 2026. Your discipline and leadership will build empires of success.",
  },
  {
    id: 5,
    name: "The Lovers",
    numeral: "VI",
    meaning: "Love & Harmony",
    description:
      "Deep connections and choices of the heart. The Lovers bring harmony and meaningful partnerships.",
    keywords: ["love", "harmony", "partnership", "choices"],
    element: "Air",
    zodiac: "Gemini",
    newYearMessage:
      "Love surrounds you this year. Whether in romance or friendship, meaningful connections will transform your world.",
  },
  {
    id: 6,
    name: "The Chariot",
    numeral: "VII",
    meaning: "Victory & Determination",
    description:
      "Willpower drives you forward. The Chariot brings triumph through focus and determination.",
    keywords: ["victory", "willpower", "determination", "focus"],
    element: "Water",
    zodiac: "Cancer",
    newYearMessage:
      "Nothing can stop you this year! Your determination will carry you to victories you once only dreamed of.",
  },
  {
    id: 7,
    name: "Strength",
    numeral: "VIII",
    meaning: "Inner Power",
    description:
      "True strength comes from within. This card reveals your infinite courage and compassion.",
    keywords: ["courage", "patience", "compassion", "inner strength"],
    element: "Fire",
    zodiac: "Leo",
    newYearMessage:
      "Your inner strength shines brighter than ever. Face every challenge with grace and emerge more powerful.",
  },
  {
    id: 8,
    name: "The Wheel of Fortune",
    numeral: "X",
    meaning: "Good Luck & Destiny",
    description:
      "Fortune smiles upon you! The Wheel turns in your favor, bringing lucky breaks and destiny's gifts.",
    keywords: ["luck", "destiny", "cycles", "fortune"],
    element: "Fire",
    zodiac: "Jupiter",
    newYearMessage:
      "The wheel turns in your favor! Lucky breaks and serendipitous encounters mark this fortunate year ahead.",
  },
  {
    id: 9,
    name: "Justice",
    numeral: "XI",
    meaning: "Balance & Fairness",
    description:
      "Truth and fairness prevail. Justice brings karmic rewards for your good deeds and honest heart.",
    keywords: ["balance", "fairness", "truth", "karma"],
    element: "Air",
    zodiac: "Libra",
    newYearMessage:
      "Fairness and balance return to your life. Your integrity is rewarded with beautiful harmony.",
  },
  {
    id: 10,
    name: "Temperance",
    numeral: "XIV",
    meaning: "Balance & Patience",
    description:
      "Harmony flows through moderation. Temperance brings healing, patience, and spiritual balance.",
    keywords: ["balance", "moderation", "patience", "healing"],
    element: "Fire",
    zodiac: "Sagittarius",
    newYearMessage:
      "Find your perfect balance this year. Patience and moderation bring profound peace and healing.",
  },
  {
    id: 11,
    name: "The Star",
    numeral: "XVII",
    meaning: "Hope & Inspiration",
    description:
      "A guiding light in the sky. The Star fills your heart with hope, healing, and boundless inspiration.",
    keywords: ["hope", "inspiration", "renewal", "serenity"],
    element: "Air",
    zodiac: "Aquarius",
    newYearMessage:
      "Hope illuminates your path forward. This year brings the healing and renewal your soul has been seeking.",
  },
  {
    id: 12,
    name: "The Moon",
    numeral: "XVIII",
    meaning: "Dreams & Imagination",
    description:
      "Embrace the magic of dreams. The Moon unlocks your creativity and reveals beauty in the mysterious.",
    keywords: ["dreams", "imagination", "mystery", "creativity"],
    element: "Water",
    zodiac: "Pisces",
    newYearMessage:
      "Let your imagination soar! Dreams become reality as your creative powers reach their fullest potential.",
  },
  {
    id: 13,
    name: "The Sun",
    numeral: "XIX",
    meaning: "Joy & Success",
    description:
      "Pure radiance and happiness! The Sun brings success, vitality, and celebrations.",
    keywords: ["joy", "success", "vitality", "celebration"],
    element: "Fire",
    zodiac: "Sun",
    newYearMessage:
      "Joy and success radiate from everything you do! This is your year to shine your brightest light.",
  },
  {
    id: 14,
    name: "Judgement",
    numeral: "XX",
    meaning: "Renewal & Awakening",
    description:
      "A powerful awakening calls to you. Judgement brings rebirth, clarity, and a higher purpose.",
    keywords: ["awakening", "rebirth", "clarity", "purpose"],
    element: "Fire",
    zodiac: "Pluto",
    newYearMessage:
      "A great awakening transforms your life. Answer your highest calling and rise renewed and empowered.",
  },
  {
    id: 15,
    name: "The World",
    numeral: "XXI",
    meaning: "Completion & Achievement",
    description:
      "Everything comes together beautifully. The World celebrates your journey and the fulfillment of dreams.",
    keywords: ["completion", "achievement", "fulfillment", "wholeness"],
    element: "Earth",
    zodiac: "Saturn",
    newYearMessage:
      "Everything comes full circle in the most beautiful way. Celebrate your completions and welcome new chapters.",
  },
  {
    id: 16,
    name: "Ace of Cups",
    numeral: "Ace",
    meaning: "New Love",
    description:
      "An outpouring of emotion and new love. The Ace of Cups overflows with emotional beginnings.",
    keywords: ["love", "emotion", "intuition", "new feelings"],
    element: "Water",
    zodiac: "Water Signs",
    newYearMessage:
      "Open your heart to new love flowing in. Deep emotional connections and fulfillment are yours this year.",
  },
  {
    id: 17,
    name: "Ace of Pentacles",
    numeral: "Ace",
    meaning: "New Prosperity",
    description:
      "A golden opportunity appears. The Ace of Pentacles brings material blessings and prosperous beginnings.",
    keywords: ["prosperity", "opportunity", "abundance", "wealth"],
    element: "Earth",
    zodiac: "Earth Signs",
    newYearMessage:
      "Financial blessings and new opportunities arrive! Plant your seeds of prosperity and watch them grow.",
  },
  {
    id: 18,
    name: "Ace of Wands",
    numeral: "Ace",
    meaning: "Creative Spark",
    description:
      "A burst of creative energy ignites! The Ace of Wands brings inspired new ventures and passion.",
    keywords: ["creativity", "inspiration", "passion", "new ventures"],
    element: "Fire",
    zodiac: "Fire Signs",
    newYearMessage:
      "Creative fire burns bright within you! New passions and inspired projects light up your year.",
  },
  {
    id: 19,
    name: "Ace of Swords",
    numeral: "Ace",
    meaning: "Mental Clarity",
    description:
      "A breakthrough of clarity cuts through confusion. The Ace of Swords brings truth and intellectual triumph.",
    keywords: ["clarity", "truth", "breakthrough", "intellect"],
    element: "Air",
    zodiac: "Air Signs",
    newYearMessage:
      "Mental clarity cuts through all confusion. Bold new ideas and intellectual breakthroughs define your year.",
  },
  {
    id: 20,
    name: "Three of Cups",
    numeral: "III",
    meaning: "Celebration",
    description:
      "Joy shared with others multiplies! The Three of Cups brings celebrations, friendship, and community.",
    keywords: ["celebration", "friendship", "joy", "community"],
    element: "Water",
    zodiac: "Cancer",
    newYearMessage:
      "Raise your cup to celebrations ahead! Friendships deepen and joyful gatherings fill your calendar.",
  },
  {
    id: 21,
    name: "Six of Wands",
    numeral: "VI",
    meaning: "Victory & Recognition",
    description:
      "Public recognition crowns your efforts. The Six of Wands brings triumph, honor, and well-deserved praise.",
    keywords: ["victory", "recognition", "triumph", "honor"],
    element: "Fire",
    zodiac: "Leo",
    newYearMessage:
      "Your achievements are celebrated by all! Public recognition and triumphant moments await you.",
  },
  {
    id: 22,
    name: "Ten of Cups",
    numeral: "X",
    meaning: "Family Bliss",
    description:
      "The ultimate happiness card. The Ten of Cups brings emotional fulfillment and family harmony.",
    keywords: ["happiness", "family", "harmony", "emotional fulfillment"],
    element: "Water",
    zodiac: "Pisces",
    newYearMessage:
      "A rainbow of happiness arches over your family. Deep emotional fulfillment and lasting joy are yours.",
  },
  {
    id: 23,
    name: "Nine of Pentacles",
    numeral: "IX",
    meaning: "Luxury & Self-Worth",
    description:
      "You reap the rewards of your hard work. The Nine of Pentacles brings luxury, independence, and self-sufficiency.",
    keywords: ["luxury", "independence", "self-worth", "achievement"],
    element: "Earth",
    zodiac: "Virgo",
    newYearMessage:
      "Enjoy the fruits of your labor in luxurious comfort. Financial independence and self-worth soar.",
  },
];
