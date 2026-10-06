import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onNavigate?: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const skillBadges = [
    "Canva",
    "Social Media",
    "Content",
    "SEO Analytics",
    "Power BI",
    "Digital Strategy"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative bg-[#FAF8F3] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Label */}
        <div className="flex items-center justify-between border-b border-[#111111]/20 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 01 ]</span>
            <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">EDITORIAL INTRODUCTION</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/60 uppercase tracking-widest hidden sm:inline">
            PRATIK LAGAD / PUNE, INDIA
          </span>
        </div>

        {/* Large Editorial Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-6 text-left">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.08] tracking-tight">
              "Creative thinking, <br />
              <span className="italic font-normal text-[#FF5A1F]">backed by data.</span>"
            </h2>

            <p className="text-lg sm:text-xl text-[#111111]/80 max-w-2xl leading-relaxed font-sans font-light pt-2">
              I'm passionate about digital marketing, social media and content creation, combining creative thinking with analytical insights to build meaningful digital experiences.
            </p>

            {/* Editorial Chips */}
            <div className="pt-4 space-y-3">
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-[#111111]/60">
                CORE FOCUS AREAS
              </span>
              <div className="flex flex-wrap gap-2">
                {skillBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-[#F5F2EA] border border-[#111111] text-[#111111] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#FF5A1F] hover:text-white transition-colors cursor-default"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {onNavigate && (
              <div className="pt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('social-experience')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F2EA] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#FF5A1F] transition-colors"
                >
                  <span>INSTAGRAM CASE STUDY (@pratik.ide)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-transparent border border-[#111111] text-[#111111] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] hover:text-white transition-colors"
                >
                  <span>SELECTED PROJECTS</span>
                </button>
              </div>
            )}

          </div>

          {/* Right Editorial Info Card */}
          <div className="lg:col-span-4 bg-[#F5F2EA] border-2 border-[#111111] p-6 shadow-[4px_4px_0px_0px_#111111] text-left space-y-5">
            <div className="border-b border-[#111111]/15 pb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF5A1F] block">
                CREATIVE PROFILE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mt-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-mono text-xs text-[#111111]/70 uppercase tracking-wider mt-0.5">
                {PERSONAL_INFO.role}
              </p>
            </div>

            <p className="text-xs text-[#111111]/80 leading-relaxed font-sans italic border-l-2 border-[#FF5A1F] pl-3">
              "{PERSONAL_INFO.professionalPositioning}"
            </p>

            <div className="pt-2 border-t border-[#111111]/15 space-y-2 font-mono text-xs text-[#111111]">
              <div className="flex justify-between">
                <span className="text-[#111111]/60">LOCATION</span>
                <span className="font-bold">PUNE, INDIA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#111111]/60">PRIMARY METRIC</span>
                <span className="font-bold text-[#FF5A1F]">65K+ REACH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#111111]/60">STATUS</span>
                <span className="font-bold">AVAILABLE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
