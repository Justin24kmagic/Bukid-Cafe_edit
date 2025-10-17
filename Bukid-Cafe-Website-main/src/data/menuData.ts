export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "non-coffee" | "food";
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "1",
    name: "Bukid Signature Blend",
    description: "Our house specialty - smooth, rich, with hints of chocolate and caramel",
    price: 120,
    category: "coffee",
  },
  {
    id: "2",
    name: "Barako Espresso",
    description: "Bold Filipino coffee with a strong, distinctive flavor",
    price: 100,
    category: "coffee",
  },
  {
    id: "3",
    name: "Café Latte",
    description: "Creamy espresso with steamed milk and beautiful latte art",
    price: 130,
    category: "coffee",
  },
  {
    id: "4",
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    price: 130,
    category: "coffee",
  },
  {
    id: "5",
    name: "Iced Americano",
    description: "Refreshing cold coffee with bold espresso flavor",
    price: 110,
    category: "coffee",
  },
  {
    id: "6",
    name: "Caramel Macchiato",
    description: "Sweet and smooth with caramel drizzle",
    price: 145,
    category: "coffee",
  },

  // Non-Coffee
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium Japanese green tea with creamy milk",
    price: 140,
    category: "non-coffee",
  },
  {
    id: "8",
    name: "Tsokolate de Batirol",
    description: "Traditional Filipino hot chocolate, thick and rich",
    price: 135,
    category: "non-coffee",
  },
  {
    id: "9",
    name: "Honey Lemon Tea",
    description: "Soothing and refreshing, perfect for any time",
    price: 95,
    category: "non-coffee",
  },
  {
    id: "10",
    name: "Mango Smoothie",
    description: "Fresh Philippine mangoes blended to perfection",
    price: 125,
    category: "non-coffee",
  },
  {
    id: "11",
    name: "Fresh Buko Juice",
    description: "Straight from young coconuts, naturally sweet and refreshing",
    price: 85,
    category: "non-coffee",
  },

  // Food
  {
    id: "12",
    name: "Ensaymada",
    description: "Soft, buttery Filipino pastry topped with cheese and sugar",
    price: 65,
    category: "food",
  },
  {
    id: "13",
    name: "Pan de Sal Sandwich",
    description: "Classic Filipino bread roll with cheese, egg, or ham",
    price: 80,
    category: "food",
  },
  {
    id: "14",
    name: "Banana Bread",
    description: "Moist, homemade with local Saba bananas",
    price: 75,
    category: "food",
  },
  {
    id: "15",
    name: "Bibingka",
    description: "Traditional rice cake with salted egg and cheese",
    price: 90,
    category: "food",
  },
  {
    id: "16",
    name: "Chicken Pesto Pasta",
    description: "Creamy basil pesto with grilled chicken",
    price: 180,
    category: "food",
  },
  {
    id: "17",
    name: "Club Sandwich",
    description: "Triple-decker with chicken, bacon, lettuce, and tomatoes",
    price: 165,
    category: "food",
  },
  {
    id: "18",
    name: "Ube Cheesecake",
    description: "Filipino purple yam meets creamy cheesecake",
    price: 120,
    category: "food",
  },
];
