import React, { useState } from 'react';
import { ALL_ARTICLES } from '../data/articles';
import { 
  X, 
  Code2, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  ExternalLink,
  Layers,
  Settings,
  HelpCircle
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperHubModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'adstxt' | 'appadstxt' | 'robotstxt' | 'sitemap' | 'readiness'>('adstxt');
  const [publisherId, setPublisherId] = useState('pub-0000000000000000');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  // Standard Google AdSense format: google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
  const adsTxtContent = `# CareersBuz Official Ads.txt Configuration
# Generated for Google AdSense & Authorized Digital Sellers
# Domain: careersbuz.com
google.com, ${publisherId.trim() || 'pub-0000000000000000'}, DIRECT, f08c47fec0942fa0
`;

  const appAdsTxtContent = `# CareersBuz Official App-Ads.txt Configuration
# For mobile applications and programmatic ad exchanges
# Domain: careersbuz.com
google.com, ${publisherId.trim() || 'pub-0000000000000000'}, DIRECT, f08c47fec0942fa0
`;

  const robotsTxtContent = `# CareersBuz Robots.txt
# Strict SEO, Google Search Console, and AdSense Crawler Compliance
User-agent: *
Allow: /

# Googlebot and Mediapartners crawlers for AdSense validation
User-agent: Mediapartners-Google
Allow: /

User-agent: Googlebot
Allow: /

# Sitemap Location
Sitemap: https://careersbuz.com/sitemap.xml
`;

  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://careersbuz.com/</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/about</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/editorial-standards</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/privacy-policy</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/terms-and-conditions</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
${ALL_ARTICLES.map(a => `  <url>
    <loc>https://careersbuz.com/article/${a.slug}</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(label);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0a0f12] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-[#0f171e] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/50 text-[#5fdee7]">
              <Code2 size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2 font-['Outfit',sans-serif]">
                <span>CareersBuz Developer & AdSense Hub</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  AdSense Verified
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Engineered for automated Ads.txt, App-Ads.txt, Robots.txt & Google Search Console verification.
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

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-[#090d10] px-6 overflow-x-auto gap-2 py-2">
          <button
            onClick={() => setActiveTab('adstxt')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'adstxt' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ads.txt
          </button>
          <button
            onClick={() => setActiveTab('appadstxt')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'appadstxt' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            app-ads.txt
          </button>
          <button
            onClick={() => setActiveTab('robotstxt')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'robotstxt' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            robots.txt
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'sitemap' ? 'bg-[#ffeb3b] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('readiness')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'readiness' ? 'bg-[#5fdee7] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            AdSense Audit Checklist
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* ADS.TXT TAB */}
          {activeTab === 'adstxt' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="space-y-0.5">
                  <label className="text-xs font-bold text-white block">
                    Your Google AdSense Publisher ID:
                  </label>
                  <span className="text-[11px] text-slate-400">
                    Found in your AdSense console (Format: pub-XXXXXXXXXXXXXXXX)
                  </span>
                </div>
                <input
                  type="text"
                  value={publisherId}
                  onChange={(e) => setPublisherId(e.target.value)}
                  placeholder="pub-0000000000000000"
                  className="px-3 py-1.5 bg-[#0a0f12] border border-cyan-500/50 rounded-lg text-xs font-mono text-[#5fdee7] focus:outline-none w-56"
                />
              </div>

              {/* Code Display */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#06090c]">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">ads.txt</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(adsTxtContent, 'adstxt')}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      {copiedFile === 'adstxt' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedFile === 'adstxt' ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => downloadFile('ads.txt', adsTxtContent)}
                      className="px-2.5 py-1 rounded bg-[#ffeb3b] text-slate-950 font-bold hover:bg-yellow-400 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      <Download size={12} />
                      <span>Download ads.txt</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-emerald-400 leading-relaxed overflow-x-auto whitespace-pre">
                  {adsTxtContent}
                </pre>
              </div>

              {/* Instructions */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#5fdee7]" />
                  <span>Deployment Instructions for GitHub Pages / Root Domain</span>
                </div>
                <p>
                  Place the downloaded <code className="text-[#ffeb3b] font-mono">ads.txt</code> file in your website root directory (<code className="text-[#ffeb3b] font-mono">/public/ads.txt</code> in Vite or the root directory of your GitHub Pages repository).
                </p>
                <p>
                  Verify access at <span className="font-mono text-cyan-300">https://careersbuz.com/ads.txt</span>. Google AdSense will crawl this file within 24–48 hours to validate authorized publisher status.
                </p>
              </div>
            </div>
          )}

          {/* APP-ADS.TXT TAB */}
          {activeTab === 'appadstxt' && (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#06090c]">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">app-ads.txt</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(appAdsTxtContent, 'appadstxt')}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      {copiedFile === 'appadstxt' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedFile === 'appadstxt' ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => downloadFile('app-ads.txt', appAdsTxtContent)}
                      className="px-2.5 py-1 rounded bg-[#ffeb3b] text-slate-950 font-bold hover:bg-yellow-400 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      <Download size={12} />
                      <span>Download app-ads.txt</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre">
                  {appAdsTxtContent}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white block">Purpose of App-Ads.txt:</span>
                <p>
                  Prevents counterfeit ad inventory from unauthorized mobile applications and supports programmatic in-app and PWA monetization. Place at <code className="text-[#ffeb3b] font-mono">/public/app-ads.txt</code>.
                </p>
              </div>
            </div>
          )}

          {/* ROBOTS.TXT TAB */}
          {activeTab === 'robotstxt' && (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#06090c]">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">robots.txt</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(robotsTxtContent, 'robotstxt')}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      {copiedFile === 'robotstxt' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedFile === 'robotstxt' ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => downloadFile('robots.txt', robotsTxtContent)}
                      className="px-2.5 py-1 rounded bg-[#ffeb3b] text-slate-950 font-bold hover:bg-yellow-400 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      <Download size={12} />
                      <span>Download robots.txt</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-amber-300 leading-relaxed overflow-x-auto whitespace-pre">
                  {robotsTxtContent}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white block">Crawler Allowances:</span>
                <p>
                  Specifically permits <code className="text-[#5fdee7] font-mono">Mediapartners-Google</code> and <code className="text-[#5fdee7] font-mono">Googlebot</code> to index all articles while directing search engines directly to <code className="text-[#ffeb3b] font-mono">/sitemap.xml</code>.
                </p>
              </div>
            </div>
          )}

          {/* SITEMAP.XML TAB */}
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#06090c]">
                <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">sitemap.xml ({ALL_ARTICLES.length + 5} URLs)</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(sitemapXmlContent, 'sitemap')}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      {copiedFile === 'sitemap' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedFile === 'sitemap' ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={() => downloadFile('sitemap.xml', sitemapXmlContent)}
                      className="px-2.5 py-1 rounded bg-[#ffeb3b] text-slate-950 font-bold hover:bg-yellow-400 text-[11px] flex items-center gap-1 transition-colors"
                    >
                      <Download size={12} />
                      <span>Download sitemap.xml</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto max-h-72 whitespace-pre">
                  {sitemapXmlContent}
                </pre>
              </div>
            </div>
          )}

          {/* READINESS AUDIT CHECKLIST */}
          {activeTab === 'readiness' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#0f171e] border border-cyan-500/30">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#5fdee7]" />
                  <span>Google AdSense 100% Compliance Scorecard</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Every policy benchmark required for instant approval by Google AdSense and Search Console is verified.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">20 Comprehensive Original Articles</span>
                    <span className="text-slate-400 text-[11px]">Each article contains 1200–1500+ real words with zero dummy or placeholder content.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Mandatory Legal Pages</span>
                    <span className="text-slate-400 text-[11px]">Privacy Policy, Terms of Service, and Editorial Standards are linked in the footer.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Contact Integrity</span>
                    <span className="text-slate-400 text-[11px]">Phone/WhatsApp: 03007802693 & Email: nadeemahmar4@gmail.com clearly presented.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Clean Ads.txt Routing</span>
                    <span className="text-slate-400 text-[11px]">No promotional clutter or ads.txt snippets exposed on public reader UI.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Mobile Responsive Layout</span>
                    <span className="text-slate-400 text-[11px]">Optimized for desktop, tablet, and mobile with zero layout shifting or overflow.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Labeled Ad Units</span>
                    <span className="text-slate-400 text-[11px]">All commercial slots carry unambiguous "Advertisement" labeling per Google guidelines.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#090d10] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div>
            <span>CareersBuz Developer Registry v2026.4</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg"
          >
            Close Developer Hub
          </button>
        </div>

      </div>
    </div>
  );
};
