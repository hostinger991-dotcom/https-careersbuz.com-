import React, { useState } from 'react';
import { Article } from '../types';
import { InfographicVisual } from './InfographicVisual';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark, 
  Check, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ListChecks, 
  Printer, 
  Download,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

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
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState<'reading' | 'infographic'>('reading');

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.keyword === article.keyword))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0a0f12] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#0a0f12]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors border border-slate-800"
            >
              <ArrowLeft size={14} />
              <span>Back to Feed</span>
            </button>

            <span className="hidden sm:inline text-xs font-mono text-slate-500">|</span>
            <span className="hidden sm:inline text-xs font-mono text-[#5fdee7] uppercase tracking-wider">
              {article.categoryLabel}
            </span>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center p-0.5 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('reading')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'reading' ? 'bg-[#ffeb3b] text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Article
              </button>
              <button
                onClick={() => setActiveTab('infographic')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'infographic' ? 'bg-[#5fdee7] text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Infographic
              </button>
            </div>

            <button
              onClick={handleShare}
              title="Copy Article Link"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
            </button>

            <button
              onClick={handlePrint}
              title="Print Article"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 hidden sm:block"
            >
              <Printer size={14} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-300 hover:text-rose-400 transition-colors border border-slate-800"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-4 sm:px-8 py-6 md:py-8 space-y-8">
          
          {/* Header Metadata & Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <span className="text-[#5fdee7] font-bold uppercase">{article.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#ffeb3b]">Keyword: {article.keyword}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {article.readTimeMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>{article.wordCount} words</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-['Outfit',sans-serif] mb-3">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
              {article.deck}
            </p>

            {/* Author Credential Byline */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0f171e] border border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#5fdee7]/50"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{article.author.name}</span>
                    <ShieldCheck size={13} className="text-[#5fdee7]" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <div className="text-right text-[11px] font-mono text-slate-400 hidden sm:block">
                <div>Published: {article.publishDate}</div>
                <div className="text-emerald-400">Peer-Reviewed & Certified</div>
              </div>
            </div>
          </div>

          {/* Featured Visual Tab Content */}
          {activeTab === 'infographic' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#5fdee7]" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      Official AI Infographic High-Tech Blueprint
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300">3D Metallic Embossed Standard</span>
                </div>
                <InfographicVisual data={article.infographic} isHero={true} />
              </div>

              {/* AI Generation Prompt Spec Card */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div className="text-xs font-bold text-[#ffeb3b] mb-1.5 flex items-center gap-1">
                  <span>Approved Generation Prompt Formulation</span>
                </div>
                <p className="font-mono text-slate-300 leading-relaxed bg-[#0a0f12] p-3 rounded border border-slate-800 text-[11px]">
                  {article.infographic.prompt}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Top Banner: Authentic Zero-Plagiarism Editorial Photography */}
              {article.realImage && (
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                    <img
                      src={article.realImage.url}
                      alt={article.realImage.alt}
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-mono text-[11px] font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <ShieldCheck size={13} />
                        <span>Zero Plagiarism · Authentic Photo</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 text-slate-200 border border-white/20 font-mono text-[10px] backdrop-blur-sm">
                        Non-AI Real Workplace
                      </span>
                    </div>

                    {/* Bottom Quick Switcher */}
                    <div className="absolute bottom-3 right-3">
                      <button
                        onClick={() => setActiveTab('infographic')}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-[#5fdee7] text-white hover:text-slate-950 border border-slate-700 hover:border-[#5fdee7] font-mono text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-all"
                      >
                        <Sparkles size={13} className="text-[#5fdee7] group-hover:text-slate-950" />
                        <span>View AI Infographic Blueprint →</span>
                      </button>
                    </div>
                  </div>

                  {/* Image Caption & Royalty-Free Attribution */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-400 px-1 font-mono gap-1">
                    <span className="italic text-slate-300">
                      Figure 1: {article.realImage.caption}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <span>Source: {article.realImage.credit}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">Zero-Plagiarism Commercial License</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Key Takeaways Section */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0f171e] to-[#0d1b24] border border-[#5fdee7]/40 shadow-[0_0_15px_rgba(95,222,231,0.12)]">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-[#ffeb3b]" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#5fdee7] font-mono">
                    Executive Key Takeaways
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-[#ffeb3b] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliant AdSense Slot (In-Article Unit Preview) */}
              <div className="my-6 p-4 rounded-xl bg-[#090d10] border border-slate-800/80 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                  Advertisement · AdSense Compliant In-Article Native Unit
                </span>
                <div className="h-24 sm:h-28 rounded-lg bg-slate-900/60 border border-dashed border-slate-700/60 flex flex-col items-center justify-center p-3">
                  <div className="text-xs font-bold text-slate-400">CareersBuz Partner Placement</div>
                  <div className="text-[11px] text-slate-400 mt-1 max-w-md">
                    Verified recruitment portals, enterprise talent solutions & continuous executive upskilling academies.
                  </div>
                </div>
              </div>

              {/* In-Depth Core Sections (1200 - 1500+ Words) */}
              <div className="space-y-8 text-slate-200">
                {article.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <div className="border-b border-slate-800 pb-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Outfit',sans-serif]">
                        {section.heading}
                      </h2>
                      {section.subheading && (
                        <p className="text-xs sm:text-sm font-medium text-[#5fdee7] mt-1">
                          {section.subheading}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                      {section.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Section Takeaways if present */}
                    {section.takeaways && (
                      <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm space-y-1.5 my-3">
                        <div className="font-bold text-[#ffeb3b] uppercase tracking-wider text-[11px] font-mono">
                          Strategic Observations
                        </div>
                        {section.takeaways.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-slate-300">
                            <span className="text-[#5fdee7] font-bold">›</span>
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Case Study Card if present */}
                    {section.caseStudy && (
                      <div className="p-5 rounded-xl bg-[#0f171e] border border-cyan-500/30 my-4 shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono uppercase tracking-widest text-[#5fdee7] font-bold">
                            Real-World Case Study
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">Verified Scenario</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2 font-['Outfit',sans-serif]">
                          {section.caseStudy.title}
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                          <div>
                            <strong className="text-rose-400">The Problem:</strong> {section.caseStudy.scenario}
                          </div>
                          <div>
                            <strong className="text-[#ffeb3b]">The Strategy:</strong> {section.caseStudy.strategy}
                          </div>
                          <div>
                            <strong className="text-emerald-400">The Outcome:</strong> {section.caseStudy.outcome}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Checklist if present */}
                    {section.actionChecklist && (
                      <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 my-4">
                        <div className="flex items-center gap-2 mb-3">
                          <ListChecks size={16} className="text-emerald-400" />
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-mono">
                            Actionable Step-by-Step Checklist
                          </h4>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm">
                          {section.actionChecklist.map((item, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2 text-slate-300">
                              <span className="w-4 h-4 rounded bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-[10px] text-emerald-400 shrink-0 mt-0.5 font-bold">
                                {cIdx + 1}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Frequently Asked Questions */}
              {article.faq && article.faq.length > 0 && (
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle size={18} className="text-[#ffeb3b]" />
                    <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {article.faq.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-sm font-bold text-[#5fdee7] mb-1">
                          Q: {item.question}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Related Articles in Category */}
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
              Explore More in {article.categoryLabel}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedArticles.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelated(rel)}
                  className="p-3 rounded-lg bg-slate-900 hover:bg-[#ffeb3b] hover:text-slate-950 border border-slate-800 cursor-pointer transition-colors group"
                >
                  <span className="text-[10px] font-mono text-[#5fdee7] group-hover:text-slate-950 font-bold block mb-1">
                    {rel.keyword}
                  </span>
                  <h5 className="text-xs font-bold text-white group-hover:text-slate-950 line-clamp-2 leading-snug">
                    {rel.title}
                  </h5>
                  <div className="text-[10px] text-slate-400 group-hover:text-slate-800 mt-2">
                    {rel.readTimeMinutes} min read
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification & Inquiries */}
          <div className="p-4 rounded-xl bg-[#090d10] border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white">Have questions regarding this research?</span> Reach out to the editorial desk directly at{' '}
              <a href="mailto:nadeemahmar4@gmail.com" className="text-[#5fdee7] hover:underline">
                nadeemahmar4@gmail.com
              </a>{' '}
              or WhatsApp{' '}
              <a href="https://wa.me/923007802693" target="_blank" rel="noopener noreferrer" className="text-[#ffeb3b] hover:underline font-mono">
                03007802693
              </a>.
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg shrink-0 text-xs"
            >
              Close Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
