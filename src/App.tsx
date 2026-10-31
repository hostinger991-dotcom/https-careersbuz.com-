import React, { useState, useMemo, useEffect } from 'react';
import { ALL_ARTICLES, CATEGORIES, getArticlesByCategory, searchArticles } from './data/articles';
import { Article, CategoryId, PageView } from './types';
import { Header } from './components/Header';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { Sidebar } from './components/Sidebar';
import { DeveloperHubModal } from './components/DeveloperHubModal';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { SitemapPage } from './pages/SitemapPage';
import { 
  Briefcase, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('feed');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [developerHubOpen, setDeveloperHubOpen] = useState(false);

  // Hash routing synchronization for deep links (#home, #about-us, #contact-us, #sitemap, #privacy-policy, #terms-and-conditions, #disclaimer, and #recipe-[slug])
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      
      if (hash.startsWith('#recipe-')) {
        const targetSlug = hash.replace('#recipe-', '');
        const found = ALL_ARTICLES.find(a => a.slug.toLowerCase() === targetSlug || a.id.toLowerCase() === targetSlug);
        if (found) {
          setSelectedArticle(found);
          setCurrentPage('feed');
          return;
        }
      }

      if (hash === '#about-us' || hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#contact-us' || hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#sitemap' || hash === '#sitemap-index') {
        setCurrentPage('sitemap');
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
    } else if (page === 'sitemap') {
      window.location.hash = '#sitemap';
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
    let result = searchArticles(searchQuery);
    if (selectedCategory !== 'all') {
      result = result.filter(a => a.category === selectedCategory);
    }
    return result;
  }, [searchQuery, selectedCategory]);

  // Lead Featured Guide (Article #1) and Secondary Featured (Articles #2 and #6)
  const heroArticle = ALL_ARTICLES[0];
  const secondaryFeatured = [ALL_ARTICLES[5], ALL_ARTICLES[10]];

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#1f2937] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#fed7aa] selection:text-[#9a3412]">
      
      {/* 1. Header & Navigation (RecipePots Clean Editorial Style) */}
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
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* STANDALONE NAVIGABLE PAGES */}
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

        {currentPage === 'sitemap' && (
          <SitemapPage 
            allArticles={ALL_ARTICLES}
            onBackToHome={() => navigateToPage('feed')} 
            onNavigateTo={(p) => navigateToPage(p as PageView)} 
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              navigateToPage('feed');
            }}
            onSelectArticle={(art) => setSelectedArticle(art)}
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

        {/* HOME FEED VIEW (CareersBuz 20 Guides + Hero Spotlight + RecipePots / GeneratePress 2-Column Sidebar Layout) */}
        {currentPage === 'feed' && (
          <>
            {/* HERO FEATURED GUIDE SECTION (When not filtering with search) */}
            {selectedCategory === 'all' && !searchQuery && (
              <section className="space-y-6">
                
                {/* Hero Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left: Lead Featured Hero Guide */}
                  <div 
                    onClick={() => setSelectedArticle(heroArticle)}
                    className="lg:col-span-8 group bg-white border border-stone-200 hover:border-[#ea580c] rounded-3xl p-6 sm:p-8 cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500">
                        <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] font-bold uppercase tracking-wider">
                          Today's Featured Career Playbook
                        </span>
                        <span>·</span>
                        <span className="font-semibold text-stone-700">{heroArticle.categoryLabel}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-emerald-600 font-bold">
                          <ShieldCheck size={13} />
                          <span>Peer-Reviewed</span>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 group-hover:text-[#ea580c] transition-colors tracking-tight leading-tight font-serif">
                        {heroArticle.title}
                      </h2>

                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed line-clamp-3 font-sans">
                        {heroArticle.deck}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 pt-2">
                        <span className="flex items-center gap-1 font-bold text-stone-800">
                          <Clock size={13} className="text-[#ea580c]" />
                          <span>{heroArticle.readTimeMinutes} Min Read</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 font-bold text-stone-800">
                          <BookOpen size={13} className="text-[#ea580c]" />
                          <span>{heroArticle.wordCount} Words</span>
                        </span>
                        <span>·</span>
                        <span className="text-[#ea580c] font-bold uppercase">#{heroArticle.keyword}</span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={heroArticle.author.avatar}
                          alt={heroArticle.author.name}
                          className="w-9 h-9 rounded-full object-cover border border-orange-200"
                        />
                        <div>
                          <div className="text-xs font-bold text-stone-900">
                            {heroArticle.author.name}
                          </div>
                          <div className="text-[10px] text-stone-500 font-mono">
                            {heroArticle.author.role}
                          </div>
                        </div>
                      </div>

                      <span className="px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold group-hover:bg-[#c2410c] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer">
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Right: 2 Side Highlights */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    {secondaryFeatured.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => setSelectedArticle(art)}
                        className="flex-1 bg-white border border-stone-200 hover:border-[#ea580c] rounded-3xl p-5 cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                            <span className="text-[#ea580c] font-bold uppercase">{art.categoryLabel}</span>
                            <span className="flex items-center gap-1 text-stone-600 font-semibold">
                              <Clock size={11} />
                              <span>{art.readTimeMinutes}m read</span>
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-stone-900 group-hover:text-[#ea580c] transition-colors font-serif line-clamp-2 leading-snug">
                            {art.title}
                          </h3>

                          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                            {art.deck}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 mt-2">
                          <span className="font-mono text-[11px]">{art.wordCount} words · Verified</span>
                          <span className="font-bold text-[#ea580c] group-hover:translate-x-1 transition-transform">Read Guide →</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </section>
            )}

            {/* CATEGORY FILTER TABS & SEARCH INDICATOR */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
                
                {/* Horizontal Category Filter Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    All Career Guides ({ALL_ARTICLES.length})
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSearchQuery('');
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-[#ea580c] text-white shadow-xs'
                          : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>

                {/* Article Count & Search Status */}
                <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
                  <span>Showing <strong>{filteredArticles.length}</strong> of {ALL_ARTICLES.length} Guides</span>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-[#ea580c] hover:underline font-bold cursor-pointer"
                    >
                      (Clear Search)
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* MAIN 2-COLUMN LAYOUT (RecipePots / GeneratePress Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left / Main Column: Career Guides Grid (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Grid of Career Guide Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onSelect={(art) => setSelectedArticle(art)}
                    />
                  ))}
                </div>

                {/* No Results Fallback */}
                {filteredArticles.length === 0 && (
                  <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center space-y-4 shadow-xs">
                    <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center mx-auto">
                      <Search size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-stone-900">
                      No career guides matched your search
                    </h3>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto">
                      Try searching for keywords like "ATS", "interview", "salary", "remote", or "executive".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Reset Search &amp; Category Filters
                    </button>
                  </div>
                )}

              </div>

              {/* Right Column: GeneratePress-Style Sticky Sidebar (4 cols) */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <Sidebar
                  allArticles={ALL_ARTICLES}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    setSearchQuery('');
                    navigateToPage('feed');
                  }}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onNavigatePage={navigateToPage}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>

            </div>

          </>
        )}

      </main>

      {/* ARTICLE READING MODAL (Full 1,400+ Words Guide) */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => {
            setSelectedArticle(null);
            // reset hash if it was a direct recipe deep link
            if (window.location.hash.startsWith('#recipe-')) {
              window.history.pushState(null, '', window.location.pathname + '#home');
            }
          }}
          onSelectRelated={(art) => setSelectedArticle(art)}
          allArticles={ALL_ARTICLES}
        />
      )}

      {/* ADSENSE & CRAWLER DEVELOPER HUB MODAL */}
      {developerHubOpen && (
        <DeveloperHubModal 
          onClose={() => setDeveloperHubOpen(false)} 
        />
      )}

      {/* GENERATEPRESS STYLE 4-COLUMN FOOTER */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery('');
          navigateToPage('feed');
        }}
        onNavigatePage={navigateToPage}
        onOpenDeveloperHub={() => setDeveloperHubOpen(true)}
      />

    </div>
  );
}
