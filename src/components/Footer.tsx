import React from 'react';
import { CategoryId, PageView } from '../types';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Code2, 
  ArrowUpRight,
  BookOpen
} from 'lucide-react';

interface Props {
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onNavigatePage?: (page: PageView) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'standards') => void;
  onOpenDeveloperHub: () => void;
  onOpenEditorial: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<Props> = ({
  onSelectCategory,
  onNavigatePage,
  onOpenLegal,
  onOpenDeveloperHub,
  onOpenEditorial,
  onOpenContact,
  onOpenAbout
}) => {
  return (
    <footer className="bg-[#070b0e] border-t border-slate-800 text-slate-400 text-xs mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0f171e] border border-[#5fdee7]/50 flex items-center justify-center">
                <span className="text-base font-black text-[#ffeb3b]">CB</span>
              </div>
              <span className="text-xl font-black text-white font-['Outfit',sans-serif]">
                Careers<span className="text-[#ffeb3b]">Buz</span>
              </span>
            </div>
            
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#5fdee7] font-bold">
              ENGINEERING CAREERS · PUBLISHED DAILY
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              An independent journal of career management, job placement, resume engineering, and professional upskilling. Dedicated to empirical labor market data and executive career sovereignty.
            </p>
          </div>

          {/* Column 2: Core Research Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Core Research Disciplines
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('job-search')}
                  className="hover:text-[#ffeb3b] transition-colors text-left"
                >
                  Job Search & Placement (5 Guides)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('resume-letter')}
                  className="hover:text-[#ffeb3b] transition-colors text-left"
                >
                  Resume & Cover Letter (5 Guides)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('interview-prep')}
                  className="hover:text-[#ffeb3b] transition-colors text-left"
                >
                  Interview Preparation (5 Guides)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('career-advice')}
                  className="hover:text-[#ffeb3b] transition-colors text-left"
                >
                  Career Advice & Upskilling (5 Guides)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="text-[#5fdee7] hover:underline"
                >
                  View Complete 20-Article Archive →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Governance & Tools */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Institutional & Developer
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('about') : onOpenAbout()} 
                  className="hover:text-white transition-colors"
                >
                  About CareersBuz
                </button>
              </li>
              <li>
                <button onClick={onOpenEditorial} className="hover:text-white transition-colors">
                  Editorial Board & Standards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('disclaimer') : onOpenLegal('standards')} 
                  className="hover:text-white transition-colors"
                >
                  Disclaimer & Zero Plagiarism
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeveloperHub}
                  className="text-[#5fdee7] hover:text-[#ffeb3b] font-medium flex items-center gap-1 transition-colors"
                >
                  <Code2 size={13} />
                  <span>Developer Hub (Ads.txt & Robots.txt)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('contact') : onOpenContact()} 
                  className="hover:text-white transition-colors"
                >
                  Contact Editorial Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Mandatory Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Official Contact Desk
            </h4>
            
            <div className="space-y-2">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/923007802693"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-[#0f171e] hover:bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 transition-colors text-slate-200 group"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <div className="text-[11px]">
                  <span className="text-slate-400 block text-[10px]">Phone & WhatsApp</span>
                  <span className="font-mono font-bold text-white group-hover:text-emerald-300">
                    03007802693
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:nadeemahmar4@gmail.com"
                className="flex items-center gap-2 p-2 rounded-lg bg-[#0f171e] hover:bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-400 transition-colors text-slate-200 group"
              >
                <Mail size={14} className="text-[#5fdee7]" />
                <div className="text-[11px] overflow-hidden">
                  <span className="text-slate-400 block text-[10px]">Official Editorial Email</span>
                  <span className="font-medium text-white group-hover:text-[#5fdee7] truncate block">
                    nadeemahmar4@gmail.com
                  </span>
                </div>
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400">
              <span className="font-bold text-slate-300">AdSense Verified:</span> Built in compliance with Google AdSense, Search Console & GitHub Pages root deployment.
            </div>
          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-slate-400">
            Copyright © 2026 CareersBuz. All rights reserved. Engineering Careers · Published Daily.
          </div>

          {/* Mandatory Legal Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-400">
            <button
              onClick={() => onNavigatePage ? onNavigatePage('privacy') : onOpenLegal('privacy')}
              className="hover:text-[#ffeb3b] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('terms') : onOpenLegal('terms')}
              className="hover:text-[#ffeb3b] transition-colors"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigatePage ? onNavigatePage('disclaimer') : onOpenLegal('standards')}
              className="hover:text-[#ffeb3b] transition-colors"
            >
              Disclaimer
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('standards')}
              className="hover:text-[#ffeb3b] transition-colors"
            >
              Editorial Standards
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
