import React from 'react';
import { 
  Briefcase, 
  Mail, 
  ShieldCheck, 
  Code2, 
  Network, 
  Phone,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { CategoryId, PageView } from '../types';

interface Props {
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onNavigatePage: (page: PageView) => void;
  onOpenDeveloperHub: () => void;
}

export const Footer: React.FC<Props> = ({
  onSelectCategory,
  onNavigatePage,
  onOpenDeveloperHub
}) => {
  return (
    <footer className="bg-[#1c1917] text-stone-300 text-xs mt-16 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer 4-Column Grid (GeneratePress / RecipePots Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#ea580c] text-white flex items-center justify-center shadow-md">
                <Briefcase size={20} />
              </div>
              <span className="text-2xl font-black text-white font-serif">
                Careers<span className="text-[#ea580c]">Buz</span>
              </span>
            </div>

            <p className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold">
              ENGINEERING CAREERS · PUBLISHED DAILY
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              An independent journal of career management, executive job placement, ATS resume reverse-engineering, and strategic workplace upskilling. Peer-audited guides published with zero algorithmic plagiarism.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-stone-900/90 px-3 py-1.5 rounded-lg border border-stone-800">
              <ShieldCheck size={14} />
              <span>Google AdSense &amp; Search Console Compliant</span>
            </div>
          </div>

          {/* Column 2: Career Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              Career Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('job-search');
                  }}
                  className="hover:text-[#ea580c] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight size={12} className="text-[#ea580c]" />
                  <span>Job Search &amp; Placement</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('resume-letter');
                  }}
                  className="hover:text-[#ea580c] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight size={12} className="text-[#ea580c]" />
                  <span>Resume &amp; Cover Letter</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('interview-prep');
                  }}
                  className="hover:text-[#ea580c] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight size={12} className="text-[#ea580c]" />
                  <span>Interview Preparation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('career-advice');
                  }}
                  className="hover:text-[#ea580c] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight size={12} className="text-[#ea580c]" />
                  <span>Career Advice &amp; Upskilling</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('all');
                  }}
                  className="text-stone-400 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono cursor-pointer"
                >
                  <span>View All 22 Detailed Guides →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Sitemap */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              Institutional &amp; Sitemap
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigatePage('sitemap')}
                  className="text-[#ea580c] hover:underline font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Network size={13} />
                  <span>Interactive Sitemap (All 22 Links)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('about')}
                  className="hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  About CareersBuz Editorial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('contact')}
                  className="hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  Contact Us &amp; Editorial Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('privacy')}
                  className="hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  Privacy Policy (GDPR / CCPA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('terms')}
                  className="hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('disclaimer')}
                  className="hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  Editorial &amp; Career Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              Direct Contact &amp; Desk
            </h4>
            
            <div className="space-y-2 text-xs text-stone-300">
              <a 
                href="tel:03007802693" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#ea580c]" />
                <span className="font-mono font-bold">03007802693</span>
              </a>

              <a 
                href="mailto:hostinger991@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#ea580c]" />
                <span className="font-mono truncate">hostinger991@gmail.com</span>
              </a>

              <a 
                href="mailto:nadeemahmar4@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#ea580c]" />
                <span className="font-mono truncate">nadeemahmar4@gmail.com</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDeveloperHub}
                className="w-full py-2 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono flex items-center justify-center gap-2 border border-stone-700 transition-colors cursor-pointer"
              >
                <Code2 size={13} className="text-[#ea580c]" />
                <span>Developer Hub (Ads.txt)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution Strip */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>
            © {new Date().getFullYear()} CareersBuz. All rights reserved. Engineering Careers · Published Daily.
          </p>
          <div className="flex items-center gap-3">
            <span>Built with GeneratePress design style for high-velocity Google AdSense crawling</span>
            <span>·</span>
            <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-[#ea580c] hover:underline">
              sitemap.xml
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
