import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CREATIVE_ITEMS } from '../data/portfolioData';
import type { CreativeItem } from '../data/portfolioData';

interface CreativeShowcaseProps {
  onSelectItem: (item: CreativeItem) => void;
}

export const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'SOCIAL MEDIA',
    'CANVA',
    'CAMPAIGNS',
    'CONTENT',
    'BRANDING'
  ];

  const filteredItems = activeCategory === 'ALL'
    ? CREATIVE_ITEMS
    : CREATIVE_ITEMS.filter(item => {
        const cat = item.category.toUpperCase();
        if (activeCategory === 'SOCIAL MEDIA') return cat.includes('SOCIAL') || cat.includes('INSTAGRAM');
        if (activeCategory === 'CANVA') return item.canvaTemplate || item.tags.some((t: string) => t.toUpperCase().includes('CANVA'));
        if (activeCategory === 'CAMPAIGNS') return cat.includes('PROMOTIONAL') || cat.includes('CAMPAIGN');
        if (activeCategory === 'CONTENT') return cat.includes('CAROUSEL') || cat.includes('CONTENT');
        if (activeCategory === 'BRANDING') return cat.includes('FESTIVAL') || cat.includes('BRAND');
        return true;
      });

  return (
    <section id="showcase" className="py-16 sm:py-20 md:py-24 relative bg-[#F5F2EA] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-10 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 04 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">VISUAL & GRAPHIC DESIGN</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              SELECTED CREATIVE WORK
            </h2>
          </div>

          {/* Editorial Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-[#F5F2EA]'
                    : 'bg-[#FAF8F3] text-[#111111] border border-[#111111]/20 hover:border-[#FF5A1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredItems.map((item, idx) => {
            const stepNum = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="bg-[#FAF8F3] border-2 border-[#111111] p-5 group cursor-pointer hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
              >
                {/* Large Visual Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden border border-[#111111] mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Hover reveal banner */}
                  <div className="absolute inset-0 bg-[#111111]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F5F2EA] bg-[#FF5A1F] px-4 py-2 border border-[#111111] flex items-center gap-2">
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Editorial Metadata Block */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#FF5A1F] block">
                        {stepNum}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors leading-tight">
                        {item.title.toUpperCase()}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#111111]/15 flex items-center justify-between font-mono text-xs text-[#111111]/70 uppercase">
                    <span>{item.category}</span>
                    <span className="text-[#FF5A1F] font-bold">
                      {item.tags.slice(0, 2).join(' / ')}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
