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
import Food1 from "@/assets/Afogato.jpg";
import Food2 from "@/assets/BeefSpaghetti.jpg";
import Food3 from "@/assets/Carbonara.jpg";
import Food4 from "@/assets/Pesto.jpeg";
import Food5 from "@/assets/Margherita.jpg";
import Food6 from "@/assets/pepperoni.jpg";
import Food7 from "@/assets/Spinach.jpg";
import Food8 from "@/assets/burger.jpg";
import Food9 from "@/assets/BeefBurger.jpg";
import Food10 from "@/assets/grilledcheese.jpg";
import Food11 from "@/assets/nachos.jpg";
import Food12 from "@/assets/chipsnchicken.jpg";
import Food13 from "@/assets/Fish n fries.jpeg";
import Food14 from "@/assets/WedgedFries.jpg";
import Food15 from "@/assets/BeefTapa.jpg";
import Food16 from "@/assets/hungarian.jpg";
import Food17 from "@/assets/Sisig.jpg";
import Food18 from "@/assets/bagnet.jpg";
import Food19 from "@/assets/bangus.jpg";
import Food20 from "@/assets/burgersteak.jpg";
import Food21 from "@/assets/sisig2.jpg";
import Food22 from "@/assets/classicWaffle.jpg";
import Food23 from "@/assets/chickenwings.jpg";
import Food24 from "@/assets/bananabread.jpg";
import Food25 from "@/assets/chocoCake.jpg";
import Food26 from "@/assets/Blueberry.jpg";
import Food27 from "@/assets/cheesecake.jpg";
import Food28 from "@/assets/WaffleIcecream.jpg";
import Food29 from "@/assets/Ham Sandwich.jpg";
import Food30 from "@/assets/chickenrice.jpg";
import Food31 from "@/assets/SisigRiceEgg.jpg";



