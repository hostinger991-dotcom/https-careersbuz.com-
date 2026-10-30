import React from 'react';
import { X, Award, Target, BookOpen, Compass, ShieldCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a0f12] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#5fdee7]/15 border border-[#5fdee7]/40 text-[#5fdee7]">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                About CareersBuz
              </h3>
              <p className="text-xs text-[#ffeb3b] font-mono">
                ENGINEERING CAREERS · PUBLISHED DAILY
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-2 font-['Outfit',sans-serif]">
              Our Founding Thesis
            </h4>
            <p>
              Founded in 2024, <strong>CareersBuz</strong> was created in response to the growing vacuum of rigorous, technical, and data-grounded career intelligence. While the internet is flooded with generic AI-generated job search platitudes, modern professionals operate in an increasingly complex, algorithmic, and volatile economic landscape.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#5fdee7] font-bold">
              The Four Pillars of CareersBuz
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
                <strong className="text-white block mb-0.5">1. Empirical Market Research</strong>
                <p className="text-slate-400 text-[11px]">We reject subjective intuition in favor of quantifiable labor market data, Radford surveys, and verified hiring committee rubrics.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
                <strong className="text-white block mb-0.5">2. Algorithmic Transparency</strong>
                <p className="text-slate-400 text-[11px]">We demystify Applicant Tracking Systems (ATS), executive search headhunter heuristics, and automated screening filters.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
                <strong className="text-white block mb-0.5">3. Zero-Slop Standard</strong>
                <p className="text-slate-400 text-[11px]">Every study contains at least 1200 words of actionable frameworks, step-by-step checklists, and real case studies.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
                <strong className="text-white block mb-0.5">4. Long-Term Career Sovereignty</strong>
                <p className="text-slate-400 text-[11px]">Our goal is not merely securing your next job, but helping you build asymmetric leverage and schedule sovereignty across your lifetime.</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <span className="font-bold text-white block mb-1">Peer-Reviewed Publishing Cadence:</span>
            <p className="text-slate-400">
              Our 5-person editorial board evaluates and publishes in-depth studies across 4 core disciplines: Job Search & Placement, Resume & Cover Letter Engineering, Interview Preparation, and Career Advice & Upskilling.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Copyright © 2026 CareersBuz</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
