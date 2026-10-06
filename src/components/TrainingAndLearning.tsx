import React from 'react';

export const TrainingAndLearning: React.FC = () => {
  return (
    <section id="training" className="py-16 sm:py-20 md:py-24 relative bg-[#FAF8F3] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 06 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">COURSEWORK & CERTIFICATIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              TRAINING / LEARNING
            </h2>
          </div>
          <p className="font-mono text-xs text-[#111111]/70 max-w-sm uppercase tracking-wider">
            Practical digital marketing course training and structured learning modules.
          </p>
        </div>

        {/* Magazine Style Training Card */}
        <div className="max-w-4xl mx-auto bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-10 relative shadow-[8px_8px_0px_0px_#111111] text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#111111] pb-6 mb-6 gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block mb-1">
                ORGANIZATION
              </span>
              <h3 className="font-serif text-3xl font-extrabold text-[#111111]">
                HORYZEN TECHNOLOGIES
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#111111] text-[#F5F2EA] font-mono text-xs uppercase font-bold">
                2 MONTHS
              </span>
              <span className="px-3 py-1 bg-[#FF5A1F] text-white font-mono text-xs uppercase font-bold">
                COMPLETED
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-[#111111]">
              DIGITAL MARKETING COURSE
            </h4>
            
            <p className="font-sans text-sm text-[#111111]/80 leading-relaxed font-light border-l-2 border-[#FF5A1F] pl-4">
              Completed a 2-month practical digital marketing training course covering search engine optimization, content strategy, social media campaigns, and performance marketing fundamentals.
            </p>

            <div className="pt-4 border-t border-[#111111]/15 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-[#111111]">
              <div className="bg-[#FAF8F3] border border-[#111111] p-3">
                <span className="block text-[10px] text-[#111111]/60 uppercase">FOCUS</span>
                <span className="font-bold">DIGITAL STRATEGY</span>
              </div>
              <div className="bg-[#FAF8F3] border border-[#111111] p-3">
                <span className="block text-[10px] text-[#111111]/60 uppercase">SEO & ANALYTICS</span>
                <span className="font-bold">KEYWORD RESEARCH</span>
              </div>
              <div className="bg-[#FAF8F3] border border-[#111111] p-3 col-span-2 sm:col-span-1">
                <span className="block text-[10px] text-[#111111]/60 uppercase">CAMPAIGNS</span>
                <span className="font-bold">SOCIAL CONTENT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
