import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F5F2EA] py-12 border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-[#F5F2EA]/20">
          
          <div className="space-y-3">
            <h3 className="font-serif text-3xl font-extrabold tracking-tight">
              PRATIK LAGAD
            </h3>
            <p className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest space-x-2">
              <span>DIGITAL MARKETING</span>
              <span>•</span>
              <span>SOCIAL MEDIA</span>
              <span>•</span>
              <span>ANALYTICS</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase font-bold tracking-wider">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#FF5A1F] transition-colors"
            >
              EMAIL
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5A1F] transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5A1F] transition-colors"
            >
              LINKEDIN
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#F5F2EA]/60">
          <p>© 2026 Pratik Lagad</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 text-[#F5F2EA] hover:text-[#FF5A1F] transition-colors uppercase font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#FF5A1F]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
