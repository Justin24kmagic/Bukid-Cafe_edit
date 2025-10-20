import coffee1 from "@/assets/Latte1.png";
import coffee2 from "@/assets/Americano.png";
import coffee3 from "@/assets/UbeLattee.png";
import coffee4 from "@/assets/Biscoff.png";
import coffee5 from "@/assets/Dirtymatcha.png";
import noncoffee1 from "@/assets/Choco.png";
import noncoffee2 from "@/assets/WhiteChoco.png";
import noncoffee3 from "@/assets/Matcha.png";
import noncoffee4 from "@/assets/Honey.png";
import noncoffee5 from "@/assets/UbeMatcha.png";
import noncoffee6 from "@/assets/UbeMilk.png";
import noncoffee7 from "@/assets/MatchaBerry.png";
import noncoffee8 from "@/assets/GreenApple.png";
import noncoffee9 from "@/assets/Peach.png";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "non-coffee" | "food";
  images?: string[];
}

export const menuItems: MenuItem[] = [
  // Coffee (Hot or Iced)
  {
    id: "c1",
    name: "Americano",
    description: "Straightforward and bold — espresso tamed with hot water. Serious caffeine, zero attitude.",
    price: 100,
    category: "coffee",
    images: [coffee2],
  },
  {
    id: "c2",
    name: "Cafe Latte",
    description: "Velvety steamed milk wrapped around a friendly shot of espresso. Comfort in a cup.",
    price: 120,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c3",
    name: "Spanish Latte",
    description: "Sweet, creamy, and just a little cheeky — condensed milk gives this one its sunny personality.",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c4",
    name: "Ube Latte",
    description: "Filipino purple yam meets espresso — subtly sweet, delightfully nostalgic, and photo-ready.",
    price: 140,
    category: "coffee",
    images: [coffee3],
  },
  {
    id: "c5",
    name: "White Mocha",
    description: "Silky white chocolate folded into espresso — dessert disguised as a daytime drink.",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c6",
    name: "Caramel",
    description: "Warm caramel notes and espresso — sticky-sweet without the sugar hangover.",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c7",
    name: "Mocha",
    description: "Chocolate and coffee in a harmonious argument — one always wins (your taste buds).",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c8",
    name: "Hazelnut",
    description: "Nutty, toasty, and smooth — like a little campfire chat in your cup.",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c9",
    name: "French Vanilla",
    description: "Classic vanilla with a touch of elegance — mellow, fragrant, and utterly dependable.",
    price: 140,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c10",
    name: "Sea Salt",
    description: "Sweet meets savory — a salted finish that makes every sip linger longer.",
    price: 150,
    category: "coffee",
    images: [coffee1],
  },
  {
    id: "c11",
    name: "Biscoff",
    description: "Spiced cookie vibes blended into coffee — dangerously cozy and surprisingly grown-up.",
    price: 150,
    category: "coffee",
    images: [coffee4],
  },
  {
    id: "c12",
    name: "Dirty Matcha",
    description: "Earthy matcha with a cheeky shot of espresso — best of both worlds for the adventurous.",
    price: 150,
    category: "coffee",
    images: [coffee5],
  },

  // Non-Coffee
  {
    id: "n1",
    name: "Chocolate Milk",
    description: "Creamy, chocolatey, and very easy to love — childhood nostalgia in a grown-up glass.",
    price: 125,
    category: "non-coffee",
    images: [noncoffee1],
  },
  {
    id: "n2",
    name: "White Chocolate Milk",
    description: "Bright, sweet white chocolate folded into milk — a soft and indulgent hug.",
    price: 125,
    category: "non-coffee",
    images: [noncoffee2],
  },
  {
    id: "n3",
    name: "Matcha Green Tea",
    description: "Ceremony-ready matcha energy — grassy, vibrant, and surprisingly zen.",
    price: 140,
    category: "non-coffee",
    images: [noncoffee3],
  },
  {
    id: "n4",
    name: "Honey Ginger Tea",
    description: "Warm, soothing, and gently zippy — a tiny wellness ritual in a cup.",
    price: 120,
    category: "non-coffee",
    images: [noncoffee4],
  },
  {
    id: "n5",
    name: "Ube Matcha",
    description: "A playful mash-up: purple yam sweetness meets matcha's green backbone. Surprisingly balanced.",
    price: 150,
    category: "non-coffee",
    images: [noncoffee5],
  },
  {
    id: "n6",
    name: "Ube Milk",
    description: "Velvety milk with the gentle sweetness of ube — like a Filipino bakery visit in liquid form.",
    price: 140,
    category: "non-coffee",
    images: [noncoffee6],
  },
  {
    id: "n7",
    name: "Matcha Berry",
    description: "Bright berries with earthy matcha — fruity, fresh, and a little bit fancy.",
    price: 150,
    category: "non-coffee",
    images: [noncoffee7],
  },

  // Fruit Coolers (treated as non-coffee)
  {
    id: "f1",
    name: "Green Apple",
    description: "Tart and refreshing — like a crisp orchard breeze in a glass.",
    price: 120,
    category: "non-coffee",
    images: [noncoffee8],
  },
  {
    id: "f2",
    name: "Peach Apple Garden",
    description: "Peachy sweetness meets apple brightness — a summer picnic without the ants.",
    price: 120,
    category: "non-coffee",
    images: [noncoffee9],
  },

  // Special / Dessert
  {
    id: "s1",
    name: "Affogato",
    description: "A single scoop of vanilla drowned in hot espresso — dessert and caffeine finally agree.",
    price: 160,
    category: "food",
    images: [coffee2],
  },
];
