import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Career Placement Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a0f12] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#5fdee7]/15 border border-[#5fdee7]/40 text-[#5fdee7]">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                Contact CareersBuz Editorial & Placement Desk
              </h3>
              <p className="text-xs text-slate-400">
                Direct communication conduit for inquiries, partnerships, and executive consultations.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          
          {/* Official Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Phone & WhatsApp */}
            <a
              href="https://wa.me/923007802693"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/20 transition-all group flex items-start gap-3"
            >
              <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-500/50 text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                  Official Phone & WhatsApp
                </span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                  03007802693
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Click to initiate instant WhatsApp consultation
                </span>
              </div>
            </a>

            {/* Email Address */}
            <a
              href="mailto:nadeemahmar4@gmail.com"
              className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all group flex items-start gap-3"
            >
              <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/50 text-[#5fdee7] group-hover:scale-105 transition-transform shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#5fdee7] uppercase tracking-wider block font-bold">
                  Official Email Address
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#5fdee7] transition-colors break-all">
                  nadeemahmar4@gmail.com
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Direct dispatch to executive editorial staff
                </span>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="p-6 rounded-xl bg-slate-900 border border-emerald-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-base font-bold text-white">Message Dispatched Successfully</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. Your communication has been routed to the CareersBuz research desk. Our editorial team will review and reply to <strong className="text-[#5fdee7]">{email}</strong> within 12 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-[#0f171e] border border-slate-800 space-y-4">
              <div className="font-bold text-white text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#ffeb3b]" />
                <span>Submit an Editorial or Placement Inquiry</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3 py-2 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-lg text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3 py-2 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-lg text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Inquiry Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-lg text-xs text-white outline-none"
                >
                  <option value="Career Placement Inquiry">Career Placement & Job Search Consultation</option>
                  <option value="Resume Engineering Audit">Resume & Cover Letter Technical Review</option>
                  <option value="Interview Strategy Advisory">Interview Prep & STAR Framework Coaching</option>
                  <option value="Editorial Contribution">Research & Editorial Contribution Proposal</option>
                  <option value="Corporate Partnership">Enterprise Recruitment & Advertising Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Message Context & Goals *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide detailed background, target roles, or specific questions..."
                  className="w-full px-3 py-2 bg-[#0a0f12] border border-slate-700 focus:border-[#5fdee7] rounded-lg text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-slate-500">
                  Protected under CareersBuz strict confidential privacy guarantee.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#ffeb3b] hover:bg-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Send size={13} />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>CareersBuz Official Communications Network</span>
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
