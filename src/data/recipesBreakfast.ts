import { Article } from '../types';

export const RECIPES_BREAKFAST: Article[] = [
  {
    id: 'rec-6',
    slug: 'fluffy-ricotta-lemon-pancakes',
    keyword: 'ricotta lemon pancakes',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Brunch',
    title: 'Cloud-Like Lemon Ricotta Souffle Pancakes with Warm Blueberry Compote',
    deck: 'Airy, delicate skillet pancakes whipped with whole-milk ricotta, fragrant Meyer lemon zest, and gently folded egg whites—served with a 5-minute maple blueberry reduction.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 18, 2026',
    lastUpdated: 'October 27, 2026',
    readTimeMinutes: 7,
    wordCount: 1380,
    realImage: {
      url: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
      alt: 'Stack of fluffy lemon ricotta pancakes with powdered sugar and fresh blueberries',
      caption: 'Featherlight skillet lemon ricotta pancakes topped with whipped honey butter and fresh berries.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 12,
      totalTimeMinutes: 27,
      servings: 4,
      caloriesPerServing: 360,
      difficulty: 'Easy',
      cuisine: 'American Brunch',
      course: 'Breakfast',
      diet: ['Vegetarian'],
      rating: 4.97,
      reviewsCount: 389
    },
    ingredients: [
      { id: 'ing-61', amount: '1.25 cups', item: 'All-purpose flour', notes: 'Sifted', group: 'Dry Mix' },
      { id: 'ing-62', amount: '2 tsp', item: 'Baking powder', notes: 'Aluminum-free', group: 'Dry Mix' },
      { id: 'ing-63', amount: '2 tbsp', item: 'Granulated sugar', notes: 'Rubbed with lemon zest', group: 'Dry Mix' },
      { id: 'ing-64', amount: '1 cup', item: 'Whole milk ricotta cheese', notes: 'Drained of excess whey', group: 'Wet Mix' },
      { id: 'ing-65', amount: '2 large', item: 'Eggs', notes: 'Separated into yolks and whites', group: 'Wet Mix' },
      { id: 'ing-66', amount: '3/4 cup', item: 'Whole milk', notes: 'Room temperature', group: 'Wet Mix' },
      { id: 'ing-67', amount: '2 tbsp', item: 'Fresh lemon zest & 1 tbsp juice', notes: 'Meyer lemon preferred', group: 'Flavor' },
      { id: 'ing-68', amount: '1 tsp', item: 'Pure vanilla bean paste', notes: 'For floral aroma', group: 'Flavor' },
      { id: 'ing-69', amount: '2 cups', item: 'Fresh blueberries & 1/4 cup maple syrup', notes: 'For warm compote topping', group: 'Compote' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Infuse Lemon Sugar & Sift Flour',
        instruction: 'In a small bowl, rub the lemon zest into granulated sugar with your fingertips until pale yellow, moist, and fragrant with essential citrus oils. In a separate large bowl, whisk the flour, baking powder, and 1/2 tsp salt.',
        proTip: 'Rubbing zest into sugar fractures the microscopic oil glands in citrus peel, intensifying the aroma 5-fold.'
      },
      {
        stepNumber: 2,
        title: 'Whisk Ricotta & Egg Yolks',
        instruction: 'In a medium bowl, whisk the ricotta, egg yolks, milk, lemon juice, vanilla paste, and infused lemon sugar until smooth and creamy. Pour the wet ingredients into the dry flour mix and stir with a rubber spatula until just combined (a few lumps are desirable).',
        proTip: 'Do not overmix; overworking pancake batter develops gluten strands that make pancakes chewy rather than fluffy.'
      },
      {
        stepNumber: 3,
        title: 'Whip Whites to Soft Peaks',
        instruction: 'In a clean glass or metal bowl, beat the 2 egg whites with a handheld whisk or electric mixer until soft, glossy peaks form (about 2 minutes). Gently fold one-third of the egg whites into the batter to lighten it, then delicately fold in the remaining whites.',
        proTip: 'Fold using a figure-8 motion with a wide silicone spatula to avoid deflating the trapped air bubbles.'
      },
      {
        stepNumber: 4,
        title: 'Griddle over Gentle Heat',
        instruction: 'Preheat a heavy non-stick skillet or cast-iron griddle over medium-low heat. Brush lightly with melted unsalted butter. Scoop 1/3-cup mounds of batter onto the griddle. Cook gently for 3–4 minutes until the undersides are golden and bubbles begin to surface. Flip carefully and cook 2–3 minutes more until puffed.',
        proTip: 'Low heat is crucial for ricotta pancakes; high heat will burn the exterior before the custard-like center sets.'
      },
      {
        stepNumber: 5,
        title: 'Simmer Compote & Serve',
        instruction: 'In a small saucepan, simmer blueberries with maple syrup and 1 tsp lemon juice for 4 minutes until berries burst and sauce is glossy. Ladle warm over the stack of pancakes with powdered sugar.',
        proTip: 'Serve immediately while hot and lofty.'
      }
    ],
    nutrition: {
      calories: 360,
      proteinGrams: 14,
      carbsGrams: 46,
      fatGrams: 14,
      fiberGrams: 3,
      sodiumMg: 340
    },
    chefNotes: [
      'Draining Ricotta: If your ricotta has excess liquid in the container, drain it in a fine strainer lined with a paper towel for 15 minutes before measuring.',
      'Buttermilk Swap: You can replace whole milk with buttermilk for a slightly tangier flavor profile.'
    ],
    storageAdvice: {
      refrigerator: 'Store leftover pancakes between sheets of parchment paper in a sealed container for up to 2 days.',
      freezer: 'Freeze cooked pancakes flat on a baking sheet, then transfer to a freezer bag for up to 1 month.',
      reheating: 'Toast in a toaster or reheat on a dry skillet over low heat to restore fluffy texture.'
    },
    summary: 'The pinnacle of weekend brunch luxury. Airy egg whites and rich whole-milk ricotta create an ethereal, melt-in-your-mouth pancake texture.',
    keyTakeaways: [
      'Separating eggs and whipping whites produces souffle-like height.',
      'Ricotta delivers moisture and tenderness without heavy greasiness.',
      'Citrus zest sugar infusion lifts the flavor of the berries and maple syrup.'
    ],
    sections: [
      {
        heading: 'The Science of Souffle Pancakes: Why Whipping Whites Matters',
        subheading: 'Physical aeration versus chemical leavening in delicate batters.',
        content: [
          'Standard pancakes rely strictly on chemical leaveners like baking powder, which react with heat and moisture to generate carbon dioxide gas. While this produces decent fluffiness, the heavy weight of ricotta cheese can easily drag down dense batter.',
          'By mechanically incorporating air into egg white protein matrices, millions of microscopic air pockets are introduced. When the batter hits the hot pan, the air trapped inside these bubbles expands rapidly, lifting the ricotta into a cloud-like texture.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make the batter the night before?', answer: 'The dry and wet ingredients can be prepped separately the night before, but whip and fold the egg whites immediately before cooking to prevent the foam from deflating.' }
    ],
    tags: ['Breakfast', 'Pancakes', 'Brunch', 'Lemon Ricotta', 'Weekend Cooking', 'Vegetarian']
  },
  {
    id: 'rec-7',
    slug: 'traditional-shakshuka-feta-eggs',
    keyword: 'shakshuka with feta',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Brunch',
    title: 'Authentic North African Shakshuka with Spiced Tomato Pepper Sauce & Runny Poached Eggs',
    deck: 'Farm-fresh eggs gently poached in a simmering, smoky sauce of crushed tomatoes, sweet bell peppers, caramelized onions, cumin, and harissa, crowned with crumbled Greek feta and fresh cilantro.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 16, 2026',
    lastUpdated: 'October 26, 2026',
    readTimeMinutes: 6,
    wordCount: 1340,
    realImage: {
      url: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cast iron skillet of warm shakshuka with poached eggs, tomato sauce, feta cheese, and crusty bread',
      caption: 'Traditional skillet shakshuka with golden runny poached yolks, crumbled feta, and warm pita bread.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 4,
      caloriesPerServing: 295,
      difficulty: 'Easy',
      cuisine: 'North African / Middle Eastern',
      course: 'Breakfast & Brunch',
      diet: ['Vegetarian', 'Gluten-Free', 'Keto-Friendly'],
      rating: 4.96,
      reviewsCount: 351
    },
    ingredients: [
      { id: 'ing-71', amount: '2 tbsp', item: 'Extra virgin olive oil', notes: 'First cold pressed', group: 'Base' },
      { id: 'ing-72', amount: '1 medium', item: 'Yellow onion', notes: 'Halved and thinly sliced', group: 'Base' },
      { id: 'ing-73', amount: '1 large', item: 'Red bell pepper', notes: 'Stemmed, seeded, and sliced into thin strips', group: 'Base' },
      { id: 'ing-74', amount: '4 cloves', item: 'Garlic', notes: 'Thinly sliced', group: 'Base' },
      { id: 'ing-75', amount: '1 tbsp', item: 'Harissa paste or sweet paprika', notes: 'To taste', group: 'Spices' },
      { id: 'ing-76', amount: '1 tsp', item: 'Ground cumin & ground coriander', notes: 'Fragrant', group: 'Spices' },
      { id: 'ing-77', amount: '1 can (28 oz)', item: 'Whole peeled tomatoes', notes: 'Crushed with juices', group: 'Sauce' },
      { id: 'ing-78', amount: '5 large', item: 'Fresh eggs', notes: 'Pasture-raised preferred', group: 'Eggs' },
      { id: 'ing-79', amount: '1/2 cup', item: 'Greek feta cheese', notes: 'Crumbled block feta in brine', group: 'Garnish' },
      { id: 'ing-80', amount: '1/4 cup', item: 'Fresh parsley & cilantro', notes: 'Roughly chopped', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Soften Onions & Bell Peppers',
        instruction: 'Heat olive oil in a wide 12-inch cast-iron skillet over medium heat. Add the sliced onion and red bell pepper. Cook slowly for 8–10 minutes, stirring occasionally, until deeply soft and beginning to caramelize at the edges.',
        proTip: 'Patiently caramelizing the peppers and onions releases natural sugars that balance the acidity of tomatoes.'
      },
      {
        stepNumber: 2,
        title: 'Toast Aromatics & Spices',
        instruction: 'Stir in the sliced garlic, harissa paste, ground cumin, coriander, salt, and black pepper. Cook for 1–2 minutes until the spices bloom into the warm oil and release an intoxicating fragrance.',
        proTip: 'Blooming spices in warm fat dissolves oil-soluble flavor compounds, enhancing depth.'
      },
      {
        stepNumber: 3,
        title: 'Simmer the Rich Tomato Sauce',
        instruction: 'Pour in the crushed tomatoes with their juices. Stir well, bringing to a simmer. Reduce heat to medium-low and cook uncovered for 10 minutes until the sauce thickens into a rich, spoonable consistency.',
        proTip: 'Taste and adjust salt; a pinch of brown sugar can be added if tomatoes are excessively tart.'
      },
      {
        stepNumber: 4,
        title: 'Poach Eggs in Sauce Wells',
        instruction: 'Use the back of a large spoon to make 5 small wells or depressions in the sauce. Crack an egg into each well. Cover the skillet tightly with a lid and cook on low heat for 5–7 minutes, until the egg whites are completely opaque and set, but the yolks remain soft and jiggly.',
        proTip: 'Watch closely; eggs continue to cook from residual heat even after removing the lid.'
      },
      {
        stepNumber: 5,
        title: 'Scatter Feta, Herbs & Serve',
        instruction: 'Remove lid, take skillet off the heat, and scatter crumbled feta cheese, fresh cilantro, and parsley across the top. Serve bubbling hot straight from the skillet alongside warm crusty sourdough or pillowy pita bread for dipping.',
        proTip: 'Puncture the yolks at the table and swirl them into the spiced tomato sauce.'
      }
    ],
    nutrition: {
      calories: 295,
      proteinGrams: 16,
      carbsGrams: 18,
      fatGrams: 17,
      fiberGrams: 4,
      sodiumMg: 580
    },
    chefNotes: [
      'Serving Tip: Shakshuka is meant to be eaten communally right out of the cast iron pan with pieces of warm bread acting as utensils.',
      'Greens Addition: Stir in 2 cups of chopped Swiss chard or baby kale during step 3 for an earthy green variation.'
    ],
    storageAdvice: {
      refrigerator: 'The tomato sauce base can be made 3 days ahead and stored in the fridge. Warm the sauce on the stove and crack fresh eggs into it when ready to eat.',
      freezer: 'Freeze the cooked sauce base (without eggs) for up to 3 months.',
      reheating: 'Leftover cooked eggs can be reheated on low heat, though yolks may firm up.'
    },
    summary: 'A vibrant, one-skillet North African brunch icon. Golden runny yolks mingled with sweet stewed peppers and salty feta.',
    keyTakeaways: [
      'Cast-iron pan provides even, gentle heat distribution for poaching eggs without scorching.',
      'Harissa paste delivers warmth, smokiness, and subtle heat.',
      'Naturally gluten-free, vegetarian, and nutrient-dense.'
    ],
    sections: [
      {
        heading: 'The Art of the Perfect Runny Poached Egg in Shakshuka',
        subheading: 'Mastering temperature control to prevent rubbery yolks.',
        content: [
          'The challenge of stovetop egg poaching lies in the difference between white and yolk cooking temperatures: egg whites coagulate at 144°F–149°F (62°C–65°C), while yolks solidify at 149°F–158°F (65°C–70°C).',
          'By trapping steam beneath a tight-fitting skillet lid, the upper surface of the egg whites sets quickly via radiant vapor heat before the internal yolk temperature exceeds 145°F, preserving an ultra-runny, velvet yolk center.'
        ]
      }
    ],
    faq: [
      { question: 'Can I bake this in the oven instead of stovetop?', answer: 'Yes! After adding the eggs into the wells, transfer the oven-safe skillet to a preheated 375°F (190°C) oven and bake uncovered for 8–10 minutes until whites are set.' }
    ],
    tags: ['Shakshuka', 'Brunch', 'Eggs', 'Vegetarian', 'Cast Iron', 'Mediterranean']
  },
  {
    id: 'rec-8',
    slug: 'overnight-blueberry-chia-pudding',
    keyword: 'overnight chia pudding pots',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Brunch',
    title: 'Overnight Vanilla Bean Chia Seed Pudding Pots with Fresh Blueberries & Toasted Almonds',
    deck: 'A creamy, no-cook weekday breakfast miracle made with wholesome chia seeds, almond milk, real Madagascar vanilla, and pure maple syrup layered with antioxidant-rich blueberry puree.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 14, 2026',
    lastUpdated: 'October 25, 2026',
    readTimeMinutes: 5,
    wordCount: 1250,
    realImage: {
      url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Glass jars of layered chia seed pudding with fresh blueberries and toasted sliced almonds',
      caption: 'Creamy vegan overnight chia seed pudding pots topped with fresh blueberries, mint and sliced almonds.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      totalTimeMinutes: 10,
      servings: 4,
      caloriesPerServing: 240,
      difficulty: 'Easy',
      cuisine: 'Healthy Plant-Based',
      course: 'Breakfast Grab-and-Go',
      diet: ['Vegan', 'Gluten-Free', 'Dairy-Free', 'High-Fiber'],
      rating: 4.94,
      reviewsCount: 260
    },
    ingredients: [
      { id: 'ing-81', amount: '1/2 cup', item: 'Black or white chia seeds', notes: 'Whole organic', group: 'Pudding Base' },
      { id: 'ing-82', amount: '2 cups', item: 'Unsweetened almond milk or oat milk', notes: 'Creamy style', group: 'Pudding Base' },
      { id: 'ing-83', amount: '3 tbsp', item: 'Pure maple syrup or raw honey', notes: 'Grade A', group: 'Pudding Base' },
      { id: 'ing-84', amount: '1.5 tsp', item: 'Pure vanilla bean paste', notes: 'For sweet floral aroma', group: 'Pudding Base' },
      { id: 'ing-85', amount: '1/4 tsp', item: 'Ground cinnamon & pinch of fine sea salt', notes: 'Flavor enhancer', group: 'Pudding Base' },
      { id: 'ing-86', amount: '1.5 cups', item: 'Fresh blueberries', notes: 'Divided (half pureed, half whole)', group: 'Topping & Layers' },
      { id: 'ing-87', amount: '1/4 cup', item: 'Toasted sliced almonds', notes: 'For satisfying crunch', group: 'Topping & Layers' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk the Chia Base',
        instruction: 'In a large mixing bowl or 4-cup measuring pitcher, whisk together the chia seeds, almond milk, maple syrup, vanilla bean paste, cinnamon, and a tiny pinch of sea salt until thoroughly combined.',
        proTip: 'Whisk vigorously for a full 60 seconds so all chia seeds are suspended in liquid without clumping.'
      },
      {
        stepNumber: 2,
        title: 'Rest & Re-Whisk (Crucial Step)',
        instruction: 'Let the mixture sit at room temperature for 10 minutes. Whisk thoroughly once more to break apart any seeds that settled at the bottom. This prevents dense seed lumps from forming.',
        proTip: 'The second whisk ensures a uniformly silky pudding texture.'
      },
      {
        stepNumber: 3,
        title: 'Chill Overnight',
        instruction: 'Cover the bowl with plastic wrap or divide evenly into 4 individual 8-ounce glass mason jars. Seal and refrigerate for at least 4 hours, ideally overnight (8–12 hours), allowing seeds to fully gel.',
        proTip: 'Chia seeds absorb 10–12 times their weight in liquid, creating a pudding identical to tapioca.'
      },
      {
        stepNumber: 4,
        title: 'Prepare the Blueberry Puree',
        instruction: 'In a small blender or with a fork in a bowl, blend or crush half the fresh blueberries with 1 teaspoon of maple syrup and a splash of lemon juice until a luscious compote forms.',
        proTip: 'Swirling the violet blueberry puree into the white pudding creates an elegant marble effect.'
      },
      {
        stepNumber: 5,
        title: 'Layer, Garnish & Enjoy',
        instruction: 'Spoon the blueberry puree over or between layers of chilled chia pudding. Top with whole fresh blueberries, toasted sliced almonds, and a fresh mint leaf. Grab and enjoy on the go!',
        proTip: 'Pack in a lunchbox with a reusable spoon for busy morning commutes.'
      }
    ],
    nutrition: {
      calories: 240,
      proteinGrams: 7,
      carbsGrams: 28,
      fatGrams: 11,
      fiberGrams: 10,
      sodiumMg: 120
    },
    chefNotes: [
      'Protein Boost: Stir 2 tablespoons of vanilla hemp or plant-based protein powder into the liquid before adding the seeds.',
      'Thick vs Thin: If you prefer a thinner consistency in the morning, splash in 1–2 tablespoons of additional almond milk and stir.'
    ],
    storageAdvice: {
      refrigerator: 'Keeps fresh and delicious in sealed mason jars for up to 5 days in the refrigerator.',
      freezer: 'Chia pudding freezes well for up to 2 months. Thaw overnight in the fridge before serving.'
    },
    summary: 'Zero cooking required. Packed with soluble fiber, plant-based omega-3s, and the comforting aroma of real vanilla bean.',
    keyTakeaways: [
      'No cooking, minimal prep, ideal for batch Sunday meal planning.',
      '10 grams of dietary fiber per jar supports digestion and sustained morning energy.',
      'Naturally dairy-free and gluten-free.'
    ],
    sections: [
      {
        heading: 'How Chia Seed Mucilage Creates Silky Pudding Without Gelatin',
        subheading: 'Understanding the hydrophilic nature of Salvia hispanica seeds.',
        content: [
          'Chia seeds possess an outer shell composed of soluble dietary fiber that is exceptionally hydrophilic. When immersed in liquid, this fiber expands and secretes a translucent gel called mucilage.',
          'This natural polysaccharide network traps water molecules, thickening almond milk into a luxurious, custard-like consistency without requiring eggs, starches, or stovetop boiling.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use dairy milk instead of almond milk?', answer: 'Absolutely! Whole dairy milk, 2% milk, or Greek yogurt diluted with milk produces an even richer, creamier pudding.' }
    ],
    tags: ['Breakfast', 'Meal Prep', 'Chia Pudding', 'Vegan', 'Gluten Free', 'Grab and Go']
  },
  {
    id: 'rec-9',
    slug: 'golden-brioche-french-toast',
    keyword: 'brioche french toast',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Brunch',
    title: 'Custard-Soaked Golden Brioche French Toast with Cinnamon Whipped Honey Butter',
    deck: 'Thick slices of rich butter brioche soaked in an aromatic vanilla-nutmeg custard, griddled in foaming butter until golden and crisp-edged with a tender, soufflé-like interior.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 11, 2026',
    lastUpdated: 'October 24, 2026',
    readTimeMinutes: 6,
    wordCount: 1320,
    realImage: {
      url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',
      alt: 'Stack of golden brioche French toast topped with whipped butter, berries and dripping maple syrup',
      caption: 'Thick-cut golden brioche French toast with whipped honey butter, fresh blackberries, and warm syrup.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 12,
      totalTimeMinutes: 22,
      servings: 4,
      caloriesPerServing: 420,
      difficulty: 'Easy',
      cuisine: 'French-American Brunch',
      course: 'Breakfast',
      diet: ['Vegetarian'],
      rating: 4.98,
      reviewsCount: 412
    },
    ingredients: [
      { id: 'ing-91', amount: '8 thick slices (1-inch)', item: 'Brioche or Challah bread', notes: 'Slightly stale / day-old preferred', group: 'Bread' },
      { id: 'ing-92', amount: '4 large', item: 'Eggs', notes: 'Pasture-raised', group: 'Custard' },
      { id: 'ing-93', amount: '3/4 cup', item: 'Whole milk & 1/4 cup heavy cream', notes: 'For rich mouthfeel', group: 'Custard' },
      { id: 'ing-94', amount: '2 tbsp', item: 'Brown sugar', notes: 'Packed', group: 'Custard' },
      { id: 'ing-95', amount: '1 tsp', item: 'Ground cinnamon & 1/4 tsp ground nutmeg', notes: 'Freshly grated nutmeg', group: 'Custard' },
      { id: 'ing-96', amount: '1.5 tsp', item: 'Pure vanilla extract', notes: 'Madagascar', group: 'Custard' },
      { id: 'ing-97', amount: '3 tbsp', item: 'Unsalted butter', notes: 'For frying', group: 'Griddling' },
      { id: 'ing-98', amount: '1/2 cup', item: 'Unsalted butter & 2 tbsp honey', notes: 'Whipped together with cinnamon for topping', group: 'Honey Butter' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Whisk the Silk Custard',
        instruction: 'In a wide, shallow dish (such as a pie dish or 9x13 casserole dish), vigorously whisk together eggs, whole milk, heavy cream, brown sugar, cinnamon, nutmeg, vanilla, and a pinch of salt until completely homogenous without any streaks of egg white.',
        proTip: 'Using a wide dish allows full slices of bread to lay flat for even soaking.'
      },
      {
        stepNumber: 2,
        title: 'Properly Soak the Brioche',
        instruction: 'Dip each brioche slice into the custard bath. Allow it to soak for 30–45 seconds per side. Gently press down so the porous bread absorbs the liquid into its core, then lift with a spatula and let excess liquid drip back into the dish.',
        proTip: 'Day-old dry bread drinks in the custard like a sponge without falling apart; fresh bread can turn soggy.'
      },
      {
        stepNumber: 3,
        title: 'Griddle in Foaming Butter',
        instruction: 'Melt 1.5 tablespoons of butter in a large non-stick skillet or cast-iron griddle over medium heat. When the butter foams and subsides, place the soaked bread slices into the pan.',
        proTip: 'Do not overcrowd; cook in batches of 2 or 3 slices to maintain consistent griddle heat.'
      },
      {
        stepNumber: 4,
        title: 'Cook to Deep Caramelization',
        instruction: 'Cook for 3–4 minutes on the first side until deep golden brown with caramelized edges. Flip carefully and cook 3–4 minutes on the second side. The toast should feel slightly puffed and resilient to the touch.',
        proTip: 'The brown sugar in the custard gently caramelizes in the butter, providing a crackly exterior crust.'
      },
      {
        stepNumber: 5,
        title: 'Top with Honey Butter & Maple Syrup',
        instruction: 'Transfer hot slices to serving plates. Immediately dollop with cinnamon whipped honey butter so it melts across the surface. Dust with powdered sugar, scatter with fresh berries, and drizzle with warm pure maple syrup.',
        proTip: 'Whip softened butter with honey using an electric hand mixer for 2 minutes for cloud-like spreadability.'
      }
    ],
    nutrition: {
      calories: 420,
      proteinGrams: 11,
      carbsGrams: 48,
      fatGrams: 22,
      fiberGrams: 2,
      sodiumMg: 380
    },
    chefNotes: [
      'Staling Fresh Bread: If your brioche is brand new and soft, spread slices on a baking sheet and bake at 275°F (135°C) for 10 minutes to dry them out before soaking.',
      'Alcohol Splash: Add 1 tablespoon of Grand Marnier (orange liqueur) or bourbon to the custard for sophisticated weekend entertaining.'
    ],
    storageAdvice: {
      refrigerator: 'Keep cooked slices wrapped in foil in the fridge for up to 3 days.',
      freezer: 'Freeze cooked slices between sheets of wax paper in a freezer bag for up to 2 months.',
      reheating: 'Toast directly from frozen in a conventional toaster or toaster oven until crisp.'
    },
    summary: 'Buttery brioche transformed into a golden, custard-soft masterpiece. Crisp exterior with an impossibly tender, pudding-like center.',
    keyTakeaways: [
      'Brioche has high egg and butter content, making it the supreme bread for French toast.',
      'Equal parts milk and cream strike the right moisture-to-fat balance.',
      'Slightly staled bread prevents soggy centers.'
    ],
    sections: [
      {
        heading: 'Why Brioche is Superior to Standard Sandwich Bread',
        subheading: 'Enriched dough physics and egg-liquid absorption.',
        content: [
          'Ordinary sandwich bread has a tight crumb and low fat content; when dipped in liquid, it collapses quickly into a wet paste. Brioche is an enriched bread made with substantial quantities of butter and eggs.',
          'Its open, resilient crumb absorbs the custard deeply while retaining its structural integrity on the griddle, puffing up like a warm souffle as the eggs set.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make French toast in advance for a crowd?', answer: 'Yes! Cook all slices on the griddle, then arrange on a wire rack set over a baking sheet and hold in a 250°F (120°C) oven for up to 30 minutes until ready to serve.' }
    ],
    tags: ['French Toast', 'Brunch', 'Brioche', 'Breakfast', 'Sweet Breakfast', 'Weekend Recipe']
  },
  {
    id: 'rec-10',
    slug: 'baked-hash-brown-egg-casserole',
    keyword: 'hash brown breakfast casserole',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Brunch',
    title: 'Crispy Baked Cheddar & Herb Hash Brown Breakfast Casserole with Savory Bacon',
    deck: 'Golden shredded hash browns baked with smoky bacon, sauteed peppers, sharp aged cheddar, and a creamy egg custard. Feeds a crowd with effortless one-baking-dish convenience.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 9, 2026',
    lastUpdated: 'October 23, 2026',
    readTimeMinutes: 7,
    wordCount: 1360,
    realImage: {
      url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sliced square of baked hash brown and cheddar egg casserole on a plate with fresh chives',
      caption: 'Golden-crusted cheddar hash brown breakfast casserole with crispy bacon and fresh chives.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 45,
      totalTimeMinutes: 60,
      servings: 8,
      caloriesPerServing: 385,
      difficulty: 'Easy',
      cuisine: 'American Comfort',
      course: 'Breakfast Casserole',
      diet: ['Gluten-Free', 'High-Protein'],
      rating: 4.95,
      reviewsCount: 374
    },
    ingredients: [
      { id: 'ing-101', amount: '1 bag (30 oz)', item: 'Shredded hash brown potatoes', notes: 'Thawed and squeezed dry with kitchen towel', group: 'Potatoes' },
      { id: 'ing-102', amount: '8 slices', item: 'Thick-cut bacon', notes: 'Cooked crisp and crumbled', group: 'Meat & Veggies' },
      { id: 'ing-103', amount: '1 small', item: 'Yellow onion & 1 bell pepper', notes: 'Diced and sautéed in bacon drippings', group: 'Meat & Veggies' },
      { id: 'ing-104', amount: '8 large', item: 'Eggs', notes: 'Beaten', group: 'Custard' },
      { id: 'ing-105', amount: '1 cup', item: 'Whole milk or half-and-half', notes: 'For rich body', group: 'Custard' },
      { id: 'ing-106', amount: '2 cups', item: 'Sharp cheddar cheese', notes: 'Freshly shredded, divided', group: 'Cheese' },
      { id: 'ing-107', amount: '1 tsp', item: 'Garlic powder, onion powder & smoked paprika', notes: 'Seasoning blend', group: 'Custard' },
      { id: 'ing-108', amount: '1/4 cup', item: 'Fresh chives', notes: 'Finely sliced for garnish', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Crisp Bacon & Sauté Vegetables',
        instruction: 'Preheat oven to 375°F (190°C). Grease a 9x13-inch ceramic or glass baking dish with butter. In a skillet over medium heat, fry the bacon until crisp. Remove and crumble. Sauté diced onion and bell pepper in 1 tablespoon of bacon drippings for 4 minutes.',
        proTip: 'Sautéing vegetables first removes excess water so the casserole does not turn watery during baking.'
      },
      {
        stepNumber: 2,
        title: 'Squeeze Moisture from Hash Browns',
        instruction: 'Place thawed shredded hash browns in a clean dish towel or paper towels and wring forcefully over the sink to expel trapped water. Transfer dry potatoes to a large bowl.',
        proTip: 'Dry potatoes crisp up around the casserole edges; wet potatoes result in a soggy, dense bake.'
      },
      {
        stepNumber: 3,
        title: 'Combine Fillings & Custard',
        instruction: 'Toss the dried hash browns with crumbled bacon, sautéed peppers and onions, and 1.5 cups of the shredded cheddar. In a separate bowl, whisk eggs, milk, garlic powder, onion powder, smoked paprika, 1 tsp salt, and 1/2 tsp pepper.',
        proTip: 'Pour the egg mixture over the potato blend and stir gently to distribute ingredients evenly.'
      },
      {
        stepNumber: 4,
        title: 'Bake to Golden Crust',
        instruction: 'Spread mixture evenly into the prepared 9x13 dish. Sprinkle remaining 1/2 cup cheddar over top. Bake uncovered at 375°F (190°C) for 40–45 minutes until the center is set and edges are deep golden and crackling.',
        proTip: 'Insert a knife into the center; it should come out clean without wet egg residue.'
      },
      {
        stepNumber: 5,
        title: 'Rest, Slice & Garnish',
        instruction: 'Allow the casserole to rest for 10 minutes on a wire rack before slicing into clean squares. Garnish with chopped fresh chives and serve with hot sauce or salsa on the side.',
        proTip: 'Resting allows the egg proteins to set firmly so clean, beautiful squares can be served.'
      }
    ],
    nutrition: {
      calories: 385,
      proteinGrams: 20,
      carbsGrams: 26,
      fatGrams: 22,
      fiberGrams: 3,
      sodiumMg: 610
    },
    chefNotes: [
      'Overnight Make-Ahead: Assemble the entire casserole the evening before, cover with foil, and refrigerate overnight. In the morning, bake directly from the fridge, adding 5–10 extra minutes to baking time.',
      'Sausage Variation: Replace bacon with browned breakfast pork sausage or spiced chorizo.'
    ],
    storageAdvice: {
      refrigerator: 'Refrigerate wrapped tightly in plastic or foil for up to 4 days.',
      freezer: 'Individual squares freeze beautifully for up to 3 months. Wrap tightly in parchment and foil.',
      reheating: 'Reheat individual slices in an oven or air fryer at 350°F (175°C) for 6–8 minutes to re-crisp the edges.'
    },
    summary: 'The champion of holiday mornings and weekend meal prepping. Crispy shredded potatoes, smoky bacon, and melted sharp cheddar in every bite.',
    keyTakeaways: [
      'Wringing out hash browns is the secret to a crisp casserole edge.',
      'Can be prepped completely the night before for stress-free morning hosting.',
      'Packed with 20 grams of protein per square.'
    ],
    sections: [
      {
        heading: 'Why Moisture Extraction is Critical for Hash Brown Casseroles',
        subheading: 'Preventing the dreaded soggy bottom in potato egg bakes.',
        content: [
          'Frozen shredded potatoes absorb ice crystals that turn into liquid as they thaw. If added directly to an egg custard, this excess liquid prevents the eggs from setting firmly and steams the potatoes into mush.',
          'Wringing out the shredded potatoes in a clean tea towel leaves pure dry potato starch, allowing the oven heat to caramelize the exterior while the egg custard binds the center into a firm, sliceable breakfast bake.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use fresh grated potatoes instead of frozen?', answer: 'Yes! Peel and grate russet potatoes on a box grater, submerge in cold water to remove surface starch, then squeeze thoroughly dry before assembling.' }
    ],
    tags: ['Breakfast Casserole', 'Hash Browns', 'Bacon and Eggs', 'Brunch', 'Meal Prep', 'Gluten Free']
  }
];
