import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  HelpCircle 
} from 'lucide-react';

interface Props {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [category, setCategory] = useState('Career Placement & Advisory');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <button onClick={onBackToHome} className="hover:text-[#ffeb3b] transition-colors flex items-center gap-1">
          <ArrowLeft size={14} />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-[#5fdee7]">Contact Us</span>
      </nav>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[#5fdee7] text-xs font-mono">
          <Mail size={14} />
          <span>OFFICIAL EDITORIAL & PLACEMENT COMMUNICATIONS DESK</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
          Contact <span className="text-[#ffeb3b]">CareersBuz</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Connect directly with our editorial staff, career strategists, and corporate placement partners. We respond to all inquiries within 12 business hours.
        </p>
      </header>

      {/* Contact Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* WhatsApp & Phone Card */}
        <div className="p-6 rounded-2xl bg-[#0f171e] border border-emerald-500/40 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-400">
              <MessageSquare size={22} />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Official Phone & WhatsApp
              </span>
              <span className="text-xl font-black text-white font-mono tracking-tight">
                03007802693
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Direct priority line for urgent executive advisory, career placement consultations, and WhatsApp inquiries. Available Monday through Saturday, 9:00 AM – 7:00 PM.
          </p>
          <a
            href="https://wa.me/923007802693"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
          >
            <span>Open WhatsApp Chat Now</span>
            <span className="text-emerald-200">›</span>
          </a>
        </div>

        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-[#0f171e] border border-cyan-500/40 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/50 text-[#5fdee7]">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-xs font-mono text-[#5fdee7] font-bold uppercase tracking-wider block">
                Official Editorial Email
              </span>
              <span className="text-base sm:text-lg font-black text-white font-mono break-all">
                nadeemahmar4@gmail.com
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Submit manuscripts, corrections, resume audits, or enterprise recruitment partnership proposals directly to the senior editorial desk.
          </p>
          <a
            href="mailto:nadeemahmar4@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5fdee7] hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors"
          >
            <span>Send Email Message</span>
            <span>›</span>
          </a>
        </div>

      </section>

      {/* Interactive Form Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0f171e] border border-slate-800 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
            Send an Official Transmission
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill out the form below. Your message will be encrypted and routed to the corresponding department specialist.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-xl bg-slate-900 border border-emerald-500/50 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 size={30} />
            </div>
            <h3 className="text-xl font-bold text-white">Transmission Received</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Your communication regarding <span className="text-[#5fdee7] font-medium">{category}</span> has been logged. Our editorial board will respond to <strong className="text-[#ffeb3b]">{email}</strong> within 12 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setPhoneInput('');
                setMessage('');
              }}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Sterling"
                  className="w-full px-4 py-2.5 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-xl text-xs sm:text-sm text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jordan@example.com"
                  className="w-full px-4 py-2.5 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-xl text-xs sm:text-sm text-white outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="e.g. +92 300 1234567"
                  className="w-full px-4 py-2.5 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-xl text-xs sm:text-sm text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                  Inquiry Discipline
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-xl text-xs sm:text-sm text-white outline-none transition-colors"
                >
                  <option value="Career Placement & Advisory">Job Search & Career Placement</option>
                  <option value="Resume & ATS Engineering">Resume & Cover Letter Engineering</option>
                  <option value="Interview Strategy & Coaching">Interview Preparation & STAR Method</option>
                  <option value="Executive Compensation & Upskilling">Salary Negotiation & Upskilling</option>
                  <option value="Editorial Manuscript Review">Editorial Peer-Review & Publication</option>
                  <option value="Corporate Partnership & AdSense">Advertising & Corporate Recruitment</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                Detailed Message Context *
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Provide detailed context regarding your career objectives, resume audit questions, or partnership requirements..."
                className="w-full px-4 py-3 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-xl text-xs sm:text-sm text-white outline-none resize-none transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-400">
                🔒 All submissions are strictly confidential under the CareersBuz Privacy Charter.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ffeb3b] hover:bg-yellow-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Send size={15} />
                <span>Submit Transmission</span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Response SLA Commitment */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
        <div className="p-4 rounded-xl bg-[#090d10] border border-slate-800 flex items-center gap-3">
          <Clock size={18} className="text-[#5fdee7] shrink-0" />
          <div>
            <strong className="text-white block font-mono">12-Hour SLA</strong>
            <span>Guaranteed editorial response time.</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#090d10] border border-slate-800 flex items-center gap-3">
          <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
          <div>
            <strong className="text-white block font-mono">Zero Spam Guarantee</strong>
            <span>We never sell or distribute contacts.</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#090d10] border border-slate-800 flex items-center gap-3">
          <HelpCircle size={18} className="text-[#ffeb3b] shrink-0" />
          <div>
            <strong className="text-white block font-mono">Peer-Reviewed Desk</strong>
            <span>Responses drafted by domain fellows.</span>
          </div>
        </div>
      </section>

    </div>
  );
};
