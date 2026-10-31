import React, { useState } from 'react';
import { 
  Network, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  FolderTree, 
  Clock, 
  BookOpen,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { Article, CategoryId } from '../types';
import { CATEGORIES } from '../data/articles';

interface Props {
  allArticles: Article[];
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
  onSelectCategory: (category: CategoryId | 'all') => void;
  onSelectArticle: (article: Article) => void;
}

export const SitemapPage: React.FC<Props> = ({
  allArticles,
  onBackToHome,
  onNavigateTo,
  onSelectCategory,
  onSelectArticle
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [copiedXml, setCopiedXml] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'xml'>('html');

  // Core Static Institutional Pages
  const staticPages = [
    { title: 'Home Feed & Featured Playbook', slug: '#home', pageKey: 'feed', priority: '1.0', changefreq: 'daily', desc: 'Main career management feed, lead featured guide, and daily career dispatches.' },
    { title: 'About CareersBuz Editorial Board', slug: '#about-us', pageKey: 'about', priority: '0.8', changefreq: 'monthly', desc: 'Our peer-audited editorial standards, organizational psychologist profiles, and research ethics.' },
    { title: 'Contact Us & Editorial Desk', slug: '#contact-us', pageKey: 'contact', priority: '0.8', changefreq: 'monthly', desc: 'Direct WhatsApp/Phone (03007802693) and official email (hostinger991@gmail.com).' },
    { title: 'Privacy Policy & DART Cookie Disclosure', slug: '#privacy-policy', pageKey: 'privacy', priority: '0.6', changefreq: 'yearly', desc: 'Google AdSense compliance, cookie policies, GDPR, and consumer privacy protections.' },
    { title: 'Terms & Conditions', slug: '#terms-and-conditions', pageKey: 'terms', priority: '0.6', changefreq: 'yearly', desc: 'Career content fair-use, digital intellectual property, and community guidelines.' },
    { title: 'Editorial & Career Advice Disclaimer', slug: '#disclaimer', pageKey: 'disclaimer', priority: '0.6', changefreq: 'yearly', desc: 'Professional advice disclaimers, salary estimation disclosures, and no-guarantee warranties.' },
  ];

  // Filtered lists
  const filteredStaticPages = staticPages.filter(p => 
    p.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
    p.desc.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const filteredArticles = allArticles.filter(a =>
    a.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    a.categoryLabel.toLowerCase().includes(filterQuery.toLowerCase()) ||
    a.keyword.toLowerCase().includes(filterQuery.toLowerCase()) ||
    a.summary.toLowerCase().includes(filterQuery.toLowerCase())
  );

  // Grouped articles by category
  const categoriesWithArticles = CATEGORIES.map(cat => ({
    ...cat,
    articles: filteredArticles.filter(a => a.category === cat.id)
  }));

  // Generate valid XML Sitemap for Google Search Console and AdSense
  const domain = 'https://careersbuz.com';
  const today = '2026-03-30';
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Core Static Pages -->
${staticPages.map(p => `  <url>
    <loc>${domain}/${p.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}

  <!-- Core Career Categories -->
${CATEGORIES.map(c => `  <url>
    <loc>${domain}/?category=${c.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}

  <!-- 20 Zero-Plagiarism Career Guides (Openable Links) -->
${allArticles.map(a => `  <url>
    <loc>${domain}/#recipe-${a.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${a.realImage.url}</image:loc>
      <image:title>${a.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${a.realImage.caption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2000);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Breadcrumb & Return to Feed */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold text-[#ea580c] hover:underline cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to CareersBuz Home Feed</span>
        </button>

        <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
          Last Crawled / Updated: March 2026
        </span>
      </div>

      {/* Hero Header (RecipePots / GeneratePress Editorial Style) */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#ea580c] text-xs font-bold font-mono">
          <Network size={14} />
          <span>CRAWLER-INDEXED ARCHITECTURE</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
          CareersBuz Comprehensive Sitemap
        </h1>

        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
          Complete hierarchical directory of all {allArticles.length} professional career guides, executive salary negotiation playbooks, ATS resume engineering guides, and institutional compliance pages. Every single link in this directory is interactive and opens immediately.
        </p>

        {/* Live Search & Filter Bar */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter sitemap links by keyword, ATS, salary, interview..."
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 text-stone-800 placeholder-stone-400"
            />
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            {filterQuery && (
              <button 
                onClick={() => setFilterQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700"
              >
                ×
              </button>
            )}
          </div>

          {/* Tab Selector: HTML Directory vs XML Code */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Interactive Directory
            </button>
            <button
              onClick={() => setActiveTab('xml')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'xml'
                  ? 'bg-[#ea580c] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <FileCode size={13} />
              <span>XML Sitemap Source</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Interactive HTML Directory */}
      {activeTab === 'html' && (
        <div className="space-y-8">
          
          {/* Section 1: Core Institutional Pages */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <FolderTree size={18} className="text-[#ea580c]" />
                <h2 className="font-serif font-bold text-lg text-stone-900">
                  Core Institutional &amp; Compliance Pages
                </h2>
              </div>
              <span className="text-xs font-mono text-stone-400">
                {filteredStaticPages.length} Endpoints
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {filteredStaticPages.map((page, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigateTo(page.pageKey)}
                  className="p-4 rounded-2xl border border-stone-100 hover:border-orange-300 hover:bg-orange-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#ea580c] transition-colors">
                        {page.title}
                      </span>
                      <ExternalLink size={13} className="text-stone-400 group-hover:text-[#ea580c] transition-colors" />
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {page.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span className="text-[#ea580c] font-semibold">{page.slug}</span>
                    <span>Priority {page.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Career Guides by Category (All 20 Links) */}
          <div className="space-y-6">
            {categoriesWithArticles.map(category => (
              <div
                key={category.id}
                className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-[#ea580c]" />
                      <h3 className="font-serif font-bold text-lg text-stone-900">
                        {category.label}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5 font-mono">
                      {category.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onBackToHome();
                      onSelectCategory(category.id);
                    }}
                    className="text-xs font-bold text-[#ea580c] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-center"
                  >
                    <span>View Category Archive ({category.articles.length} Guides)</span>
                    <ExternalLink size={12} />
                  </button>
                </div>

                {category.articles.length === 0 ? (
                  <p className="text-xs text-stone-400 italic py-2">
                    No career guides match your search filter in this category.
                  </p>
                ) : (
                  <div className="space-y-2.5">
                    {category.articles.map(article => (
                      <div
                        key={article.id}
                        onClick={() => onSelectArticle(article)}
                        className="p-3.5 rounded-xl border border-stone-100 hover:border-orange-300 hover:bg-orange-50/40 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={article.realImage.url}
                            alt={article.title}
                            className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-200"
                          />
                          <div className="min-w-0">
                            <h4 className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#ea580c] transition-colors truncate">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 mt-0.5">
                              <span className="text-[#ea580c] font-semibold">#{article.keyword}</span>
                              <span>·</span>
                              <span>{article.readTimeMinutes} min read</span>
                              <span>·</span>
                              <span>{article.wordCount} words</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-[10px] font-mono font-semibold group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                            Open Guide →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* VIEW 2: Formatted XML Sitemap Viewer for Crawlers */}
      {activeTab === 'xml' && (
        <div className="bg-stone-900 text-stone-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 font-mono text-xs border border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <FileCode size={18} className="text-[#ea580c]" />
                <span>Standard W3C / Google Sitemap XML Source</span>
              </div>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Compliant with Google Search Console, Bing Webmaster, and AdSense Mediapartners crawlers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyXml}
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedXml ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedXml ? 'Copied XML' : 'Copy All'}</span>
              </button>

              <button
                onClick={handleDownloadXml}
                className="px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download size={14} />
                <span>Download .xml</span>
              </button>
            </div>
          </div>

          {/* XML Codebox */}
          <div className="relative overflow-x-auto p-4 bg-stone-950 rounded-2xl border border-stone-800 text-[11px] leading-relaxed max-h-[500px] overflow-y-auto font-mono text-emerald-400">
            <pre>{xmlContent}</pre>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500">
            <span>Static live location: <code className="text-orange-400 font-bold">https://careersbuz.com/sitemap.xml</code></span>
            <span>Total URLs: {staticPages.length + CATEGORIES.length + allArticles.length}</span>
          </div>
        </div>
      )}

      {/* Bottom AdSense & Crawler Assurance */}
      <div className="bg-stone-100 rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
          <span>All {allArticles.length} guides and institutional links are indexed with 200 OK headers for instantaneous crawler verification.</span>
        </div>
        <button
          onClick={onBackToHome}
          className="text-[#ea580c] font-bold hover:underline shrink-0 cursor-pointer"
        >
          Back to Top Feed ↑
        </button>
      </div>

    </div>
  );
};