export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category:
    | "coffee"
    | "non-coffee"
    | "food"
    | "pasta"
    | "pizza"
    | "snacks"
    | "rice-meals"
    | "ala-carte"
    | "dessert"
    | "fruit-coolers"
    | "special"
    | string; // Allow for multiple categories as comma-separated string
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
      price: 180,
      category: "coffee",
      images: [coffee4],
    },
    {
      id: "c12",
      name: "Dirty Matcha",
      description: "Earthy matcha with a cheeky shot of espresso — best of both worlds for the adventurous.",
      price: 180,
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
      price: 150,
      category: "non-coffee",
      images: [noncoffee3],
    },
    {
      id: "n4",
      name: "Honey Ginger Tea",
      description: "Warm, soothing, and gently zippy — a tiny wellness ritual in a cup.",
      price: 110,
      category: "non-coffee",
      images: [noncoffee4],
    },
    {
      id: "n5",
      name: "Ube Matcha",
      description: "A playful mash-up: purple yam sweetness meets matcha's green backbone. Surprisingly balanced.",
      price: 160,
      category: "non-coffee",
      images: [noncoffee5],
    },
    {
      id: "n6",
      name: "Ube Milk",
      description: "Velvety milk with the gentle sweetness of ube — like a Filipino bakery visit in liquid form.",
      price: 120,
      category: "non-coffee",
      images: [noncoffee6],
    },
    {
      id: "n7",
      name: "Matcha Berry",
      description: "Bright berries with earthy matcha — fruity, fresh, and a little bit fancy.",
      price: 160,
      category: "non-coffee",
      images: [noncoffee7],
    },

    // Fruit Coolers (treated as non-coffee)
    {
      id: "f1",
      name: "Green Apple",
      description: "Tart and refreshing — like a crisp orchard breeze in a glass.",
      price: 120,
      category: "non-coffee,fruit-coolers",
      images: [noncoffee8],
    },
    {
      id: "f2",
      name: "Peach Apple Garden",
      description: "Peachy sweetness meets apple brightness — a summer picnic without the ants.",
      price: 120,
      category: "non-coffee,fruit-coolers",
      images: [noncoffee9],
    },

    // Special / Dessert
    {
      id: "s1",
      name: "Affogato",
      description: "A single scoop of vanilla drowned in hot espresso — dessert and caffeine finally agree.",
      price: 160,
      category: "coffee,special",
      images: [Food1],
    },
    {
    id: "p1",
    name: "Beef Spaghetti",
    description: "Savory ground beef in sweet Filipino-style tomato sauce over al dente spaghetti.",
    price: 200,
    category: "food,pasta",
    images: [Food2],
  },
  {
    id: "p2",
    name: "Classic Carbonara",
    description: "Creamy white sauce with bacon bits and parmesan — a timeless comfort dish.",
    price: 220,
    category: "food,pasta",
    images: [Food3],
  },
  {
    id: "p3",
    name: "Chicken Pesto",
    description: "Grilled chicken tossed in fragrant basil pesto over pasta, light and flavorful.",
    price: 200,
    category: "food,pasta",
    images: [Food4],
  },
  {
    id: "pi1",
    name: "Margherita",
    description: "Simple and fresh — tomato, mozzarella, and basil on a crisp thin crust.",
    price: 380,
    category: "food,pizza",
    images: [Food5],
  },
  {
    id: "pi2",
    name: "Pepperoni Whole",
    description: "Classic pepperoni slices over gooey cheese and tangy tomato sauce.",
    price: 450 ,
    category: "food,pizza",
    images: [Food6],
  },
  {
    id: "pi3",
    name: "3 Cheese Spinach",
    description: "A rich blend of cheeses with sautéed spinach — indulgent and earthy.",
    price: 480,
    category: "food,pizza",
    images: [Food7],
  },
  {
    id: "sn1",
    name: "Burger Beef Load",
    description: "Juicy beef patty stacked with fresh veggies and signature sauce.",
    price: 180,
    category: "food,snacks",
    images: [Food8],
  },
  {
    id: "sn2",
    name: "Burger and Fries",
    description: "Delicious beef burger served with a side of crispy fries.",
    price: 190,
    category: "food,snacks",
    images: [Food9],
  },
  {
    id: "sn8",
    name: "Ham Sandwich",
    description: "Creamy ham sandwich with fresh veggies and mayo.",
    price: 130,
    category: "food,snacks",
    images: [Food29],
  },
  {
    id: "sn3",
    name: "Grilled Cheese Sandwich",
    description: "Golden grilled bread with melted cheese — simple and satisfying.",
    price: 120,
    category: "food,snacks",
    images: [Food10],
  },
  {
    id: "sn4",
    name: "Beef Nachos",
    description: "Loaded nachos with seasoned beef, cheese, and salsa.",
    price: 160,
    category: "food,snacks",
    images: [Food11],
  },
  {
    id: "sn5",
    name: "Chips N’ Chicken",
    description: "Crispy chips served Chicken Wings.",
    price: 280,
    category: "food,snacks",
    images: [Food12],
  },
  {
    id: "sn6",
    name: "Fish N’ Fries",
    description: "Crispy fish fillet paired with golden fries and tartar sauce.",
    price: 200,
    category: "food,snacks",
    images: [Food13],
  },
  {
    id: "sn7",
    name: "Wedged Fries",
    description: "Seasoned potato wedges, crispy outside and fluffy inside.",
    price: 170,
    category: "food,snacks",
    images: [Food14],
  },
  {
    id: "rm1",
    name: "Beef Tapa w/ Egg",
    description: "Tender beef tapa served with garlic rice and sunny-side egg.",
    price: 185,
    category: "food,rice-meals",
    images: [Food15],
  },
  {
    id: "rm2",
    name: "Hungarian Sausage",
    description: "Smoky Hungarian sausage with rice and egg — bold and hearty.",
    price: 175,
    category: "food,rice-meals",
    images: [Food16],
  },
  {
    id: "rm3",
    name: "Pork Sisig (200g w/ egg)",
    description: "Sizzling pork sisig with egg — crunchy, savory, and satisfying.",
    price: 170,
    category: "food,rice-meals",
    images: [Food31],
  },
  {
    id: "rm4",
    name: "Bagnet",
    description: "Crispy Ilocano-style pork belly served with rice and dipping sauce.",
    price: 200,
    category: "food,rice-meals",
    images: [Food18],
  },
  {
    id: "rm5",
    name: "Bangus",
    description: "Fried milkfish fillet with rice and egg — a Filipino classic.",
    price: 180,
    category: "food,rice-meals",
    images: [Food19],
  },
  {
    id: "rm7",
    name: "Burger Steak Delight",
    description: "Savory burger patties in your choice of Classic, Garlic Parmesan, or Buffalo sauce.",
    price: 180,
    category: "food,rice-meals",
    images: [Food20],
  },
  {
    id: "rm6",
    name: "Chicken Wings",
    description: "Chicken Wings with rice in your choice of Classic, Garlic Parmesan, or Buffalo sauce.",
    price: 170,
    category: "food,rice-meals",
    images: [Food30],
  },
  {
    id: "ac1",
    name: "Pork Sisig (w/o egg)",
    description: "Crunchy pork sisig served solo — bold flavor, no frills.",
    price: 270,
    category: "food,ala-carte",
    images: [Food21],
  },
  {
    id: "ac2",
    name: "Pork Sisig (w/ egg)",
    description: "Crunchy pork sisig served solo — bold flavor, no frills.",
    price: 290,
    category: "food,ala-carte",
    images: [Food17],
  },
  {
    id: "ac3",
    name: "Chicken Wings Platter (2 flavors only)",
    description: "Crispy chicken wings served with your choice of two flavors.",
    price: 300,
    category: "food,ala-carte",
    images: [Food23],
  },
  {
    id: "d1",
    name: "Banana Bread",
    description: "Moist and comforting banana loaf with a hint of cinnamon.",
    price: 90,
    category: "food,dessert",
    images: [Food24],
  },
  {
    id: "d2",
    name: "Chocolate Cake",
    description: "Rich, fudgy chocolate cake — a sweet indulgence.",
    price: 190,
    category: "food,dessert",
    images: [Food25],
  },
  {
    id: "d3",
    name: "Blueberry Cheesecake",
    description: "Creamy cheesecake topped with sweet blueberry compote.",
    price: 210,
    category: "food,dessert",
    images: [Food26],
  },
  {
    id: "d4",
    name: "Plain Cheesecake",
    description: "Classic New York-style cheesecake — smooth and tangy.",
    price: 200,
    category: "food,dessert",
    images: [Food27],
  },
  {
    id: "d5",
    name: "Classic Waffle",
    description: "Crispy on the outside, fluffy on the inside — a timeless treat.",
    price: 130,
    category: "food,dessert",
    images: [Food22],
  },
  {
    id: "d6",
    name: "Waffle Ice Cream",
    description: "Warm waffle topped with a scoop of ice cream — hot meets cold.",
    price: 150,
    category: "food,dessert",
    images: [Food28],
  },

];
