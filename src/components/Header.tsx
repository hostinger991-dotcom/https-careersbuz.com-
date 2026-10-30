import React, { useState } from 'react';
import { 
  Code2, 
  Menu, 
  X, 
  Search, 
  Sparkles,
  BookOpen,
  FileCheck2,
  Users,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { CategoryId, PageView } from '../types';

interface Props {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  currentPage?: PageView;
  onNavigatePage?: (page: PageView) => void;
  onOpenDeveloperHub: () => void;
  onOpenEditorial: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<Props> = ({
  activeCategory,
  onSelectCategory,
  currentPage = 'feed',
  onNavigatePage,
  onOpenDeveloperHub,
  onOpenEditorial,
  onOpenContact,
  onOpenAbout,
  searchQuery,
  onSearchChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0a0f12]/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      {/* Top Utility Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark & Tagline */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('all');
              }} 
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f171e] to-[#0a0f12] border border-[#5fdee7]/50 flex items-center justify-center shadow-[0_0_12px_rgba(95,222,231,0.25)] group-hover:border-[#ffeb3b] transition-colors">
                <span className="text-xl font-black text-[#ffeb3b] tracking-tighter">CB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#5fdee7] transition-colors font-['Outfit',sans-serif]">
                  Careers<span className="text-[#ffeb3b]">Buz</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#5fdee7] uppercase -mt-1 font-bold">
                  ENGINEERING CAREERS · PUBLISHED DAILY
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('all');
              }}
              className={`hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                currentPage === 'feed' && activeCategory === 'all' ? 'text-[#ffeb3b] border-[#ffeb3b]' : 'border-transparent text-slate-300'
              }`}
            >
              Home Feed
            </button>

            <button
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('job-search');
              }}
              className={`hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                currentPage === 'feed' && activeCategory === 'job-search' ? 'text-[#ffeb3b] border-[#ffeb3b]' : 'border-transparent text-slate-300'
              }`}
            >
              Job Placement
            </button>

            <button
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('resume-letter');
              }}
              className={`hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                currentPage === 'feed' && activeCategory === 'resume-letter' ? 'text-[#ffeb3b] border-[#ffeb3b]' : 'border-transparent text-slate-300'
              }`}
            >
              Resume & Letter
            </button>

            <button
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('interview-prep');
              }}
              className={`hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                currentPage === 'feed' && activeCategory === 'interview-prep' ? 'text-[#ffeb3b] border-[#ffeb3b]' : 'border-transparent text-slate-300'
              }`}
            >
              Interview Prep
            </button>

            <button
              onClick={() => {
                onNavigatePage?.('feed');
                onSelectCategory('career-advice');
              }}
              className={`hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                currentPage === 'feed' && activeCategory === 'career-advice' ? 'text-[#ffeb3b] border-[#ffeb3b]' : 'border-transparent text-slate-300'
              }`}
            >
              Career & Upskilling
            </button>

            <button
              onClick={onOpenEditorial}
              className="hover:text-[#5fdee7] transition-colors whitespace-nowrap shrink-0 text-slate-400"
            >
              Editorial Team
            </button>
          </nav>

          {/* Action Zone (Search, About, Contact, Developer Hub) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Quick Search Toggle */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search 20 articles..."
                value={searchQuery}
                onChange={(e) => {
                  onNavigatePage?.('feed');
                  onSearchChange(e.target.value);
                }}
                className="w-44 md:w-56 px-3 py-1.5 pl-8 bg-slate-900/90 border border-slate-700 focus:border-[#5fdee7] text-xs text-white placeholder-slate-400 rounded-lg outline-none transition-all focus:w-64"
              />
              <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400 pointer-events-none" />
            </div>

            {/* About Us Link */}
            <button
              onClick={() => onNavigatePage ? onNavigatePage('about') : onOpenAbout()}
              className={`hidden md:inline-flex px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'about' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              About Us
            </button>

            {/* Contact Us Link */}
            <button
              onClick={() => onNavigatePage ? onNavigatePage('contact') : onOpenContact()}
              className={`hidden md:inline-flex px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'contact' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact Us
            </button>

            {/* Primary Action Button: Developer Hub */}
            <button
              onClick={onOpenDeveloperHub}
              title="AdSense Developer Hub for Ads.txt, App-Ads.txt & Robots.txt"
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-[#0f171e] to-slate-900 text-[#5fdee7] hover:text-[#ffeb3b] border border-[#5fdee7]/50 hover:border-[#ffeb3b] transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(95,222,231,0.2)]"
            >
              <Code2 size={14} className="text-[#5fdee7]" />
              <span className="whitespace-nowrap">Developer Hub</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f12] border-b border-slate-800 px-4 py-4 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search 20 articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-3 py-2 pl-8 bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-400 rounded-lg outline-none"
            />
            <Search size={16} className="absolute left-2.5 top-3 text-slate-400 pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 gap-1 text-sm">
            <button
              onClick={() => { 
                onNavigatePage?.('feed');
                onSelectCategory('all'); 
                setMobileMenuOpen(false); 
              }}
              className={`text-left px-3 py-2 rounded ${currentPage === 'feed' && activeCategory === 'all' ? 'bg-slate-800 text-[#ffeb3b]' : 'text-slate-300'}`}
            >
              Home Feed (All 20 Articles)
            </button>
            <button
              onClick={() => { 
                onNavigatePage?.('feed');
                onSelectCategory('job-search'); 
                setMobileMenuOpen(false); 
              }}
              className={`text-left px-3 py-2 rounded ${currentPage === 'feed' && activeCategory === 'job-search' ? 'bg-slate-800 text-[#ffeb3b]' : 'text-slate-300'}`}
            >
              Job Search & Placement
            </button>
            <button
              onClick={() => { 
                onNavigatePage?.('feed');
                onSelectCategory('resume-letter'); 
                setMobileMenuOpen(false); 
              }}
              className={`text-left px-3 py-2 rounded ${currentPage === 'feed' && activeCategory === 'resume-letter' ? 'bg-slate-800 text-[#ffeb3b]' : 'text-slate-300'}`}
            >
              Resume & Cover Letter
            </button>
            <button
              onClick={() => { 
                onNavigatePage?.('feed');
                onSelectCategory('interview-prep'); 
                setMobileMenuOpen(false); 
              }}
              className={`text-left px-3 py-2 rounded ${currentPage === 'feed' && activeCategory === 'interview-prep' ? 'bg-slate-800 text-[#ffeb3b]' : 'text-slate-300'}`}
            >
              Interview Preparation
            </button>
            <button
              onClick={() => { 
                onNavigatePage?.('feed');
                onSelectCategory('career-advice'); 
                setMobileMenuOpen(false); 
              }}
              className={`text-left px-3 py-2 rounded ${currentPage === 'feed' && activeCategory === 'career-advice' ? 'bg-slate-800 text-[#ffeb3b]' : 'text-slate-300'}`}
            >
              Career Advice & Upskilling
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => { 
                if (onNavigatePage) onNavigatePage('about'); 
                else onOpenAbout(); 
                setMobileMenuOpen(false); 
              }}
              className={`px-3 py-1.5 rounded ${currentPage === 'about' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}
            >
              About Us
            </button>
            <button
              onClick={() => { onOpenEditorial(); setMobileMenuOpen(false); }}
              className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded"
            >
              Editorial Team
            </button>
            <button
              onClick={() => { 
                if (onNavigatePage) onNavigatePage('contact'); 
                else onOpenContact(); 
                setMobileMenuOpen(false); 
              }}
              className={`px-3 py-1.5 rounded ${currentPage === 'contact' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}
            >
              Contact Us
            </button>
            <button
              onClick={() => { onOpenDeveloperHub(); setMobileMenuOpen(false); }}
              className="px-3 py-1.5 bg-cyan-950 text-[#5fdee7] rounded border border-cyan-800"
            >
              Ads.txt & Developer Hub
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
