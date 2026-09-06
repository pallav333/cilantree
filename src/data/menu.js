export const menuCategories = [
  { id: 'ALL', label: 'ALL DISHES' },
  { id: 'APPETIZERS', label: 'APPETIZERS' },
  { id: 'TANDOOR', label: 'TANDOOR & GRILL' },
  { id: 'CURRIES', label: 'ROYAL CURRIES' },
  { id: 'BIRYANI', label: 'BIRYANI' },
  { id: 'VEGETARIAN', label: 'VEGETARIAN' },
  { id: 'BREADS', label: 'ARTISANAL BREADS' },
  { id: 'DESSERTS', label: 'DESSERTS' },
  { id: 'DRINKS', label: 'BEVERAGES & COCKTAILS' }
];

export const menuItems = [
  // APPETIZERS
  {
    id: 'app-1',
    name: 'Truffle Mushroom Galouti Kebab',
    category: 'APPETIZERS',
    description: 'Melt-in-your-mouth minced wild mushrooms infused with Royal Awadhi spices, served over mini saffron parathas.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: true,
    badge: 'Chef Signature'
  },
  {
    id: 'app-2',
    name: 'Crispy Saffron Amritsari Fish',
    category: 'APPETIZERS',
    description: 'Wild sea bass marinated in carom seeds, Kashmiri chili, and gram flour batter, flash fried to crisp perfection.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: false
  },
  {
    id: 'app-3',
    name: 'Artisanal Avocado & Beet Crisp Chaat',
    category: 'APPETIZERS',
    description: 'Deconstructed street chaat featuring hass avocado, roasted golden beets, pomegranate pearls, mint, and tamarind reduction.',
    price: 19,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: false
  },
  {
    id: 'app-4',
    name: 'Smoky Gunpowder Scallops',
    category: 'APPETIZERS',
    description: 'Pan-seared Hokkaido scallops tossed in aromatic South Indian spicy lentils, served over coconut curry emulsion.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: false
  },

  // TANDOOR & CURRIES
  {
    id: 'tan-1',
    name: 'Old Delhi Claypot Butter Chicken',
    category: 'CURRIES',
    description: 'Charcoal-grilled free-range chicken simmered in a velvety sun-ripened tomato sauce with fenugreek and cultured butter.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 1,
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'tan-2',
    name: 'Royal Malai Paneer Tikka',
    category: 'TANDOOR',
    description: 'Fresh farm cottage cheese marinated in green cardamom, heavy cream, cashews, and charred in our clay tandoor oven.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: true
  },
  {
    id: 'tan-3',
    name: 'Kashmiri Lamb Seekh Kebabs',
    category: 'TANDOOR',
    description: 'Hand-minced grass-fed lamb spiced with saffron, mace, and nutmeg, roasted over live white oak coals.',
    price: 34,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: false
  },
  {
    id: 'tan-4',
    name: 'Jumbo Tandoori Tiger Prawns',
    category: 'TANDOOR',
    description: 'Wild prawns steeped in mustard oil, yellow chili powder, and crushed coriander seeds, seared with fresh lime butter.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: false
  },

  // CURRIES
  {
    id: 'cur-1',
    name: 'Slow-Braised Kashmiri Lamb Rogan Josh',
    category: 'CURRIES',
    description: 'Tender Colorado lamb shank slow-cooked for 12 hours in Ratanjot infused aromatic reduction with fennel and dried ginger.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: true,
    badge: 'House Specialty'
  },
  {
    id: 'cur-2',
    name: 'Signature Saffron Dal Makhani',
    category: 'CURRIES',
    description: 'Slow-simmered black lentils and kidney beans cooked over wood embers for 24 hours, enriched with organic cream.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: true
  },
  {
    id: 'cur-3',
    name: 'Coastal Kerala Fish Moilee',
    category: 'CURRIES',
    description: 'Chilean sea bass cooked delicately in simmered coconut milk, curry leaves, green chilies, and raw turmeric root.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 1,
    featured: false
  },
  {
    id: 'cur-4',
    name: 'Saag Paneer & Roasted Garlic',
    category: 'VEGETARIAN',
    description: 'Velvety blend of fresh spinach, mustard greens, and baby kale with seared house cottage cheese and crispy garlic chips.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: false
  },

  // BIRYANI
  {
    id: 'bir-1',
    name: 'Dum Pukht Hyderabadi Lamb Biryani',
    category: 'BIRYANI',
    description: 'Fragrant long-grain aged basmati rice layered with marinated tender lamb, saffron milk, caramelised onions, and sealed in dough.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: true,
    badge: 'Royal Feast'
  },
  {
    id: 'bir-2',
    name: 'Awadhi Chicken Dum Biryani',
    category: 'BIRYANI',
    description: 'Juicy bone-in chicken slow-cooked with star anise, rose water, and kewra essence in traditional copper pots.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    vegetarian: false,
    spicy: 2,
    featured: false
  },
  {
    id: 'bir-3',
    name: 'Saffron Wild Mushroom & Jackfruit Biryani',
    category: 'BIRYANI',
    description: 'Raw green jackfruit and wild morel mushrooms layered with aromatic rice, toasted pine nuts, and mint leaf oil.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 1,
    featured: false
  },

  // BREADS
  {
    id: 'brd-1',
    name: 'Black Truffle & Gruyère Naan',
    category: 'BREADS',
    description: 'Fresh tandoor-baked leavened dough brushed with white truffle oil, melted aged Gruyère, and sea salt flakes.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },
  {
    id: 'brd-2',
    name: 'Smoked Roasted Garlic & Cilantro Naan',
    category: 'BREADS',
    description: 'Classic tandoori naan topped with micro roasted garlic, clarified butter, and freshly hand-picked organic cilantro.',
    price: 8,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },
  {
    id: 'brd-3',
    name: 'Layered Laccha Paratha with Carom Seeds',
    category: 'BREADS',
    description: 'Multi-layered crispy whole wheat unleavened bread baked over hot coals and brushed with pure desi ghee.',
    price: 9,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },

  // DESSERTS
  {
    id: 'des-1',
    name: 'Gold-Leaf Pistachio Gulab Jamun',
    category: 'DESSERTS',
    description: 'Warm, soft milk dumplings soaked in cardamom saffron syrup, topped with edible 24k gold leaf and crushed pistachios.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },
  {
    id: 'des-2',
    name: 'Saffron Rasmalai Cheesecake',
    category: 'DESSERTS',
    description: 'Fusion creation featuring creamy chenna discs set inside a baked cardamom almond crust, topped with rose milk reduction.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },

  // DRINKS
  {
    id: 'drk-1',
    name: 'Smoked Cardamom & Saffron Old Fashioned',
    category: 'DRINKS',
    description: 'Bourbon infused with green cardamom, Kashmiri saffron syrup, Angostura bitters, and smoked applewood mist.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  },
  {
    id: 'drk-2',
    name: 'Alphonso Mango & Roasted Cumin Lassi',
    category: 'DRINKS',
    description: 'Ratnagiri Alphonso mango puree whipped with organic Greek yogurt, roasted cumin dust, and silver edible leaves.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    vegetarian: true,
    spicy: 0,
    featured: false
  }
];

export const signatureDishes = menuItems.filter(item => item.featured);
