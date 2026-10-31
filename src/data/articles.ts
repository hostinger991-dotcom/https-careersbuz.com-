import { Article, CategoryId } from '../types';
import { CATEGORY_1_ARTICLES } from './articlesCategory1';
import { CATEGORY_2_ARTICLES } from './articlesCategory2';
import { CATEGORY_3_ARTICLES } from './articlesCategory3';
import { CATEGORY_4_ARTICLES } from './articlesCategory4';

export const ALL_ARTICLES: Article[] = [
  ...CATEGORY_1_ARTICLES,
  ...CATEGORY_2_ARTICLES,
  ...CATEGORY_3_ARTICLES,
  ...CATEGORY_4_ARTICLES,
];

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  tagline: string;
  count: number;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'job-search',
    label: 'Job Search & Placement',
    tagline: 'STRATEGIC HEADHUNTING & MARKET NAVIGATION',
    count: 7,
    description: 'Systematic approaches to exploring high-growth sectors, conquering job fairs, launching entry-level paths, mastering remote work environments, penetrating hidden job markets, and orchestrating multi-offer pipelines.'
  },
  {
    id: 'resume-letter',
    label: 'Resume & Cover Letter',
    tagline: 'ATS REVERSE-ENGINEERING & DOCUMENT DESIGN',
    count: 5,
    description: 'Algorithmic optimization, functional and reverse-chronological blueprints, and targeted skill articulation to beat modern ATS filters.'
  },
  {
    id: 'interview-prep',
    label: 'Interview Preparation',
    tagline: 'HIGH-STAKES DIALOGUE & PSYCHOLOGICAL MASTERY',
    count: 5,
    description: 'Master behavioral frameworks, technical system design inquiries, behavioral STAR storytelling, and tactical post-interview follow-ups.'
  },
  {
    id: 'career-advice',
    label: 'Career Advice & Upskilling',
    tagline: 'EXECUTIVE TRAJECTORY & VALUE MAXIMIZATION',
    count: 5,
    description: 'Advanced salary negotiation, leadership development, professional networking, burnout mitigation, and seamless career pivoting.'
  }
];

export function getArticlesByCategory(categoryId: CategoryId | 'all'): Article[] {
  if (categoryId === 'all') {
    return ALL_ARTICLES;
  }
  return ALL_ARTICLES.filter(article => article.category === categoryId);
}

export function searchArticles(query: string): Article[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return ALL_ARTICLES;
  
  return ALL_ARTICLES.filter(article => {
    const matchTitle = article.title.toLowerCase().includes(clean);
    const matchDeck = article.deck.toLowerCase().includes(clean);
    const matchKeyword = article.keyword.toLowerCase().includes(clean);
    const matchSummary = article.summary.toLowerCase().includes(clean);
    const matchCategory = article.categoryLabel.toLowerCase().includes(clean);
    const matchTags = article.tags ? article.tags.some(t => t.toLowerCase().includes(clean)) : false;
    const matchAuthor = article.author?.name.toLowerCase().includes(clean);
    return matchTitle || matchDeck || matchKeyword || matchSummary || matchCategory || matchTags || matchAuthor;
  });
}

export function getArticleById(id: string): Article | undefined {
  return ALL_ARTICLES.find(article => article.id === id || article.slug === id);
}

export function getFeaturedArticle(): Article {
  return ALL_ARTICLES[0];
}
