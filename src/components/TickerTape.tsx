import React from 'react';
import { Flame, ArrowUpRight, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

interface Props {
  onSelectKeyword?: (keyword: string) => void;
}

const TICKER_ITEMS = [
  { tag: 'BREAKING', text: 'Q4 2026 Tech Placement Velocity Index rises +18.4% across distributed systems', icon: TrendingUp, keyword: 'remote work' },
  { tag: 'ATS UPDATE', text: 'Google & Microsoft standardize UTF-8 parsing requirements for software engineering candidates', icon: ShieldCheck, keyword: 'resume guide' },
  { tag: 'SALARY ALERT', text: 'Zero-Trust Cybersecurity & Cloud Architects command 32% compensation premiums in Q4', icon: Flame, keyword: 'salary negotiation' },
  { tag: 'KEYWORD FOCUS', text: 'Mastering the STAR Method: 82% of hiring committees grade candidates on behavioral Action depth', icon: Sparkles, keyword: 'star method' },
  { tag: 'UPSKILLING', text: 'Distributed TypeScript & Rust adoption surges across enterprise backend architectures', icon: TrendingUp, keyword: 'hard skills' },
  { tag: 'INTERVIEW PIPELINE', text: 'Sub-18-Hour Post-Interview Memo overturns 34% of borderline committee decisions', icon: Sparkles, keyword: 'interview follow-up' },
  { tag: 'HIRING RADAR', text: 'Global Career Expos shift to hybrid NFC badge portfolios with live GitHub verification', icon: ArrowUpRight, keyword: 'job fair' },
  { tag: 'CAREER PIVOT', text: 'Non-technical professionals transition into technical product management via modular capstones', icon: TrendingUp, keyword: 'career pivot' },
];

export const TickerTape: React.FC<Props> = ({ onSelectKeyword }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a0f12] border-y border-[#5fdee7]/40 py-2.5 z-30 shadow-[0_0_15px_rgba(95,222,231,0.18)]">
      {/* Dynamic Glowing Top and Bottom Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5fdee7] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5fdee7] to-transparent opacity-80" />

      {/* Left & Right Gradient Shadows */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0a0f12] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0a0f12] to-transparent z-10 pointer-events-none" />

      {/* Continuously Scrolling Content */}
      <div className="flex animate-ticker whitespace-nowrap items-center gap-8 cursor-pointer select-none">
        {/* Render 2 sets for seamless looping */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onClick={() => onSelectKeyword && onSelectKeyword(item.keyword)}
              className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-[#ffeb3b] transition-colors group"
            >
              {/* Sleek Neon Tag */}
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-[#5fdee7]/15 text-[#5fdee7] border border-[#5fdee7]/40 group-hover:bg-[#ffeb3b]/20 group-hover:text-[#ffeb3b] group-hover:border-[#ffeb3b]/60 transition-colors">
                {item.tag}
              </span>

              <Icon size={13} className="text-[#5fdee7] group-hover:text-[#ffeb3b] transition-colors shrink-0" />

              <span className="font-medium tracking-tight">
                {item.text}
              </span>

              <span className="text-slate-600 mx-2">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
