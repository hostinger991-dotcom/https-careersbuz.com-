import { Article } from '../types';

export const RECIPES_DINNER: Article[] = [
  {
    id: 'rec-11',
    slug: '20-minute-thai-basil-chicken',
    keyword: 'thai basil chicken pad krapow',
    category: 'dinner',
    categoryLabel: 'Lunch & Weeknight Dinners',
    title: 'Authentic 20-Minute Thai Basil Chicken (Pad Krapow Gai) with Crispy Fried Egg',
    deck: 'Minced chicken wok-fried over scorching heat with garlic, bird’s eye chilies, savory oyster-soy sauce, and mountains of aromatic fresh holy or Thai basil—served over steaming jasmine rice with a crispy-edged fried egg.',
    author: {
      name: 'Chef Michael Thorne',
      role: 'Master Butcher & Slow-Cooking Specialist',
      avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 17, 2026',
    lastUpdated: 'October 27, 2026',
    readTimeMinutes: 6,
    wordCount: 1350,
    realImage: {
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
      alt: 'Thai basil chicken over steamed white rice topped with a crispy fried egg and fresh red chilies',
      caption: 'Street-food style Pad Krapow Gai with minced chicken, fragrant holy basil, and a crispy sunny-side-up egg.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      totalTimeMinutes: 20,
      servings: 4,
      caloriesPerServing: 410,
      difficulty: 'Easy',
      cuisine: 'Thai Street Food',
      course: 'Weeknight Dinner',
      diet: ['High-Protein', 'Dairy-Free'],
      rating: 4.97,
      reviewsCount: 395
    },
    ingredients: [
      { id: 'ing-111', amount: '1.25 lbs', item: 'Ground chicken or chicken thighs', notes: 'Finely minced by hand with a knife', group: 'Protein' },
      { id: 'ing-112', amount: '6 cloves', item: 'Garlic', notes: 'Pounded in a mortar and pestle', group: 'Aromatics' },
      { id: 'ing-113', amount: '4–6', item: 'Thai bird’s eye chilies', notes: 'Crushed and sliced (adjust to spice preference)', group: 'Aromatics' },
      { id: 'ing-114', amount: '2 tbsp', item: 'Oyster sauce', notes: 'Premium Thai style', group: 'Sauce' },
      { id: 'ing-115', amount: '1 tbsp', item: 'Light soy sauce & 1 tsp dark sweet soy sauce', notes: 'For rich mahogany color', group: 'Sauce' },
      { id: 'ing-116', amount: '1 tbsp', item: 'Fish sauce', notes: 'Adds essential umami depth', group: 'Sauce' },
      { id: 'ing-117', amount: '1.5 tsp', item: 'Brown sugar', notes: 'Balances chili heat', group: 'Sauce' },
      { id: 'ing-118', amount: '2 cups', item: 'Fresh holy basil or Thai sweet basil leaves', notes: 'Washed and dried', group: 'Finish' },
      { id: 'ing-119', amount: '4 large', item: 'Eggs', notes: 'Fried in hot oil with crispy lace edges', group: 'Serving' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Pound Garlic & Chilies',
        instruction: 'In a stone mortar and pestle (or on a cutting board with a heavy chef knife), pound the garlic cloves and Thai bird’s eye chilies into a rough, aromatic paste. Mix the oyster sauce, soy sauces, fish sauce, and brown sugar in a small ramekin.',
        proTip: 'Pounding fractures the garlic cell walls, releasing alliinase enzymes that create deeper garlicky heat than slicing.'
      },
      {
        stepNumber: 2,
        title: 'Fry the Crispy Lace Eggs (Kai Dao)',
        instruction: 'Heat 3 tablespoons of high-smoke-point oil in a wok over high heat until smoking hot. Crack an egg directly into the center. Spoon hot oil over the white until the edges turn bubbly, deeply golden, and blistered, while the yolk stays liquid. Remove and drain on paper towels.',
        proTip: 'The signature Thai street-food egg has paper-thin crispy lacy edges with a rich, velvety molten yolk.'
      },
      {
        stepNumber: 3,
        title: 'Sizzle the Chili-Garlic Paste',
        instruction: 'Pour off all but 1.5 tablespoons of oil from the wok. Over medium-high heat, add the pounded garlic and chilies. Stir-fry rapidly for 30–45 seconds until intensely fragrant, taking care not to let the garlic burn.',
        proTip: 'Have your kitchen exhaust fan running on high; the chili vapors are potent and aromatic.'
      },
      {
        stepNumber: 4,
        title: 'Wok-Fry the Minced Chicken',
        instruction: 'Crank the heat to maximum. Add the minced chicken, breaking it apart quickly with a wok spatula. Stir-fry for 3–4 minutes until the chicken turns opaque and begins to caramelize in the hot wok. Pour in the prepared sauce mixture and toss continuously for 1 minute until sauce glazes the meat.',
        proTip: 'Hand-minced chicken provides uneven, delicious texture compared to factory pre-ground meat.'
      },
      {
        stepNumber: 5,
        title: 'Wilt Basil & Serve Hot',
        instruction: 'Turn off the heat completely. Immediately toss in the 2 cups of fresh basil leaves. The residual heat of the wok will wilt the leaves in 20 seconds, releasing their sweet peppery anise aroma. Spoon immediately over warm jasmine rice and top with the crispy egg.',
        proTip: 'Never boil basil in the sauce; high heat destroys its volatile essential oils and causes it to turn dull black.'
      }
    ],
    nutrition: {
      calories: 410,
      proteinGrams: 35,
      carbsGrams: 12,
      fatGrams: 24,
      fiberGrams: 1,
      sodiumMg: 780
    },
    chefNotes: [
      'Holy Basil vs Thai Basil: Traditional Pad Krapow uses holy basil (tulsi), which has a peppery, clove-like kick. If unavailable, Thai sweet basil or Italian sweet basil still produces an unforgettable dinner.',
      'Protein Swaps: Ground pork, beef flank slices, or firm tofu cubes are all authentic adaptations.'
    ],
    storageAdvice: {
      refrigerator: 'Store leftover stir-fry in a sealed container for up to 3 days in the fridge.',
      freezer: 'The cooked chicken freezes well for 2 months without basil. Fresh basil is best added when reheating.',
      reheating: 'Flash-reheat in a hot skillet with 1 tablespoon water for 2 minutes.'
    },
    summary: 'The undisputed king of Bangkok street cuisine. Rapid high-heat wok searing creates deep caramelization and peppery herbal bliss in 20 minutes flat.',
    keyTakeaways: [
      'Pre-mixing the savory sauce ensures seamless, fast wok cooking.',
      'Hand-mincing chicken gives superior textural mouthfeel.',
      'Crispy lace egg yolk marries with the chili sauce over warm rice.'
    ],
    sections: [
      {
        heading: 'Why High-Heat Wok Cooking Unlocks "Wok Hei" at Home',
        subheading: 'Capturing the breath of the wok in a standard home kitchen.',
        content: [
          'In Thai street stalls, jet-engine burners generate massive BTUs that vaporize microscopic oil droplets, creating the signature smoky savoriness known as *wok hei* (breath of the wok).',
          'At home, you can achieve similar flavor by letting your carbon steel wok or heavy skillet preheat dry until wisps of smoke appear before adding oil. Cooking in rapid, smaller batches prevents temperature drops and eliminates soggy, steamed meat.'
        ]
      }
    ],
    faq: [
      { question: 'How can I make this less spicy for kids?', answer: 'Reduce the Thai bird’s eye chilies to 1 or substitute with a sweet red bell pepper or mild jalapeño.' }
    ],
    tags: ['Thai Food', '20 Minute Meal', 'Stir Fry', 'Weeknight Dinner', 'High Protein', 'Spicy']
  },
  {
    id: 'rec-12',
    slug: 'creamy-coconut-chickpea-curry',
    keyword: 'coconut chickpea curry',
    category: 'dinner',
    categoryLabel: 'Lunch & Weeknight Dinners',
    title: 'Golden Coconut Chickpea & Baby Spinach Curry with Warm Turmeric & Ginger',
    deck: 'Nutty chickpeas simmered in a luscious golden curry of coconut milk, crushed tomatoes, fresh ginger, garlic, and garam masala, finished with wilted spinach and lime juice.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 13, 2026',
    lastUpdated: 'October 25, 2026',
    readTimeMinutes: 7,
    wordCount: 1360,
    realImage: {
      url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bowl of creamy yellow coconut chickpea curry with fresh cilantro and lime wedges',
      caption: 'Creamy vegan coconut chickpea curry with wilted baby spinach, turmeric, and basmati rice.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 4,
      caloriesPerServing: 380,
      difficulty: 'Easy',
      cuisine: 'Indian-Inspired',
      course: 'Weeknight Dinner',
      diet: ['Vegan', 'Gluten-Free', 'Dairy-Free', 'High-Fiber'],
      rating: 4.95,
      reviewsCount: 320
    },
    ingredients: [
      { id: 'ing-121', amount: '2 cans (15 oz each)', item: 'Chickpeas (garbanzo beans)', notes: 'Rinsed and drained', group: 'Legumes' },
      { id: 'ing-122', amount: '1 can (13.5 oz)', item: 'Full-fat coconut milk', notes: 'Unsweetened', group: 'Curry Base' },
      { id: 'ing-123', amount: '1 can (14 oz)', item: 'Fire-roasted diced tomatoes', notes: 'With juices', group: 'Curry Base' },
      { id: 'ing-124', amount: '1 medium', item: 'Yellow onion', notes: 'Finely chopped', group: 'Aromatics' },
      { id: 'ing-125', amount: '4 cloves', item: 'Garlic & 1 tbsp fresh ginger', notes: 'Finely grated', group: 'Aromatics' },
      { id: 'ing-126', amount: '1.5 tbsp', item: 'Yellow curry powder or garam masala', notes: 'Fragrant blend', group: 'Spices' },
      { id: 'ing-127', amount: '1 tsp', item: 'Ground turmeric & ground cumin', notes: 'For vibrant color', group: 'Spices' },
      { id: 'ing-128', amount: '3 cups', item: 'Baby spinach', notes: 'Fresh', group: 'Finish' },
      { id: 'ing-129', amount: '2 tbsp', item: 'Fresh lime juice & chopped cilantro', notes: 'For vibrant finish', group: 'Finish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Onions & Aromatics',
        instruction: 'Heat 1 tablespoon of coconut oil or olive oil in a deep skillet or Dutch oven over medium heat. Sauté the diced onion for 5–6 minutes until translucent and golden at edges. Add grated garlic and ginger; cook for 60 seconds.',
        proTip: 'Grated ginger and garlic meld into the sauce far better than diced pieces.'
      },
      {
        stepNumber: 2,
        title: 'Bloom Spices in Fat',
        instruction: 'Stir in curry powder, turmeric, cumin, and 1 tsp kosher salt. Cook for 1 minute, stirring continuously, to toast the spices in the warm oil and activate their fat-soluble aromatic oils.',
        proTip: 'Blooming prevents raw, chalky spice flavors.'
      },
      {
        stepNumber: 3,
        title: 'Add Tomatoes, Coconut Milk & Chickpeas',
        instruction: 'Pour in the diced fire-roasted tomatoes and full-fat coconut milk. Add the rinsed chickpeas. Stir thoroughly to combine, bringing the curry to a gentle simmer.',
        proTip: 'Use full-fat coconut milk for a thick, velvety restaurant-style gravy.'
      },
      {
        stepNumber: 4,
        title: 'Simmer & Slightly Mash',
        instruction: 'Reduce heat to medium-low and simmer uncovered for 12–15 minutes, stirring occasionally, until the sauce reduces and thickens. Use the back of a fork to lightly smash 1/4 of the chickpeas against the pan wall.',
        proTip: 'Smashing a portion of the chickpeas releases their natural starches, thickening the curry naturally without flour.'
      },
      {
        stepNumber: 5,
        title: 'Fold in Spinach & Brighten with Lime',
        instruction: 'Stir in the fresh baby spinach and cook for 2 minutes until wilted. Remove from heat and stir in fresh lime juice and fresh cilantro. Serve warm over basmati rice with warm garlic naan.',
        proTip: 'The acid from fresh lime juice cuts through the rich coconut fats and elevates every spice.'
      }
    ],
    nutrition: {
      calories: 380,
      proteinGrams: 14,
      carbsGrams: 42,
      fatGrams: 19,
      fiberGrams: 10,
      sodiumMg: 490
    },
    chefNotes: [
      'Sweet Potato Add-In: Dice 1 small sweet potato into 1/2-inch cubes and simmer alongside chickpeas for a sweeter, heartier bowl.',
      'Spice Level: Add 1/4 teaspoon cayenne pepper or a diced serrano chili for extra heat.'
    ],
    storageAdvice: {
      refrigerator: 'Keep refrigerated in an airtight container for up to 5 days. Flavors become richer on day 2.',
      freezer: 'Freezes exceptionally well for up to 3 months. Thaw in the fridge overnight before warming.',
      reheating: 'Warm over medium heat in a saucepan with a splash of water.'
    },
    summary: 'A nourishing 30-minute plant-based dinner that warms you from the inside out. Naturally vegan, gluten-free, and rich in golden turmeric.',
    keyTakeaways: [
      'Pantry-staple ingredients yield extraordinary depth in 30 minutes.',
      'Smashing some chickpeas creates a velvety consistency without cornstarch.',
      'Full-fat coconut milk provides luscious texture and healthy medium-chain fats.'
    ],
    sections: [
      {
        heading: 'The Health and Culinary Alchemy of Turmeric and Ginger',
        subheading: 'Why pairing turmeric with healthy fats unlocks its active curcumin compounds.',
        content: [
          'Turmeric contains curcumin, a potent polyphenol noted for its anti-inflammatory properties. However, curcumin is hydrophobic (insoluble in water) and poorly absorbed by the digestive system on its own.',
          'By simmering turmeric within the lipid matrix of full-fat coconut milk and pairing it with black pepper, curcumin bioavailability is dramatically magnified, creating a meal that is both deeply therapeutic and culinary perfection.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use light coconut milk?', answer: 'Yes, but the curry will be noticeably thinner and less velvety. You may need to simmer an extra 5 minutes to reduce.' }
    ],
    tags: ['Curry', 'Chickpeas', 'Vegan', 'Plant Based', '30 Minute Meal', 'Gluten Free']
  },
  {
    id: 'rec-13',
    slug: 'garlic-butter-steak-bites',
    keyword: 'garlic butter steak bites',
    category: 'dinner',
    categoryLabel: 'Lunch & Weeknight Dinners',
    title: 'Seared Garlic Herb Butter Steak Bites with Crispy Skillet Baby Potatoes',
    deck: 'Tender cubes of sirloin or ribeye seared hot and fast in a smoking cast-iron skillet, drenched in rich rosemary-garlic butter and served alongside golden crispy roasted potatoes.',
    author: {
      name: 'Chef Michael Thorne',
      role: 'Master Butcher & Slow-Cooking Specialist',
      avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 10, 2026',
    lastUpdated: 'October 24, 2026',
    readTimeMinutes: 6,
    wordCount: 1340,
    realImage: {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cast iron skillet of browned garlic butter steak bites with crispy baby potatoes and fresh rosemary',
      caption: 'Seared garlic butter steak bites in a cast-iron skillet with rosemary and crispy gold potatoes.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      totalTimeMinutes: 25,
      servings: 4,
      caloriesPerServing: 490,
      difficulty: 'Easy',
      cuisine: 'American Steakhouse',
      course: 'Main Course',
      diet: ['Gluten-Free', 'Keto-Friendly', 'High-Protein'],
      rating: 4.98,
      reviewsCount: 440
    },
    ingredients: [
      { id: 'ing-131', amount: '1.5 lbs', item: 'Sirloin steak, ribeye, or tenderloin', notes: 'Cut into uniform 1-inch cubes', group: 'Steak' },
      { id: 'ing-132', amount: '2 tbsp', item: 'Avocado oil or ghee', notes: 'High smoke point for searing', group: 'Searing' },
      { id: 'ing-133', amount: '1 lb', item: 'Baby Yukon Gold potatoes', notes: 'Quartered into small bite-sized pieces', group: 'Potatoes' },
      { id: 'ing-134', amount: '4 tbsp', item: 'Unsalted butter', notes: 'Divided', group: 'Garlic Herb Butter' },
      { id: 'ing-135', amount: '6 cloves', item: 'Garlic', notes: 'Minced', group: 'Garlic Herb Butter' },
      { id: 'ing-136', amount: '1 tbsp', item: 'Fresh rosemary & thyme', notes: 'Finely minced', group: 'Garlic Herb Butter' },
      { id: 'ing-137', amount: '1 tbsp', item: 'Fresh chopped flat-leaf parsley', notes: 'For finishing garnish', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Par-Cook & Crisp Potatoes',
        instruction: 'Place quartered potatoes in a microwave-safe bowl with 1 tbsp water. Microwave on HIGH for 4 minutes to par-cook inside. Drain. Heat 1 tbsp oil and 1 tbsp butter in a 12-inch cast-iron skillet over medium-high heat. Add potatoes, cut-side down, and fry undisturbed for 6–8 minutes until deeply golden and crispy. Transfer to a bowl.',
        proTip: 'Par-cooking in the microwave cuts skillet crisping time in half without raw centers.'
      },
      {
        stepNumber: 2,
        title: 'Season Steak & Get Pan Smoking Hot',
        instruction: 'Pat steak cubes thoroughly dry with paper towels. Season aggressively on all sides with kosher salt and coarsely cracked black pepper. Add 1 tbsp avocado oil to the same skillet over high heat until wisps of smoke emerge.',
        proTip: 'Do not season steak until right before searing; salt draws out moisture if left sitting on raw meat.'
      },
      {
        stepNumber: 3,
        title: 'Hard Sear the Steak Bites',
        instruction: 'Add steak cubes in a single, spaced layer. Sear without touching for 2 minutes to develop a dark, crispy crust. Stir and cook for another 2 minutes for medium-rare (internal temp 130°F–135°F / 55°C–57°C). Transfer steak to the bowl with potatoes.',
        proTip: 'Sear in two batches if needed. Crowding steams the steak, preventing a steakhouse crust.'
      },
      {
        stepNumber: 4,
        title: 'Melt Garlic Herb Butter & Glaze',
        instruction: 'Turn heat down to medium-low. Add the remaining 3 tablespoons of butter, minced garlic, fresh rosemary, and thyme to the pan. Swirl for 60 seconds as the butter foams and garlic becomes fragrant and golden.',
        proTip: 'Keep butter moving constantly so the milk solids do not burn.'
      },
      {
        stepNumber: 5,
        title: 'Toss Together & Serve Sizzling',
        instruction: 'Return the steak bites and crispy potatoes into the skillet. Toss vigorously for 30 seconds to coat every piece in the foaming garlic herb butter. Scatter fresh parsley over top and serve immediately straight from the pan.',
        proTip: 'Spoon the aromatic butter pooling at the bottom of the pan over each serving.'
      }
    ],
    nutrition: {
      calories: 490,
      proteinGrams: 40,
      carbsGrams: 22,
      fatGrams: 28,
      fiberGrams: 2,
      sodiumMg: 520
    },
    chefNotes: [
      'Cut of Meat: Top sirloin provides great beefy flavor and tenderness at an affordable price. Ribeye yields maximum melt-in-mouth richness.',
      'Low-Carb Option: Omit potatoes and toss with roasted cauliflower florets or green beans.'
    ],
    storageAdvice: {
      refrigerator: 'Refrigerate in a sealed container for up to 3 days.',
      reheating: 'Flash-reheat in a hot dry skillet for 2 minutes to retain medium-rare steak tenderness.'
    },
    summary: 'Steakhouse elegance made in 25 minutes. Deeply caramelized beef cubes bathed in rich rosemary-garlic butter with crispy baby potatoes.',
    keyTakeaways: [
      'High-smoke point oil and screaming-hot cast iron create the signature crust.',
      'Par-cooking potatoes guarantees fluffy centers and crunchy exteriors.',
      'Finishing with garlic herb butter glazes every bite in savory luxury.'
    ],
    sections: [
      {
        heading: 'Why Steak Bites Cook Faster and Flavor More Intensely',
        subheading: 'Maximizing surface area for the Maillard browning reaction.',
        content: [
          'A single large steak has only two primary surfaces for searing. When sliced into 1-inch cubes, the meat’s surface-area-to-volume ratio increases exponentially, providing six caramelized sides per bite.',
          'Each of those browned edges traps the garlicky pan butter, delivering explosive steakhouse flavor in every forkful.'
        ]
      }
    ],
    faq: [
      { question: 'What is the best pan for this recipe?', answer: 'A heavy seasoned cast-iron skillet or heavy carbon steel pan is ideal because it retains heat when cold steak cubes are added.' }
    ],
    tags: ['Steak Bites', 'Quick Dinner', 'Cast Iron', 'High Protein', 'Keto', 'Garlic Butter']
  },
  {
    id: 'rec-14',
    slug: 'mediterranean-grilled-salmon-salad',
    keyword: 'mediterranean salmon salad',
    category: 'dinner',
    categoryLabel: 'Lunch & Weeknight Dinners',
    title: 'Crispy Pan-Seared Salmon Salad with Greek Lemon-Herb Vinaigrette, Cucumbers & Kalamata Olives',
    deck: 'Crispy-skinned Atlantic salmon fillets served over crisp romaine, Persian cucumbers, grape tomatoes, creamy avocado, Kalamata olives, and tangy Greek feta tossed in a bright oregano vinaigrette.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 8, 2026',
    lastUpdated: 'October 23, 2026',
    readTimeMinutes: 6,
    wordCount: 1310,
    realImage: {
      url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      alt: 'Fresh Mediterranean salad with grilled salmon fillet, avocado, feta, cucumber, tomatoes and olives',
      caption: 'Crisp Mediterranean salad crowned with golden pan-seared salmon fillet and fresh oregano vinaigrette.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 8,
      totalTimeMinutes: 23,
      servings: 4,
      caloriesPerServing: 460,
      difficulty: 'Easy',
      cuisine: 'Mediterranean',
      course: 'Salad / Light Dinner',
      diet: ['Gluten-Free', 'Keto-Friendly', 'Pescatarian'],
      rating: 4.96,
      reviewsCount: 310
    },
    ingredients: [
      { id: 'ing-141', amount: '4 fillets (6 oz each)', item: 'Fresh skin-on Atlantic or wild salmon', notes: 'Pin bones removed, patted dry', group: 'Salmon' },
      { id: 'ing-142', amount: '1 tbsp', item: 'Olive oil', notes: 'For searing', group: 'Salmon' },
      { id: 'ing-143', amount: '6 cups', item: 'Crisp romaine lettuce', notes: 'Chapped and washed', group: 'Salad Base' },
      { id: 'ing-144', amount: '2', item: 'Persian cucumbers', notes: 'Sliced into half-moons', group: 'Salad Base' },
      { id: 'ing-145', amount: '1 cup', item: 'Grape tomatoes', notes: 'Halved', group: 'Salad Base' },
      { id: 'ing-146', amount: '1/2 cup', item: 'Kalamata olives & 1/2 cup crumbled feta', notes: 'Brined', group: 'Salad Base' },
      { id: 'ing-147', amount: '1 whole', item: 'Hass avocado', notes: 'Diced', group: 'Salad Base' },
      { id: 'ing-148', amount: '1/3 cup', item: 'Extra virgin olive oil & 3 tbsp lemon juice', notes: 'Whisked with dried oregano, garlic, salt', group: 'Vinaigrette' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk the Greek Vinaigrette',
        instruction: 'In a mason jar, combine extra virgin olive oil, fresh lemon juice, 1 minced garlic clove, 1 teaspoon dried oregano, 1/2 teaspoon Dijon mustard, salt, and black pepper. Seal and shake vigorously until emulsified.',
        proTip: 'Dijon mustard acts as a natural emulsifier, binding the lemon juice and olive oil into a silky dressing.'
      },
      {
        stepNumber: 2,
        title: 'Season the Salmon Fillets',
        instruction: 'Pat salmon fillets with paper towels until completely dry. Season flesh and skin sides generously with kosher salt, black pepper, and dried oregano.',
        proTip: 'Dry skin is the fundamental requirement for shattering, crispy salmon skin.'
      },
      {
        stepNumber: 3,
        title: 'Pan-Sear Skin-Side Down',
        instruction: 'Heat 1 tablespoon olive oil in a non-stick or stainless skillet over medium-high heat until shimmering. Place salmon fillets skin-side down. Press gently with a spatula for 10 seconds to prevent curling. Cook 5–6 minutes without moving until 75% cooked through.',
        proTip: 'Cooking mostly on the skin side protects delicate salmon flesh from direct heat, keeping it buttery soft.'
      },
      {
        stepNumber: 4,
        title: 'Flip & Kiss with Heat',
        instruction: 'Carefully flip fillets and cook for just 90 seconds to 2 minutes on the flesh side until medium (125°F–130°F / 52°C–54°C). Transfer immediately to a cutting board.',
        proTip: 'Overcooking salmon causes white albumin protein to squeeze out; remove when center is slightly translucent.'
      },
      {
        stepNumber: 5,
        title: 'Assemble Salad & Plate',
        instruction: 'In a large salad bowl, toss romaine, cucumbers, tomatoes, and olives with half the vinaigrette. Divide among 4 bowls. Top each with diced avocado, crumbled feta, and a warm salmon fillet. Drizzle remaining dressing over the fish and serve.',
        proTip: 'Warm crispy salmon juxtaposed against chilled crisp vegetables creates a stunning culinary contrast.'
      }
    ],
    nutrition: {
      calories: 460,
      proteinGrams: 38,
      carbsGrams: 10,
      fatGrams: 30,
      fiberGrams: 4,
      sodiumMg: 460
    },
    chefNotes: [
      'Wild vs Farmed Salmon: Wild King or Sockeye salmon is leaner and cooks 1–2 minutes faster than farmed Atlantic salmon.',
      'Herb Swap: Fresh dill or mint adds refreshing Mediterranean complexity to the salad bowl.'
    ],
    storageAdvice: {
      refrigerator: 'Keep cooked salmon and dressed salad in separate containers for up to 2 days.',
      reheating: 'Enjoy leftover salmon chilled flaked over fresh greens, or warm gently in a 300°F (150°C) toaster oven.'
    },
    summary: 'A restaurant-caliber lunch or dinner in 20 minutes. Crisp salmon skin, buttery avocado, and bright Mediterranean lemon oregano dressing.',
    keyTakeaways: [
      'Pressing salmon gently prevents curling and guarantees even skin contact.',
      'Rich in heart-healthy Omega-3 fatty acids and clean protein.',
      'Naturally low-carb and gluten-free.'
    ],
    sections: [
      {
        heading: 'The Spatula Press: Secrets to Restaurant-Grade Salmon Skin',
        subheading: 'Thermal contraction and how to master it in a home skillet.',
        content: [
          'When cold salmon skin hits hot skillet oil, the protein fibers contract rapidly, causing the fillet edges to cup upward and lose pan contact. This leaves the center scorched while the edges remain soggy.',
          'By holding a flexible fish spatula flat over the fillet for the first 10 seconds of searing, the skin remains flat against the oil, allowing heat to cook it evenly into a golden, crackling crust.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use skinless salmon?', answer: 'Yes! Cook skinless salmon for 3–4 minutes per side over medium heat until golden.' }
    ],
    tags: ['Salmon Salad', 'Mediterranean', 'Healthy Dinner', 'Low Carb', 'Keto', 'Pescatarian']
  },
  {
    id: 'rec-15',
    slug: 'creamy-wild-mushroom-risotto',
    keyword: 'creamy mushroom risotto',
    category: 'dinner',
    categoryLabel: 'Lunch & Weeknight Dinners',
    title: 'Authentic Creamy Parmigiano & Wild Mushroom Risotto with Garlic and Thyme',
    deck: 'Slow-stirred Arborio rice releasing its silky starches into a rich white wine and mushroom broth, folded with caramelized cremini and shiitake mushrooms, butter, and freshly grated Parmigiano-Reggiano.',
    author: {
      name: 'Chef Michael Thorne',
      role: 'Master Butcher & Slow-Cooking Specialist',
      avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 6, 2026',
    lastUpdated: 'October 22, 2026',
    readTimeMinutes: 8,
    wordCount: 1400,
    realImage: {
      url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bowl of creamy mushroom risotto garnished with shaved parmesan and fresh thyme',
      caption: 'Velvety Italian wild mushroom risotto with caramelized shiitake, cremini, and Parmigiano-Reggiano.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      totalTimeMinutes: 40,
      servings: 4,
      caloriesPerServing: 430,
      difficulty: 'Moderate',
      cuisine: 'Northern Italian',
      course: 'Main Course / First Course',
      diet: ['Vegetarian', 'Gluten-Free'],
      rating: 4.97,
      reviewsCount: 380
    },
    ingredients: [
      { id: 'ing-151', amount: '1.5 cups', item: 'Arborio or Carnaroli rice', notes: 'Short-grain Italian', group: 'Rice' },
      { id: 'ing-152', amount: '1 lb', item: 'Mixed wild mushrooms (cremini, shiitake, oyster)', notes: 'Sliced', group: 'Mushrooms' },
      { id: 'ing-153', amount: '5 cups', item: 'Warm vegetable or chicken broth', notes: 'Kept simmering in small pot', group: 'Broth' },
      { id: 'ing-154', amount: '1/2 cup', item: 'Dry white wine', notes: 'Pinot Grigio or Sauvignon Blanc', group: 'Broth' },
      { id: 'ing-155', amount: '1 medium', item: 'Shallot & 3 garlic cloves', notes: 'Finely minced', group: 'Aromatics' },
      { id: 'ing-156', amount: '3 tbsp', item: 'Unsalted butter', notes: 'Divided (1 for mushrooms, 2 for finish)', group: 'Enrichment' },
      { id: 'ing-157', amount: '3/4 cup', item: 'Parmigiano-Reggiano', notes: 'Freshly grated', group: 'Enrichment' },
      { id: 'ing-158', amount: '1 tbsp', item: 'Fresh thyme leaves', notes: 'For aromatic finish', group: 'Finish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Caramelize Wild Mushrooms',
        instruction: 'Melt 1 tablespoon butter and 1 tablespoon olive oil in a wide, heavy saucepan or Dutch oven over medium-high heat. Add the sliced mushrooms in a single layer. Cook undisturbed for 4 minutes until deeply browned, then stir and cook 3 minutes more. Season with salt and pepper, transfer to a bowl, and set aside.',
        proTip: 'Do not salt mushrooms until they have browned; salting early pulls out water and causes them to steam.'
      },
      {
        stepNumber: 2,
        title: 'Toast the Arborio Rice (Tostatura)',
        instruction: 'Reduce heat to medium. Add 1 tablespoon olive oil and minced shallot to the pan; cook for 2 minutes. Add dry Arborio rice. Toast the grains for 2–3 minutes, stirring constantly with a wooden spoon until edges are translucent and center is chalky.',
        proTip: 'Toasting the rice locks in the core starch, ensuring the risotto grains stay al dente with a firm bite.'
      },
      {
        stepNumber: 3,
        title: 'Deglaze with Dry White Wine',
        instruction: 'Pour in the white wine, stirring vigorously to lift any browned mushroom bits from the bottom. Simmer for 1–2 minutes until the wine has almost completely evaporated into the rice grains.',
        proTip: 'The gentle acidity of dry white wine balances the heavy starch and rich butter.'
      },
      {
        stepNumber: 4,
        title: 'Gradually Add Warm Broth',
        instruction: 'Keep broth warm in a separate saucepan over low heat. Add broth one ladleful (about 1/2 cup) at a time to the rice, stirring frequently. Allow each ladleful to be nearly absorbed before adding the next. Continue this rhythmic process for 18–20 minutes until rice is creamy and al dente.',
        proTip: 'Always use hot broth. Adding cold broth drops the pan temperature and shocks the starch, leading to gummy risotto.'
      },
      {
        stepNumber: 5,
        title: 'The Mantecatura (Melt Butter & Cheese)',
        instruction: 'Remove pan from heat. Fold in the caramelized mushrooms, 2 tablespoons cold cubed butter, freshly grated Parmigiano-Reggiano, and fresh thyme. Vigorously beat with a wooden spoon for 60 seconds until the risotto turns glossy and wave-like (all’onda). Serve immediately in warm bowls.',
        proTip: 'Cold butter emulsifies into the hot liquid much better than room-temperature butter, creating the signature glossy sheen.'
      }
    ],
    nutrition: {
      calories: 430,
      proteinGrams: 12,
      carbsGrams: 56,
      fatGrams: 16,
      fiberGrams: 3,
      sodiumMg: 520
    },
    chefNotes: [
      'Rice Selection: Carnaroli is known as the "king of risotto rice" in Italy because it produces the creamiest texture with the lowest risk of overcooking.',
      'Wine-Free Substitute: Use an additional 1/2 cup broth with 1 teaspoon white wine vinegar or lemon juice.'
    ],
    storageAdvice: {
      refrigerator: 'Store leftover risotto in the fridge for up to 3 days.',
      reheating: 'Risotto firms when chilled. Reheat gently on the stovetop with a splash of warm broth or water, stirring until creamy again.',
      arancini: 'Leftover chilled risotto makes world-class fried arancini rice balls!'
    },
    summary: 'The crown jewel of Italian comfort cooking. Earthy wild mushrooms, slow-stirred Arborio starch, and aged Parmigiano-Reggiano.',
    keyTakeaways: [
      'Frequent stirring rubs grains together, releasing amylopectin starch to thicken the sauce.',
      'Adding broth in warm ladlefuls ensures continuous starch release.',
      'The final mantecatura off-heat creates the iconic wavy, velvety texture.'
    ],
    sections: [
      {
        heading: 'The Starch Chemistry Behind the Perfect Italian Risotto',
        subheading: 'Why Arborio and Carnaroli rice behave differently than long-grain rice.',
        content: [
          'Long-grain rice like basmati is high in amylose, a linear starch that keeps grains separated and dry. Italian risotto varieties (Arborio, Carnaroli, Vialone Nano) are packed with branched amylopectin starch.',
          'As the grains cook and are stirred against each other with a wooden spoon, the friction sloughs off amylopectin from the grain exterior. This starch suspends in the liquid, creating a luxurious cream without a single drop of heavy cream.'
        ]
      }
    ],
    faq: [
      { question: 'Do I have to stir constantly for 20 minutes?', answer: 'Not constantly, but frequently! Stir every minute or two to ensure even cooking and encourage starch friction.' }
    ],
    tags: ['Risotto', 'Mushroom Risotto', 'Italian Cooking', 'Vegetarian', 'Comfort Food', 'Gluten Free']
  }
];
