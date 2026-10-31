import React from 'react';
import { AlertCircle, ArrowLeft, ShieldAlert, Scale, Briefcase } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const DisclaimerPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-800 font-bold">Disclaimer</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
          <AlertCircle size={14} />
          <span>CAREER GUIDANCE &amp; COMPENSATION DISCLAIMER</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Editorial &amp; Career Disclaimer
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span>Effective Date: January 1, 2026</span>
          <span>·</span>
          <span>Last Updated: October 30, 2026</span>
          <span>·</span>
          <span className="text-emerald-700 font-bold">Peer-Reviewed Editorial Standards</span>
        </div>
      </header>

      {/* Disclaimer Body */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-stone-700 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif flex items-center gap-2">
            <Briefcase size={20} className="text-amber-600" />
            <span>1. Professional Career &amp; Employment Advice Disclaimer</span>
          </h2>
          <p>
            The content, articles, frameworks, resumes, interview guides, and strategic commentary published on CareersBuz are provided solely for educational, informational, and career self-development purposes.
          </p>
          <p>
            While our authors, researchers, and editors have extensive executive recruiting, organizational psychology, and technical management backgrounds, reading this material does not constitute an individualized executive consulting relationship or an official job offer warranty. Employment practices, labor laws, and hiring requirements vary widely across domestic and international jurisdictions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif flex items-center gap-2">
            <Scale size={20} className="text-amber-600" />
            <span>2. No Guarantee of Job Placement or Interview Offers</span>
          </h2>
          <p>
            CareersBuz provides empirical methodologies to optimize resume documents for Applicant Tracking Systems (ATS), structure behavioral interviews, and conduct salary negotiations. However, CareersBuz explicitly disclaims any guarantee—express or implied—that following these guides will result in securing an interview, obtaining an offer, or receiving a specific compensation package.
          </p>
          <p>
            Hiring decisions depend upon independent third-party employers, real-time macroeconomic market conditions, candidate qualifications, internal organizational priorities, and non-deterministic factors outside our control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif flex items-center gap-2">
            <ShieldAlert size={20} className="text-amber-600" />
            <span>3. Salary Estimations &amp; Compensation Volatility</span>
          </h2>
          <p>
            Compensation benchmarks, equity percentages, signing bonus ranges, and base salary figures cited throughout our articles reflect aggregate market surveys, peer reports, and public filings as of the date of publication.
          </p>
          <p>
            Actual compensation packages are determined individually by hiring organizations based on candidate seniority, company valuation, geographic tiering, and corporate policies. Readers should conduct independent due diligence and seek legal or financial counsel prior to signing binding employment contracts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">
            4. Third-Party Trademarks &amp; Corporate Mentions
          </h2>
          <p>
            Trademarks, product names, logos, and corporate identities referenced on CareersBuz (including Workday, Taleo, Greenhouse, Lever, Fortune 500 companies, or academic institutions) remain the property of their respective trademark holders. Mention of these entities does not imply affiliation, endorsement, or sponsorship.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">
            5. Contact the Compliance &amp; Legal Desk
          </h2>
          <p>
            If you have questions, corrections, or legal inquiries regarding any guide published on CareersBuz:
          </p>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 font-mono text-xs">
            <p><strong>Editorial Compliance:</strong> CareersBuz Legal &amp; Research Desk</p>
            <p><strong>Phone / WhatsApp:</strong> <a href="tel:03007802693" className="text-amber-800 font-bold hover:underline">03007802693</a></p>
            <p><strong>Email:</strong> <a href="mailto:hostinger991@gmail.com" className="text-amber-800 hover:underline">hostinger991@gmail.com</a> / <a href="mailto:nadeemahmar4@gmail.com" className="text-amber-800 hover:underline">nadeemahmar4@gmail.com</a></p>
          </div>
        </section>

      </div>

    </div>
  );
};
