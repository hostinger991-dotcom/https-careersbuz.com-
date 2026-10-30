import React from 'react';

interface Props {
  format?: 'leaderboard' | 'sidebar' | 'in-feed';
}

export const AdSenseBanner: React.FC<Props> = ({ format = 'leaderboard' }) => {
  return (
    <div className="w-full my-6 text-center select-none">
      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1.5">
        Advertisement
      </span>
      <div 
        className={`mx-auto rounded-xl bg-[#090d10] border border-slate-800/80 flex flex-col items-center justify-center p-4 transition-all ${
          format === 'leaderboard' ? 'h-24 sm:h-28 max-w-4xl' : 'h-60 max-w-sm'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#5fdee7]/80" />
          <span className="text-xs font-bold text-slate-400 tracking-wide font-mono uppercase">
            CareersBuz Verified Partner Placement
          </span>
        </div>
        <p className="text-[11px] text-slate-400 max-w-md">
          Explore executive placement programs, accredited cloud certifications, and technical recruiting networks.
        </p>
      </div>
    </div>
  );
};
