import React from 'react';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-[#ea580c] transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#ea580c] font-bold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] text-xs font-mono font-bold">
          <Shield size={14} />
          <span>LEGAL COMPLIANCE &amp; PRIVACY SAFEGUARDS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Privacy Policy
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500">
          <span>Effective Date: January 1, 2026</span>
          <span>·</span>
          <span>Last Updated: March 30, 2026</span>
          <span>·</span>
          <span className="text-emerald-700 font-bold">Google AdSense &amp; GDPR Compliant</span>
        </div>
      </header>

      {/* Privacy Content Sections */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-stone-700 leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">1. Introduction &amp; Overview</h2>
          <p>
            At CareersBuz (accessible from <code className="text-[#ea580c] font-mono bg-orange-50 px-1 py-0.5 rounded">https://careersbuz.com</code>), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information that is received and collected by CareersBuz and how it is used.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our data protection officer at <a href="mailto:hostinger991@gmail.com" className="text-[#ea580c] hover:underline font-semibold">hostinger991@gmail.com</a> or via phone/WhatsApp at <a href="tel:03007802693" className="text-[#ea580c] hover:underline font-semibold">03007802693</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">2. Google DoubleClick DART Cookie &amp; Advertising Partners</h2>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.careersbuz.com and other sites on the internet.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-[#ea580c] underline">https://policies.google.com/technologies/ads</a>.
          </p>
          <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl text-xs space-y-2">
            <h4 className="font-bold text-stone-900 font-mono uppercase">AdSense Compliance Declarations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to CareersBuz and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting Google Ads Settings (<a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="text-[#ea580c] underline">adssettings.google.com</a>).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">3. Log Files &amp; Web Analytics</h2>
          <p>
            CareersBuz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting services do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">4. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>Under the California Consumer Privacy Act (CCPA), California consumers have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request that a business disclose the categories and specific pieces of personal data collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data. CareersBuz does not sell personal information.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">5. GDPR Data Protection Rights</h2>
          <p>We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-stone-900 font-serif">6. Contact Information</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
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
