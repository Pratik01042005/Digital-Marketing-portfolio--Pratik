import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResumeModal?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative bg-[#F5F2EA] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Magazine Closing Headline */}
        <div className="border-b-2 border-[#111111] pb-10 mb-12 text-left">
          <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest block mb-2">
            [ GET IN TOUCH ]
          </span>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-extrabold text-[#111111] leading-[0.98] tracking-tight">
            LET'S MAKE <br />
            <span className="italic text-[#FF5A1F] font-normal">SOMETHING</span> <br />
            WORTH SEEING.
          </h2>
        </div>

        {/* Contact Info & CTAs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Personal info & description */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-3xl font-bold text-[#111111]">
              {PERSONAL_INFO.name}
            </h3>
            
            <p className="font-mono text-xs text-[#FF5A1F] font-bold uppercase tracking-wider">
              Digital Marketing | Analytics & Content Focused
            </p>

            <p className="font-sans text-base text-[#111111]/80 leading-relaxed font-light max-w-md">
              Have a digital marketing opportunity, brand campaign, or social media strategy role in mind? Reach out directly via email or call.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A1F] text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME →</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#111111] text-[#111111] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] hover:text-[#F5F2EA] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>CALL ME →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-6 bg-[#FAF8F3] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111] space-y-6">
            <span className="font-mono text-xs font-bold text-[#111111]/60 uppercase tracking-widest block border-b border-[#111111]/15 pb-3">
              DIRECT CHANNELS
            </span>

            <div className="space-y-4 font-mono text-xs text-[#111111]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#111111]/10 pb-3 gap-1">
                <span className="text-[#111111]/60">EMAIL</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-[#FF5A1F] hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#111111]/10 pb-3 gap-1">
                <span className="text-[#111111]/60">PHONE</span>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-[#111111] hover:text-[#FF5A1F]">
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#111111]/10 pb-3 gap-1">
                <span className="text-[#111111]/60">LOCATION</span>
                <span className="font-bold">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-1">
                <span className="text-[#111111]/60">INSTAGRAM</span>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FF5A1F] flex items-center gap-1 hover:underline"
                >
                  <span>@pratik.ide (65K+ Reach)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
