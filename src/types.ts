export type CategoryId = 
  | 'one-pot'
  | 'breakfast'
  | 'dinner'
  | 'appetizers'
  | 'baking'
  | 'cuisines'
  | 'job-search'
  | 'resume-letter'
  | 'interview-prep'
  | 'career-advice';

export type PageView = 
  | 'feed' 
  | 'about' 
  | 'contact' 
  | 'privacy' 
  | 'terms' 
  | 'disclaimer' 
  | 'sitemap';

export interface RecipeMeta {
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  cuisine: string;
  course: string;
  diet?: string[];
  rating: number;
  reviewsCount: number;
}

export interface IngredientItem {
  id: string;
  amount: string;
  item: string;
  notes?: string;
  group?: string;
}

export interface RecipeInstructionStep {
  stepNumber: number;
  title: string;
  instruction: string;
  proTip?: string;
}

export interface NutritionFacts {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  sodiumMg: number;
}

export interface ArticleImage {
  url: string;
  alt: string;
  caption: string;
  credit: string;
}

export interface InfographicPanel {
  title: string;
  bullets: string[];
}

export interface InfographicData {
  title: string;
  subtitle: string;
  keyword: string;
  centerpieceType: string;
  centerpieceLabel: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    bgDark: string;
    glow: string;
  };
  panels: InfographicPanel[];
  prompt: string;
}

export interface ArticleSection {
  heading: string;
  subheading?: string;
  content: string[];
  takeaways?: string[];
  proTips?: string[];
  caseStudy?: {
    title: string;
    scenario: string;
    strategy: string;
    outcome: string;
  };
  actionChecklist?: string[];
}

export interface StorageAdvice {
  refrigerator: string;
  freezer?: string;
  reheating?: string;
  arancini?: string;
}

export interface Article {
  id: string;
  slug: string;
  keyword: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  deck: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  lastUpdated: string;
  readTimeMinutes: number;
  wordCount: number;
  realImage: ArticleImage;
  recipeMeta?: RecipeMeta;
  ingredients?: IngredientItem[];
  instructions?: RecipeInstructionStep[];
  nutrition?: NutritionFacts;
  chefNotes?: string[];
  storageAdvice?: StorageAdvice;
  summary: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  tags: string[];
  infographic?: InfographicData;
}
