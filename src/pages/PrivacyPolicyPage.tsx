import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-800 font-bold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
          <Shield size={14} />
          <span>LEGAL COMPLIANCE &amp; PRIVACY SAFEGUARDS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Privacy Policy
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span>Effective Date: January 1, 2026</span>
          <span>·</span>
          <span>Last Updated: October 30, 2026</span>
          <span>·</span>
          <span className="text-emerald-700 font-bold">Google AdSense, RevBid &amp; GDPR Compliant</span>
        </div>
      </header>

      {/* Privacy Content Sections */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-stone-700 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">1. Introduction &amp; Overview</h2>
          <p>
            At CareersBuz (accessible from <code className="text-amber-800 font-mono bg-amber-50 px-1 py-0.5 rounded border border-amber-200">https://careersbuz.com</code>), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information that is received and collected by CareersBuz and how it is used.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our data protection officer at <a href="mailto:hostinger991@gmail.com" className="text-amber-800 hover:underline font-semibold">hostinger991@gmail.com</a> or via phone/WhatsApp at <a href="tel:03007802693" className="text-amber-800 hover:underline font-semibold">03007802693</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">2. Google DoubleClick DART Cookie &amp; Advertising Partners</h2>
          <p>
            Google and RevBid partner networks are third-party vendors on our site. They use cookies, including DART cookies and programmatic identifiers, to serve advertisements based upon visitors' prior visits to CareersBuz and other internet destinations.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-amber-800 underline font-semibold">https://policies.google.com/technologies/ads</a>.
          </p>
          <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-2xl text-xs space-y-2">
            <h4 className="font-bold text-amber-900 font-mono uppercase">AdSense &amp; Programmatic Ad Declarations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-stone-700">
              <li>Third-party vendors, including Google and RevBid network partners, use cookies to serve ads based on user visits.</li>
              <li>Use of advertising cookies enables the delivery of relevant programmatic advertisements.</li>
              <li>Users may opt out of personalized advertising by visiting Google Ads Settings (<a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="text-amber-800 underline font-semibold">adssettings.google.com</a>).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">3. Log Files &amp; Web Analytics</h2>
          <p>
            CareersBuz follows standard procedures for utilizing server log files. The data collected includes IP addresses, browser types, Internet Service Providers (ISP), referring/exit pages, and timestamps. None of this data is linked to personally identifiable information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">4. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>Under the California Consumer Privacy Act (CCPA), California consumers have the right to request disclosure or deletion of collected data. CareersBuz never sells personal data to third parties.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">5. GDPR Data Protection Rights</h2>
          <p>Every user is entitled to data access, rectification, erasure, and restriction of processing under European Union GDPR regulations.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">6. Contact Information</h2>
          <p>
            For privacy inquiries or compliance audits, contact our designated data officer:
          </p>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-1">
            <p><strong>Entity:</strong> CareersBuz Publishing Desk</p>
            <p><strong>Primary Email:</strong> hostinger991@gmail.com</p>
            <p><strong>Secondary Email:</strong> nadeemahmar4@gmail.com</p>
            <p><strong>Direct Line / WhatsApp:</strong> 03007802693</p>
          </div>
        </section>

      </div>

    </div>
  );
};
