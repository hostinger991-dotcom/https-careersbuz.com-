import React from 'react';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle2, Mail, Phone } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onBackToHome} className="hover:text-[#ffeb3b] transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#5fdee7]">Privacy Policy</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[#5fdee7] text-xs font-mono">
          <Shield size={14} />
          <span>LEGAL COMPLIANCE & DATA PROTECTION PROTOCOL</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
          Privacy <span className="text-[#ffeb3b]">Policy</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Effective Date: October 29, 2026 · Last Reviewed: October 30, 2026 · Compliant with Google AdSense, GDPR & CCPA
        </p>
      </header>

      {/* Document Body */}
      <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
        
        {/* Preamble */}
        <section className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 space-y-2">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            Introduction & Scope
          </h2>
          <p>
            At <strong>CareersBuz</strong> (accessible from <span className="text-[#5fdee7] font-mono">https://careersbuz.com</span>), the privacy of our visitors is one of our core operational priorities. This Privacy Policy document outlines the types of personal and analytical information collected, recorded, and utilized by CareersBuz and how it is protected under prevailing global digital privacy standards.
          </p>
          <p>
            This policy applies exclusively to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in CareersBuz.
          </p>
        </section>

        {/* 1. Consent */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">1.</span>
            <span>Consent</span>
          </h2>
          <p>
            By utilizing our platform, accessing our research manuscripts, or transmitting information via our contact interfaces, you hereby consent to our Privacy Policy and agree to its terms and operational conditions.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">2.</span>
            <span>Information We Collect</span>
          </h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              <strong className="text-slate-200">Direct Communications:</strong> If you contact us directly via our official email (<span className="text-[#5fdee7] font-mono">nadeemahmar4@gmail.com</span>) or WhatsApp desk (<span className="text-[#5fdee7] font-mono">03007802693</span>), we may receive additional information such as your name, email address, phone number, the contents of your message, and any attached documentation.
            </li>
            <li>
              <strong className="text-slate-200">Interactive Features:</strong> When using our Developer Hub to generate Ads.txt or sitemaps, all processes execute client-side within your browser sandbox; no publisher credentials are retained on external servers.
            </li>
          </ul>
        </section>

        {/* 3. Log Files Protocol */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">3.</span>
            <span>Log Files Protocol</span>
          </h2>
          <p>
            CareersBuz follows a standard procedure of utilizing server log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser specification, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic intelligence.
          </p>
        </section>

        {/* 4. Cookies & Web Beacons */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">4.</span>
            <span>Cookies and Web Beacons</span>
          </h2>
          <p>
            Like any modern web journal, CareersBuz uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
        </section>

        {/* 5. Google DoubleClick DART Cookie & AdSense Compliance */}
        <section className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/40 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#5fdee7] font-mono">5.</span>
            <span>Google DoubleClick DART Cookie & AdSense Compliance</span>
          </h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <span className="font-mono text-[#5fdee7]">https://careersbuz.com</span> and other sites on the internet.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:{' '}
            <a 
              href="https://policies.google.com/technologies/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ffeb3b] underline break-all font-mono text-xs"
            >
              https://policies.google.com/technologies/ads
            </a>.
          </p>
          <p className="text-xs text-slate-400">
            CareersBuz maintains zero tolerance for intrusive popups, unauthorized tracking, or misleading promotional elements. All advertisement containers are clearly designated with the "Advertisement" label in strict compliance with Google Publisher Policies.
          </p>
        </section>

        {/* 6. Advertising Partners Privacy Policies */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">6.</span>
            <span>Third-Party Advertising Partners</span>
          </h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of CareersBuz. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on CareersBuz, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p className="text-xs text-slate-400">
            Note that CareersBuz has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </section>

        {/* 7. GDPR Data Protection Rights */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-[#ffeb3b] font-mono">7.</span>
            <span>GDPR Data Protection Rights</span>
          </h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
              <strong className="text-white block mb-0.5">The Right to Access</strong>
              <span>You have the right to request copies of your personal data held by our desk.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
              <strong className="text-white block mb-0.5">The Right to Rectification</strong>
              <span>You have the right to request that we correct any information you believe is inaccurate.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
              <strong className="text-white block mb-0.5">The Right to Erasure</strong>
              <span>You have the right to request that we erase your personal data under certain conditions.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0f171e] border border-slate-800">
              <strong className="text-white block mb-0.5">The Right to Object</strong>
              <span>You have the right to object to our processing of your personal data under certain conditions.</span>
            </div>
          </div>
        </section>

        {/* 8. Official Contact for Privacy Inquiries */}
        <section className="p-6 rounded-2xl bg-[#0f171e] border border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-white font-['Outfit',sans-serif]">
            Data Protection Officer & Privacy Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            If you have questions, require data verification, or wish to exercise your data rights, please contact our administrative desk:
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
