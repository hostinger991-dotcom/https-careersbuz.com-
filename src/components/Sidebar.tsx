import React from 'react';
import { 
  Briefcase, 
  Search, 
  TrendingUp, 
  Clock, 
  Award, 
  Network, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { Article, CategoryId, PageView } from '../types';
import { CATEGORIES } from '../data/articles';

interface Props {
  allArticles: Article[];
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onSelectArticle: (article: Article) => void;
  onNavigatePage: (page: PageView) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Sidebar: React.FC<Props> = ({
  allArticles,
  onSelectCategory,
  onSelectArticle,
  onNavigatePage,
  searchQuery,
  onSearchChange
}) => {
  // 4 Trending career guides
  const trendingArticles = allArticles.slice(0, 4);

  return (
    <aside className="space-y-6">
      
      {/* 1. "Meet the Editorial Director" Author Widget (GeneratePress RecipePots Style) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs text-center space-y-3">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
            alt="Dr. Evelyn Vance"
            className="w-full h-full rounded-full object-cover border-4 border-orange-100 shadow-xs"
          />
          <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#ea580c] text-white flex items-center justify-center shadow-md">
            <Award size={14} />
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-stone-900 font-serif">
            Dr. Evelyn Vance
          </h3>
          <p className="text-xs text-[#ea580c] font-semibold mt-0.5">
            Editor-in-Chief &amp; Organizational Psychologist
          </p>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed text-left">
          Welcome to <strong className="text-stone-800">CareersBuz</strong>. Our mission is to engineer high-velocity careers through empirical ATS data, executive salary negotiation playbooks, and structured interview systems. Every guide is peer-audited by Fortune 500 talent heads.
        </p>

        <div className="pt-2 border-t border-stone-100 flex items-center justify-center gap-4 text-[11px] font-mono text-stone-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-600" />
            {allArticles.length} Peer-Reviewed Guides
          </span>
        </div>
      </div>

      {/* 2. Quick Search Box Widget */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
        <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-stone-500 mb-3 flex items-center gap-2">
          <Search size={14} className="text-[#ea580c]" />
          <span>Search CareersBuz</span>
        </h4>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              onNavigatePage('feed');
            }}
            placeholder="Type keyword, ATS, salary..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 text-stone-800 placeholder-stone-400"
          />
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
        </div>
      </div>

      {/* 3. Core Career Categories Directory */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-stone-500 flex items-center gap-2">
            <Briefcase size={14} className="text-[#ea580c]" />
            <span>Career Categories</span>
          </h4>
          <span className="text-[10px] font-mono font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded-full">
            4 Sectors
          </span>
        </div>

        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onNavigatePage('feed');
                onSelectCategory(cat.id);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-stone-700 hover:text-[#ea580c] hover:bg-orange-50/70 transition-all text-left group cursor-pointer"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">
                {cat.label}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Direct Interactive Sitemap Portal Card (Highlight for crawlers & users) */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-[#ea580c] mb-2">
          <Network size={18} />
          <h4 className="font-serif font-bold text-sm text-stone-900">
            Interactive Sitemap Portal
          </h4>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed mb-3">
          Explore all {allArticles.length} in-depth career guides, institutional pages, and downloadable <code className="text-[11px] bg-white px-1 rounded border border-orange-200 font-mono">sitemap.xml</code> for Google Search Console indexing.
        </p>
        <button
          onClick={() => onNavigatePage('sitemap')}
          className="w-full py-2 px-3 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Open Full Sitemap Directory</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* 5. Trending Guides & Playbooks */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
        <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-stone-500 mb-3 flex items-center gap-2">
          <TrendingUp size={14} className="text-[#ea580c]" />
          <span>Trending Guides</span>
        </h4>

        <div className="space-y-3.5">
          {trendingArticles.map((art, index) => (
            <button
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="w-full flex items-start gap-3 text-left group cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
                <img
                  src={art.realImage.url}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-stone-900/80 text-white text-[9px] font-mono flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono text-[#ea580c] font-semibold uppercase tracking-wider block truncate">
                  {art.categoryLabel}
                </span>
                <h5 className="text-xs font-semibold text-stone-800 line-clamp-2 group-hover:text-[#ea580c] transition-colors mt-0.5 font-serif">
                  {art.title}
                </h5>
                <div className="flex items-center gap-2 text-[10px] text-stone-400 font-mono mt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {art.readTimeMinutes}m read
                  </span>
                  <span>·</span>
                  <span>{art.wordCount} words</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 6. Newsletter / Daily Career Dispatch */}
      <div className="bg-stone-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
        <div className="w-8 h-8 rounded-lg bg-[#ea580c] flex items-center justify-center">
          <Mail size={16} />
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm text-white">
            Daily Career Intelligence
          </h4>
          <p className="text-xs text-stone-300 mt-1">
            Get executive ATS resume teardowns, interview scripts, and salary benchmarks directly to your inbox.
          </p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to CareersBuz Daily Dispatch!'); }} className="space-y-2 pt-1">
          <input
            type="email"
            required
            placeholder="Enter your professional email..."
            className="w-full px-3 py-2 text-xs rounded-xl bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Subscribe Free
          </button>
        </form>
        <p className="text-[10px] text-stone-400 text-center font-mono">
          Zero spam. Unsubscribe anytime.
        </p>
      </div>

    </aside>
  );
};
