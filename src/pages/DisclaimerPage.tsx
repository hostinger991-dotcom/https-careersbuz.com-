import React from 'react';
import { AlertCircle, ArrowLeft, ShieldAlert, CheckCircle2, Mail, Phone, Scale } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const DisclaimerPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onBackToHome} className="hover:text-[#ffeb3b] transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#5fdee7]">Disclaimer</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-mono">
          <AlertCircle size={14} />
          <span>OFFICIAL EDITORIAL & PROFESSIONAL DISCLAIMER</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
          Legal <span className="text-[#ffeb3b]">Disclaimer</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Effective Date: October 29, 2026 · Last Reviewed: October 30, 2026 · CareersBuz Independent Journal
        </p>
      </header>

      {/* Document Body */}
      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        
        {/* General Disclaimer */}
        <section className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            General Information Disclaimer
          </h2>
          <p>
            The information provided by <strong>CareersBuz</strong> ("we," "us," or "our") on <span className="text-[#5fdee7] font-mono">https://careersbuz.com</span> (the "Site") is for general educational, vocational, and informational purposes only.
          </p>
          <p>
            All information on the Site is provided in good faith, backed by empirical research, labor surveys, and industry benchmarks. However, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any career information, salary estimations, or interview strategies presented on the Site.
          </p>
        </section>

        {/* Professional & Employment Disclaimer */}
        <section className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/40 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-base">
            <Scale size={20} />
            <h2>Professional & Employment Outcome Disclaimer</h2>
          </div>
          <p>
            The Site cannot and does not contain formal legal, financial, or guaranteed employment placement advice. The career management, resume engineering, and interview coaching contents are provided for general educational guidance only and are not substitutes for professional counsel.
          </p>
          <p>
            CareersBuz does not act as an accredited employment agency, licensed legal counsel, or guaranteed staffing recruiter. Applying our frameworks (such as the STAR method, resume templates, or salary counter-offer scripts) does not guarantee job placement, promotion approval, or specific salary increases from independent employers.
          </p>
        </section>

        {/* Salary & Compensation Estimates Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">1.</span>
            <span>Salary & Compensation Figures Disclaimer</span>
          </h2>
          <p>
            Any salary ranges, compensation packages, signing bonuses, or equity calculations referenced across our 20 research manuscripts represent industry benchmarks aggregated from publicly available sources (such as Radford, Levels.fyi, Glassdoor, and U.S. Bureau of Labor Statistics data). Actual compensation offers vary dramatically based upon geographic cost-of-living tiers, candidate years of verified experience, organizational budgets, and direct negotiation outcomes.
          </p>
        </section>

        {/* External Links & Partner Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">2.</span>
            <span>External Links & Third-Party Resources</span>
          </h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <p className="text-xs text-slate-400">
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising.
          </p>
        </section>

        {/* Fair Use & Zero-Plagiarism Statement */}
        <section className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <CheckCircle2 size={18} />
            <h2>Zero-Plagiarism & Intellectual Fair Use</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            CareersBuz holds strict adherence to zero-plagiarism publishing principles. All research articles, case study narratives, and structural guidelines are original intellectual formulations created by our editorial fellows. Any citations to public technologies (such as ATS software like Workday, Greenhouse, or Lever) are made under Nominative Fair Use principles for educational commentary and technological critique.
          </p>
        </section>

        {/* Contact Information */}
        <section className="p-6 rounded-2xl bg-[#0f171e] border border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            Legal & Compliance Office
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            If you require any more information or have questions about our site's disclaimer, please contact us by email or WhatsApp:
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono pt-1">
            <div className="flex items-center gap-2 text-slate-300">
              <Mail size={14} className="text-[#5fdee7]" />
              <span>Email: <strong className="text-white">nadeemahmar4@gmail.com</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone size={14} className="text-emerald-400" />
              <span>WhatsApp/Phone: <strong className="text-white">03007802693</strong></span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
