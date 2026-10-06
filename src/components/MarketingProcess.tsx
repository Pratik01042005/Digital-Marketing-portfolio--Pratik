import React from 'react';

export const MarketingProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "RESEARCH",
      description: "Understand audience, trends and competitors."
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "Define content, campaigns and goals."
    },
    {
      number: "03",
      title: "CREATE",
      description: "Design content, visuals and campaigns."
    },
    {
      number: "04",
      title: "PUBLISH",
      description: "Deliver content across platforms."
    },
    {
      number: "05",
      title: "ANALYZE",
      description: "Measure performance and identify insights."
    },
    {
      number: "06",
      title: "OPTIMIZE",
      description: "Improve future content and strategy."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 relative bg-[#F5F2EA] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 02 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">WORKFLOW METHODOLOGY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              MY APPROACH
            </h2>
          </div>
          <p className="font-mono text-xs text-[#111111]/70 max-w-sm uppercase tracking-wider">
            Structured 6-step framework combining data-driven strategy with high-impact creative execution.
          </p>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F3] border-2 border-[#111111] p-6 sm:p-8 relative group hover:border-[#FF5A1F] transition-all duration-300 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#FF5A1F]"
            >
              {/* Giant Editorial Number */}
              <div className="font-serif text-5xl sm:text-6xl font-extrabold text-[#FF5A1F] group-hover:text-[#111111] transition-colors leading-none mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-mono text-base font-bold text-[#111111] uppercase tracking-widest mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-light">
                {step.description}
              </p>

              {/* Subtle Corner Line */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#111111]/20 group-hover:border-[#FF5A1F] transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
