import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#F5F2EA]/95 backdrop-blur-md border-b border-[#E2DDD0] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Editorial Brand Name */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-baseline gap-2 group text-left focus:outline-none min-h-[44px]"
          >
            <span className="text-lg sm:text-xl font-black tracking-wider text-[#111111] uppercase font-sans group-hover:text-[#FF5A1F] transition-colors">
              PRATIK LAGAD
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-[#FF5A1F] tracking-widest uppercase">
              / MARKETING & ANALYTICS
            </span>
          </button>

          {/* Desktop Navigation (Only 4 Items - Minimalist Editorial Style) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 text-xs font-bold tracking-[0.2em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#111111]'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-[#111111] bg-transparent border border-[#111111] hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:text-white transition-all duration-300 min-h-[40px]"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@pratik.ide</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-[#111111] text-[#111111] font-bold text-xs tracking-wider uppercase focus:outline-none min-h-[44px]"
          >
            <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#FF5A1F]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Overlay Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#F5F2EA] border-b border-[#E2DDD0] px-6 py-8 shadow-2xl transition-all animate-fadeIn z-50">
            <div className="flex flex-col space-y-4 max-w-sm mx-auto text-left">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
                NAVIGATION
              </span>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left py-2 text-2xl font-serif font-bold transition-all border-b border-[#E2DDD0] flex items-center justify-between ${
                      isActive
                        ? 'text-[#FF5A1F]'
                        : 'text-[#111111] hover:text-[#FF5A1F]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#666666]">{isActive ? '•' : '→'}</span>
                  </button>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E04810] shadow-md transition-all min-h-[44px]"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram (@pratik.ide)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-[#111111] bg-transparent border border-[#111111] min-h-[44px]"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Tap outside backdrop overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
        />
      )}
    </>
  );
};

