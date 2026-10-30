import React, { useState } from 'react';
import { InfographicData } from '../types';
import { 
  Compass, 
  Rocket, 
  Monitor, 
  Building2, 
  Layers, 
  ScanLine, 
  PenTool, 
  FileSpreadsheet, 
  Zap, 
  Target, 
  UserCheck, 
  HelpCircle, 
  Star, 
  Clock, 
  PhoneCall, 
  Scale, 
  GitFork, 
  Users, 
  Terminal, 
  Cog, 
  Maximize2, 
  Copy, 
  Check, 
  Sparkles 
} from 'lucide-react';

interface Props {
  data: InfographicData;
  isHero?: boolean;
  onOpenZoom?: (data: InfographicData) => void;
}

export const InfographicVisual: React.FC<Props> = ({ data, isHero = false, onOpenZoom }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(data.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCenterpieceIcon = () => {
    const size = isHero ? 36 : 28;
    switch (data.centerpieceType) {
      case 'compass': return <Compass size={size} className="text-[#38bdf8] animate-spin-slow" />;
      case 'rocket': return <Rocket size={size} className="text-[#facc15]" />;
      case 'virtual_office': return <Monitor size={size} className="text-[#22c55e]" />;
      case 'expo_kiosk': return <Building2 size={size} className="text-[#60a5fa]" />;
      case 'blueprint': return <Layers size={size} className="text-[#f59e0b]" />;
      case 'scanner': return <ScanLine size={size} className="text-[#06b6d4] animate-pulse" />;
      case 'fountain_pen': return <PenTool size={size} className="text-[#fbbf24]" />;
      case 'format_selector': return <FileSpreadsheet size={size} className="text-[#f87171]" />;
      case 'action_hub': return <Zap size={size} className="text-[#38bdf8]" />;
      case 'spotlight': return <Target size={size} className="text-[#60a5fa]" />;
      case 'prep_lab': return <UserCheck size={size} className="text-[#38bdf8]" />;
      case 'terminal_questions': return <HelpCircle size={size} className="text-[#2dd4bf]" />;
      case 'star_matrix': return <Star size={size} className="text-[#facc15]" />;
      case 'speed_timer': return <Clock size={size} className="text-[#f87171]" />;
      case 'holographic_comms': return <PhoneCall size={size} className="text-[#60a5fa]" />;
      case 'scales': return <Scale size={size} className="text-[#34d399]" />;
      case 'pivot_compass': return <GitFork size={size} className="text-[#f87171]" />;
      case 'human_network': return <Users size={size} className="text-[#fbbf24]" />;
      case 'code_matrix': return <Terminal size={size} className="text-[#4ade80]" />;
      case 'cog_tree': return <Cog size={size} className="text-[#a855f7] animate-spin-slow" />;
      default: return <Sparkles size={size} className="text-[#5fdee7]" />;
    }
  };

  return (
    <div 
      className={`relative w-full rounded-xl overflow-hidden border border-slate-700/60 transition-all duration-300 group ${
        isHero ? 'min-h-[360px] md:min-h-[440px]' : 'min-h-[220px]'
      }`}
      style={{
        background: `radial-gradient(ellipse at 50% 20%, ${data.colorScheme.bgDark} 0%, #06090c 100%)`
      }}
    >
      {/* Background Cyber Grid Matrix */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${data.colorScheme.primary} 1px, transparent 1px), linear-gradient(90deg, ${data.colorScheme.primary} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Cybernetic Glow Orbs */}
      <div 
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: data.colorScheme.primary }}
      />
      <div 
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: data.colorScheme.secondary }}
      />

      {/* Top Action Bar (Prompt Copy & Zoom) */}
      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopyPrompt}
          title="Copy AI Infographic Prompt"
          className="px-2 py-1 bg-black/60 hover:bg-black/85 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white rounded text-[11px] font-mono flex items-center gap-1 transition-colors"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Prompt'}</span>
        </button>
        {onOpenZoom && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenZoom(data);
            }}
            title="Inspect Full Infographic"
            className="p-1.5 bg-black/60 hover:bg-black/85 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white rounded transition-colors"
          >
            <Maximize2 size={12} />
          </button>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-4 md:p-5 flex flex-col justify-between h-full">
        {/* 3D Metallic Embossed Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40 text-[10px] font-mono uppercase tracking-widest text-cyan-300 mb-1">
            Official AI Infographic Specification
          </div>
          <h4 
            className="text-sm md:text-base lg:text-lg font-black tracking-tight uppercase"
            style={{
              background: `linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, ${data.colorScheme.primary} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
            }}
          >
            {data.title}
          </h4>
          <p className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
            {data.subtitle}
          </p>
        </div>

        {/* Centerpiece Visualization */}
        <div className="my-2 flex flex-col items-center justify-center">
          <div 
            className="relative p-3.5 rounded-full border flex items-center justify-center shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
            style={{
              borderColor: data.colorScheme.primary,
              boxShadow: `0 0 24px ${data.colorScheme.glow}40, inset 0 0 12px ${data.colorScheme.glow}30`,
              backgroundColor: 'rgba(10, 15, 20, 0.75)'
            }}
          >
            {renderCenterpieceIcon()}
          </div>
          <span className="text-[9px] font-mono tracking-wider uppercase text-slate-400 mt-1">
            {data.centerpieceLabel}
          </span>
        </div>

        {/* 6 Metallic-Embossed Structured Callout Panels */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {data.panels.slice(0, 6).map((panel: any, idx: number) => (
            <div
              key={idx}
              className="p-2 rounded bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/50 backdrop-blur-sm transition-colors text-left"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: idx % 2 === 0 ? data.colorScheme.primary : data.colorScheme.secondary }}
                />
                <span className="text-[10px] font-bold text-slate-200 tracking-tight leading-tight line-clamp-1">
                  {panel.title}
                </span>
              </div>
              <ul className="space-y-0.5">
                {panel.bullets.slice(0, 2).map((b: string, bIdx: number) => (
                  <li key={bIdx} className="text-[9px] text-slate-400 leading-tight flex items-start gap-1">
                    <span className="text-slate-600 font-mono">›</span>
                    <span className="line-clamp-1">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
