import React from 'react';
import { Article } from '../types';
import { Clock, BookOpen, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  article: Article;
  onSelect: (article: Article) => void;
  onOpenInfographicZoom: (article: Article) => void;
}

export const ArticleCard: React.FC<Props> = ({ article, onSelect, onOpenInfographicZoom }) => {
  return (
    <article
      onClick={() => onSelect(article)}
      className="card-yellow-hover group relative flex flex-col justify-between rounded-xl p-5 cursor-pointer bg-[#0f171e] border border-slate-800 text-slate-100 transition-all duration-300"
    >
      <div>
        {/* Top Metadata Row (Zero-Pill discipline: unboxed text with subtle typographic separators) */}
        <div className="flex items-center justify-between gap-2 text-xs mb-3 card-subtext-invert text-slate-400">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span className="text-[#5fdee7] group-hover:text-slate-900 font-bold transition-colors uppercase tracking-wider">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-600 group-hover:text-slate-900 transition-colors">·</span>
            <span className="font-semibold">{article.keyword}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono shrink-0">
            <Clock size={12} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
            <span>{article.readTimeMinutes} min read</span>
          </div>
        </div>

        {/* Real Authentic Editorial Photo (Zero Plagiarism, Non-AI Real Photography) */}
        <div className="relative mb-4 rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-800/80 group-hover:border-slate-950/20 transition-colors shadow-md">
          <img
            src={article.realImage.url}
            alt={article.realImage.alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
          
          {/* Badges on Image */}
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-[#5fdee7] border border-cyan-500/40 font-bold uppercase flex items-center gap-1">
              <ShieldCheck size={11} className="text-emerald-400" />
              <span>Real Editorial Photo</span>
            </span>
          </div>

          {/* Quick Technical Infographic Trigger */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenInfographicZoom(article);
              }}
              title="Inspect 3D AI Infographic Specification"
              className="px-2 py-1 bg-black/75 hover:bg-[#ffeb3b] hover:text-slate-950 text-slate-300 backdrop-blur-md border border-slate-700 hover:border-[#ffeb3b] text-[10px] font-mono rounded flex items-center gap-1 transition-colors"
            >
              <Sparkles size={11} className="text-[#5fdee7] group-hover:text-slate-950" />
              <span>Infographic</span>
            </button>
          </div>

          <div className="absolute bottom-2 left-2.5 right-2.5 z-10 text-[10px] text-slate-300 font-mono truncate">
            {article.realImage.caption}
          </div>
        </div>

        {/* Article Headline */}
        <h3 className="card-text-invert text-lg font-bold tracking-tight text-white group-hover:text-[#090d10] transition-colors leading-snug mb-2 font-['Outfit',sans-serif]">
          {article.title}
        </h3>

        {/* Deck / Summary Snippet */}
        <p className="card-subtext-invert text-xs text-slate-400 group-hover:text-[#1e293b] transition-colors leading-relaxed line-clamp-3 mb-4">
          {article.deck}
        </p>

        {/* 2 Key Metric Highlights */}
        <div className="mb-4 space-y-1.5 pt-2 border-t border-slate-800/80 card-accent-invert group-hover:border-slate-900/20 transition-colors">
          {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px] card-subtext-invert text-slate-300 group-hover:text-slate-900 transition-colors">
              <CheckCircle2 size={12} className="text-[#5fdee7] group-hover:text-slate-900 shrink-0 mt-0.5 transition-colors" />
              <span className="line-clamp-1">{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info & Read CTA */}
      <div className="pt-3 border-t border-slate-800/80 card-accent-invert group-hover:border-slate-900/20 flex items-center justify-between text-xs transition-colors">
        <div className="flex items-center gap-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-6 h-6 rounded-full object-cover border border-slate-700 group-hover:border-slate-900"
          />
          <div className="flex flex-col">
            <span className="card-text-invert font-semibold text-slate-200 group-hover:text-slate-950 text-[11px] leading-tight">
              {article.author.name}
            </span>
            <span className="card-subtext-invert text-[10px] text-slate-400 group-hover:text-slate-800 leading-tight">
              {article.publishDate}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 font-bold text-xs text-[#5fdee7] group-hover:text-slate-950 transition-colors">
          <span>Read Full Study</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </article>
  );
};
