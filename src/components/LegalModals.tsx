import React from 'react';
import { X, Shield, FileText, CheckCircle } from 'lucide-react';

interface Props {
  type: 'privacy' | 'terms' | 'standards' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<Props> = ({ type, onClose }) => {
  if (!type) return null;

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              CareersBuz Privacy Policy
            </h4>
            <p className="text-xs text-slate-400">Effective Date: October 29, 2026</p>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <p>
                At <strong>CareersBuz</strong> (accessible from careersbuz.com), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of personal information that is received and collected by CareersBuz and how it is used, fully compliant with global data privacy frameworks and Google AdSense partner guidelines.
              </p>

              <div>
                <strong className="text-white block mb-1">1. Log Files & Analytics</strong>
                <p>
                  Like most modern journals, CareersBuz makes use of standard server log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This information is used strictly to analyze trends, administer the site, track user movement around the site, and gather demographic intelligence. IP addresses are not linked to any information that is personally identifiable.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">2. Cookies and Web Beacons</strong>
                <p>
                  CareersBuz uses cookies to store information about visitors’ preferences, to record user-specific information on which pages the site visitor accesses or visits, and to customize our web page content based on visitors’ browser type or other information that the visitor sends via their browser.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">3. Google DoubleClick DART Cookie & AdSense Compliance</strong>
                <p>
                  Google, as a third-party vendor, uses cookies to serve advertisements on CareersBuz. Google’s use of the DART cookie enables it to serve ads to our users based on their visit to CareersBuz and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at <span className="text-[#5fdee7]">https://policies.google.com/technologies/ads</span>.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">4. Contact Information</strong>
                <p>
                  If you have any questions or require more information about our Privacy Policy, please contact our Data Protection Officer directly at <a href="mailto:nadeemahmar4@gmail.com" className="text-[#ffeb3b] underline">nadeemahmar4@gmail.com</a> or phone/WhatsApp at <span className="font-mono text-[#5fdee7]">03007802693</span>.
                </p>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              CareersBuz Terms & Conditions
            </h4>
            <p className="text-xs text-slate-400">Effective Date: October 29, 2026</p>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <p>
                By accessing or reading the articles on <strong>CareersBuz</strong>, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>

              <div>
                <strong className="text-white block mb-1">1. Intellectual Property & Permitted Use</strong>
                <p>
                  All text, infographics, research studies, charts, and methodologies published on CareersBuz are the intellectual property of CareersBuz and its contributing fellows. You may view and print pages for personal, non-commercial educational use. Systematic scraping or redistribution without written consent is strictly prohibited.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">2. Professional Educational Disclaimer</strong>
                <p>
                  The career, resume, and salary guidance provided on CareersBuz is intended solely for educational, informational, and career planning purposes. Individual employment outcomes, salary negotiations, and hiring decisions depend upon third-party corporate policies, macroeconomic market conditions, and candidate performance.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">3. Modifications & Jurisdiction</strong>
                <p>
                  CareersBuz reserves the right to revise these terms of service at any time without notice. Inquiries regarding legal terms should be directed to <a href="mailto:nadeemahmar4@gmail.com" className="text-[#ffeb3b] underline">nadeemahmar4@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        );

      case 'standards':
        return (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              CareersBuz Editorial Standards & Verification Policy
            </h4>
            <p className="text-xs text-slate-400">Effective Date: October 29, 2026</p>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <p>
                CareersBuz adheres to strict journalism and research rigor to ensure that every article is actionable, peer-reviewed, and free from misleading marketing hype.
              </p>

              <div>
                <strong className="text-white block mb-1">1. Minimum Depth Requirement</strong>
                <p>
                  Every research guide published must contain between 1200 and 1500 words of verifiable analysis. Summaries, placeholders, or superficial lists are strictly rejected.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">2. Anti-AI Slop Mandate</strong>
                <p>
                  All content is checked against unverified platitudes, hallucinated metrics, and empty corporate buzzwords. Real-world case studies and empirical metrics are mandatory.
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">3. Corrections Policy</strong>
                <p>
                  If an error in labor data or toolchain specification is identified, our editorial board publishes a transparent correction within 24 hours. Contact our corrections desk at <a href="mailto:nadeemahmar4@gmail.com" className="text-[#ffeb3b] underline">nadeemahmar4@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a0f12] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-[#5fdee7]" />
            <span className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Legal & Compliance Documentation
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Official CareersBuz Legal Repository</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
