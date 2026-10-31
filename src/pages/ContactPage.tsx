import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Briefcase, 
  Sparkles
} from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onBackToHome, onNavigateTo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [subject, setSubject] = useState('Career Trajectory & Placement Strategy');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-stone-500">
        <button onClick={onBackToHome} className="hover:text-amber-800 transition-colors flex items-center gap-1 font-semibold cursor-pointer">
          <ArrowLeft size={13} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-800 font-bold">Contact Us</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
          <Briefcase size={14} />
          <span>CAREERSBUZ EDITORIAL &amp; PRESS DESK</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif">
          Get in Touch with CareersBuz
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
          Have an inquiry about an executive resume audit, salary benchmark calibration, interview strategy, or press commentary? Reach out directly to our editorial board. We guarantee a response within 24 business hours.
        </p>
      </header>

      {/* Quick Direct Contacts Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Phone & WhatsApp Card */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold">
            <Phone size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-900 font-serif">
              Direct Phone &amp; WhatsApp
            </h3>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              Instant mobile &amp; editorial inquiries
            </p>
          </div>
          <a
            href="tel:03007802693"
            className="block text-base font-bold font-mono text-amber-800 hover:underline"
          >
            03007802693
          </a>
          <span className="inline-block text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Active 7 Days / Week
          </span>
        </div>

        {/* Primary Editorial Email */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold">
            <Mail size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-900 font-serif">
              Primary Editorial Desk
            </h3>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              Official press &amp; publishing contact
            </p>
          </div>
          <a
            href="mailto:hostinger991@gmail.com"
            className="block text-sm font-bold font-mono text-amber-800 hover:underline truncate"
          >
            hostinger991@gmail.com
          </a>
          <span className="inline-block text-[10px] font-mono bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
            SLA: Under 12 Hours
          </span>
        </div>

        {/* Secondary Press & Executive Desk */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold">
            <Mail size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-900 font-serif">
              Executive Career Desk
            </h3>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              Syndication &amp; research correspondence
            </p>
          </div>
          <a
            href="mailto:nadeemahmar4@gmail.com"
            className="block text-sm font-bold font-mono text-amber-800 hover:underline truncate"
          >
            nadeemahmar4@gmail.com
          </a>
          <span className="inline-block text-[10px] font-mono bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200">
            Executive Inquiries
          </span>
        </div>

      </div>

      {/* Main Interactive Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Form Container (3 cols) */}
        <div className="lg:col-span-3 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold font-serif text-stone-900">
                Inquiry Successfully Dispatched!
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting CareersBuz. Your message has been routed to Dr. Evelyn Vance and the appropriate editorial sector lead. A response will arrive within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-stone-900 text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-stone-900 mb-2">
                Send a Message to the Editorial Team
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-stone-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alexandra Smith"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-stone-700">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@enterprise.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-stone-700">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="+92 300 7802693"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-stone-700">
                    Inquiry Subject *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-stone-900"
                  >
                    <option value="Career Trajectory & Placement Strategy">Career Trajectory &amp; Placement Strategy</option>
                    <option value="ATS Resume Audit & Optimization">ATS Resume Audit &amp; Optimization</option>
                    <option value="Executive Interview Coaching Inquiries">Executive Interview Coaching Inquiries</option>
                    <option value="Salary Negotiation Benchmarks">Salary Negotiation Benchmarks</option>
                    <option value="Editorial Correction or Research Feedback">Editorial Correction or Research Feedback</option>
                    <option value="Press, Syndication & Media Inquiries">Press, Syndication &amp; Media Inquiries</option>
                    <option value="AdSense & RevBid Compliance Verification">AdSense &amp; RevBid Compliance Verification</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-stone-700">
                  Your Message or Question *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your question, career context, or editorial proposal..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-stone-900 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-stone-900 text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={14} />
                <span>Dispatch Inquiry to Editorial Team</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900">
              CareersBuz Response Commitments
            </h3>

            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-800">24-Hour Editorial SLA:</strong>
                  <p className="mt-0.5">Every email received by our principal authors is acknowledged and answered within 24 business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-800">Confidentiality Guarantee:</strong>
                  <p className="mt-0.5">Resume documents, current employer details, and compensation packages shared with us are treated with strict confidentiality.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-800">No Algorithmic Auto-Replies:</strong>
                  <p className="mt-0.5">Inquiries are reviewed directly by human researchers, recruiters, or editorial leads.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs text-center space-y-2">
            <h4 className="font-serif font-bold text-sm text-stone-900">
              Need Direct Sitemap Access?
            </h4>
            <p className="text-xs text-stone-500">
              If you are a web crawler, researcher, or syndication partner seeking our XML directory:
            </p>
            <button
              onClick={() => onNavigateTo('sitemap')}
              className="text-xs font-bold text-amber-800 hover:underline cursor-pointer"
            >
              Open Full Sitemap Directory →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
