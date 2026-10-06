import React from 'react';
import { ArrowRight, FileText, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#F5F2EA]">
      {/* Decorative Editorial Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 md:grid-cols-12 px-4 sm:px-6 lg:px-8">
          <div className="border-r border-[#E2DDD0] h-full" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full" />
          <div className="border-r border-[#E2DDD0] h-full hidden md:block" />
          <div className="border-r border-[#E2DDD0] h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Magazine Header Bar Info */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#111111] pb-3 mb-8 sm:mb-12 gap-3 text-xs tracking-widest font-mono uppercase text-[#111111]/70">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-[#FF5A1F]">[ ISSUE NO. 01 ]</span>
            <span>DIGITAL MARKETING / SOCIAL MEDIA / CONTENT</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>PUNE, INDIA</span>
            <span>•</span>
            <span>PORTFOLIO EDITION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Magazine Cover Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#F5F2EA] text-[10px] sm:text-xs font-mono tracking-widest uppercase font-bold">
              <span>DIGITAL MARKETING / SOCIAL MEDIA / CONTENT</span>
            </div>

            {/* Main Cover Headline */}
            <div className="relative">
              {/* Vertical orientation text on desktop */}
              <div className="hidden xl:block absolute -left-12 top-0 bottom-0 text-[10px] font-mono tracking-[0.3em] uppercase text-[#111111]/40 [writing-mode:vertical-rl] rotate-180 select-none">
                PRATIK LAGAD — DIGITAL MARKETING & CONTENT
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] tracking-tight">
                Turning Ideas Into{' '}
                <span className="italic font-normal text-[#FF5A1F] block sm:inline">
                  Digital Experiences
                </span>{' '}
                That Connect.
              </h1>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#111111]/80 max-w-xl leading-relaxed font-sans border-l-2 border-[#FF5A1F] pl-4 sm:pl-5">
              Passionate about social media management, creative content, and analytics. Combining data-driven strategies with expressive design to build meaningful digital presence.
            </p>

            {/* Editorial CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#FF5A1F] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#111111] transition-all duration-300 min-h-[48px] shadow-sm"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border-2 border-[#111111] text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#111111] hover:text-[#F5F2EA] transition-all duration-300 min-h-[48px]"
              >
                <span>LET'S TALK</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#E8E2D5] text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#FF5A1F] hover:text-white transition-all duration-300 min-h-[48px]"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Hero Statistic: 65K+ Instagram Reach */}
            <div className="pt-6 border-t border-[#111111]/15">
              <div className="bg-[#FAF8F3] border-2 border-[#111111] p-5 sm:p-6 relative group shadow-[4px_4px_0px_0px_#111111]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-serif text-5xl sm:text-6xl font-extrabold text-[#FF5A1F] leading-none tracking-tight">
                      65K+
                    </div>
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] mt-2">
                      INSTAGRAM REACH
                    </div>
                    <div className="font-sans text-xs text-[#111111]/60 mt-0.5">
                      @pratik.ide • Previous Month
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-[#F5F2EA] text-xs font-mono uppercase font-bold tracking-wider hover:bg-[#FF5A1F] transition-colors self-start sm:self-auto"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#FF5A1F] group-hover:text-white" />
                    <span>VIEW INSTAGRAM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Graphic Box */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Accent Frame */}
              <div className="absolute -inset-3 bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 transform rotate-2 pointer-events-none" />

              {/* Editorial Graphic Box */}
              <div className="relative bg-[#FAF8F3] border-2 border-[#111111] p-4 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                
                {/* Top Badge bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#FF5A1F] text-white flex items-center justify-center font-mono font-bold text-xs">
                      PL
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">@pratik.ide</span>
                      <span className="block text-[10px] text-[#111111]/60 uppercase font-mono">CREATIVE & CONTENT</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#111111] text-[#FF5A1F] text-[10px] font-mono font-bold uppercase tracking-wider">
                    FEATURED
                  </span>
                </div>

                {/* Editorial Visual Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden border border-[#111111] mb-4 group">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                    alt="Editorial Social Media Campaign Visual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Layered Typography Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold">
                      CASE STUDY 01
                    </span>
                    <h3 className="font-serif text-2xl font-bold leading-tight mt-1">
                      Visual Identity & Content Creation
                    </h3>
                  </div>
                </div>

                {/* Editorial Bottom Snippet */}
                <div className="pt-2 text-left font-sans text-xs text-[#111111]/80 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#111111]">
                    <span className="font-bold uppercase">METRIC HIGHLIGHT</span>
                    <span className="text-[#FF5A1F] font-bold">65,000+ REACH</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-[#111111]/70">
                    Art-directed visual graphics and structured content calendars for digital audience growth.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
