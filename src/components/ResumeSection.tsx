import React from 'react';
import { Download, Eye } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
  onNavigateContact?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative bg-[#F5F2EA] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF8F3] border-2 border-[#111111] p-8 sm:p-12 relative shadow-[6px_6px_0px_0px_#111111] text-center space-y-6 max-w-4xl mx-auto">
          
          <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block">
            [ CURRICULUM VITAE ]
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
            "Want the full story?"
          </h2>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#FF5A1F] text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME →</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border-2 border-[#111111] text-[#111111] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] hover:text-[#F5F2EA] transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
