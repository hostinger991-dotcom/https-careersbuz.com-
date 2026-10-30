import React from 'react';
import { FileText, ArrowLeft, Shield, AlertTriangle, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const TermsPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-[#ea580c] transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#ea580c] font-bold">Terms &amp; Conditions</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] text-xs font-mono font-bold">
          <FileText size={14} />
          <span>TERMS OF SERVICE &amp; EDITORIAL FAIR USE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Terms &amp; Conditions
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span>Effective Date: January 1, 2026</span>
          <span>·</span>
          <span>Last Updated: March 30, 2026</span>
          <span>·</span>
          <span className="text-emerald-700 font-bold">Governed by International Digital Publishing Standards</span>
        </div>
      </header>

      {/* Terms Body */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-stone-700 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">1. Agreement to Terms</h2>
          <p>
            By accessing and utilizing CareersBuz (https://careersbuz.com), you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">2. Intellectual Property &amp; Career Content Reproduction</h2>
          <p>
            All original guide text, case studies, resume templates, salary negotiation frameworks, editorial infographics, and compilation layouts published on CareersBuz are the intellectual property of CareersBuz, protected by international copyright and trademark law.
          </p>
          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2 text-xs text-orange-950">
            <strong>Fair Use &amp; Academic Attribution Policy:</strong>
            <p className="text-orange-900 leading-relaxed">
              You may quote up to 100 words of any article provided that explicit, prominent attribution is given with a direct, do-follow hyperlink to the canonical guide on CareersBuz. Scraping or re-publishing full articles without written permission is strictly prohibited.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">3. User Conduct &amp; Prohibited Actions</h2>
          <p>When interacting with CareersBuz, users agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Attempt to reverse-engineer, decompile, or extract source data or scripts.</li>
            <li>Use automated scrapers, bots, or spiders to harvest article contents without explicit API permissions.</li>
            <li>Misrepresent employment credentials, impersonate editorial authors, or submit defamatory inquiries.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">4. Contact &amp; Governance</h2>
          <p>
            Questions regarding terms, syndication rights, or corporate licensing can be directed to:
          </p>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-1">
            <p><strong>Desk:</strong> CareersBuz Legal &amp; Governance Team</p>
            <p><strong>Email:</strong> hostinger991@gmail.com / nadeemahmar4@gmail.com</p>
            <p><strong>Phone / WhatsApp:</strong> 03007802693</p>
          </div>
        </section>

      </div>

    </div>
  );
};
