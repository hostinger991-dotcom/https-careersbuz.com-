import React from 'react';
import { FileText, ArrowLeft, Shield, AlertTriangle, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const TermsPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onBackToHome} className="hover:text-[#ffeb3b] transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#5fdee7]">Terms & Conditions</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[#5fdee7] text-xs font-mono">
          <FileText size={14} />
          <span>TERMS OF SERVICE & USER AGREEMENT</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
          Terms & <span className="text-[#ffeb3b]">Conditions</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Effective Date: October 29, 2026 · Last Updated: October 30, 2026 · Official CareersBuz Publishing Terms
        </p>
      </header>

      {/* Document Body */}
      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        
        {/* Preamble */}
        <section className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 space-y-2">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            Agreement to Terms
          </h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>CareersBuz</strong> ("we," "us," or "our"), concerning your access to and use of the <span className="text-[#5fdee7] font-mono">https://careersbuz.com</span> website as well as any other media form, media channel, or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        {/* 1. Intellectual Property Rights */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">1.</span>
            <span>Intellectual Property Rights</span>
          </h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, research manuscripts, infographics, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          <p>
            You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial educational use.
          </p>
        </section>

        {/* 2. User Representations */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">2.</span>
            <span>User Representations & Prohibited Conduct</span>
          </h2>
          <p>
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
            <li>You will not use the Site for any illegal or unauthorized commercial reproduction of our 20 proprietary research studies.</li>
            <li>You will not interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
            <li>You will not attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
          </ul>
        </section>

        {/* 3. Educational & Career Advisory Disclaimer */}
        <section className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/40 space-y-3">
          <h2 className="text-lg font-bold text-amber-300 flex items-center gap-2">
            <AlertTriangle size={18} />
            <span>3. Professional Educational & Career Guidance Disclaimer</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            All materials, salary benchmarks, interview preparation models, and resume templates on CareersBuz are provided strictly for informational and vocational educational purposes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300">
            CareersBuz does not guarantee employment offers, compensation outcomes, or hiring committee selections. Individual professional outcomes depend entirely on candidate qualifications, third-party employer policies, macroeconomic factors, and independent market negotiations.
          </p>
        </section>

        {/* 4. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">4.</span>
            <span>Limitation of Liability</span>
          </h2>
          <p>
            In no event will we or our directors, fellows, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or reliance upon its editorial advice.
          </p>
        </section>

        {/* 5. Governing Law */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">5.</span>
            <span>Governing Law & Dispute Resolution</span>
          </h2>
          <p>
            These Terms shall be governed by and defined following the laws of applicable jurisdiction. CareersBuz and yourself irrevocably consent that the courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        {/* 6. Contact Us */}
        <section className="p-6 rounded-2xl bg-[#0f171e] border border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            Legal Inquiries & Communications Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            For questions regarding these Terms & Conditions, please contact our administrative desk:
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
