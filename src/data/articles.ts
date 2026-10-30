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
    tagline: 'STRATEGIC PLACEMENT & RECONNAISSANCE',
    count: 5,
    description: 'Empirical methodologies for labor market navigation, remote work architecture, and executive placement.'
  },
  {
    id: 'resume-letter',
    label: 'Resume & Cover Letter',
    tagline: 'PRECISION DOCUMENT ENGINEERING',
    count: 5,
    description: 'ATS-optimized structural compilation, dynamic action verbs, and persuasive commercial narratives.'
  },
  {
    id: 'interview-prep',
    label: 'Interview Preparation',
    tagline: 'TACTICAL INTERACTION MASTERY',
    count: 5,
    description: 'Behavioral deconstruction, the STAR method matrix, 30-second pitches, and post-interview closing.'
  },
  {
    id: 'career-advice',
    label: 'Career Advice & Upskilling',
    tagline: 'CAPITAL COMPOUNDING & SOVEREIGNTY',
    count: 5,
    description: 'Total compensation negotiation, cross-industry pivots, hard technical stacks, and executive sponsorship.'
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: CategoryId): Article[] {
  return ALL_ARTICLES.filter(a => a.category === category);
}

export function searchArticles(query: string, category?: CategoryId | 'all'): Article[] {
  let list = ALL_ARTICLES;
  if (category && category !== 'all') {
    list = list.filter(a => a.category === category);
  }

  if (!query.trim()) return list;

  const q = query.toLowerCase();
  return list.filter(a => 
    a.title.toLowerCase().includes(q) ||
    a.keyword.toLowerCase().includes(q) ||
    a.deck.toLowerCase().includes(q) ||
    a.summary.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
}
