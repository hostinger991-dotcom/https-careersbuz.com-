import React from 'react';
import { 
  Briefcase, 
  Mail, 
  ShieldCheck, 
  Code2, 
  Network, 
  Phone,
  ArrowRight
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
    <footer className="bg-[#18181b] text-stone-300 text-xs mt-16 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer 4-Column Grid (GeneratePress / RecipePots Layout with Yellow Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-stone-900 flex items-center justify-center shadow-md font-bold">
                <Briefcase size={20} className="stroke-[2.4]" />
              </div>
              <span className="text-2xl font-black text-white font-serif">
                Careers<span className="text-yellow-400">Buz</span>
              </span>
            </div>

            <p className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-bold">
              ENGINEERING CAREERS · PUBLISHED DAILY
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              An independent journal of career management, executive job placement, ATS resume reverse-engineering, and strategic workplace upskilling. Peer-audited guides published with zero algorithmic plagiarism.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-stone-900/90 px-3 py-1.5 rounded-lg border border-stone-800">
              <ShieldCheck size={14} />
              <span>Google AdSense &amp; RevBid Compliant</span>
            </div>
          </div>

          {/* Column 2: 2 Core Career Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              Core Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('job-search');
                  }}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-300"
                >
                  <ArrowRight size={12} className="text-yellow-400" />
                  <span>Job Search &amp; Placement (5 Guides)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('resume-letter');
                  }}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-300"
                >
                  <ArrowRight size={12} className="text-yellow-400" />
                  <span>Resume &amp; Cover Letter (5 Guides)</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => {
                    onNavigatePage('feed');
                    onSelectCategory('all');
                  }}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 cursor-pointer text-stone-400 font-mono text-[11px]"
                >
                  <ArrowRight size={11} className="text-yellow-400" />
                  <span>Browse All 10 Career Playbooks</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              Institutional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigatePage('about')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-stone-300"
                >
                  About Us &amp; Editorial Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('contact')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-stone-300"
                >
                  Contact Us &amp; Editorial Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('privacy')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-stone-300"
                >
                  Privacy Policy &amp; Cookie Disclosure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('terms')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-stone-300"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('disclaimer')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-stone-300"
                >
                  Editorial &amp; Career Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('sitemap')}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1 text-yellow-400 font-bold cursor-pointer"
                >
                  <Network size={12} />
                  <span>Interactive Sitemap Directory</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Publisher & Webmaster Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-stone-800 pb-1.5">
              AdSense &amp; Crawler Hub
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Real-time programmatic ads verification, direct robots.txt, and live revbid.net / ads.txt synchronization for web crawlers.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenDeveloperHub}
                className="w-full py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors border border-stone-700 cursor-pointer"
              >
                <Code2 size={13} className="text-yellow-400" />
                <span>Open Developer &amp; Ads Hub</span>
              </button>
              <div className="text-[10px] text-stone-400 font-mono space-y-1">
                <div>Owner Domain: <span className="text-stone-300">careersbuz.com</span></div>
                <div>RevBid Manager: <span className="text-yellow-400">revbid.net</span></div>
                <div>Phone: <span className="text-stone-300">03007802693</span></div>
                <div>Email: <span className="text-stone-300">hostinger991@gmail.com</span></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer Sub-bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <div>
            © 2026 CareersBuz. All rights reserved. Engineering Careers — Published Daily.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <button onClick={() => onNavigatePage('privacy')} className="hover:text-yellow-400 transition-colors cursor-pointer">
              Privacy
            </button>
            <span>·</span>
            <button onClick={() => onNavigatePage('terms')} className="hover:text-yellow-400 transition-colors cursor-pointer">
              Terms
            </button>
            <span>·</span>
            <button onClick={() => onNavigatePage('disclaimer')} className="hover:text-yellow-400 transition-colors cursor-pointer">
              Disclaimer
            </button>
            <span>·</span>
            <button onClick={() => onNavigatePage('sitemap')} className="text-yellow-400 hover:underline cursor-pointer">
              Sitemap.xml
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
