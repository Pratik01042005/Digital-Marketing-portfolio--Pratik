import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { CREATIVE_ITEMS } from '../data/portfolioData';
import type { CreativeItem } from '../data/portfolioData';

interface SocialMediaExperienceProps {
  onSelectItem: (item: CreativeItem) => void;
}

export const SocialMediaExperience: React.FC<SocialMediaExperienceProps> = ({ onSelectItem }) => {
  return (
    <section id="social-experience" className="py-16 sm:py-20 md:py-24 relative bg-[#FAF8F3] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 03 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">CASE STUDY & SOCIAL CREATIVE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              @pratik.ide
            </h2>
          </div>
          
          <a
            href="https://instagram.com/pratik.ide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#F5F2EA] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#FF5A1F] transition-colors self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-[#FF5A1F]" />
            <span>VIEW INSTAGRAM →</span>
          </a>
        </div>

        {/* Editorial Major Case Study Banner */}
        <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-10 mb-16 shadow-[6px_6px_0px_0px_#111111] text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Huge Metric Stat */}
            <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-[#111111]/20 pb-6 lg:pb-0 lg:pr-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5A1F] block">
                INSTAGRAM CASE STUDY
              </span>
              <div className="font-serif text-6xl sm:text-7xl font-extrabold text-[#111111] leading-none tracking-tight">
                65K+
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] mt-2">
                INSTAGRAM REACH — PREVIOUS MONTH
              </div>
              <p className="font-sans text-xs text-[#111111]/70 leading-relaxed pt-2">
                Active management of account @pratik.ide delivering value-first social graphics and content strategies.
              </p>
            </div>

            {/* Right Headline & Subheading */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
                "65K+ people reached."
              </h3>
              <p className="font-sans text-base text-[#111111]/80 leading-relaxed font-light">
                Building an Instagram presence through consistent content and creative execution.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-3 font-mono text-xs">
                <div className="bg-[#FAF8F3] border border-[#111111] p-3">
                  <span className="block text-[10px] text-[#111111]/60 uppercase">ACCOUNT</span>
                  <span className="font-bold text-[#FF5A1F]">@pratik.ide</span>
                </div>
                <div className="bg-[#FAF8F3] border border-[#111111] p-3">
                  <span className="block text-[10px] text-[#111111]/60 uppercase">STATUS</span>
                  <span className="font-bold text-[#111111]">CURRENTLY MANAGED</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Asymmetric Editorial Visual Grid */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
              INSTAGRAM CONTENT GALLERY
            </span>
            <span className="font-mono text-xs text-[#111111]/60 uppercase">
              CANVA PRO / CONTENT STRATEGY
            </span>
          </div>

          {/* Asymmetric Grid: 2 Large, 2 Small */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Item 0: Large Image (Span 7) */}
            {CREATIVE_ITEMS[0] && (
              <div
                onClick={() => onSelectItem(CREATIVE_ITEMS[0])}
                className="md:col-span-7 bg-[#F5F2EA] border-2 border-[#111111] p-4 group cursor-pointer hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-[#111111] mb-4">
                  <img
                    src={CREATIVE_ITEMS[0].image}
                    alt={CREATIVE_ITEMS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F5F2EA] font-mono text-[10px] uppercase font-bold px-2.5 py-1">
                    FEATURED CREATIVE
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors">
                      {CREATIVE_ITEMS[0].title}
                    </h4>
                    <p className="font-sans text-xs text-[#111111]/70 mt-1">
                      {CREATIVE_ITEMS[0].description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#FF5A1F] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            )}

            {/* Item 1: Small Image (Span 5) */}
            {CREATIVE_ITEMS[1] && (
              <div
                onClick={() => onSelectItem(CREATIVE_ITEMS[1])}
                className="md:col-span-5 bg-[#F5F2EA] border-2 border-[#111111] p-4 group cursor-pointer hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
              >
                <div className="relative aspect-square overflow-hidden border border-[#111111] mb-4">
                  <img
                    src={CREATIVE_ITEMS[1].image}
                    alt={CREATIVE_ITEMS[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F5F2EA] font-mono text-[10px] uppercase font-bold px-2.5 py-1">
                    @pratik.ide
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors">
                      {CREATIVE_ITEMS[1].title}
                    </h4>
                    <p className="font-sans text-xs text-[#111111]/70 mt-1">
                      {CREATIVE_ITEMS[1].description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#FF5A1F] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            )}

            {/* Item 2: Small Image (Span 5) */}
            {CREATIVE_ITEMS[2] && (
              <div
                onClick={() => onSelectItem(CREATIVE_ITEMS[2])}
                className="md:col-span-5 bg-[#F5F2EA] border-2 border-[#111111] p-4 group cursor-pointer hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
              >
                <div className="relative aspect-square overflow-hidden border border-[#111111] mb-4">
                  <img
                    src={CREATIVE_ITEMS[2].image}
                    alt={CREATIVE_ITEMS[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F5F2EA] font-mono text-[10px] uppercase font-bold px-2.5 py-1">
                    @pratik.ide
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors">
                      {CREATIVE_ITEMS[2].title}
                    </h4>
                    <p className="font-sans text-xs text-[#111111]/70 mt-1">
                      {CREATIVE_ITEMS[2].description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#FF5A1F] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            )}

            {/* Item 3: Large Image (Span 7) */}
            {CREATIVE_ITEMS[3] && (
              <div
                onClick={() => onSelectItem(CREATIVE_ITEMS[3])}
                className="md:col-span-7 bg-[#F5F2EA] border-2 border-[#111111] p-4 group cursor-pointer hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-[#111111] mb-4">
                  <img
                    src={CREATIVE_ITEMS[3].image}
                    alt={CREATIVE_ITEMS[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111] text-[#F5F2EA] font-mono text-[10px] uppercase font-bold px-2.5 py-1">
                    FEATURED CREATIVE
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors">
                      {CREATIVE_ITEMS[3].title}
                    </h4>
                    <p className="font-sans text-xs text-[#111111]/70 mt-1">
                      {CREATIVE_ITEMS[3].description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#FF5A1F] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
