import React from 'react';
import { 
  Briefcase, 
  ArrowLeft
} from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

const EDITORIAL_LEADERS = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'Head of Career Placement & Organizational Psychology',
    bio: 'Ph.D. in Organizational Psychology (Columbia). 15+ years advising Fortune 100 enterprise leadership transitions, executive search mapping, and cognitive career trajectory modeling.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Executive Recruiter & VP of Talent Acquisition',
    bio: 'Former global tech recruiting lead across Silicon Valley and London fintech hubs. Overseen 4,500+ engineering, product, and leadership hires from seed to IPO.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Samantha Cross',
    role: 'Principal Resume Strategist & ATS Algorithmic Auditor',
    bio: 'Pioneered applicant tracking parsing audits across Workday, Taleo, Greenhouse, and Lever. Coached over 3,000 mid-to-senior candidates into Tier-1 roles.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Talent Alliances & Career Expo Organizer',
    bio: 'Organizer of major international hiring summits and multi-tier tech expos. Specialist in executive salary benchmarking, stock option equity modeling, and cross-border placement.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
  }
];

export const AboutPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-800 font-bold">About Us</span>
      </nav>

      {/* Hero Mission Section */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold font-mono">
          <Briefcase size={14} />
          <span>INDEPENDENT CAREER JOURNALISM</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
          Engineering Careers Through Empirical Data, Not Fortune-Cookie Advice
        </h1>

        <p className="text-base text-stone-600 leading-relaxed max-w-3xl font-sans">
          CareersBuz was established to replace vague, recycled vocational platitudes with rigorous, data-driven frameworks. We investigate modern employment markets the way an algorithmic engineer analyzes distributed systems—dissecting automated applicant tracking systems (ATS), game-theoretic compensation negotiations, behavioral interview scoring, and sustainable executive performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="block text-2xl font-black text-amber-700 font-mono">10</span>
            <span className="text-xs text-stone-600 font-medium">In-Depth Guides</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="block text-2xl font-black text-amber-700 font-mono">100%</span>
            <span className="text-xs text-stone-600 font-medium">Zero Plagiarism</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="block text-2xl font-black text-amber-700 font-mono">1,400+</span>
            <span className="text-xs text-stone-600 font-medium">Avg Words/Guide</span>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <span className="block text-2xl font-black text-emerald-600 font-mono">24h</span>
            <span className="text-xs text-stone-600 font-medium">Desk SLA</span>
          </div>
        </div>
      </div>

      {/* The 4 Editorial Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
            Our Methodological Pillars
          </h2>
          <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            HOW EVERY CAREERSBUZ GUIDE IS RESEARCHED &amp; PEER-AUDITED
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-mono font-bold">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              ATS Reverse-Engineering
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We continually parse documents through modern parsing engines (Workday, Taleo, Greenhouse, iCIMS) to isolate keyword frequencies, formatting thresholds, and parsing choke-points.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-mono font-bold">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Behavioral Dialogue Calibration
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Interview strategies are grounded in industrial-organizational psychology. We dissect the STAR framework into quantitative metric storytelling that commands respect from senior interviewers.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-mono font-bold">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Executive Compensation Game Theory
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Salary negotiation is treated as cooperative game theory. We publish real benchmarks, equity vesting schedules, clawback protection clauses, and sign-on bonus maximization tactics.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-mono font-bold">
              04
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Sustainable Compounding Over Burnout
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              High performance is meaningless if it leads to chronic exhaustion. Every upskilling guide integrates mental clarity safeguards, deep-work architectures, and career boundary enforcement.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Board Profiles */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
            The CareersBuz Editorial Board
          </h2>
          <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            PEER AUDITORS, TALENT DIRECTORS &amp; RECRUITING LEADERS
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EDITORIAL_LEADERS.map((leader, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs text-center space-y-3">
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-amber-300"
              />
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-900">
                  {leader.name}
                </h4>
                <p className="text-[11px] font-mono text-amber-700 font-semibold mt-0.5">
                  {leader.role}
                </p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Contact Bar */}
      <div className="bg-stone-900 text-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold font-serif text-white">
            Have a Research Inquiry or Press Tip?
          </h3>
          <p className="text-xs text-stone-400 max-w-xl">
            Our editorial desk reviews corporate layoffs, hiring trends, and ATS updates daily. Reach out directly to our principal researchers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTo('contact')}
            className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-stone-900 text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            Contact Editorial Desk
          </button>
        </div>
      </div>

    </div>
  );
};
