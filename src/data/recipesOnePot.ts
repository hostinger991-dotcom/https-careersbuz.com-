import { Article } from '../types';

export const RECIPES_ONE_POT: Article[] = [
  {
    id: 'rec-1',
    slug: 'creamy-tuscan-garlic-chicken',
    keyword: 'one-pot chicken',
    category: 'one-pot',
    categoryLabel: 'Easy One-Pot Dinners',
    title: 'Creamy Tuscan Garlic Chicken One-Pot Skillet with Sun-Dried Tomatoes & Baby Spinach',
    deck: 'Golden pan-seared chicken cutlets simmered in a luscious garlic cream sauce studded with tangy sun-dried tomatoes, tender baby spinach, and aged parmesan cheese—made entirely in one skillet in under 30 minutes.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 24, 2026',
    lastUpdated: 'October 29, 2026',
    readTimeMinutes: 7,
    wordCount: 1420,
    realImage: {
      url: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Creamy Tuscan garlic chicken in a cast-iron skillet with spinach and sun-dried tomatoes',
      caption: 'Golden seared chicken simmered in a rich garlic cream sauce with vibrant baby spinach and sun-dried tomatoes.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 4,
      caloriesPerServing: 485,
      difficulty: 'Easy',
      cuisine: 'Italian-American',
      course: 'Main Course',
      diet: ['Gluten-Free Option', 'Keto-Friendly', 'High-Protein'],
      rating: 4.95,
      reviewsCount: 312
    },
    ingredients: [
      { id: 'ing-1', amount: '1.5 lbs', item: 'Boneless skinless chicken breasts', notes: 'Halved horizontally into 4 even cutlets', group: 'Chicken' },
      { id: 'ing-2', amount: '1 tsp', item: 'Italian seasoning', notes: 'Dried oregano, basil, thyme', group: 'Chicken' },
      { id: 'ing-3', amount: '1/2 tsp', item: 'Garlic powder & smoked paprika', notes: 'For seasoning cutlets', group: 'Chicken' },
      { id: 'ing-4', amount: '2 tbsp', item: 'Extra virgin olive oil', notes: 'Divided', group: 'Skillet Base' },
      { id: 'ing-5', amount: '2 tbsp', item: 'Unsalted butter', notes: 'For rich velvet texture', group: 'Skillet Base' },
      { id: 'ing-6', amount: '6 cloves', item: 'Fresh garlic', notes: 'Finely minced', group: 'Cream Sauce' },
      { id: 'ing-7', amount: '1/2 cup', item: 'Oil-packed sun-dried tomatoes', notes: 'Drained and thinly sliced', group: 'Cream Sauce' },
      { id: 'ing-8', amount: '1 cup', item: 'Heavy whipping cream', notes: 'Or full-fat coconut cream', group: 'Cream Sauce' },
      { id: 'ing-9', amount: '1/2 cup', item: 'Low-sodium chicken bone broth', notes: 'To balance richness', group: 'Cream Sauce' },
      { id: 'ing-10', amount: '3/4 cup', item: 'Parmigiano-Reggiano', notes: 'Freshly grated', group: 'Cream Sauce' },
      { id: 'ing-11', amount: '3 cups', item: 'Fresh baby spinach', notes: 'Lightly packed', group: 'Greens & Finish' },
      { id: 'ing-12', amount: '2 tbsp', item: 'Fresh basil', notes: 'Chiffonade cut for garnish', group: 'Greens & Finish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Prep & Season the Chicken',
        instruction: 'Pat the chicken cutlets thoroughly dry with paper towels to ensure a crisp sear. Season both sides evenly with kosher salt, cracked black pepper, Italian seasoning, garlic powder, and smoked paprika.',
        proTip: 'Slicing breasts horizontally into thinner cutlets allows rapid, even cooking without drying out the meat.'
      },
      {
        stepNumber: 2,
        title: 'Sear to Golden Perfection',
        instruction: 'Heat 2 tablespoons of olive oil in a heavy 12-inch stainless steel or enameled cast-iron skillet over medium-high heat. Add the chicken cutlets in a single layer and sear without disturbing for 4–5 minutes per side until deep golden and cooked through to 165°F (74°C). Transfer to a warm plate.',
        proTip: 'Do not crowd the skillet; sear in two batches if your pan is under 12 inches.'
      },
      {
        stepNumber: 3,
        title: 'Sauté Aromatics & Tomatoes',
        instruction: 'Reduce the skillet heat to medium. Melt the butter into the remaining pan drippings. Add the minced garlic and sliced sun-dried tomatoes. Sauté for 60–90 seconds until the garlic is fragrant and translucent, taking care not to scorch.',
        proTip: 'Use a wooden spoon to deglaze and scrape up the golden browned chicken fond stuck to the pan bottom.'
      },
      {
        stepNumber: 4,
        title: 'Build the Velvet Sauce',
        instruction: 'Pour in the chicken broth and heavy cream, stirring continuously to marry with the fond. Bring to a gentle simmer for 3–4 minutes until slightly reduced. Slowly whisk in the freshly grated Parmigiano-Reggiano until completely smooth and velvety.',
        proTip: 'Pre-grated bottled parmesan contains anti-caking starches that cause graininess; always grate a fresh block.'
      },
      {
        stepNumber: 5,
        title: 'Wilt Spinach & Return Chicken',
        instruction: 'Toss in the fresh baby spinach and stir gently for 1–2 minutes until just wilted into the warm sauce. Return the chicken cutlets along with any collected resting juices back into the skillet. Spoon sauce over the cutlets and simmer for 2 minutes to meld flavors.',
        proTip: 'Garnish with freshly torn basil leaves and an extra crack of black pepper right before serving.'
      }
    ],
    nutrition: {
      calories: 485,
      proteinGrams: 42,
      carbsGrams: 9,
      fatGrams: 32,
      fiberGrams: 2,
      sodiumMg: 560
    },
    chefNotes: [
      'For dairy-free adaptation: Substitute heavy cream with unsweetened full-fat culinary coconut cream and replace parmesan with 3 tablespoons nutritional yeast.',
      'Serving suggestion: Pair with al dente fettuccine, warm garlic ciabatta bread, or over a bed of mashed cauliflower for low-carb keto dining.'
    ],
    storageAdvice: {
      refrigerator: 'Store in an airtight glass container for up to 4 days. Keep sauce and chicken submerged.',
      freezer: 'Freezing is not recommended as dairy heavy cream sauces can separate upon thawing.',
      reheating: 'Gently reheat in a skillet over low heat with a splash of milk or chicken broth to reconstitute the emulsified cream sauce.'
    },
    summary: 'The ultimate 30-minute weeknight dinner miracle. High protein, rich in Italian aromatics, and requires only a single pan from start to finish.',
    keyTakeaways: [
      'Pounding chicken to uniform thickness guarantees juicy, tender meat every time.',
      'Deglazing with bone broth lifts savory chicken fond into the cream base.',
      'Freshly grated parmesan provides emulsion and natural thickness without requiring cornstarch or flour.',
      'Pairs seamlessly with pasta, crusty sourdough, or roasted vegetables.'
    ],
    sections: [
      {
        heading: 'Why This One-Pot Tuscan Chicken Dominates Weeknight Dinners',
        subheading: 'Minimal cleanup meets restaurant-grade emulsion and rich Italian aromatics.',
        content: [
          'Weeknight cooking is a delicate balance between flavor and convenience. Traditional cream-based poultry dishes often require multiple pots: one for poaching or searing, another for reducing a roux-thickened velouté, and a third for blanching greens. This streamlined one-pot skillet recipe eliminates culinary friction by utilizing pan-dripping deglazing.',
          'By cooking the garlic, sun-dried tomatoes, and cream directly in the browned chicken fond (the caramelized proteins left on the skillet floor), the sauce acquires an intense savory depth that cannot be replicated in a clean separate saucepan.'
        ],
        takeaways: [
          'Zero wasted flavor: the fond becomes the foundational seasoning for the sauce.',
          'Under 30 minutes from prep to table, perfect for busy family schedules.'
        ]
      },
      {
        heading: 'Mastering the Pan Sear: How to Prevent Dry Chicken',
        subheading: 'Heat management and moisture removal are the twin pillars of poultry searing.',
        content: [
          'The most frequent mistake home cooks make when searing chicken breast is overcrowding or placing damp meat into lukewarm oil. When moisture is present on the surface, the surface temperature drops, causing the chicken to steam rather than caramelize via the Maillard reaction.',
          'Pat each cutlet with dry kitchen paper until completely moisture-free. Allow your heavy skillet—preferably enameled cast iron or tri-ply stainless steel—to preheat until the oil shimmers. Once placed, do not move the cutlets for at least 4 full minutes. When the crust is properly developed, the meat will release naturally from the skillet floor without tearing.'
        ],
        proTips: [
          'Use an instant-read digital thermometer: pull chicken when internal temperature reaches 160°F (71°C); carryover cooking will bring it to the food-safe 165°F (74°C).',
          'Resting cutlets on a warm plate allows internal juices to redistribute before returning to the warm sauce.'
        ]
      },
      {
        heading: 'The Chemistry of a Silk-Smooth Parmesan Cream Sauce',
        subheading: 'Why temperature control prevents curdling and separation.',
        content: [
          'Dairy sauces can split into greasy oil and rubbery solids if subjected to violent boiling or sudden acid shocks. In this recipe, the combination of heavy whipping cream (minimum 36% butterfat) and chicken bone broth creates a stable water-in-oil emulsion.',
          'Heavy cream contains natural dairy proteins and phospholipids that resist curdling better than half-and-half or whole milk. Turn down the burner to low-medium before whisking in the grated cheese. Whisking continuously in small handfuls ensures the cheese melts gradually into the warm liquid rather than clump at the bottom.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use chicken thighs instead of chicken breasts?', answer: 'Yes! Boneless, skinless chicken thighs work brilliantly. Increase the initial sear time by about 2–3 minutes per side to reach an internal temperature of 175°F (79°C), which is ideal for tender dark meat.' },
      { question: 'What can I substitute for heavy cream?', answer: 'Full-fat culinary coconut cream or a blend of evaporated milk and whole milk whisked with a teaspoon of cornstarch can be used, though heavy cream delivers the classic silky Italian texture.' },
      { question: 'How do I keep the sauce from breaking when reheating?', answer: 'Reheat gently over low heat in a small saucepan or skillet, stirring in 1–2 tablespoons of chicken broth or warm water to re-emulsify the fats.' }
    ],
    tags: ['One-Pot Dinner', 'Tuscan Chicken', '30-Minute Meal', 'Low Carb', 'Skillet Dinner', 'Gluten-Free']
  },
  {
    id: 'rec-2',
    slug: 'dutch-oven-beef-stew',
    keyword: 'beef stew dutch oven',
    category: 'one-pot',
    categoryLabel: 'Easy One-Pot Dinners',
    title: 'Rich & Hearty Dutch Oven Beef Bourguignon Stew with Tender Carrots & Cremini Mushrooms',
    deck: 'Melt-in-your-mouth braised chuck roast bathed in a deeply complex red wine and herb broth with sweet carrots, pearl onions, and caramelized mushrooms. The ultimate weekend slow-cooked comfort pot.',
    author: {
      name: 'Chef Michael Thorne',
      role: 'Master Butcher & Slow-Cooking Specialist',
      avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 21, 2026',
    lastUpdated: 'October 28, 2026',
    readTimeMinutes: 9,
    wordCount: 1510,
    realImage: {
      url: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=1200&q=80',
      alt: 'Rich braised beef stew in a cast-iron dutch oven with tender carrots and fresh thyme',
      caption: 'Slow-simmered beef chuck stew with glazed carrots, baby potatoes, and fragrant rosemary in a Dutch oven.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 20,
      cookTimeMinutes: 120,
      totalTimeMinutes: 140,
      servings: 6,
      caloriesPerServing: 520,
      difficulty: 'Easy',
      cuisine: 'French Classic',
      course: 'Main Course Stew',
      diet: ['High-Protein', 'Dairy-Free Adaptable'],
      rating: 4.98,
      reviewsCount: 428
    },
    ingredients: [
      { id: 'ing-21', amount: '3 lbs', item: 'Beef chuck roast', notes: 'Trimmed and cut into 1.5-inch cubes', group: 'Beef & Marinade' },
      { id: 'ing-22', amount: '3 tbsp', item: 'All-purpose flour', notes: 'Or arrowroot powder for gluten-free', group: 'Beef & Marinade' },
      { id: 'ing-23', amount: '4 slices', item: 'Thick-cut bacon', notes: 'Diced into 1/2-inch lardons', group: 'Aromatics' },
      { id: 'ing-24', amount: '1 large', item: 'Yellow onion', notes: 'Finely diced', group: 'Aromatics' },
      { id: 'ing-25', amount: '5 cloves', item: 'Garlic', notes: 'Smashed and minced', group: 'Aromatics' },
      { id: 'ing-26', amount: '2 tbsp', item: 'Tomato paste', notes: 'Double-concentrated', group: 'Braising Liquid' },
      { id: 'ing-27', amount: '2 cups', item: 'Dry red wine', notes: 'Pinot Noir, Cabernet, or Merlot', group: 'Braising Liquid' },
      { id: 'ing-28', amount: '3 cups', item: 'Rich beef bone broth', notes: 'Low sodium', group: 'Braising Liquid' },
      { id: 'ing-29', amount: '4 large', item: 'Carrots', notes: 'Peeled and cut on bias into 1-inch chunks', group: 'Vegetables' },
      { id: 'ing-30', amount: '1 lb', item: 'Baby red potatoes', notes: 'Halved', group: 'Vegetables' },
      { id: 'ing-31', amount: '8 oz', item: 'Cremini mushrooms', notes: 'Quartered', group: 'Vegetables' },
      { id: 'ing-32', amount: '4 sprigs', item: 'Fresh thyme & 2 bay leaves', notes: 'Tied into bouquet garni', group: 'Herbs' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Render Bacon Lardons',
        instruction: 'In a 6-quart enameled cast-iron Dutch oven over medium heat, render the diced bacon until crisp and golden, approximately 6–8 minutes. Remove with a slotted spoon and reserve the rendered fat in the pot.',
        proTip: 'The smoky bacon fat provides the foundational flavor matrix for the entire stew.'
      },
      {
        stepNumber: 2,
        title: 'Deep Brown the Beef Cubes',
        instruction: 'Toss the beef cubes with flour, salt, and black pepper. Turn heat to medium-high. Sear the beef in 2 or 3 separate batches for 3–4 minutes per side until deeply browned with a dark mahogany crust. Transfer seared beef to a platter.',
        proTip: 'Do not crowd the pot. Overcrowding drops pan temperature and causes meat to boil in its juices rather than form a crust.'
      },
      {
        stepNumber: 3,
        title: 'Caramelize Aromatics & Deglaze',
        instruction: 'Add diced onion and garlic to the remaining fat; cook for 3 minutes. Stir in the tomato paste and cook for 2 minutes until it darkens to a brick-red hue. Pour in the red wine, vigorously scraping up all caramelized browned bits from the pot bottom.',
        proTip: 'Tomato paste caramelization removes raw acidity and deepens the umami foundation.'
      },
      {
        stepNumber: 4,
        title: 'Slow Braise to Tenderness',
        instruction: 'Return beef, bacon, and accumulated juices into the Dutch oven. Add beef broth, carrots, baby potatoes, fresh thyme, and bay leaves. Bring to a gentle boil, cover tightly with the heavy lid, and transfer to a preheated oven at 325°F (165°C) for 1 hour and 45 minutes.',
        proTip: 'Braising inside the oven provides radiant 360-degree heat, preventing bottom scorching that often occurs on stovetops.'
      },
      {
        stepNumber: 5,
        title: 'Finish with Mushrooms & Serve',
        instruction: 'Carefully remove the pot from the oven. Stir in the quartered mushrooms and simmer uncovered on the stovetop for 15 minutes until mushrooms are tender and the gravy is glossy and spoon-coating. Discard thyme sprigs and bay leaves before serving.',
        proTip: 'Stew tastes even better the next day as the connective collagens gelatinize and redistribute.'
      }
    ],
    nutrition: {
      calories: 520,
      proteinGrams: 48,
      carbsGrams: 28,
      fatGrams: 22,
      fiberGrams: 4,
      sodiumMg: 680
    },
    chefNotes: [
      'Wine-Free Option: Replace the 2 cups of red wine with 2 cups additional beef broth plus 2 tablespoons Worcestershire sauce and 1 tablespoon balsamic vinegar.',
      'Cut of Beef: Always select beef chuck roast (shoulder) over pre-cut "stew meat". Pre-cut meat often mixes random cuts that cook unevenly.'
    ],
    storageAdvice: {
      refrigerator: 'Refrigerate in a covered container for up to 5 days. Stew flavors mature and deepen overnight.',
      freezer: 'Freezes exceptionally well for up to 3 months. Thaw overnight in refrigerator before reheating.',
      reheating: 'Warm over medium-low heat on the stovetop with a splash of beef broth until steaming hot.'
    },
    summary: 'A time-tested French braise perfected for modern home kitchens. Tender gelatin-rich chuck roast enveloped in a silken red wine reduction.',
    keyTakeaways: [
      'Beef chuck contains high intramuscular collagen that breaks down into gelatin at low temperatures.',
      'Browning the meat in batches creates the fond required for a rich, restaurant-style sauce.',
      'Oven braising ensures steady ambient heat without scorching.',
      'Classic comfort meal that freezes and meal-preps effortlessly.'
    ],
    sections: [
      {
        heading: 'The Science of Braising Beef Chuck to Butter-Like Softness',
        subheading: 'Why low and slow heat transforms tough connective collagen into velvety gelatin.',
        content: [
          'Beef chuck roast comes from the heavily exercised shoulder muscle of cattle. It is packed with tough collagen fibers that make it unpalatable if cooked quickly like a ribeye steak. However, when submerged in braising liquid and held at 180°F–200°F (82°C–93°C) over 2 hours, that collagen undergoes thermal hydrolysis.',
          'The rigid protein bonds unravel and transform into soft, liquid gelatin. This gelatin coats each muscle bundle, giving the stew its unctuous, lip-smacking mouthfeel and turning tough beef into fork-tender morsels.'
        ]
      },
      {
        heading: 'Selecting the Ideal Wine for French Braising',
        subheading: 'Tannins, acidity, and flavor reduction dynamics.',
        content: [
          'Never use cooking wines labeled with high sodium or preservatives. The best wines for beef stew are medium-bodied dry reds with balanced acidity: Pinot Noir, Côtes du Rhône, Cabernet Sauvignon, or Merlot.',
          'As the wine simmers and reduces by half with the beef broth, its fruit notes intensify while alcohol evaporates, lending a ruby gloss and complex savory backbone to the gravy.'
        ]
      }
    ],
    faq: [
      { question: 'Can I make this in a slow cooker / Crockpot?', answer: 'Yes! After completing steps 1 through 3 on the stove to brown the beef and deglaze, transfer everything to a slow cooker and cook on LOW for 7–8 hours or HIGH for 4–5 hours.' },
      { question: 'Why is my stew meat still tough?', answer: 'If the beef is tough, it simply has not cooked long enough! Collagen requires sustained heat to melt. Cover the pot and continue simmering for another 20–30 minutes until a fork slides in without resistance.' }
    ],
    tags: ['Dutch Oven', 'Beef Stew', 'Comfort Food', 'French Cooking', 'Slow Cooked', 'High Protein']
  },
  {
    id: 'rec-3',
    slug: 'one-pot-tomato-basil-rigatoni',
    keyword: 'one-pot pasta rigatoni',
    category: 'one-pot',
    categoryLabel: 'Easy One-Pot Dinners',
    title: 'One-Pot Creamy Tomato Basil Rigatoni with Melted Burrata & Sweet Italian Sausage',
    deck: 'Uncooked rigatoni noodles simmered directly in rich crushed San Marzano tomatoes, garlic, and savory Italian sausage broth, releasing their natural starches to form an ultra-silky sauce crowned with whole burrata.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 19, 2026',
    lastUpdated: 'October 27, 2026',
    readTimeMinutes: 6,
    wordCount: 1350,
    realImage: {
      url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=1200&q=80',
      alt: 'One pot rigatoni pasta with creamy tomato sauce, fresh basil and fresh melted burrata',
      caption: 'Creamy one-pot tomato basil pasta with al dente rigatoni, Italian sausage, and torn fresh burrata cheese.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 18,
      totalTimeMinutes: 28,
      servings: 4,
      caloriesPerServing: 510,
      difficulty: 'Easy',
      cuisine: 'Italian',
      course: 'Main Course Pasta',
      diet: ['Vegetarian Adaptable'],
      rating: 4.93,
      reviewsCount: 284
    },
    ingredients: [
      { id: 'ing-31', amount: '1 lb', item: 'Mild or spicy Italian sausage', notes: 'Casings removed', group: 'Protein' },
      { id: 'ing-32', amount: '1 medium', item: 'Shallot & 4 garlic cloves', notes: 'Finely minced', group: 'Aromatics' },
      { id: 'ing-33', amount: '12 oz', item: 'Dry rigatoni or penne pasta', notes: 'Bronze-cut preferred', group: 'Pasta' },
      { id: 'ing-34', amount: '1 can (28 oz)', item: 'San Marzano whole peeled tomatoes', notes: 'Crushed by hand', group: 'Sauce' },
      { id: 'ing-35', amount: '2.5 cups', item: 'Low-sodium vegetable or chicken broth', notes: 'Warm', group: 'Sauce' },
      { id: 'ing-36', amount: '1/3 cup', item: 'Heavy cream or mascarpone', notes: 'For velvety finish', group: 'Sauce' },
      { id: 'ing-37', amount: '1 cup', item: 'Fresh basil leaves', notes: 'Roughly torn', group: 'Finish' },
      { id: 'ing-38', amount: '2 balls (4 oz each)', item: 'Fresh burrata cheese', notes: 'Torn over hot pasta', group: 'Finish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Brown Sausage & Aromatics',
        instruction: 'In a wide deep skillet or Dutch oven, brown the Italian sausage over medium-high heat, breaking into bite-sized pieces with a wooden spoon for 5–6 minutes. Add minced shallot and garlic; cook for 90 seconds until fragrant.',
        proTip: 'Drain excess rendered oil if sausage is unusually fatty, retaining about 1 tablespoon for flavor.'
      },
      {
        stepNumber: 2,
        title: 'Add Dry Pasta & Simmer Liquids',
        instruction: 'Add the uncooked rigatoni directly into the pan. Pour in crushed San Marzano tomatoes and broth. Stir thoroughly to ensure all noodles are submerged under the liquid. Season with a teaspoon of kosher salt and pinch of chili flakes.',
        proTip: 'Stir every 3 minutes during the simmer to prevent pasta from sticking to the pan bottom.'
      },
      {
        stepNumber: 3,
        title: 'Cook to Al Dente Texture',
        instruction: 'Bring to a vigorous boil, then drop heat to medium-low. Simmer uncovered for 11–13 minutes, stirring occasionally, until the pasta is perfectly al dente and the liquid has reduced into a thick, clinging red sauce.',
        proTip: 'Cooking pasta directly in the sauce allows surface starches to emulsify naturally without draining.'
      },
      {
        stepNumber: 4,
        title: 'Stir in Cream & Fresh Basil',
        instruction: 'Remove the skillet from heat. Stir in the heavy cream and fresh torn basil leaves. The residual heat will melt the cream into the tomato sauce, turning it a glorious sunset pink.',
        proTip: 'Removing from heat before adding dairy prevents any acidity from curdling the cream.'
      },
      {
        stepNumber: 5,
        title: 'Top with Burrata & Serve',
        instruction: 'Gently place torn fresh burrata over the hot skillet. Drizzle with extra virgin olive oil, freshly cracked black pepper, and extra fresh basil. Serve immediately straight from the pan.',
        proTip: 'Tear into the burrata with a fork at the table so the luscious stracciatella cream folds into the pasta.'
      }
    ],
    nutrition: {
      calories: 510,
      proteinGrams: 28,
      carbsGrams: 58,
      fatGrams: 20,
      fiberGrams: 4,
      sodiumMg: 640
    },
    chefNotes: [
      'Vegetarian Variation: Omit sausage and sauté 8 oz sliced cremini mushrooms and diced zucchini instead.',
      'Pasta Selection: Bronze-cut extruded pasta has a rough, chalky exterior that releases superior starches for a thicker, richer one-pot sauce.'
    ],
    storageAdvice: {
      refrigerator: 'Keep refrigerated in an airtight container for up to 3 days. Pasta will continue absorbing sauce.',
      freezer: 'Freezing one-pot pasta is not advised as noodles become mushy when defrosted.',
      reheating: 'Reheat gently in a saucepan with 2–3 tablespoons of broth or water over medium-low heat.'
    },
    summary: 'No separate pasta boiling pot required. Fast, family-friendly, and crowned with opulent fresh Italian burrata cheese.',
    keyTakeaways: [
      'Starch retention: starch released by boiling pasta stays in the sauce, creating a silky glaze.',
      'Only 1 pot to wash after dinner.',
      'San Marzano tomatoes provide the natural sweetness needed to balance savory sausage.',
      'Ready in under 30 minutes.'
    ],
    sections: [
      {
        heading: 'Why One-Pot Pasta is a Revolutionary Weeknight Technique',
        subheading: 'Conserving starch water transforms the physics of sauce adhesion.',
        content: [
          'In traditional Italian pasta cooking, chefs vigorously reserve a cup of starchy pasta boiling water to swirl into their finished sauce. In a one-pot pasta dish, 100% of that concentrated amylose starch remains trapped inside the simmering liquid.',
          'As the liquid cooks down, this liberated starch emulsifies with the olive oil and tomato juices, coating every groove of the rigatoni noodles with a velvety sauce that never slips off.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use gluten-free pasta in this one-pot recipe?', answer: 'Yes! Brown rice or corn-quinoa blend pasta works best. Check at the 9-minute mark as gluten-free pasta cooks slightly faster and can become delicate.' }
    ],
    tags: ['One-Pot Pasta', 'Italian Dinners', 'Quick Dinner', 'Burrata', 'Rigatoni', 'Comfort Food']
  },
  {
    id: 'rec-4',
    slug: 'one-pot-lemon-herb-chicken-rice',
    keyword: 'one-pot chicken and rice',
    category: 'one-pot',
    categoryLabel: 'Easy One-Pot Dinners',
    title: 'Crispy Skinned Lemon Herb Chicken Thighs with Fluffy Greek Turmeric Rice',
    deck: 'Bone-in, skin-on chicken thighs seared until shattered-glass crispy, finished atop fragrant jasmine rice simmered in fresh lemon juice, garlic, turmeric, and oregano in one pan.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 15, 2026',
    lastUpdated: 'October 26, 2026',
    readTimeMinutes: 7,
    wordCount: 1390,
    realImage: {
      url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
      alt: 'One pot crispy chicken thighs on a bed of golden turmeric lemon herb rice with lemon slices',
      caption: 'Golden crispy chicken thighs over vibrant lemon herb rice with Kalamata olives and fresh parsley.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      totalTimeMinutes: 45,
      servings: 4,
      caloriesPerServing: 540,
      difficulty: 'Easy',
      cuisine: 'Mediterranean Greek',
      course: 'Main Course',
      diet: ['Gluten-Free', 'Dairy-Free Adaptable'],
      rating: 4.96,
      reviewsCount: 367
    },
    ingredients: [
      { id: 'ing-41', amount: '4 large', item: 'Bone-in skin-on chicken thighs', notes: 'Trimmed of excess fat', group: 'Chicken' },
      { id: 'ing-42', amount: '1.5 cups', item: 'Long grain jasmine or basmati rice', notes: 'Rinsed until water runs clear', group: 'Rice & Aromatics' },
      { id: 'ing-43', amount: '1 small', item: 'Yellow onion', notes: 'Finely chopped', group: 'Rice & Aromatics' },
      { id: 'ing-44', amount: '4 cloves', item: 'Garlic', notes: 'Minced', group: 'Rice & Aromatics' },
      { id: 'ing-45', amount: '1/2 tsp', item: 'Ground turmeric & dried oregano', notes: 'For golden color & Greek aroma', group: 'Rice & Aromatics' },
      { id: 'ing-46', amount: '2.5 cups', item: 'Chicken broth', notes: 'Low sodium', group: 'Cooking Liquid' },
      { id: 'ing-47', amount: '1/4 cup', item: 'Fresh lemon juice', notes: 'Juice of 1 large lemon', group: 'Cooking Liquid' },
      { id: 'ing-48', amount: '1/3 cup', item: 'Pitted Kalamata olives', notes: 'Halved', group: 'Garnish' },
      { id: 'ing-49', amount: '1/4 cup', item: 'Fresh dill and flat-leaf parsley', notes: 'Finely chopped', group: 'Garnish' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Crisp the Chicken Thigh Skin',
        instruction: 'Pat chicken thighs bone-dry. Season generously with salt, pepper, and dried oregano. Place skin-side down in a cold 12-inch oven-safe skillet. Turn heat to medium. Cook slowly for 12–14 minutes without moving until fat renders and skin is deeply golden and crackling. Flip and cook 2 minutes on the reverse side. Transfer to a plate.',
        proTip: 'Starting chicken skin-side down in a cold pan renders more sub-cutaneous fat, creating thinner, crunchier skin.'
      },
      {
        stepNumber: 2,
        title: 'Toast the Rice and Spices',
        instruction: 'Pour off all but 2 tablespoons of rendered chicken fat from the skillet. Add chopped onion and garlic; sauté for 2 minutes. Add the rinsed rice, turmeric, and oregano. Toast rice grains for 2 minutes until translucent and aromatic.',
        proTip: 'Toasting the raw rice in chicken fat seals the starch, ensuring individual fluffy grains that never turn gummy.'
      },
      {
        stepNumber: 3,
        title: 'Simmer Liquid & Nestle Chicken',
        instruction: 'Pour in the chicken broth and fresh lemon juice, scraping any savory bits from the bottom. Bring liquid to a simmer. Nestle the chicken thighs skin-side up on top of the rice so the crispy skin stays above the liquid line.',
        proTip: 'Keeping the crispy skin elevated above the liquid preserves the crunch while the meat and rice steam below.'
      },
      {
        stepNumber: 4,
        title: 'Cover & Steam to Fluffy Perfection',
        instruction: 'Cover the skillet tightly with a lid or double layer of foil. Reduce heat to low and simmer undisturbed for 20 minutes. Remove from heat and allow to rest covered for 8 minutes.',
        proTip: 'Resist opening the lid while simmering to avoid losing the steam necessary to cook the rice evenly.'
      },
      {
        stepNumber: 5,
        title: 'Fluff & Garnish with Fresh Herbs',
        instruction: 'Uncover the skillet. Remove chicken temporarily to fluff the rice with a fork. Scatter halved Kalamata olives, fresh dill, parsley, and lemon wedges over the rice. Return chicken to the skillet and serve warm.',
        proTip: 'Serve with creamy tzatziki sauce and warm pita bread on the side.'
      }
    ],
    nutrition: {
      calories: 540,
      proteinGrams: 36,
      carbsGrams: 46,
      fatGrams: 24,
      fiberGrams: 2,
      sodiumMg: 590
    },
    chefNotes: [
      'Rinsing Rice: Always rinse rice in a fine-mesh sieve under cold running water to strip away excess surface starch powder.'
    ],
    storageAdvice: {
      refrigerator: 'Refrigerate in a sealed container for up to 4 days. Rice reheats tender and fragrant.',
      freezer: 'Freeze individual portions for up to 2 months in freezer-safe containers.',
      reheating: 'Sprinkle with 1 tablespoon water and reheat covered in microwave or on stovetop.'
    },
    summary: 'A complete Mediterranean meal cooked in one vessel. Juicy thighs with crackling skin over vibrant citrus-herb rice.',
    keyTakeaways: [
      'Cold-pan technique maximizes poultry skin crispiness.',
      'Toasting rice grains creates distinct, fluffy texture.',
      'All-in-one protein, starch, and vegetable meal with Greek culinary notes.'
    ],
    sections: [
      {
        heading: 'The Cold-Pan Rendering Secret for Extra-Crispy Chicken Skin',
        subheading: 'Why patience over medium heat outperforms high-heat searing.',
        content: [
          'High heat quickly scorches skin before the thick fat layer underneath has time to liquefy. By starting chicken skin-side down in a lukewarm skillet and slowly elevating heat, the fat renders out into clear oil, leaving behind a tissue-thin layer of skin that turns as crisp as a potato chip.',
          'That rendered fat then infuses the rice with unmatched savory richness, replacing store-bought cooking oils.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use boneless chicken breasts instead?', answer: 'Yes, but sear breasts briefly for 3 minutes per side, remove, cook the rice for 15 minutes, then add breasts on top for the final 5 minutes so they do not overcook.' }
    ],
    tags: ['Chicken and Rice', 'Greek Cooking', 'Mediterranean', 'One-Pot Dinner', 'Family Meal']
  },
  {
    id: 'rec-5',
    slug: 'cheesy-enchilada-quinoa-skillet',
    keyword: 'one-pan enchilada skillet',
    category: 'one-pot',
    categoryLabel: 'Easy One-Pot Dinners',
    title: 'Cheesy One-Pan Mexican Black Bean & Corn Enchilada Quinoa Skillet',
    deck: 'Nutrient-dense tri-color quinoa simmered with black beans, sweet corn, zesty fire-roasted salsa, and warm cumin, blanketed with melted sharp Monterey Jack and avocado slices.',
    author: {
      name: 'Chef Sarah Jenkins',
      role: 'Culinary Director & Recipe Tester',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80'
    },
    publishDate: 'October 12, 2026',
    lastUpdated: 'October 25, 2026',
    readTimeMinutes: 6,
    wordCount: 1300,
    realImage: {
      url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80',
      alt: 'One pan Mexican enchilada quinoa skillet with black beans, corn, melted cheese, cilantro and lime',
      caption: 'Hearty one-pan vegetarian Mexican enchilada skillet loaded with melted pepper jack cheese and cilantro.',
      credit: 'Unsplash Editorial Food Photography (Royalty-Free)'
    },
    recipeMeta: {
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      totalTimeMinutes: 30,
      servings: 4,
      caloriesPerServing: 420,
      difficulty: 'Easy',
      cuisine: 'Tex-Mex',
      course: 'Main Course Vegetarian',
      diet: ['Vegetarian', 'Gluten-Free', 'High-Fiber'],
      rating: 4.91,
      reviewsCount: 219
    },
    ingredients: [
      { id: 'ing-51', amount: '1 tbsp', item: 'Avocado oil or olive oil', notes: 'For sautéing', group: 'Base' },
      { id: 'ing-52', amount: '1 small', item: 'Red onion & 1 bell pepper', notes: 'Diced', group: 'Base' },
      { id: 'ing-53', amount: '1 cup', item: 'Quinoa (white or tri-color)', notes: 'Rinsed', group: 'Grains & Beans' },
      { id: 'ing-54', amount: '1 can (15 oz)', item: 'Black beans', notes: 'Rinsed and drained', group: 'Grains & Beans' },
      { id: 'ing-55', amount: '1 cup', item: 'Sweet corn kernels', notes: 'Fresh or thawed', group: 'Grains & Beans' },
      { id: 'ing-56', amount: '1 can (10 oz)', item: 'Red enchilada sauce', notes: 'Mild or medium', group: 'Sauce & Seasoning' },
      { id: 'ing-57', amount: '1 cup', item: 'Vegetable broth', notes: 'Low sodium', group: 'Sauce & Seasoning' },
      { id: 'ing-58', amount: '1 tsp', item: 'Ground cumin & chili powder', notes: 'To taste', group: 'Sauce & Seasoning' },
      { id: 'ing-59', amount: '1.5 cups', item: 'Monterey Jack or Pepper Jack cheese', notes: 'Freshly shredded', group: 'Cheese & Toppings' },
      { id: 'ing-60', amount: '1 whole', item: 'Avocado & fresh cilantro', notes: 'Diced for garnish', group: 'Cheese & Toppings' }
    ],
    instructions: [
      {
        stepNumber: 1,
        title: 'Sauté Veggies & Aromatics',
        instruction: 'Heat oil in a 12-inch skillet over medium heat. Sauté the diced red onion and bell pepper for 3–4 minutes until softened and lightly browned on edges.',
        proTip: 'Add a pinch of salt to draw out natural vegetable sweetness.'
      },
      {
        stepNumber: 2,
        title: 'Combine Quinoa, Beans & Enchilada Liquid',
        instruction: 'Add the rinsed quinoa, black beans, corn, enchilada sauce, vegetable broth, cumin, chili powder, and salt. Stir to distribute evenly.',
        proTip: 'Rinsing quinoa eliminates its natural coating called saponin, which can taste bitter if left unwashed.'
      },
      {
        stepNumber: 3,
        title: 'Simmer Until Liquid is Absorbed',
        instruction: 'Bring skillet contents to a boil. Reduce heat to low, cover tightly with a lid, and simmer for 18–20 minutes until the quinoa is tender and broth has absorbed.',
        proTip: 'You will know quinoa is cooked when the little white germ spirals separate from the seed.'
      },
      {
        stepNumber: 4,
        title: 'Melt the Pepper Jack Cheese',
        instruction: 'Remove lid, fluff lightly, and scatter the shredded Monterey Jack cheese across the top. Cover for 2–3 minutes until cheese is completely melted and bubbly.',
        proTip: 'You can also place the skillet under the oven broiler for 2 minutes to blister the cheese golden brown.'
      },
      {
        stepNumber: 5,
        title: 'Garnish & Serve Fresh',
        instruction: 'Top with diced avocado, fresh cilantro, sliced green onions, and lime wedges. Serve with tortilla chips on the side.',
        proTip: 'A spoonful of cool Greek yogurt or sour cream balances the warm Tex-Mex spices.'
      }
    ],
    nutrition: {
      calories: 420,
      proteinGrams: 18,
      carbsGrams: 52,
      fatGrams: 16,
      fiberGrams: 9,
      sodiumMg: 520
    },
    chefNotes: [
      'Meat-Lovers Variation: Brown 1/2 lb of ground turkey or lean beef with the onions before adding the quinoa.',
      'Vegan Adaptation: Use dairy-free cheddar shreds or cashew queso.'
    ],
    storageAdvice: {
      refrigerator: 'Stores remarkably well in refrigerator for up to 5 days. Excellent for weekday lunch meal prep.',
      freezer: 'Freeze cooked portions in airtight containers for up to 3 months.',
      reheating: 'Microwave on HIGH for 2 minutes or warm in a covered non-stick pan.'
    },
    summary: 'A 30-minute meatless Monday triumph. Hearty, fiber-packed, and bubbling with creamy Monterey Jack cheese.',
    keyTakeaways: [
      'Complete plant-based protein profile thanks to quinoa and black beans.',
      'One skillet cleanup saves valuable evening time.',
      'Customizable heat level based on your choice of enchilada sauce.'
    ],
    sections: [
      {
        heading: 'Why Quinoa is the Secret Weapon for Healthy One-Pan Skillets',
        subheading: 'High protein, dense fiber, and extraordinary sauce absorption capability.',
        content: [
          'Unlike white rice, quinoa is an ancient pseudocereal containing all nine essential amino acids, making it a complete protein. Its spiral structure acts like thousands of micro-sponges, soaking up the savory enchilada sauce and spices directly into the grain core.',
          'The result is a texture with a pleasant slight pop and immense flavor distribution.'
        ]
      }
    ],
    faq: [
      { question: 'Can I use brown rice instead of quinoa?', answer: 'Yes, but brown rice requires 35–40 minutes of simmering and approximately 1/2 cup additional broth to cook tender.' }
    ],
    tags: ['Vegetarian', 'One-Pan Dinner', 'Mexican Food', 'Quinoa', 'High Fiber', 'Gluten Free']
  }
];
