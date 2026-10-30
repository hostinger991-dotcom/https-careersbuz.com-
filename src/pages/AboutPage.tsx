import React from 'react';
import { 
  Compass, 
  Target, 
  Award, 
  Users, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  TrendingUp,
  Mail,
  Phone
} from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

const EDITORIAL_LEADERS = [
  {
    name: 'Dr. Evelyn Vance',
    role: 'Editor-in-Chief & Organizational Psychologist',
    bio: 'Ph.D. Industrial/Organizational Psychology, Harvard. 15+ years advising Fortune 500 boards on talent analytics and leadership succession.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Samantha Cross',
    role: 'Principal Resume & Executive Communications Director',
    bio: 'Former Global Executive Recruiter at Russell Reynolds. Reviewed over 24,000 corporate resumes and engineered C-suite placement dossiers.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Julian Sterling',
    role: 'Technical Career Architect & Distributed Systems Lead',
    bio: 'Ex-Staff Infrastructure Engineer at Google & Stripe. Architected multi-region cloud infrastructures and remote engineering ladders.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Talent Acquisition Editor & Early Career Lead',
    bio: '12 years directing campus recruiting across high-growth Silicon Valley and Boston tech hubs, breaking the zero-experience paradox.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80'
  }
];

export const AboutPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onBackToHome} className="hover:text-[#ffeb3b] transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#5fdee7]">About Us</span>
      </nav>

      {/* Hero Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[#5fdee7] text-xs font-mono">
          <Compass size={14} />
          <span>OUR IDENTITY & INSTITUTIONAL CHARTER</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
          About <span className="text-[#ffeb3b]">CareersBuz</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          An independent, peer-reviewed journal of career management, job placement, resume engineering, and professional upskilling—published daily for modern professionals navigating an algorithmic global economy.
        </p>
      </header>

      {/* Mission & Founding Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
            The Engineering Mindset Applied to Careers
          </h2>
          <p>
            CareersBuz was established in response to the growing vacuum of rigorous, empirical career intelligence. While the internet is flooded with generic platitudes, subjective advice, and superficial listicles, modern professionals operate in an increasingly complex, algorithmic, and volatile economic landscape.
          </p>
          <p>
            Applicant Tracking Systems (ATS), executive search algorithms, compensation bands, and remote distributed workflows are systems that can be decompiled, benchmarked, and mastered. We treat vocational advancement not as a lottery of lucky breaks, but as a disciplined engineering challenge.
          </p>
          <p>
            Every guide published under our banner contains a minimum of 1,200 to 1,500 words, real-world case studies, verifiable formulas, and zero placeholder fluff.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f171e] border border-cyan-500/30 space-y-4 shadow-xl">
          <div className="text-xs font-mono text-[#5fdee7] uppercase tracking-wider font-bold">
            Key Institutional Pillars
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#ffeb3b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">100% Zero-Plagiarism Original Research</strong>
                <span className="text-slate-400">All frameworks, case studies, and models are authored by verified practitioners.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#ffeb3b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Empirical Compensation & Labor Data</strong>
                <span className="text-slate-400">Salary bands and job market statistics are cross-referenced with Radford and Levels.fyi data.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#ffeb3b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Strict Anti-Slop Discipline</strong>
                <span className="text-slate-400">Zero placeholder summaries or generic advice; only actionable, step-by-step methodologies.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#ffeb3b] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Transparent Governance & Compliance</strong>
                <span className="text-slate-400">Fully compliant with Google Search Console, Google AdSense, and publisher standards.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-white font-['Outfit',sans-serif]">
            Our Editorial Board & Senior Fellows
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Industry veterans, organizational psychologists, and former executive recruiters overseeing our research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EDITORIAL_LEADERS.map((leader, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 flex items-start gap-4">
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#5fdee7]/60 shrink-0"
              />
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">{leader.name}</h3>
                <div className="text-xs font-mono text-[#ffeb3b]">{leader.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Contact Callout */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-[#0f171e] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white mb-1 font-['Outfit',sans-serif]">
            Have an Editorial Inquiry or Research Partnership?
          </h3>
          <p className="text-xs text-slate-400">
            Reach our communications desk via official email or WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigateTo('contact')}
            className="px-4 py-2 rounded-lg bg-[#ffeb3b] text-slate-950 font-bold text-xs hover:bg-yellow-400 transition-colors"
          >
            Contact Desk
          </button>
          <a
            href="https://wa.me/923007802693"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-mono hover:bg-emerald-900 transition-colors"
          >
            WhatsApp: 03007802693
          </a>
        </div>
      </section>

    </div>
  );
};
