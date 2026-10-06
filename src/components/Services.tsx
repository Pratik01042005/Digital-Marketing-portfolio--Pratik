import React from 'react';
import { 
  Share2, 
  Palette, 
  Sparkles, 
  Target, 
  Compass, 
  TrendingUp, 
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return <Share2 className="w-6 h-6 text-emerald-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Target': return <Target className="w-6 h-6 text-rose-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-teal-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-12 md:py-16 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Palette className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive social media marketing and creative design solutions tailored for modern digital brand presence.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative glass-card rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-600 group-hover:text-emerald-400/80 transition-colors font-mono">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Need a custom social media strategy or Canva design kit?</h4>
            <p className="text-xs text-slate-300">Let's discuss how we can elevate your brand's digital communication.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-dark-bg font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
