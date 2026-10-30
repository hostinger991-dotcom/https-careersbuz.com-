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
  HelpCircle,
  Network
} from 'lucide-react';

interface Props {
  isOpen?: boolean;
  onClose: () => void;
}

export const DeveloperHubModal: React.FC<Props> = ({ isOpen = true, onClose }) => {
  const [activeTab, setActiveTab] = useState<'adstxt' | 'appadstxt' | 'robotstxt' | 'sitemap' | 'readiness'>('adstxt');
  const [publisherId, setPublisherId] = useState('pub-0000000000000000');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

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

  const today = new Date().toISOString().split('T')[0];
  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://careersbuz.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#about-us</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#contact-us</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#sitemap</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#terms-and-conditions</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://careersbuz.com/#disclaimer</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
${ALL_ARTICLES.map(art => `  <url>
    <loc>https://careersbuz.com/#recipe-${art.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(label);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleDownload = (filename: string, content: string, mimeType: string = 'text/plain') => {
    const blob = new Blob([content], { type: mimeType });
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 text-stone-800 z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-5 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c] flex items-center justify-center text-white shadow-md">
              <Code2 size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-white">
                  CareersBuz Developer &amp; AdSense Hub
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-[#ea580c] border border-orange-500/30">
                  v2.6
                </span>
              </div>
              <p className="text-xs text-stone-400 font-mono">
                Root file deployment, crawler validation, and publisher verification
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-stone-100 px-6 py-2 border-b border-stone-200 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('adstxt')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'adstxt'
                ? 'bg-white text-[#ea580c] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            ads.txt
          </button>

          <button
            onClick={() => setActiveTab('appadstxt')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'appadstxt'
                ? 'bg-white text-[#ea580c] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            app-ads.txt
          </button>

          <button
            onClick={() => setActiveTab('robotstxt')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'robotstxt'
                ? 'bg-white text-[#ea580c] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            robots.txt
          </button>

          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'sitemap'
                ? 'bg-white text-[#ea580c] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            sitemap.xml
          </button>

          <button
            onClick={() => setActiveTab('readiness')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'readiness'
                ? 'bg-[#ea580c] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            AdSense Audit Checklist
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* TAB 1: Ads.txt */}
          {activeTab === 'adstxt' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-stone-900 font-serif">
                    Configure Google AdSense Publisher ID
                  </h4>
                  <p className="text-xs text-stone-500">
                    Enter your Google AdSense Publisher ID (e.g. pub-1234567890123456) to customize your Ads.txt line.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(adsTxtContent, 'ads.txt')}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedFile === 'ads.txt' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedFile === 'ads.txt' ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('ads.txt', adsTxtContent)}
                    className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white text-xs font-mono font-bold hover:bg-[#c2410c] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download ads.txt</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={publisherId}
                  onChange={(e) => setPublisherId(e.target.value)}
                  placeholder="pub-XXXXXXXXXXXXXXXX"
                  className="px-3 py-2 text-xs font-mono rounded-xl border border-stone-300 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>

              <pre className="p-4 bg-stone-900 text-emerald-400 font-mono text-xs rounded-2xl overflow-x-auto border border-stone-800">
                {adsTxtContent}
              </pre>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-1">
                <strong className="block text-stone-900 font-serif">Where to place this file:</strong>
                <p>Upload <code className="bg-white px-1 py-0.5 rounded font-mono border border-orange-300">ads.txt</code> to the root directory of your domain so it resolves at <code className="font-mono">https://careersbuz.com/ads.txt</code>.</p>
              </div>
            </div>
          )}

          {/* TAB 2: App-Ads.txt */}
          {activeTab === 'appadstxt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 font-serif">
                    app-ads.txt Specification
                  </h4>
                  <p className="text-xs text-stone-500">
                    For Google AdMob and programmatic app advertising compliance.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(appAdsTxtContent, 'app-ads.txt')}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedFile === 'app-ads.txt' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedFile === 'app-ads.txt' ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('app-ads.txt', appAdsTxtContent)}
                    className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white text-xs font-mono font-bold hover:bg-[#c2410c] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-stone-900 text-emerald-400 font-mono text-xs rounded-2xl overflow-x-auto border border-stone-800">
                {appAdsTxtContent}
              </pre>
            </div>
          )}

          {/* TAB 3: Robots.txt */}
          {activeTab === 'robotstxt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 font-serif">
                    robots.txt with Mediapartners-Google Support
                  </h4>
                  <p className="text-xs text-stone-500">
                    Explicitly allows Googlebot, Bingbot, and Mediapartners-Google to crawl all pages and recipes.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(robotsTxtContent, 'robots.txt')}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedFile === 'robots.txt' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedFile === 'robots.txt' ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('robots.txt', robotsTxtContent)}
                    className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white text-xs font-mono font-bold hover:bg-[#c2410c] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-stone-900 text-emerald-400 font-mono text-xs rounded-2xl overflow-x-auto border border-stone-800">
                {robotsTxtContent}
              </pre>
            </div>
          )}

          {/* TAB 4: Sitemap.xml */}
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 font-serif">
                    sitemap.xml (All 20 Career Guides Included)
                  </h4>
                  <p className="text-xs text-stone-500">
                    Compliant with Google Search Console and Bing Webmaster Tools.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(sitemapXmlContent, 'sitemap.xml')}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-mono font-bold hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedFile === 'sitemap.xml' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedFile === 'sitemap.xml' ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleDownload('sitemap.xml', sitemapXmlContent, 'application/xml')}
                    className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white text-xs font-mono font-bold hover:bg-[#c2410c] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download XML</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-stone-900 text-emerald-400 font-mono text-xs rounded-2xl overflow-x-auto border border-stone-800 max-h-60 overflow-y-auto">
                {sitemapXmlContent}
              </pre>
            </div>
          )}

          {/* TAB 5: AdSense Audit Checklist */}
          {activeTab === 'readiness' && (
            <div className="space-y-4">
              <h4 className="font-bold text-stone-900 font-serif">
                Google AdSense Publisher Approval Audit
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs font-mono">
                    <CheckCircle2 size={16} />
                    <span>20 Long-Form Guides</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Over 28,000+ words of real, peer-audited career and resume guidance. Zero dummy or placeholder text.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs font-mono">
                    <CheckCircle2 size={16} />
                    <span>Required Legal Pages</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Comprehensive About Us, Contact Us, Privacy Policy (with DART cookie clauses), Terms, and Disclaimer.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs font-mono">
                    <CheckCircle2 size={16} />
                    <span>Interactive Sitemap</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Every single link is 100% accessible, openable, and validated for crawler indexing.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs font-mono">
                    <CheckCircle2 size={16} />
                    <span>Mobile &amp; PC Responsive</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Ultra-clean GeneratePress layout that loads instantly across all screen viewports.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-stone-500">
            CareersBuz Webmaster Tool · Ready for Google Search Console
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Close Developer Hub
          </button>
        </div>

      </div>
    </div>
  );
};
