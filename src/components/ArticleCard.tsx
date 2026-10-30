import React from 'react';
import { Article } from '../types';
import { Clock, ShieldCheck, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

interface Props {
  article: Article;
  onSelect: (article: Article) => void;
}

export const ArticleCard: React.FC<Props> = ({ article, onSelect }) => {
  return (
    <article 
      onClick={() => onSelect(article)}
      className="recipe-card-hover group bg-white border border-stone-200 rounded-2xl overflow-hidden cursor-pointer shadow-xs flex flex-col justify-between transition-all"
    >
      <div>
        {/* Real Authentic Workplace & Career Photography Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <img
            src={article.realImage.url}
            alt={article.realImage.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#ea580c] shadow-xs">
              {article.categoryLabel}
            </span>
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono font-bold text-white shadow-xs flex items-center gap-1">
              <ShieldCheck size={11} className="text-emerald-400" />
              <span>Peer-Reviewed</span>
            </span>
          </div>

          {/* Bottom Bar on Image (Reading Time & Word Count) */}
          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="flex items-center gap-1 bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-md">
              <Clock size={11} />
              <span>{article.readTimeMinutes} min read</span>
            </span>
            <span className="flex items-center gap-1 bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-md text-orange-200 font-semibold">
              <BookOpen size={11} />
              <span>{article.wordCount} words</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-2.5">
          
          {/* Metadata Keyword & Updated date */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500 font-mono">
            <span className="text-[#ea580c] font-bold uppercase tracking-wider">
              #{article.keyword}
            </span>
            <span>·</span>
            <span>Updated {article.lastUpdated}</span>
          </div>

          {/* Guide Headline */}
          <h3 className="text-lg font-bold tracking-tight text-stone-900 group-hover:text-[#ea580c] transition-colors leading-snug font-serif">
            {article.title}
          </h3>

          {/* Short Deck / Description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {article.deck}
          </p>
        </div>
      </div>

      {/* Footer Byline & Action */}
      <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-6 h-6 rounded-full object-cover border border-stone-200"
          />
          <span className="text-xs font-semibold text-stone-700 truncate max-w-[130px]">
            {article.author.name}
          </span>
        </div>

        <span className="text-xs font-bold text-[#ea580c] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          <span>Read Guide</span>
          <ArrowRight size={13} />
        </span>
      </div>
    </article>
  );
};
