import React, { useState } from 'react';
import { Article } from '../types';
import { 
  X, 
  Clock, 
  Share2, 
  Check, 
  ArrowLeft, 
  Printer, 
  ShieldCheck, 
  BookOpen, 
  Bookmark, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Award, 
  FileText,
  Briefcase
} from 'lucide-react';
import { InfographicVisual } from './InfographicVisual';

interface Props {
  article: Article | null;
  onClose: () => void;
  onSelectRelated: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleModal: React.FC<Props> = ({ 
  article, 
  onClose, 
  onSelectRelated,
  allArticles 
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [viewMode, setViewMode] = useState<'real' | 'infographic'>('real');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!article) return null;

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#recipe-${article.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-stone-200 text-stone-800 transition-all">
        
        {/* Sticky Action Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Feed</span>
            </button>
            <span className="hidden md:inline-block text-stone-300">|</span>
            <span className="hidden md:inline-block text-xs font-mono text-[#ea580c] font-bold uppercase tracking-wider">
              {article.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors cursor-pointer"
              title="Print career guide"
            >
              <Printer size={18} />
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
              title="Share article URL"
            >
              {copiedLink ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              aria-label="Close reader"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Article Content Container */}
        <div className="px-6 sm:px-10 lg:px-12 py-8 space-y-8">
          
          {/* Top Byline & Category */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] font-bold">
                {article.categoryLabel}
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-500">Updated {article.lastUpdated}</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-500 flex items-center gap-1">
                <Clock size={12} />
                {article.readTimeMinutes} min read
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-500 flex items-center gap-1">
                <BookOpen size={12} />
                {article.wordCount} words
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-stone-900 leading-tight">
              {article.title}
            </h1>

            <p className="text-base text-stone-600 leading-relaxed font-sans font-normal">
              {article.deck}
            </p>

            {/* Author Credit Card */}
            <div className="pt-2 flex items-center justify-between border-t border-stone-100">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-mono">
                    {article.author.role}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <ShieldCheck size={14} />
                <span>Zero Plagiarism &amp; Peer Reviewed</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation Mode Toggle (Real Photo vs Infographic) */}
          <div className="flex items-center justify-between bg-stone-100 p-1.5 rounded-2xl">
            <span className="text-xs font-mono font-semibold text-stone-600 px-3">
              Visual Asset Mode:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('real')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'real'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Authentic Photography
              </button>
              {article.infographic && (
                <button
                  onClick={() => setViewMode('infographic')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewMode === 'infographic'
                      ? 'bg-[#ea580c] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Sparkles size={12} />
                  <span>3D AI Infographic</span>
                </button>
              )}
            </div>
          </div>

          {/* Hero Visual Display */}
          {viewMode === 'real' ? (
            <div className="space-y-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={article.realImage.url}
                  alt={article.realImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono px-1">
                <span>{article.realImage.caption}</span>
                <span className="text-stone-400">{article.realImage.credit}</span>
              </div>
            </div>
          ) : (
            article.infographic && (
              <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-xl">
                <InfographicVisual data={article.infographic} />
              </div>
            )
          )}

          {/* Executive Summary & Key Takeaways Card */}
          <div className="bg-gradient-to-br from-orange-50/80 via-white to-amber-50/50 border border-orange-200 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c] text-white flex items-center justify-center">
                <Briefcase size={16} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Executive Summary &amp; Key Takeaways
                </h3>
                <p className="text-[11px] font-mono text-[#ea580c]">
                  HIGH-IMPACT INSIGHTS FOR CAREER ACCELERATION
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed italic border-l-2 border-[#ea580c] pl-3">
              "{article.summary}"
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                Core Strategic Principles:
              </h4>
              <ul className="grid sm:grid-cols-1 gap-2">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 leading-snug">
                    <CheckCircle2 size={14} className="text-[#ea580c] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Structured Guide Sections (1,200 to 1,500+ words) */}
          <div className="space-y-8 pt-4 border-t border-stone-200">
            {article.sections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                    {sec.heading}
                  </h2>
                  {sec.subheading && (
                    <p className="text-xs font-mono text-[#ea580c] uppercase tracking-wider font-semibold mt-1">
                      {sec.subheading}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Section Specific Takeaways / Bullets */}
                {sec.takeaways && sec.takeaways.length > 0 && (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-3 space-y-2">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                      Takeaway Notes:
                    </h5>
                    <ul className="space-y-1.5">
                      {sec.takeaways.map((t, tIdx) => (
                        <li key={tIdx} className="text-xs text-stone-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Case Study Callout Box */}
                {sec.caseStudy && (
                  <div className="bg-white border-2 border-amber-200 rounded-2xl p-5 shadow-xs space-y-3 my-4">
                    <div className="flex items-center gap-2 text-amber-800">
                      <Award size={18} className="text-[#ea580c]" />
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        {sec.caseStudy.title}
                      </h4>
                    </div>
                    <div className="space-y-2 text-xs text-stone-700">
                      <p><strong>Scenario:</strong> {sec.caseStudy.scenario}</p>
                      <p><strong>Strategy:</strong> {sec.caseStudy.strategy}</p>
                      <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
                        Outcome: {sec.caseStudy.outcome}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Checklist */}
                {sec.actionChecklist && sec.actionChecklist.length > 0 && (
                  <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-4 space-y-2">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-900 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#ea580c]" />
                      <span>Actionable Implementation Checklist:</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-800">
                      {sec.actionChecklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded text-[#ea580c] focus:ring-[#ea580c]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Frequently Asked Questions (FAQ) Accordion */}
          {article.faq && article.faq.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-stone-200">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Frequently Asked Career Questions
              </h3>
              <div className="space-y-2">
                {article.faq.map((item, fIdx) => (
                  <div key={fIdx} className="border border-stone-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                      className="w-full px-4 py-3 bg-stone-50 hover:bg-stone-100 flex items-center justify-between text-left text-xs font-bold text-stone-800 cursor-pointer"
                    >
                      <span>{item.question}</span>
                      {openFaqIndex === fIdx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaqIndex === fIdx && (
                      <div className="px-4 py-3 bg-white text-xs text-stone-700 leading-relaxed border-t border-stone-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Indexed Tags:</span>
            {article.tags.map((tag, tIdx) => (
              <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles Carousel */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 border-t border-stone-200 space-y-4">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Related {article.categoryLabel} Playbooks
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedArticles.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 border border-stone-200 rounded-xl hover:border-orange-300 hover:shadow-xs transition-all cursor-pointer group bg-stone-50/50"
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-stone-100">
                      <img
                        src={rel.realImage.url}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#ea580c] font-bold uppercase">
                      {rel.readTimeMinutes} min read
                    </span>
                    <h5 className="text-xs font-bold text-stone-800 line-clamp-2 group-hover:text-[#ea580c] mt-0.5 font-serif">
                      {rel.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
