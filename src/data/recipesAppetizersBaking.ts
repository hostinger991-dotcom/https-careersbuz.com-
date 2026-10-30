import { Article } from '../types';

export const RECIPES_APPETIZERS_BAKING: Article[] = [
  {
    id: 'rec-16',
    slug: 'crispy-honey-garlic-wings',
    keyword: 'honey garlic chicken wings',
    category: 'appetizers',
    categoryLabel: 'Appetizers & Party Snacks',
    title: 'Ultra-Crispy Air-Fryer Honey Garlic Chicken Wings with Toasted Sesame',
    deck: 'Extra-crispy chicken wings air-fried to golden perfection without cornstarch or flour, tossed in a sticky, sweet-and-savory glaze of honey, soy, garlic, and fresh ginger.',
    author: {
      name: 'Chef Michael Thorne',
      role: 'Master Butcher & Slow-Cooking Specialist',
      avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 7, 2026',
    lastUpdated: 'October 21, 2026',
    readTimeMinutes: 6,
    wordCount: 1330,
    realImage: {
      url: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crispy honey garlic chicken wings with sesame seeds and green onions on a white platter',
      caption: 'Sticky honey garlic air-fryer wings garnished with toasted white sesame and sliced scallions.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 4,
      caloriesPerServing: 395,
      difficulty: 'Easy',
      cuisine: 'Asian-American Fusion',
      course: 'Appetizer / Snack',
      diet: ['Dairy-Free', 'High-Protein'],
      rating: 4.96,
      reviewsCount: 340
    },
    ingredients: [
      { id: 'ing-161', amount: '2 lbs', item: 'Chicken wings (flats & drumettes)', notes: 'Patted thoroughly dry', group: 'Wings' },
      { id: 'ing-162', amount: '1 tbsp', item: 'Baking powder (aluminum-free)', notes: 'Secret to shattering crisp skin', group: 'Wings' },
      { id: 'ing-163', amount: '1 tsp', item: 'Garlic powder, onion powder & kosher salt', notes: 'Even seasoning', group: 'Wings' },
      { id: 'ing-164', amount: '1/3 cup', item: 'Pure clover honey', notes: 'Raw', group: 'Sticky Glaze' },
      { id: 'ing-165', amount: '3 tbsp', item: 'Low-sodium soy sauce', notes: 'Or tamari for gluten-free', group: 'Sticky Glaze' },
      { id: 'ing-166', amount: '5 cloves', item: 'Fresh garlic', notes: 'Finely grated', group: 'Sticky Glaze' },
      { id: 'ing-167', amount: '1 tbsp', item: 'Fresh ginger', notes: 'Finely grated', group: 'Sticky Glaze' },
      { id: 'ing-168', amount: '1 tbsp', item: 'Apple cider vinegar & 1 tsp sesame oil', notes: 'For sweet-tangy balance', group: 'Sticky Glaze' },
      { id: 'ing-169', amount: '1 tbsp', item: 'Toasted sesame seeds & sliced green onions', notes: 'For garnish', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Toss Wings in Aluminum-Free Baking Powder',
        instruction: 'Pat the chicken wings with paper towels until bone dry. Place in a large bowl and toss with 1 tablespoon aluminum-free baking powder, garlic powder, onion powder, salt, and pepper until thinly and evenly coated.',
        proTip: 'Baking powder alters the skin pH, breaking down peptide bonds so skin crisps like deep-fried wings without excess oil.'
      },
      {
        stepNumber: 2,
        title: 'Air-Fry to Crisp Perfection',
        instruction: 'Preheat the air fryer to 380°F (195°C). Arrange wings in a single, spaced layer in the basket (cook in batches if necessary). Air-fry for 12 minutes, flip with tongs, and air-fry 10 minutes more. Crank the heat to 400°F (205°C) for the final 3 minutes to puff the skin.',
        proTip: 'Never overlap wings in the basket; convection air must circulate completely around each piece.'
      },
      {
        stepNumber: 3,
        title: 'Simmer the Sticky Honey Garlic Glaze',
        instruction: 'While wings are frying, combine honey, soy sauce, grated garlic, ginger, vinegar, and sesame oil in a small saucepan over medium heat. Simmer for 3–4 minutes until bubbling, thickened, and glossy.',
        proTip: 'The glaze will coat the back of a spoon when ready.'
      },
      {
        stepNumber: 4,
        title: 'Toss & Coat While Piping Hot',
        instruction: 'Transfer hot, crispy wings straight from the air-fryer basket into a large stainless steel bowl. Pour the warm honey garlic glaze over the wings and toss vigorously to coat every crevice.',
        proTip: 'Tossing immediately ensures the hot skin absorbs glaze without losing its crunch.'
      },
      {
        stepNumber: 5,
        title: 'Garnish with Sesame & Scallions',
        instruction: 'Transfer wings to a serving platter. Sprinkle generously with toasted sesame seeds and thinly sliced green onions. Serve hot with napkins on standby.',
        proTip: 'Pair with crisp celery sticks and cooling ranch or blue cheese dip.'
      }
    ],
    nutrition: {
      calories: 395,
      proteinGrams: 32,
      carbsGrams: 20,
      fatGrams: 21,
      fiberGrams: 1,
      sodiumMg: 580
    },
    chefNotes: [
      'Baking Powder Warning: Be sure to use aluminum-free baking powder; baking soda will result in an unpleasant metallic flavor.',
      'Oven Method: Bake on a wire rack set inside a rimmed baking sheet at 425°F (220°C) for 45 minutes, flipping halfway.'
    ],
    storageAdvice: {
      refrigerator: 'Store leftover wings in a sealed container for up to 3 days.',
      reheating: 'Re-crisp in the air fryer at 375°F (190°C) for 4–5 minutes until sizzling.'
    },
    summary: 'Shattering crispy skin without a deep fryer. Coated in a finger-licking sweet, savory garlic glaze that steals the show at game night.',
    keyTakeaways: [
      'Baking powder is the molecular trick to deep-fry crispiness in convection air.',
      'Rapid honey-soy glaze reduction coats wings with lacquer-like shine.',
      'Zero refined white sugar; naturally sweetened with pure clover honey.'
    ],
    sections: [
      {
        heading: 'The Chemistry of Alkaline Baking Powder on Poultry Skin',
        subheading: 'Why raising skin pH produces bubbly, blistered crispiness.',
        content: [
          'Chicken skin is largely composed of proteins and moisture. When alkaline baking powder is dusted over the skin, it alters the skin surface pH, promoting the breakdown of surface proteins.',
          'As the air fryer’s convection fan circulates dry 400°F air, carbon dioxide micro-bubbles form under the skin, creating thousands of tiny blistered craters that bake into a fragile, crackling crust.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make these extra spicy?', answer: 'Stir 1 tablespoon of Sriracha or chili crisp into the honey garlic glaze for spicy sweet perfection.' }
    ],
    tags: ['Chicken Wings', 'Air Fryer', 'Appetizer', 'Game Day', 'Honey Garlic', 'Party Food']
  },
  {
    id: 'rec-17',
    slug: 'warm-spinach-artichoke-skillet-dip',
    keyword: 'spinach artichoke dip skillet',
    category: 'appetizers',
    categoryLabel: 'Appetizers & Party Snacks',
    title: 'Hot & Bubbly Cast-Iron Spinach Artichoke Dip with Melted Gruyère & Parmesan',
    deck: 'Tender artichoke hearts, chopped baby spinach, and roasted garlic folded into a rich blend of cream cheese, tangy sour cream, aged Gruyère, and Parmigiano-Reggiano—baked in cast iron until golden and bubbling.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 5, 2026',
    lastUpdated: 'October 20, 2026',
    readTimeMinutes: 6,
    wordCount: 1290,
    realImage: {
      url: 'https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bubbly baked spinach artichoke dip in a black cast iron skillet served with toasted baguette slices',
      caption: 'Golden bubbling skillet spinach artichoke dip served hot with toasted artisan sourdough crostini.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 8,
      caloriesPerServing: 280,
      difficulty: 'Easy',
      cuisine: 'American Bistro',
      course: 'Appetizer / Dip',
      diet: ['Vegetarian', 'Gluten-Free Option', 'Keto-Friendly'],
      rating: 4.97,
      reviewsCount: 390
    },
    ingredients: [
      { id: 'ing-171', amount: '1 can (14 oz)', item: 'Artichoke hearts in water', notes: 'Drained and roughly chopped', group: 'Vegetables' },
      { id: 'ing-172', amount: '10 oz', item: 'Frozen chopped spinach or fresh baby spinach', notes: 'Thawed and thoroughly squeezed dry', group: 'Vegetables' },
      { id: 'ing-173', amount: '8 oz', item: 'Cream cheese', notes: 'Softened to room temperature', group: 'Dairy Base' },
      { id: 'ing-174', amount: '1/2 cup', item: 'Sour cream & 1/4 cup mayonnaise', notes: 'For tang and silky scoopability', group: 'Dairy Base' },
      { id: 'ing-175', amount: '4 cloves', item: 'Garlic', notes: 'Finely minced', group: 'Aromatics' },
      { id: 'ing-176', amount: '1 cup', item: 'Gruyère or Mozzarella cheese', notes: 'Freshly shredded, divided', group: 'Cheese' },
      { id: 'ing-177', amount: '1/2 cup', item: 'Parmigiano-Reggiano', notes: 'Freshly grated', group: 'Cheese' },
      { id: 'ing-178', amount: '1/4 tsp', item: 'Pinch of cayenne pepper & nutmeg', notes: 'Warm spice accent', group: 'Seasoning' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Wring Spinach Absolutely Dry',
        instruction: 'Preheat oven to 375°F (190°C). Place thawed chopped spinach in a clean kitchen towel and twist forcefully over the sink until no more green liquid drips out. Transfer dry spinach to a large mixing bowl.',
        proTip: 'Squeezing out moisture is the #1 rule to avoid a watery, separated dip.'
      },
      {
        stepNumber: 2,
        title: 'Beat the Cream Cheese Base',
        instruction: 'In the bowl with spinach, beat the softened cream cheese, sour cream, mayonnaise, minced garlic, cayenne, nutmeg, 1/2 tsp salt, and black pepper with a wooden spoon or hand mixer until smooth and fluffy.',
        proTip: 'Room temperature cream cheese blends effortlessly without cold lumps.'
      },
      {
        stepNumber: 3,
        title: 'Fold in Artichokes & Cheeses',
        instruction: 'Gently fold in the chopped artichoke hearts, half of the grated Parmigiano-Reggiano, and 3/4 cup of the shredded Gruyère until evenly distributed.',
        proTip: 'Leave artichoke pieces somewhat chunky for rewarding bite and texture.'
      },
      {
        stepNumber: 4,
        title: 'Transfer to Skillet & Top with Cheese',
        instruction: 'Spread the mixture into an 8 or 10-inch seasoned cast-iron skillet (or small baking dish). Scatter the remaining 1/4 cup Gruyère and remaining parmesan across the top.',
        proTip: 'Baking in cast iron keeps the dip hot at the table for over 30 minutes.'
      },
      {
        stepNumber: 5,
        title: 'Bake to Golden Blisters',
        instruction: 'Bake at 375°F for 20 minutes until bubbling at the edges. Switch oven to BROIL on HIGH for 2–3 minutes until the cheese crust is dotted with deep golden brown spots. Serve hot with warm tortilla chips, pita wedges, or toasted baguette.',
        proTip: 'Watch the broiler carefully to prevent burning the top cheese crust.'
      }
    ],
    nutrition: {
      calories: 280,
      proteinGrams: 9,
      carbsGrams: 7,
      fatGrams: 24,
      fiberGrams: 2,
      sodiumMg: 420
    },
    chefNotes: [
      'Bacon Addition: Stir in 4 slices of crisp crumbled bacon for a smoky flavor upgrade.',
      'Make-Ahead: Assemble in the skillet up to 24 hours in advance, cover with foil, and store in fridge. Add 5 minutes to bake time.'
    ],
    storageAdvice: {
      refrigerator: 'Refrigerate covered for up to 4 days.',
      reheating: 'Bake in an oven at 350°F (175°C) for 10 minutes until warm and melted again.'
    },
    summary: 'The ultimate party appetizer. Rich, velvety, and blanketed under a golden Gruyère crust that pulls in strands when scooped.',
    keyTakeaways: [
      'Wringing spinach dry eliminates watery separation.',
      'Gruyère cheese adds nutty complexity that elevates standard mozzarella.',
      'Cast-iron serving keeps dip warm throughout family gatherings.'
    ],
    sections: [
      {
        heading: 'Why Gruyère and Parmesan Outperform Standard Store Dips',
        subheading: 'High-glutamate aged cheeses and melting dynamics.',
        content: [
          'Commercial restaurant dips often rely on cheap processed cheese sauce that turns congealed and waxy as it cools. This recipe blends aged alpine Gruyère (celebrated for its smooth fondue melting properties) with aged Italian Parmigiano-Reggiano.',
          'These natural cheeses contain high levels of natural free glutamates, producing an explosion of savory umami that makes every bite deeply satisfying.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make this in a slow cooker?', answer: 'Yes! Cook on LOW for 2 hours, stirring once halfway through, then keep on WARM for party serving.' }
    ],
    tags: ['Spinach Dip', 'Appetizer', 'Cast Iron', 'Party Food', 'Vegetarian', 'Dip']
  },
  {
    id: 'rec-18',
    slug: 'velvety-roasted-garlic-hummus',
    keyword: 'roasted garlic hummus',
    category: 'appetizers',
    categoryLabel: 'Appetizers & Party Snacks',
    title: 'Silky Smooth Roasted Garlic & Tahini Hummus with Warm Olive Oil & Smoked Paprika',
    deck: 'Ultra-creamy Middle Eastern hummus made with skinless chickpeas, nutty Ethiopian sesame tahini, sweet roasted garlic cloves, fresh lemon juice, and cold ice water—swirled with extra virgin olive oil.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 4, 2026',
    lastUpdated: 'October 19, 2026',
    readTimeMinutes: 5,
    wordCount: 1240,
    realImage: {
      url: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bowl of smooth hummus swirled with olive oil, whole chickpeas, paprika and fresh parsley with warm pita',
      caption: 'Velvety roasted garlic hummus with a pool of olive oil, whole chickpeas, and smoked Spanish paprika.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      totalTimeMinutes: 45,
      servings: 6,
      caloriesPerServing: 210,
      difficulty: 'Easy',
      cuisine: 'Middle Eastern',
      course: 'Appetizer / Dip',
      diet: ['Vegan', 'Gluten-Free', 'High-Fiber'],
      rating: 4.97,
      reviewsCount: 310
    },
    ingredients: [
      { id: 'ing-181', amount: '1 whole head', item: 'Fresh garlic', notes: 'Top trimmed off, roasted in foil with olive oil', group: 'Roasted Garlic' },
      { id: 'ing-182', amount: '2 cans (15 oz each)', item: 'Chickpeas', notes: 'Simmered with 1/2 tsp baking soda for 15 minutes', group: 'Chickpeas' },
      { id: 'ing-183', amount: '1/2 cup', item: 'Premium pure sesame tahini', notes: 'Stirred well', group: 'Tahini Base' },
      { id: 'ing-184', amount: '1/3 cup', item: 'Freshly squeezed lemon juice', notes: 'Strained', group: 'Tahini Base' },
      { id: 'ing-185', amount: '1/4 cup', item: 'Ice-cold water', notes: 'The secret to fluffy whipped hummus', group: 'Emulsion' },
      { id: 'ing-186', amount: '1 tsp', item: 'Ground cumin & 1 tsp fine sea salt', notes: 'Seasoning', group: 'Seasoning' },
      { id: 'ing-187', amount: '3 tbsp', item: 'Extra virgin olive oil & smoked paprika', notes: 'For pooling in center', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Roast the Garlic Head',
        instruction: 'Preheat oven to 400°F (200°C). Slice 1/4 inch off the top of the garlic head to expose the cloves. Drizzle with 1 teaspoon olive oil, wrap tightly in aluminum foil, and bake for 35 minutes until the cloves are golden, sweet, and soft as butter.',
        proTip: 'Roasting transforms sharp, pungent allicin into sweet, caramelized umami cloves.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Chickpeas with Baking Soda',
        instruction: 'Drain and rinse the canned chickpeas. Place in a saucepan, cover with water, add 1/2 teaspoon baking soda, and simmer for 15 minutes. Drain and rinse under cold water, gently rubbing with your hands to slide skins off.',
        proTip: 'Baking soda raises pH, breaking down chickpea skins to create velvet-smooth hummus.'
      },
      {
        stepNumber: 3,
        title: 'Whip Tahini & Lemon Juice First',
        instruction: 'In a high-powered food processor, add tahini and fresh lemon juice. Process for a full 90 seconds until the mixture turns pale, thick, and whipped. Scrape down the sides.',
        proTip: 'Emulsifying tahini and lemon juice before adding chickpeas creates an airy, mousse-like foundation.'
      },
      {
        stepNumber: 4,
        title: 'Blend Warm Chickpeas & Roasted Garlic',
        instruction: 'Squeeze the caramelized roasted garlic cloves out of their papery skins directly into the processor. Add the warm chickpeas, ground cumin, and sea salt. Process for 3 minutes until smooth.',
        proTip: 'Warm chickpeas puree significantly finer than cold refrigerated chickpeas.'
      },
      {
        stepNumber: 5,
        title: 'Stream in Ice Water & Swirl',
        instruction: 'While the processor is running on high, slowly drizzle in the 1/4 cup ice-cold water. The hummus will transform from thick paste into an ultra-fluffy, pale ivory cloud. Spread into a wide shallow bowl, create a swirl well with the back of a spoon, and pool with extra virgin olive oil, whole chickpeas, and smoked paprika.',
        proTip: 'Ice water causes the tahini fats to whip into a light, creamy emulsion.'
      }
    ],
    nutrition: {
      calories: 210,
      proteinGrams: 7,
      carbsGrams: 19,
      fatGrams: 12,
      fiberGrams: 5,
      sodiumMg: 360
    },
    chefNotes: [
      'Tahini Quality: Always buy pure 100% roasted sesame seed tahini from Lebanon, Palestine, or Greece with a runny, pourable consistency.',
      'Herb Garnish: Fresh chopped parsley, toasted pine nuts, or sumac adds vibrant color and crunch.'
    ],
    storageAdvice: {
      refrigerator: 'Store in an airtight container for up to 6 days. Stir in a teaspoon of warm water if it firms up in the fridge.',
      freezer: 'Freezes well for up to 3 months. Drizzle a thin layer of olive oil over top before sealing.'
    },
    summary: 'The gold standard of Middle Eastern hummus. Light as air, deeply infused with sweet roasted garlic, and velvety smooth.',
    keyTakeaways: [
      'Baking soda softens chickpea pectin, eliminating graininess.',
      'Whipping tahini and lemon juice first creates a luxurious emulsion.',
      'Drizzling ice-cold water incorporates air for restaurant-style fluffiness.'
    ],
    sections: [
      {
        heading: 'Why Restaurant Hummus is Silky While Homemade is Often Gritty',
        subheading: 'Cellular pectin breakdown and emulsification science.',
        content: [
          'The gritty texture in homemade hummus comes from chickpea skins, which are constructed of tough cellulose and hemicellulose. Commercial hummus makers use giant wet-grinding mills that shatter these fibers.',
          'At home, adding 1/2 teaspoon of alkaline sodium bicarbonate (baking soda) softens the pectin bonds in the skins, allowing a standard food processor to liquefy them completely into a silk paste.'
        ]
      }
    ],
    faq: [
      { question: 'Do I really have to peel every chickpea?', answer: 'No! Simmering with baking soda dissolves the skins so thoroughly that peeling by hand is completely optional.' }
    ],
    tags: ['Hummus', 'Roasted Garlic', 'Vegan', 'Middle Eastern', 'Healthy Dip', 'Gluten Free']
  },
  {
    id: 'rec-19',
    slug: 'cast-iron-skillet-chocolate-chip-cookie',
    keyword: 'skillet chocolate chip cookie pizookie',
    category: 'baking',
    categoryLabel: 'Baking & Sweet Treats',
    title: 'Gooey Cast-Iron Skillet Chocolate Chip Cookie (Pizookie) with Brown Butter & Flaky Sea Salt',
    deck: 'A giant, thick, shareable chocolate chip cookie baked in a cast-iron skillet with nutty browned butter, chunks of bittersweet chocolate, crisp caramelized edges, and a molten center topped with cold vanilla ice cream.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 2, 2026',
    lastUpdated: 'October 18, 2026',
    readTimeMinutes: 7,
    wordCount: 1390,
    realImage: {
      url: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Freshly baked cast iron skillet chocolate chip cookie topped with melting vanilla ice cream and chocolate drizzle',
      caption: 'Warm cast-iron skillet chocolate chip cookie topped with melting vanilla bean ice cream and flaky sea salt.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      totalTimeMinutes: 35,
      servings: 8,
      caloriesPerServing: 440,
      difficulty: 'Easy',
      cuisine: 'American Baking',
      course: 'Dessert',
      diet: ['Vegetarian'],
      rating: 4.99,
      reviewsCount: 462
    },
    ingredients: [
      { id: 'ing-191', amount: '1/2 cup (1 stick)', item: 'Unsalted butter', notes: 'Browned until nutty and golden', group: 'Brown Butter' },
      { id: 'ing-192', amount: '1/2 cup', item: 'Dark brown sugar', notes: 'Packed', group: 'Sugars' },
      { id: 'ing-193', amount: '1/3 cup', item: 'Granulated sugar', notes: 'For crisp edges', group: 'Sugars' },
      { id: 'ing-194', amount: '1 large', item: 'Egg + 1 egg yolk', notes: 'Room temperature', group: 'Wet Mix' },
      { id: 'ing-195', amount: '1.5 tsp', item: 'Pure vanilla bean paste', notes: 'Madagascar', group: 'Wet Mix' },
      { id: 'ing-196', amount: '1.25 cups', item: 'All-purpose flour', notes: 'Spoon and leveled', group: 'Dry Mix' },
      { id: 'ing-197', amount: '1/2 tsp', item: 'Baking soda & 1/2 tsp fine sea salt', notes: 'Leavening', group: 'Dry Mix' },
      { id: 'ing-198', amount: '1.25 cups', item: 'Semi-sweet and bittersweet chocolate chunks', notes: 'Chopped from chocolate bars', group: 'Chocolate' },
      { id: 'ing-199', amount: '1/2 tsp', item: 'Maldon flaky sea salt', notes: 'For finishing crunch', group: 'Finish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown the Butter',
        instruction: 'Melt butter in an 8 or 10-inch cast-iron skillet over medium heat. Swirl gently as it foams and sizzles. After 3–4 minutes, golden-brown specks will settle at the bottom and a nutty aroma will rise. Immediately take off heat and let cool for 5 minutes in a mixing bowl.',
        proTip: 'Browning butter evaporates water and toasts milk solids, creating toffee-like flavor notes.'
      },
      {
        stepNumber: 2,
        title: 'Whisk Sugars & Eggs',
        instruction: 'Whisk brown sugar and granulated sugar into the warm brown butter until glossy. Whisk in the whole egg, extra egg yolk, and vanilla paste vigorously for 60 seconds until thick, pale, and ribbony.',
        proTip: 'The extra egg yolk provides rich lecithin fat that keeps the center gooey and fudgy.'
      },
      {
        stepNumber: 3,
        title: 'Fold in Dry Ingredients & Chocolate',
        instruction: 'Add flour, baking soda, and fine sea salt. Fold with a rubber spatula until just combined without dry flour streaks. Fold in 1 cup of chopped chocolate chunks (reserve 1/4 cup for the top).',
        proTip: 'Chopping chocolate bars creates irregular slivers that melt into chocolate pools, unlike uniform chips.'
      },
      {
        stepNumber: 4,
        title: 'Press into Skillet & Bake',
        instruction: 'Preheat oven to 350°F (175°C). Press the cookie dough evenly into the lightly greased cast-iron skillet. Press the reserved 1/4 cup chocolate chunks on top. Bake for 18–22 minutes until edges are golden and puffy, but the center is still soft and underbaked.',
        proTip: 'Do not overbake; pull when center looks slightly set as cast iron retains heat and continues cooking out of the oven.'
      },
      {
        stepNumber: 5,
        title: 'Flaky Salt & Ice Cream Crowning',
        instruction: 'Remove hot skillet from oven. Immediately sprinkle flaky Maldon sea salt across the top. Let cool for 5 minutes, then top with generous scoops of cold vanilla bean ice cream and dig in with spoons!',
        proTip: 'The cold ice cream melting into the warm, gooey chocolate center creates dessert nirvana.'
      }
    ],
    nutrition: {
      calories: 440,
      proteinGrams: 5,
      carbsGrams: 54,
      fatGrams: 23,
      fiberGrams: 3,
      sodiumMg: 280
    },
    chefNotes: [
      'Skillet Size: An 8-inch skillet yields a super-thick, deep-dish gooey cookie (bake 22 mins). A 10-inch skillet produces slightly crispier edges (bake 18 mins).',
      'Nut Crunch: Fold in 1/2 cup of toasted chopped pecans or walnuts for textured crunch.'
    ],
    storageAdvice: {
      refrigerator: 'Cover skillet with foil or transfer leftovers to a container for up to 4 days.',
      reheating: 'Warm in a 325°F (165°C) oven or microwave for 20 seconds to revive molten center.'
    },
    summary: 'The ultimate crowd-pleasing dessert. Nutty browned butter, pools of dark chocolate, crunchy cast-iron edges, and a warm molten core.',
    keyTakeaways: [
      'Brown butter infuses dough with caramelized toffee and hazelnut flavor.',
      'Cast iron creates shatteringly crisp edges with a gooey molten center.',
      'Flaky sea salt cuts through rich dark chocolate.'
    ],
    sections: [
      {
        heading: 'Why Browned Butter and Chopped Chocolate Transform Cookie Texture',
        subheading: 'Thermal browning and fat dispersion in cast-iron baking.',
        content: [
          'Ordinary melted butter retains about 16–18% water. When butter is browned in a skillet, that water evaporates, allowing the milk solids to toast into aromatic nutty compounds.',
          'Furthermore, bar chocolate contains pure cocoa butter without anti-melt stabilizers found in commercial chips, creating luxurious pools of molten chocolate throughout the cookie.'
        ]
      }
    ],
    faq: [
      { question: 'Can I bake this in a cake pan if I do not have cast iron?', answer: 'Yes! A round 8 or 9-inch metal cake pan or pie dish works well, though cast iron produces superior crispy edges.' }
    ],
    tags: ['Dessert', 'Skillet Cookie', 'Chocolate Chip', 'Baking', 'Pizookie', 'Comfort Food']
  },
  {
    id: 'rec-20',
    slug: 'rustic-mixed-berry-oat-crumble',
    keyword: 'berry crumble crisp oat',
    category: 'baking',
    categoryLabel: 'Baking & Sweet Treats',
    title: 'Rustic Warm Mixed Berry & Honey Crumble with Golden Brown Sugar Oat Streusel',
    deck: 'Sweet, jammy strawberries, blueberries, raspberries, and blackberries bubbling beneath a thick, crunchy blanket of rolled oats, toasted almonds, cinnamon, and golden brown butter.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 1, 2026',
    lastUpdated: 'October 17, 2026',
    readTimeMinutes: 6,
    wordCount: 1300,
    realImage: {
      url: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Baking dish with bubbling warm berry crumble topped with golden oat streusel and a scoop of vanilla ice cream',
      caption: 'Warm bubbling mixed berry crisp with golden brown sugar oat crumble and melting vanilla ice cream.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 35,
      totalTimeMinutes: 50,
      servings: 6,
      caloriesPerServing: 340,
      difficulty: 'Easy',
      cuisine: 'Rustic Home Baking',
      course: 'Dessert',
      diet: ['Vegetarian', 'Gluten-Free Adaptable'],
      rating: 4.95,
      reviewsCount: 295
    },
    ingredients: [
      { id: 'ing-201', amount: '5 cups', item: 'Fresh or frozen mixed berries', notes: 'Strawberries, blueberries, raspberries, blackberries', group: 'Fruit Filling' },
      { id: 'ing-202', amount: '3 tbsp', item: 'Pure maple syrup or honey', notes: 'Adjust to berry sweetness', group: 'Fruit Filling' },
      { id: 'ing-203', amount: '2 tbsp', item: 'Cornstarch or arrowroot powder', notes: 'To thicken jammy juices', group: 'Fruit Filling' },
      { id: 'ing-204', amount: '1 tbsp', item: 'Fresh lemon juice & 1 tsp lemon zest', notes: 'Brightens berry flavors', group: 'Fruit Filling' },
      { id: 'ing-205', amount: '1 cup', item: 'Old-fashioned rolled oats', notes: 'Whole grain (certified gluten-free if needed)', group: 'Oat Streusel' },
      { id: 'ing-206', amount: '1/2 cup', item: 'All-purpose flour or almond flour', notes: 'For crumble structure', group: 'Oat Streusel' },
      { id: 'ing-207', amount: '1/2 cup', item: 'Brown sugar', notes: 'Packed', group: 'Oat Streusel' },
      { id: 'ing-208', amount: '1/2 cup', item: 'Sliced almonds or chopped pecans', notes: 'For extra crunch', group: 'Oat Streusel' },
      { id: 'ing-209', amount: '6 tbsp', item: 'Unsalted butter', notes: 'Cold and cubed into pea-sized bits', group: 'Oat Streusel' },
      { id: 'ing-210', amount: '1 tsp', item: 'Ground cinnamon & 1/4 tsp fine sea salt', notes: 'Warm spice', group: 'Oat Streusel' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Toss the Berry Filling',
        instruction: 'Preheat oven to 375°F (190°C). Grease an 8-inch square ceramic baking dish or round pie dish with butter. In a bowl, toss the mixed berries with maple syrup, cornstarch, fresh lemon juice, lemon zest, and a pinch of salt until coated.',
        proTip: 'Cornstarch gelatinizes with the berry juices, creating a rich jammy consistency that will not run across the plate.'
      },
      {
        stepNumber: 2,
        title: 'Craft the Golden Oat Streusel',
        instruction: 'In a separate bowl, whisk together rolled oats, flour, brown sugar, sliced almonds, cinnamon, and salt. Add the cold cubed butter. Use your fingers or a pastry blender to rub the butter into the dry mix until clumpy, pea-sized crumbs form.',
        proTip: 'Keeping butter cold ensures the streusel bakes into crunchy, buttery clusters rather than melting flat.'
      },
      {
        stepNumber: 3,
        title: 'Assemble in Baking Dish',
        instruction: 'Pour the berry mixture into the prepared baking dish. Spread the oat streusel evenly over the top, gently pressing small clusters together to create crunchy topping nuggets.',
        proTip: 'Cover the fruit completely to prevent exposed berries from drying out in the oven.'
      },
      {
        stepNumber: 4,
        title: 'Bake Until Bubbling & Golden',
        instruction: 'Bake at 375°F for 32–38 minutes until the oat topping is deep golden brown and the berry juices are visibly bubbling furiously around the edges of the dish.',
        proTip: 'You must see fruit juices bubbling in the center to ensure the cornstarch has reached its full thickening temperature.'
      },
      {
        stepNumber: 5,
        title: 'Rest & Crown with Vanilla Cream',
        instruction: 'Let the crumble rest for 15 minutes before serving so the fruit juices settle into a thick compote. Spoon warm into bowls and serve with a generous scoop of vanilla bean ice cream or fresh whipped cream.',
        proTip: 'Serve warm for maximum comforting contrast.'
      }
    ],
    nutrition: {
      calories: 340,
      proteinGrams: 5,
      carbsGrams: 50,
      fatGrams: 15,
      fiberGrams: 6,
      sodiumMg: 140
    },
    chefNotes: [
      'Frozen Berry Tip: If using frozen berries, do not thaw them; toss directly with cornstarch and add 5 minutes to bake time.',
      'Gluten-Free Version: Use certified gluten-free rolled oats and substitute almond flour for all-purpose flour.'
    ],
    storageAdvice: {
      refrigerator: 'Store covered in the refrigerator for up to 4 days.',
      reheating: 'Reheat in a 350°F (175°C) oven for 10 minutes to restore oat crunch.'
    },
    summary: 'Juicy, jammy berries bubbling beneath a thick, buttery oat streusel. Simple, wholesome, and evocative of rustic country kitchens.',
    keyTakeaways: [
      'Cornstarch and lemon juice turn berries into a glossy, thick compote.',
      'Cold butter produces crunchy, clustered oat streusel.',
      'Packed with dietary fiber and natural berry antioxidants.'
    ],
    sections: [
      {
        heading: 'The Role of Starch Gelatinization in Fruit Crumbles',
        subheading: 'Why bubbling fruit juices indicate the crisp is done.',
        content: [
          'Berries are composed of over 85% water. When heated, their cellular pectin breaks down, releasing immense moisture. Without a binding agent, fruit crisps turn into soup.',
          'Cornstarch requires a temperature of 203°F (95°C) to undergo complete starch gelatinization. Once the fruit bubbles vigorously in the center, the starch molecules swell, trapping the juices into a glossy compote that clings to the crunchy oat streusel.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make this with apples or peaches?', answer: 'Yes! Sliced peeled apples with a dash of nutmeg or peeled peaches make a spectacular fall and summer variation.' }
    ],
    tags: ['Berry Crumble', 'Dessert', 'Baking', 'Oat Streusel', 'Comfort Food', 'Summer Baking']
  }
];
