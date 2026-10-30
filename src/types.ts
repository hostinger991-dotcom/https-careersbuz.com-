export type CategoryId = 
  | 'job-search'
  | 'resume-letter'
  | 'interview-prep'
  | 'career-advice';

export type PageView = 'feed' | 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';

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

export interface ArticleImage {
  url: string;
  alt: string;
  caption: string;
  credit: string;
}

export interface ArticleSection {
  heading: string;
  subheading?: string;
  content: string[];
  takeaways?: string[];
  caseStudy?: {
    title: string;
    scenario: string;
    strategy: string;
    outcome: string;
  };
  actionChecklist?: string[];
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
  infographic: InfographicData;
  summary: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  tags: string[];
}
