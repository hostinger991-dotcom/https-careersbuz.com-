import React, { useState } from 'react';
import { InfographicData } from '../types';
import { InfographicVisual } from './InfographicVisual';
import { X, Copy, Check, Download, Sparkles, Layers } from 'lucide-react';

interface Props {
  data: InfographicData | null;
  onClose: () => void;
}

export const InfographicModal: React.FC<Props> = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(data.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#080d12] border border-cyan-500/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Header */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#5fdee7]/15 border border-[#5fdee7]/40 text-[#5fdee7]">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                High-Resolution AI Infographic Specification
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Keyword: <span className="text-[#ffeb3b]">{data.keyword}</span> · 3D Metallic Embossed Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPrompt}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 border border-slate-800 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Prompt Copied' : 'Copy AI Prompt'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <InfographicVisual data={data} isHero={true} />

          {/* Prompt Blueprint Formulation */}
          <div className="p-4 rounded-xl bg-[#06090c] border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#5fdee7] uppercase tracking-wider">
                Approved Generation Prompt Formulation
              </span>
              <button
                onClick={handleCopyPrompt}
                className="text-xs font-mono text-slate-400 hover:text-[#ffeb3b]"
              >
                {copied ? 'Copied to Clipboard' : 'Click to Copy Prompt'}
              </button>
            </div>
            <p className="p-3 bg-[#0a0f12] rounded border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed select-all">
              {data.prompt}
            </p>
          </div>

          {/* 6 Structured Panels Detailed Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              6 Callout Panels Structured Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.panels.map((panel, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#ffeb3b] mb-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#5fdee7]" />
                    <span>{panel.title}</span>
                  </div>
                  <ul className="space-y-1 text-slate-400">
                    {panel.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1">
                        <span className="text-slate-600 font-mono">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Official CareersBuz AI Infographic Registry</span>
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
