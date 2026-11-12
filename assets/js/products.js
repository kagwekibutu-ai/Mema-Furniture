const MEMA = {
  name: "Mema Furniture",
  tagline: "Creating Comfort. Defining Spaces.",
  location: "Murang'a, Kenya",
  phoneDisplay: "+254 733 979 515",
  phoneTel: "+254733979515",
  whatsapp: "254733979515"
};

const CATEGORIES = [
  { id: "living", name: "Living Room", blurb: "Comfortable, welcoming pieces for everyday living.", tile: "assets/img/living-room.jpg" },
  { id: "bedroom", name: "Bedroom", blurb: "Solid beds and storage crafted for restful nights.", tile: "assets/img/bed-cream.jpg" },
  { id: "dining", name: "Dining Room", blurb: "Tables and sets for family meals and hosting.", tile: "assets/img/dining-set.jpg" },
  { id: "kids", name: "Children's Furniture", blurb: "Safe, sturdy pieces for growing families.", tile: "assets/img/baby-cot.jpg" },
  { id: "storage", name: "Storage & Shelving", blurb: "Smart organisation for every room.", tile: "assets/img/bookshelf-white.jpg" }
];

const PRODUCTS = [
  {
    id: "two-seater-sofa", name: "Two-Seater Sofa", category: "living", tier: "Essential",
    priceFrom: 25000, priceTo: 32000, availability: "Made to Order", popular: false,
    image: "assets/img/sofa-2seat.jpg",
    dimensions: "120 × 85 × 80 cm",
    materials: "Hardwood frame, high-density foam, premium fabric or leatherette",
    colours: ["Charcoal", "Warm Grey", "Cream", "Rust Orange"],
    description: "A compact sofa with a solid hardwood frame and supportive high-density foam seating. Perfect for apartments, starter homes and cosy living rooms."
  },
  {
    id: "three-seater-sofa", name: "Three-Seater Sofa", category: "living", tier: "Classic",
    priceFrom: 30000, priceTo: 45000, availability: "Made to Order", popular: false,
    image: "assets/img/sofa-3seat.jpg",
    dimensions: "180 × 85 × 80 cm",
    materials: "Hardwood frame, high-density foam, stain-resistant fabric",
    colours: ["Charcoal", "Warm Grey", "Cream", "Olive"],
    description: "Our best-value family sofa, with deep cushioning and a durable hardwood frame built to handle everyday use for years."
  },
  {
    id: "five-seater-sofa-set", name: "Five-Seater Sofa Set (3+2)", category: "living", tier: "Classic",
    priceFrom: 50000, priceTo: 75000, availability: "In Stock", popular: true,
    image: "assets/img/sofa-lshaped.jpg",
    dimensions: "Three-seater + two-seater, 300 × 85 × 80 cm overall",
    materials: "Hardwood frames, high-density foam, premium upholstery",
    colours: ["Charcoal", "Beige", "Coffee Brown", "Rust Orange"],
    description: "A coordinated 3+2 set that seats the whole family comfortably, finished in matching fabric of your choice."
  },
  {
    id: "seven-seater-sofa-set", name: "Seven-Seater Sofa Set (3+2+1)", category: "living", tier: "Premium",
    priceFrom: 75000, priceTo: 110000, availability: "Made to Order", popular: false,
    image: "assets/img/sofa-ushaped.jpg",
    dimensions: "3+2+1 arrangement, 350 × 85 × 80 cm overall",
    materials: "Hardwood frames, deep foam seating, premium upholstery",
    colours: ["Charcoal", "Beige", "Coffee Brown", "Forest Green"],
    description: "A generous 3+2+1 lounge set with deeper seats and premium upholstery, made for larger living spaces and busy family rooms."
  },
  {
    id: "l-shaped-sofa", name: "L-Shaped Sofa", category: "living", tier: "Classic",
    priceFrom: 45000, priceTo: 85000, availability: "Made to Order", popular: false,
    image: "assets/img/sofa-lshaped.jpg",
    dimensions: "220 × 160 × 80 cm (customisable)",
    materials: "Hardwood frame, high-density foam, premium fabric",
    colours: ["Charcoal", "Beige", "Coffee Brown", "Rust Orange"],
    description: "A sectional sofa that maximises corner seating, with a reversible chaise to suit your room layout."
  },
  {
    id: "u-shaped-sofa", name: "U-Shaped Sofa", category: "living", tier: "Premium",
    priceFrom: 75000, priceTo: 120000, availability: "Made to Order", popular: false,
    image: "assets/img/sofa-ushaped.jpg",
    dimensions: "280 × 200 × 80 cm (customisable)",
    materials: "Hardwood frame, deep foam seating, premium fabric",
    colours: ["Charcoal", "Beige", "Coffee Brown", "Olive"],
    description: "A statement U-shaped sectional with room for the whole family, ideal for larger lounges and entertainment spaces."
  },
  {
    id: "coffee-table", name: "Coffee Table", category: "living", tier: "Essential",
    priceFrom: 8000, priceTo: 25000, availability: "In Stock", popular: false,
    image: "assets/img/coffee-table.svg",
    dimensions: "110 × 60 × 45 cm",
    materials: "Solid hardwood top, tapered legs, smooth satin finish",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A sturdy centrepiece table with a smooth finish and optional lower storage shelf."
  },
  {
    id: "tv-stand", name: "TV Stand", category: "living", tier: "Essential",
    priceFrom: 12000, priceTo: 30000, availability: "Made to Order", popular: false,
    image: "assets/img/tv-stand.jpg",
    dimensions: "140 × 40 × 50 cm",
    materials: "Engineered wood with hardwood trim, cable management",
    colours: ["Walnut", "Espresso", "White Oak"],
    description: "A media cabinet with closed storage and cable management, finished to match your décor."
  },
  {
    id: "accent-chair", name: "Accent Chair", category: "living", tier: "Classic",
    priceFrom: 12000, priceTo: 25000, availability: "Made to Order", popular: false,
    image: "assets/img/accent-chair.jpg",
    dimensions: "75 × 75 × 85 cm",
    materials: "Hardwood frame, moulded foam, fabric or leatherette",
    colours: ["Rust Orange", "Mustard", "Cream", "Charcoal"],
    description: "A sculpted occasional chair that adds character to any corner, upholstered in the fabric of your choice."
  },
  {
    id: "single-bed", name: "Single Bed", category: "bedroom", tier: "Essential",
    priceFrom: 15000, priceTo: 25000, availability: "Made to Order", popular: false,
    image: "assets/img/bed-single.jpg",
    dimensions: "90 × 190 cm mattress size",
    materials: "Hardwood frame, reinforced slat base, integrated headboard",
    colours: ["Natural Wood", "Walnut", "Upholstered Cream"],
    description: "A space-saving single bed with a solid frame and integrated headboard, built for kids' rooms and guest rooms."
  },
  {
    id: "double-bed", name: "Double Bed", category: "bedroom", tier: "Essential",
    priceFrom: 22000, priceTo: 35000, availability: "Made to Order", popular: false,
    image: "assets/img/bed-storage.jpg",
    dimensions: "135 × 190 cm mattress size",
    materials: "Hardwood frame, reinforced slat base, upholstered or wooden headboard",
    colours: ["Natural Wood", "Walnut", "Grey Upholstery"],
    description: "A dependable double bed with a reinforced slat base and a choice of wooden or upholstered headboard."
  },
  {
    id: "queen-size-bed", name: "Queen-Size Bed", category: "bedroom", tier: "Classic",
    priceFrom: 30000, priceTo: 50000, availability: "In Stock", popular: true,
    image: "assets/img/bed-wood.jpg",
    dimensions: "150 × 200 cm mattress size",
    materials: "Hardwood frame, slat base, tall padded headboard",
    colours: ["Walnut", "Espresso", "Beige Upholstery"],
    description: "Our most popular bed size, with a tall headboard and a sturdy hardwood frame that stays silent and stable."
  },
  {
    id: "king-size-bed", name: "King-Size Bed", category: "bedroom", tier: "Premium",
    priceFrom: 40000, priceTo: 70000, availability: "Made to Order", popular: false,
    image: "assets/img/bed-wood.jpg",
    dimensions: "180 × 200 cm mattress size",
    materials: "Solid hardwood frame, slat base, wide headboard",
    colours: ["Walnut", "Espresso", "Charcoal Upholstery"],
    description: "A spacious king bed with a wide headboard and premium finishing throughout."
  },
  {
    id: "chesterfield-bed", name: "Chesterfield Bed", category: "bedroom", tier: "Premium",
    priceFrom: 30000, priceTo: 50000, availability: "Made to Order", popular: false,
    image: "assets/img/bed-tufted.jpg",
    dimensions: "150 × 200 cm mattress size",
    materials: "Hardwood frame, button-tufted padded headboard",
    colours: ["Coffee Brown", "Charcoal", "Cream", "Olive"],
    description: "A tufted chesterfield headboard that brings a classic, stately look to the bedroom."
  },
  {
    id: "upholstered-bed", name: "Upholstered Bed", category: "bedroom", tier: "Premium",
    priceFrom: 35000, priceTo: 65000, availability: "Made to Order", popular: false,
    image: "assets/img/bed-cream.jpg",
    dimensions: "150 × 200 cm mattress size",
    materials: "Hardwood frame, fully upholstered frame and headboard",
    colours: ["Beige", "Charcoal", "Blush", "Navy"],
    description: "A fully upholstered bed in the fabric of your choice, with a padded headboard made for comfortable lounging."
  },
  {
    id: "bedside-cabinet", name: "Bedside Cabinet", category: "bedroom", tier: "Essential",
    priceFrom: 6000, priceTo: 12000, availability: "In Stock", popular: false,
    image: "assets/img/bedside.jpg",
    dimensions: "45 × 40 × 55 cm",
    materials: "Hardwood, smooth-glide drawer runners",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A compact nightstand with a smooth-glide drawer and open shelf for your evening essentials."
  },
  {
    id: "dressing-table", name: "Dressing Table", category: "bedroom", tier: "Classic",
    priceFrom: 12000, priceTo: 25000, availability: "Made to Order", popular: false,
    image: "assets/img/dressing-table.jpg",
    dimensions: "100 × 45 × 150 cm with mirror",
    materials: "Hardwood, framed mirror, soft-close drawers",
    colours: ["Natural Wood", "Walnut", "White"],
    description: "A dressing table with a framed mirror, roomy drawers and a matching stool."
  },
  {
    id: "wardrobe", name: "Wardrobe", category: "bedroom", tier: "Classic",
    priceFrom: 25000, priceTo: 65000, availability: "Made to Order", popular: false,
    image: "assets/img/wardrobe.jpg",
    dimensions: "180 × 60 × 200 cm (customisable)",
    materials: "Engineered wood with hardwood trim, hanging rail, shelving",
    colours: ["Walnut", "White", "Espresso"],
    description: "A roomy wardrobe with hanging space, shelving and soft-close doors, sized to your room."
  },
  {
    id: "four-seater-dining-set", name: "Four-Seater Dining Set", category: "dining", tier: "Classic",
    priceFrom: 35000, priceTo: 50000, availability: "Made to Order", popular: false,
    image: "assets/img/dining-4seater.jpg",
    dimensions: "Table 110 × 70 × 75 cm, four chairs",
    materials: "Hardwood table, cushioned dining chairs",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A complete four-seater set with a solid table and matching cushioned chairs."
  },
  {
    id: "six-seater-dining-set", name: "Six-Seater Dining Set", category: "dining", tier: "Classic",
    priceFrom: 45000, priceTo: 65000, availability: "In Stock", popular: true,
    image: "assets/img/dining-6seater.jpg",
    dimensions: "Table 150 × 90 × 75 cm, six chairs",
    materials: "Solid hardwood table, upholstered dining chairs",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "The family favourite: a six-seater set with a sturdy table and comfortable upholstered chairs."
  },
  {
    id: "eight-seater-dining-set", name: "Eight-Seater Dining Set", category: "dining", tier: "Premium",
    priceFrom: 60000, priceTo: 90000, availability: "Made to Order", popular: false,
    image: "assets/img/dining-8seater.jpg",
    dimensions: "Table 200 × 100 × 75 cm, eight chairs",
    materials: "Solid hardwood, upholstered chairs",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A large eight-seater set for big families and hosting, built from solid hardwood."
  },
  {
    id: "dining-table", name: "Dining Table Only", category: "dining", tier: "Essential",
    priceFrom: 20000, priceTo: 40000, availability: "Made to Order", popular: false,
    image: "assets/img/dining-set.jpg",
    dimensions: "150 × 90 × 75 cm",
    materials: "Solid hardwood top, sturdy legs, satin finish",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A well-proportioned dining table crafted from hardwood. Chairs priced separately."
  },
  {
    id: "dining-chair", name: "Dining Chair", category: "dining", tier: "Essential",
    priceFrom: 5000, priceTo: 12000, availability: "In Stock", popular: false,
    image: "assets/img/dining-chair.svg",
    dimensions: "45 × 50 × 95 cm",
    materials: "Hardwood frame, shaped seat, fabric or wood finish",
    colours: ["Natural Wood", "Walnut", "Cream Fabric"],
    description: "A strong, comfortably shaped dining chair in fabric or wooden finish."
  },
  {
    id: "standard-baby-cot", name: "Standard Baby Cot", category: "kids", tier: "Essential",
    priceFrom: 15000, priceTo: 25000, availability: "In Stock", popular: true,
    image: "assets/img/baby-cot.jpg",
    dimensions: "120 × 60 × 90 cm",
    materials: "Hardwood, non-toxic child-safe finishes, adjustable base",
    colours: ["Natural Wood", "White", "Grey"],
    description: "A safe, sturdy cot with adjustable base heights and smooth, child-safe finishes."
  },
  {
    id: "premium-baby-cot", name: "Premium Baby Cot", category: "kids", tier: "Premium",
    priceFrom: 25000, priceTo: 40000, availability: "Made to Order", popular: false,
    image: "assets/img/baby-cot.jpg",
    dimensions: "130 × 70 × 100 cm",
    materials: "Hardwood, teething rails, drop-side access, toddler conversion",
    colours: ["Natural Wood", "White", "Espresso"],
    description: "A premium cot with teething rails, drop-side access and a convertible toddler mode."
  },
  {
    id: "childrens-bed", name: "Children's Bed", category: "kids", tier: "Classic",
    priceFrom: 15000, priceTo: 30000, availability: "Made to Order", popular: false,
    image: "assets/img/kids-bunk-bed.jpg",
    dimensions: "90 × 190 cm mattress size",
    materials: "Hardwood frame, low side rails, child-safe finish",
    colours: ["Natural Wood", "White", "Soft Orange"],
    description: "A fun, sturdy first bed with low side rails for safety and a child-friendly finish."
  },
  {
    id: "childrens-study-table", name: "Children's Study Table", category: "kids", tier: "Essential",
    priceFrom: 8000, priceTo: 18000, availability: "Made to Order", popular: false,
    image: "assets/img/kids-study-set.jpg",
    dimensions: "80 × 50 × 75 cm",
    materials: "Hardwood, rounded edges, easy-clean surface",
    colours: ["Natural Wood", "White", "Soft Orange"],
    description: "A perfectly sized study table that grows with your child, with a wide work surface."
  },
  {
    id: "childrens-chair", name: "Children's Chair", category: "kids", tier: "Essential",
    priceFrom: 3000, priceTo: 7000, availability: "In Stock", popular: false,
    image: "assets/img/kids-study-set.jpg",
    dimensions: "35 × 35 × 70 cm",
    materials: "Hardwood, rounded safety edges, stable base",
    colours: ["Natural Wood", "White", "Soft Orange"],
    description: "A lightweight, stable chair sized for young learners."
  },
  {
    id: "toy-storage-unit", name: "Toy Storage Unit", category: "kids", tier: "Essential",
    priceFrom: 6000, priceTo: 15000, availability: "Made to Order", popular: false,
    image: "assets/img/toy-storage.jpg",
    dimensions: "90 × 35 × 80 cm",
    materials: "Engineered wood with hardwood trim, rounded safety edges",
    colours: ["Natural Wood", "White", "Two-Tone"],
    description: "Open cubbies that make tidy-up time easy, with rounded safety edges throughout."
  },
  {
    id: "small-bookshelf", name: "Small Bookshelf", category: "storage", tier: "Essential",
    priceFrom: 6000, priceTo: 12000, availability: "In Stock", popular: false,
    image: "assets/img/bookshelf-oak.jpg",
    dimensions: "60 × 30 × 120 cm",
    materials: "Engineered wood with hardwood trim, three shelves",
    colours: ["Natural Wood", "Walnut", "White"],
    description: "A compact bookshelf for smaller rooms, with three generous shelves."
  },
  {
    id: "medium-bookshelf", name: "Medium Bookshelf", category: "storage", tier: "Essential",
    priceFrom: 12000, priceTo: 20000, availability: "Made to Order", popular: false,
    image: "assets/img/bookshelf-white.jpg",
    dimensions: "90 × 30 × 180 cm",
    materials: "Engineered wood with hardwood trim, six shelves",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A six-shelf bookshelf that keeps a growing collection organised."
  },
  {
    id: "large-bookshelf", name: "Large Bookshelf", category: "storage", tier: "Premium",
    priceFrom: 20000, priceTo: 35000, availability: "Made to Order", popular: false,
    image: "assets/img/bookshelf-curve.jpg",
    dimensions: "120 × 35 × 210 cm",
    materials: "Solid hardwood frame, adjustable shelving",
    colours: ["Walnut", "Espresso", "Natural Wood"],
    description: "A tall, wide bookcase with adjustable shelving for serious collectors."
  },
  {
    id: "wall-shelf", name: "Wall Shelf", category: "storage", tier: "Essential",
    priceFrom: 2500, priceTo: 8000, availability: "In Stock", popular: false,
    image: "assets/img/wall-shelf.jpg",
    dimensions: "60–120 × 20 × 20 cm",
    materials: "Solid hardwood, hidden mounting brackets",
    colours: ["Natural Wood", "Walnut", "White"],
    description: "Floating shelves that add storage and display space without floor clutter."
  },
  {
    id: "shoe-rack", name: "Shoe Rack", category: "storage", tier: "Essential",
    priceFrom: 6000, priceTo: 15000, availability: "In Stock", popular: false,
    image: "assets/img/shoe-rack.jpg",
    dimensions: "80 × 30 × 90 cm",
    materials: "Hardwood frame, slatted tiers",
    colours: ["Natural Wood", "Walnut", "Espresso"],
    description: "A multi-tier rack that keeps pairs together and entrances tidy."
  },
  {
    id: "storage-cabinet", name: "Storage Cabinet", category: "storage", tier: "Classic",
    priceFrom: 12000, priceTo: 30000, availability: "Made to Order", popular: false,
    image: "assets/img/storage-cabinet.jpg",
    dimensions: "90 × 45 × 120 cm",
    materials: "Engineered wood with hardwood trim, drawers and doors",
    colours: ["Walnut", "White", "Espresso"],
    description: "A versatile cabinet with drawers and doors for hallway, kitchen or bedroom storage."
  },
  {
    id: "display-shelf", name: "Display Shelf", category: "storage", tier: "Classic",
    priceFrom: 12000, priceTo: 35000, availability: "Made to Order", popular: false,
    image: "assets/img/bookshelf-wave.jpg",
    dimensions: "80 × 30 × 180 cm",
    materials: "Solid hardwood frame, open display cubes",
    colours: ["Walnut", "Natural Wood", "Espresso"],
    description: "An open display unit for décor, books and keepsakes, finished to match your space."
  }
];

function formatKES(n) {
  return "KES " + n.toLocaleString("en-KE");
}

function waLink(text) {
  return "https://wa.me/" + MEMA.whatsapp + "?text=" + encodeURIComponent(text);
}

function productEnquiry(p) {
  return "Hi Mema Furniture! I'm interested in the " + p.name + " (" + formatKES(p.priceFrom) +
    " – " + formatKES(p.priceTo) + "). Could you confirm availability and share the final quotation?";
}

function customEnquiry() {
  return "Hi Mema Furniture! I'd like to order custom furniture. Here are my requirements: ";
}

function getCategory(id) {
  return CATEGORIES.find(function (c) { return c.id === id; });
}

function getProduct(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}
