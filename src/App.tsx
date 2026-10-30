import React, { useState, useMemo, useEffect } from 'react';
import { ALL_ARTICLES, CATEGORIES, getArticlesByCategory, searchArticles } from './data/articles';
import { Article, CategoryId, InfographicData, PageView } from './types';
import { Header } from './components/Header';
import { TickerTape } from './components/TickerTape';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { InfographicModal } from './components/InfographicModal';
import { DeveloperHubModal } from './components/DeveloperHubModal';
import { EditorialModal } from './components/EditorialModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { LegalModals } from './components/LegalModals';
import { AdSenseBanner } from './components/AdSenseBanner';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  ArrowUpRight, 
  CheckCircle2, 
  Flame, 
  Compass, 
  Award, 
  BookOpen, 
  ShieldCheck,
  TrendingUp,
  X
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('feed');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedInfographic, setSelectedInfographic] = useState<InfographicData | null>(null);
  const [developerHubOpen, setDeveloperHubOpen] = useState(false);
  const [editorialOpen, setEditorialOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'standards' | null>(null);

  // Hash routing synchronization for deep links (#about-us, #contact-us, #privacy-policy, #terms-and-conditions, #disclaimer)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-us' || hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#contact-us' || hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms-and-conditions' || hash === '#terms') {
        setCurrentPage('terms');
      } else if (hash === '#disclaimer') {
        setCurrentPage('disclaimer');
      } else {
        setCurrentPage('feed');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToPage = (page: PageView) => {
    setCurrentPage(page);
    if (page === 'feed') {
      window.location.hash = '#home';
    } else if (page === 'about') {
      window.location.hash = '#about-us';
    } else if (page === 'contact') {
      window.location.hash = '#contact-us';
    } else if (page === 'privacy') {
      window.location.hash = '#privacy-policy';
    } else if (page === 'terms') {
      window.location.hash = '#terms-and-conditions';
    } else if (page === 'disclaimer') {
      window.location.hash = '#disclaimer';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    return searchArticles(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  // Featured Lead Story (Article 1)
  const leadArticle = ALL_ARTICLES[0];

  const handleSelectKeyword = (keyword: string) => {
    navigateToPage('feed');
    setSearchQuery(keyword);
    // Smooth scroll down to articles grid
    const el = document.getElementById('articles-feed');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ffeb3b] selection:text-slate-950">
      
      {/* 1. Header & Navigation */}
      <Header
        activeCategory={selectedCategory}
        currentPage={currentPage}
        onNavigatePage={navigateToPage}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery('');
          navigateToPage('feed');
        }}
        onOpenDeveloperHub={() => setDeveloperHubOpen(true)}
        onOpenEditorial={() => setEditorialOpen(true)}
        onOpenContact={() => navigateToPage('contact')}
        onOpenAbout={() => navigateToPage('about')}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Mandatory Ticker Tape: Positioned directly under the main header with glowing #5fdee7 borders */}
      <TickerTape onSelectKeyword={handleSelectKeyword} />

      {/* Main Page Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Standalone Navigable Pages (About Us, Contact Us, Privacy Policy, Terms & Conditions, Disclaimer) */}
        {currentPage === 'about' && (
          <AboutPage 
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage 
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
          />
        )}

        {currentPage === 'terms' && (
          <TermsPage 
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
          />
        )}

        {currentPage === 'disclaimer' && (
          <DisclaimerPage 
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
          />
        )}

        {/* Home Feed View (All 20 Articles, Lead Story, Categories, Filter & AdSense Grid) */}
        {currentPage === 'feed' && (
          <>
            {/* Hero Marquee & Institutional Showcase */}
            {selectedCategory === 'all' && !searchQuery && (
          <section className="space-y-6">
            
            {/* Lead Story Feature Card with Yellow Hover Interaction */}
            <div 
              onClick={() => setSelectedArticle(leadArticle)}
              className="card-yellow-hover group relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0f171e] via-[#0d161d] to-[#0a0f12] border border-cyan-500/40 cursor-pointer shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Lead Story Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono card-subtext-invert text-slate-400">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[#5fdee7] font-bold uppercase tracking-wider group-hover:bg-slate-900 group-hover:text-[#ffeb3b] group-hover:border-slate-900 transition-colors">
                      Lead Executive Study
                    </span>
                    <span aria-hidden="true" className="card-subtext-invert text-slate-500">·</span>
                    <span className="font-semibold">{leadArticle.categoryLabel}</span>
                    <span aria-hidden="true" className="card-subtext-invert text-slate-500">·</span>
                    <span>{leadArticle.readTimeMinutes} min read</span>
                    <span aria-hidden="true" className="card-subtext-invert text-slate-500">·</span>
                    <span>{leadArticle.wordCount} words</span>
                  </div>

                  <h2 className="card-text-invert text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-slate-950 transition-colors tracking-tight leading-tight font-['Outfit',sans-serif]">
                    {leadArticle.title}
                  </h2>

                  <p className="card-subtext-invert text-sm sm:text-base text-slate-300 group-hover:text-slate-800 transition-colors leading-relaxed line-clamp-3">
                    {leadArticle.deck}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={leadArticle.author.avatar}
                        alt={leadArticle.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-cyan-400 group-hover:border-slate-900"
                      />
                      <div>
                        <div className="card-text-invert font-bold text-white group-hover:text-slate-950">
                          {leadArticle.author.name}
                        </div>
                        <div className="card-subtext-invert text-[11px] text-slate-400 group-hover:text-slate-700">
                          {leadArticle.author.role}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 font-bold text-xs text-[#5fdee7] group-hover:text-slate-950 ml-auto transition-colors">
                      <span>Read 1,420-Word Case Study</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Right Column: AI Infographic Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-slate-700/60 shadow-xl pointer-events-none">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 380'%3E%3Crect width='600' height='380' fill='%2308131e'/%3E%3Cpath d='M0 0h600v380H0z' fill='none' stroke='%230ea5e9' stroke-width='2' opacity='0.2'/%3E%3Ctext x='300' y='50' font-family='sans-serif' font-size='22' font-weight='900' fill='%23ffffff' text-anchor='middle'%3EEXPLORING CAREER OPTIONS%3C/text%3E%3Ctext x='300' y='75' font-family='sans-serif' font-size='12' font-weight='700' fill='%2338bdf8' text-anchor='middle'%3EPATHWAYS TO PROFESSIONAL FULFILLMENT%3C/text%3E%3Ccircle cx='300' cy='180' r='60' fill='%230a1c2e' stroke='%230ea5e9' stroke-width='4'/%3E%3Ccircle cx='300' cy='180' r='45' fill='none' stroke='%23f97316' stroke-width='2' stroke-dasharray='6 6'/%3E%3Cpolygon points='300,135 312,180 300,172 288,180' fill='%2338bdf8'/%3E%3Cpolygon points='300,225 312,180 300,188 288,180' fill='%23f97316'/%3E%3Ctext x='300' y='260' font-family='sans-serif' font-size='10' font-weight='700' fill='%2338bdf8' text-anchor='middle'%3E3D CAREER NAVIGATION COMPASS%3C/text%3E%3Crect x='30' y='100' width='160' height='70' rx='6' fill='%230f172a' stroke='%23334155'/%3E%3Ctext x='40' y='122' font-family='sans-serif' font-size='10' font-weight='700' fill='%2338bdf8'%3EJOB MARKET ANALYSIS%3C/text%3E%3Ctext x='40' y='142' font-family='sans-serif' font-size='9' fill='%2394a3b8'%3E• Macro demand metrics%3C/text%3E%3Crect x='30' y='190' width='160' height='70' rx='6' fill='%230f172a' stroke='%23334155'/%3E%3Ctext x='40' y='212' font-family='sans-serif' font-size='10' font-weight='700' fill='%2338bdf8'%3ESKILLS ALIGNMENT%3C/text%3E%3Ctext x='40' y='232' font-family='sans-serif' font-size='9' fill='%2394a3b8'%3E• Competency mapping%3C/text%3E%3Crect x='410' y='100' width='160' height='70' rx='6' fill='%230f172a' stroke='%23334155'/%3E%3Ctext x='420' y='122' font-family='sans-serif' font-size='10' font-weight='700' fill='%23f97316'%3EINDUSTRY GROWTH SECTORS%3C/text%3E%3Ctext x='420' y='142' font-family='sans-serif' font-size='9' fill='%2394a3b8'%3E• AI infrastructure & tech%3C/text%3E%3Crect x='410' y='190' width='160' height='70' rx='6' fill='%230f172a' stroke='%23334155'/%3E%3Ctext x='420' y='212' font-family='sans-serif' font-size='10' font-weight='700' fill='%23f97316'%3ESALARY EXPECTATIONS%3C/text%3E%3Ctext x='420' y='232' font-family='sans-serif' font-size='9' fill='%2394a3b8'%3E• Equity & total reward%3C/text%3E%3C/svg%3E" 
                      alt="Exploring Career Options Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Institutional KPI Strip (Single-line metrics, tabular numerals) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-3">
              <div className="p-3.5 rounded-xl bg-[#0f171e] border border-slate-800 text-center">
                <span className="text-xl font-black text-white font-mono tabular-nums block">20 / 20</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">1,200+ Word Studies</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0f171e] border border-slate-800 text-center">
                <span className="text-xl font-black text-[#5fdee7] font-mono tabular-nums block">4 Pillars</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Placement Disciplines</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0f171e] border border-slate-800 text-center">
                <span className="text-xl font-black text-[#ffeb3b] font-mono tabular-nums block">100% Verified</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">AdSense & ATS Ready</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0f171e] border border-slate-800 text-center">
                <span className="text-xl font-black text-emerald-400 font-mono tabular-nums block">20 AI Infographics</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">3D Embossed Specs</span>
              </div>
            </div>

          </section>
        )}

        {/* Section Heading & Category Filter Strip */}
        <section id="articles-feed" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-['Outfit',sans-serif] flex items-center gap-2">
                <span>The CareersBuz Journal Feed</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[#5fdee7]">
                  {filteredArticles.length} Studies Active
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Hover over any article box to activate the brilliant neon yellow transition. Click to read the full 1500-word study.
              </p>
            </div>

            {/* Category Filter Buttons (Functional Segmented Buttons per §1.A) */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-900/90 rounded-xl border border-slate-800">
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'all' ? 'bg-[#ffeb3b] text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                All 20 Studies
              </button>

              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSearchQuery(''); }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat.id ? 'bg-[#5fdee7] text-slate-950 font-bold shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Active Search / Keyword Filter Indicator */}
          {searchQuery && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-xs">
              <div className="flex items-center gap-2">
                <Search size={14} className="text-[#5fdee7]" />
                <span>Showing search results matching: <strong className="text-[#ffeb3b]">"{searchQuery}"</strong></span>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs flex items-center gap-1 transition-colors"
              >
                <X size={12} />
                <span>Clear Filter</span>
              </button>
            </div>
          )}

          {/* 20 Article Grid: Every card has the mandatory dramatic yellow hover effect */}
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#0f171e] border border-slate-800 space-y-3">
              <Compass size={36} className="text-slate-500 mx-auto" />
              <h3 className="text-base font-bold text-white">No Matching Studies Found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No career research articles match your query. Try resetting your search filters or browse across all 4 categories.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-lg bg-[#5fdee7] text-slate-950 font-bold text-xs"
              >
                Reset to Full Feed
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={(art) => setSelectedArticle(art)}
                  onOpenInfographicZoom={(art) => setSelectedInfographic(art.infographic)}
                />
              ))}
            </div>
          )}

        </section>

        {/* AdSense Compliant Banner Slot */}
        <AdSenseBanner format="leaderboard" />

        {/* 4 Category Deep Dive Panels */}
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#5fdee7]">
              Comprehensive Domain Architecture
            </span>
            <h3 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
              Engineered Across Four Critical Career Disciplines
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every stage of your career trajectory is covered with five peer-reviewed, full-length research guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 hover:border-[#ffeb3b] cursor-pointer transition-all group"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5fdee7] block mb-2">
                  {cat.tagline}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#ffeb3b] transition-colors mb-2 font-['Outfit',sans-serif]">
                  {cat.label}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="text-xs font-bold text-[#5fdee7] group-hover:text-[#ffeb3b] flex items-center gap-1 transition-colors">
                  <span>Explore 5 Guides</span>
                  <ArrowUpRight size={13} />
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )}

</main>

{/* Footer */}
<Footer
  onSelectCategory={(cat) => {
    setSelectedCategory(cat);
    setSearchQuery('');
    navigateToPage('feed');
  }}
  onNavigatePage={navigateToPage}
  onOpenLegal={(type) => {
    if (type === 'privacy') navigateToPage('privacy');
    else if (type === 'terms') navigateToPage('terms');
    else setLegalModalType(type);
  }}
  onOpenDeveloperHub={() => setDeveloperHubOpen(true)}
  onOpenEditorial={() => setEditorialOpen(true)}
  onOpenContact={() => navigateToPage('contact')}
  onOpenAbout={() => navigateToPage('about')}
/>

      {/* Modals */}
      
      {/* 1. Full 1500-Word Article Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectRelated={(art) => setSelectedArticle(art)}
        allArticles={ALL_ARTICLES}
      />

      {/* 2. High-Resolution AI Infographic Modal */}
      <InfographicModal
        data={selectedInfographic}
        onClose={() => setSelectedInfographic(null)}
      />

      {/* 3. Developer Hub Modal (Ads.txt, App-Ads.txt, Robots.txt, Sitemap) */}
      <DeveloperHubModal
        isOpen={developerHubOpen}
        onClose={() => setDeveloperHubOpen(false)}
      />

      {/* 4. Editorial Team & Review Board Modal */}
      <EditorialModal
        isOpen={editorialOpen}
        onClose={() => setEditorialOpen(false)}
      />

      {/* 5. Contact Us Modal (Phone: 03007802693, Email: nadeemahmar4@gmail.com) */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* 6. About Us Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      {/* 7. Legal Modals (Privacy, Terms, Standards) */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
