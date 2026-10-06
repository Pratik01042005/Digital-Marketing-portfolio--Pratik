import React from 'react';

export const MarketingAnalyticsDifferentiator: React.FC = () => {
  const creativeItems = ["Canva", "Content", "Social Media", "Branding"];
  const analyticsItems = ["SEO", "Power BI", "Trends", "Keywords", "Reporting"];

  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-[#F5F2EA] border-t-2 border-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#F5F2EA] font-mono text-xs uppercase font-bold tracking-widest">
            <span>[ SIGNATURE FORMULA ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
            CREATIVE × ANALYTICS
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed">
            Merging expressive visual storytelling with rigorous data analytics to drive measurable audience engagement.
          </p>
        </div>

        {/* Striking Formula Visual Section */}
        <div className="bg-[#FAF8F3] border-2 border-[#111111] p-6 sm:p-12 relative shadow-[8px_8px_0px_0px_#111111] text-center max-w-5xl mx-auto">
          
          {/* Main Visual Equation */}
          <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-10 pb-8 border-b-2 border-[#111111]">
            CREATIVE <span className="text-[#FF5A1F] font-sans font-bold">+</span> ANALYTICS <span className="text-[#FF5A1F] font-sans font-bold">=</span> <span className="italic text-[#FF5A1F] block sm:inline mt-2 sm:mt-0">SMARTER MARKETING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Creative Side */}
            <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
                <span className="font-serif text-xl font-bold text-[#111111]">CREATIVE SIDE</span>
                <span className="font-mono text-xs text-[#FF5A1F] font-bold">[ EXPRESSION ]</span>
              </div>
              <ul className="space-y-2.5">
                {creativeItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-mono text-xs font-bold text-[#111111]">
                    <span className="w-2 h-2 bg-[#FF5A1F]" />
                    <span className="uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics Side */}
            <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
                <span className="font-serif text-xl font-bold text-[#111111]">ANALYTICS SIDE</span>
                <span className="font-mono text-xs text-[#FF5A1F] font-bold">[ DATA ]</span>
              </div>
              <ul className="space-y-2.5">
                {analyticsItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-mono text-xs font-bold text-[#111111]">
                    <span className="w-2 h-2 bg-[#111111]" />
                    <span className="uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
