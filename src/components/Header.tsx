import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  Briefcase, 
  Network, 
  Code2, 
  Phone
} from 'lucide-react';
import { CategoryId, PageView } from '../types';
import { CATEGORIES } from '../data/articles';

interface Props {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  currentPage: PageView;
  onNavigatePage: (page: PageView) => void;
  onOpenDeveloperHub: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<Props> = ({
  activeCategory,
  onSelectCategory,
  currentPage,
  onNavigatePage,
  onOpenDeveloperHub,
  searchQuery,
  onSearchChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categoriesList = CATEGORIES;

  const handleNavClick = (page: PageView, cat?: CategoryId | 'all') => {
    onNavigatePage(page);
    if (cat !== undefined) {
      onSelectCategory(cat);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors shadow-xs">
      
      {/* Top Utility Announcement Bar (Yellow/Amber Accents) */}
      <div className="bg-[#18181b] text-white text-[11px] font-mono py-1.5 px-4 hidden sm:block border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span>Welcome to CareersBuz · Engineering Careers &amp; Professional Upskilling · Published Daily</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="flex items-center gap-1 text-stone-300">
              <Phone size={11} className="text-yellow-400" />
              <span>03007802693</span>
            </span>
            <span>·</span>
            <button 
              onClick={() => handleNavClick('sitemap')} 
              className="text-yellow-400 hover:text-yellow-300 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <Network size={11} />
              <span>Interactive Sitemap</span>
            </button>
            <span>·</span>
            <span className="text-stone-400">Google AdSense &amp; RevBid Verified</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark & Tagline (Golden Yellow Theme) */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => handleNavClick('feed', 'all')} 
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-600 text-stone-900 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Briefcase size={22} className="stroke-[2.4]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">
                    Careers<span className="text-amber-500">Buz</span>
                  </span>
                  <span className="hidden md:inline-block text-[10px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                    Journal
                  </span>
                </div>
                <p className="text-[10px] text-stone-500 tracking-wider uppercase font-semibold font-sans">
                  Engineering Careers · Published Daily
                </p>
              </div>
            </button>
          </div>

          {/* Center Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs xl:max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (currentPage !== 'feed') {
                    onNavigatePage('feed');
                  }
                }}
                placeholder="Search 10+ career guides, ATS resumes..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-500 transition-all text-stone-800 placeholder-stone-400"
              />
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-[13px] font-semibold text-stone-700">
            <button
              onClick={() => handleNavClick('feed', 'all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'feed' && activeCategory === 'all'
                  ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200'
                  : 'hover:text-amber-700 hover:bg-stone-50'
              }`}
            >
              Home Feed
            </button>

            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick('feed', cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  currentPage === 'feed' && activeCategory === cat.id
                    ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200'
                    : 'hover:text-amber-700 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}

            {/* Sitemap Navigation Item */}
            <button
              onClick={() => handleNavClick('sitemap')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer font-bold ${
                currentPage === 'sitemap'
                  ? 'bg-yellow-400 text-stone-900 shadow-xs'
                  : 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200'
              }`}
              title="View full crawler-ready sitemap and XML directory"
            >
              <Network size={14} />
              <span>Sitemap</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200'
                  : 'hover:text-amber-700 hover:bg-stone-50'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200'
                  : 'hover:text-amber-700 hover:bg-stone-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action / Developer Hub & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDeveloperHub}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors border border-stone-200 cursor-pointer"
              title="AdSense & RevBid Crawler & Ads.txt Hub"
            >
              <Code2 size={13} className="text-amber-600" />
              <span>Dev Hub</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          
          {/* Mobile search */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentPage !== 'feed') {
                  onNavigatePage('feed');
                }
              }}
              placeholder="Search 10+ career guides..."
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-stone-200 bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          </div>

          <div className="space-y-1 font-semibold text-sm">
            <button
              onClick={() => handleNavClick('feed', 'all')}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'feed' && activeCategory === 'all'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              Home Feed
            </button>

            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick('feed', cat.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                  currentPage === 'feed' && activeCategory === cat.id
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                  {cat.count}
                </span>
              </button>
            ))}

            <div className="pt-2 border-t border-stone-100 space-y-1">
              <button
                onClick={() => handleNavClick('sitemap')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  currentPage === 'sitemap'
                    ? 'bg-yellow-400 text-stone-900 font-bold'
                    : 'text-amber-800 bg-amber-50'
                }`}
              >
                <Network size={16} />
                <span>Interactive Sitemap</span>
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'about'
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'contact'
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
