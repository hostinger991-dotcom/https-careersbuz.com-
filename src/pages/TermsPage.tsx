import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const TermsPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-800 font-bold">Terms &amp; Conditions</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
          <FileText size={14} />
          <span>TERMS OF SERVICE &amp; EDITORIAL FAIR USE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Terms &amp; Conditions
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span>Effective Date: January 1, 2026</span>
          <span>·</span>
          <span>Last Updated: October 30, 2026</span>
          <span>·</span>
          <span className="text-emerald-700 font-bold">Governed by International Digital Publishing Standards</span>
        </div>
      </header>

      {/* Terms Body */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-stone-700 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">1. Agreement to Terms</h2>
          <p>
            By accessing and utilizing CareersBuz (https://careersbuz.com), you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">2. Intellectual Property &amp; Career Content Reproduction</h2>
          <p>
            All original guide text, case studies, resume frameworks, salary benchmarks, and layout materials published on CareersBuz are the intellectual property of CareersBuz, protected under international copyright law.
          </p>
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 space-y-2 text-xs text-amber-950">
            <strong>Fair Use &amp; Attribution Policy:</strong>
            <p className="text-amber-900 leading-relaxed">
              Educational institutions and non-profit organizations may quote up to 250 words of any individual article provided explicit canonical link attribution is provided to <code className="bg-white px-1 py-0.5 rounded border border-amber-200 font-mono">https://careersbuz.com</code>. Scraping or bulk automated reproduction is strictly prohibited.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">3. User Conduct &amp; Permitted Use</h2>
          <p>
            Visitors may browse, read, bookmark, and download published career guides for individual professional advancement. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scrape, crawl, or harvest content using automated scripts for unauthorized syndication.</li>
            <li>Resell or redistribute any CareersBuz resume templates as proprietary products.</li>
            <li>Attempt to circumvent any security headers or server-side restrictions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">4. Publisher Contact &amp; Legal Notices</h2>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-1">
            <p><strong>Entity:</strong> CareersBuz Legal &amp; Publishing Desk</p>
            <p><strong>Official Email:</strong> hostinger991@gmail.com</p>
            <p><strong>Secondary Desk:</strong> nadeemahmar4@gmail.com</p>
            <p><strong>Direct Telephone:</strong> 03007802693</p>
          </div>
        </section>

      </div>

    </div>
  );
};
