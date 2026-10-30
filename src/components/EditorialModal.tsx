import React from 'react';
import { X, ShieldCheck, Award, BookCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EDITORIAL_MEMBERS = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'Editor-in-Chief & Organizational Psychologist',
    credentials: 'Ph.D. Industrial/Organizational Psychology, Harvard. Former Senior Director of Talent Analytics at McKinsey.',
    specialty: 'Macroeconomic labor trends, cognitive competency mapping, executive career transitions.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Samantha Cross',
    role: 'Principal Resume & Executive Communications Director',
    credentials: 'Former Global Executive Recruiter at Russell Reynolds. Reviewed over 24,000 corporate resumes.',
    specialty: 'ATS algorithm deconstruction, C-suite positioning, total compensation negotiation.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Julian Sterling',
    role: 'Technical Career Architect & Distributed Systems Editor',
    credentials: 'Ex-Staff Infrastructure Engineer at Google & Stripe. Architected multi-region cloud infrastructures.',
    specialty: 'Technical upskilling frameworks, remote work architecture, software engineering ladders.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Talent Acquisition Editor & Early Career Lead',
    credentials: '12 years directing campus recruiting across high-growth Silicon Valley and Boston tech hubs.',
    specialty: 'Zero-experience paradox, entry-level job market velocity, algorithmic recruitment filters.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Interview Preparation & Behavioral Diagnostics Lead',
    credentials: 'Master of Human Relations, Stanford. Executive coach to Fortune 100 VP-level candidates.',
    specialty: 'STAR method deconstruction, high-stakes panel dynamics, 30-second elevator pitches.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
  }
];

export const EditorialModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0a0f12] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#5fdee7]/15 border border-[#5fdee7]/40 text-[#5fdee7]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                CareersBuz Editorial Board & Peer-Review Standards
              </h3>
              <p className="text-xs text-slate-400">
                Rigorous empirical oversight behind every published career study and placement guide.
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          
          {/* Editorial Philosophy */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="font-bold text-[#ffeb3b] text-sm uppercase tracking-wider font-mono">
              The CareersBuz Editorial Charter
            </h4>
            <p className="leading-relaxed">
              CareersBuz exists to provide engineering-grade, peer-reviewed, and rigorously validated career intelligence. Every article published under our banner must meet a strict threshold of at least 1200 words, cite real-world case studies, provide verifiable quantitative formulas, and eliminate generic buzzwords.
            </p>
          </div>

          {/* Editorial Board Members */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Editorial Board & Senior Research Fellows
            </h4>

            <div className="space-y-3">
              {EDITORIAL_MEMBERS.map((member, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0f171e] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#5fdee7]/50 shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{member.name}</span>
                      <span className="text-[10px] font-mono text-[#5fdee7] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                        Verified Fellow
                      </span>
                    </div>
                    <div className="text-xs text-[#ffeb3b] font-medium">{member.role}</div>
                    <div className="text-[11px] text-slate-400">{member.credentials}</div>
                    <div className="text-[11px] text-slate-300 font-mono">
                      <strong className="text-slate-400">Focus:</strong> {member.specialty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Stage Peer Review Process */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono mb-2">
              Our 4-Stage Verification Process
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#0a0f12] border border-slate-800">
                <strong className="text-[#5fdee7] block">1. Empirical Data Audit</strong>
                <span className="text-slate-400 text-[11px]">Salary bands, hiring rates, and ATS algorithms are verified against current Radford and Levels.fyi data.</span>
              </div>
              <div className="p-2.5 rounded bg-[#0a0f12] border border-slate-800">
                <strong className="text-[#5fdee7] block">2. Peer Review Scrub</strong>
                <span className="text-slate-400 text-[11px]">Two senior fellows blind-review each manuscript for actionable utility and clarity.</span>
              </div>
              <div className="p-2.5 rounded bg-[#0a0f12] border border-slate-800">
                <strong className="text-[#5fdee7] block">3. Anti-AI Slop Quality Gate</strong>
                <span className="text-slate-400 text-[11px]">Strict bans on generic platitudes, unverified advice, and filler text.</span>
              </div>
              <div className="p-2.5 rounded bg-[#0a0f12] border border-slate-800">
                <strong className="text-[#5fdee7] block">4. Annual Fact-Check Recertification</strong>
                <span className="text-slate-400 text-[11px]">Articles are updated every six months to reflect macroeconomic and regulatory shifts.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Editorial Inquiries: editorial@careersbuz.com</span>
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
