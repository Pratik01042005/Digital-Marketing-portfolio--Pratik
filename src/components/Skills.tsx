import React from 'react';

export const Skills: React.FC = () => {
  const digitalMarketingSkills = [
    "Social Media Marketing",
    "Content Marketing",
    "Brand Promotion",
    "Digital Strategy"
  ];

  const analyticsSkills = [
    "SEO Analytics",
    "Power BI",
    "Data Analysis",
    "Trend Analysis",
    "Keyword & Ranking Analysis"
  ];

  const creativeSkills = [
    "Canva",
    "Content Creation",
    "Creative Thinking"
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative bg-[#FAF8F3] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 07 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">SKILLS & COMPETENCIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              EXPERT TOOLKIT
            </h2>
          </div>
          <p className="font-mono text-xs text-[#111111]/70 max-w-sm uppercase tracking-wider">
            Large typographic layout showcasing core capabilities across marketing, analytics, and visual design.
          </p>
        </div>

        {/* Editorial Typographic Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          
          {/* DIGITAL MARKETING COLUMN */}
          <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_0px_#111111]">
            <div className="border-b-2 border-[#111111] pb-4">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block">
                CATEGORY 01
              </span>
              <h3 className="font-serif text-2xl font-extrabold text-[#111111] mt-1">
                DIGITAL MARKETING
              </h3>
            </div>

            <div className="space-y-4">
              {digitalMarketingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#111111] hover:text-[#FF5A1F] transition-colors border-b border-[#111111]/10 pb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* ANALYTICS COLUMN */}
          <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_0px_#111111]">
            <div className="border-b-2 border-[#111111] pb-4">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block">
                CATEGORY 02
              </span>
              <h3 className="font-serif text-2xl font-extrabold text-[#111111] mt-1">
                ANALYTICS
              </h3>
            </div>

            <div className="space-y-4">
              {analyticsSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#111111] hover:text-[#FF5A1F] transition-colors border-b border-[#111111]/10 pb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* CREATIVE COLUMN */}
          <div className="bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_0px_#111111]">
            <div className="border-b-2 border-[#111111] pb-4">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block">
                CATEGORY 03
              </span>
              <h3 className="font-serif text-2xl font-extrabold text-[#111111] mt-1">
                CREATIVE
              </h3>
            </div>

            <div className="space-y-4">
              {creativeSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#111111] hover:text-[#FF5A1F] transition-colors border-b border-[#111111]/10 pb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
