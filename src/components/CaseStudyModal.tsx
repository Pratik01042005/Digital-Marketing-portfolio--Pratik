import React from 'react';
import { X, CheckCircle2, Target, Users, Layers, Sparkles, ArrowRight, ExternalLink, Globe } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onNavigateContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-8 text-left shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
            {project.typeTag}
          </span>
        </div>

        {/* Title & Overview */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Main Banner Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-[#080c14]/80 text-xs text-emerald-300 font-mono border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500 text-dark-bg font-bold text-xs shadow-md"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Objective & Target Audience */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Target className="w-4 h-4" />
              <span>Project Objective</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudy.objective}</p>

            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm pt-2">
              <Users className="w-4 h-4" />
              <span>Target Audience</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudy.targetAudience}</p>
          </div>

          {/* Content Pillars */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Layers className="w-4 h-4" />
              <span>Content Pillars</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.caseStudy.contentPillars.map((pillar, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Strategy Execution Steps */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Strategic Execution Plan</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {project.caseStudy.strategy.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono font-bold text-emerald-400 shrink-0">0{idx + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Sample Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.deliverables.map((del, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/20">
                  {del}
                </span>
              ))}
            </div>
          </div>

          {project.caseStudy.samplePostCaption && (
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Caption & Hashtags</h4>
              <p className="text-xs text-slate-300 italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                "{project.caseStudy.samplePostCaption}"
              </p>
              {project.caseStudy.hashtags && (
                <div className="flex flex-wrap gap-1 text-[11px] text-cyan-400 font-mono">
                  {project.caseStudy.hashtags.map((h, i) => <span key={i}>{h}</span>)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Modal Action */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Note: This is a <span className="text-white font-medium">{project.typeTag}</span> designed for practical portfolio application.
          </span>
          
          <div className="flex items-center gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold hover:bg-cyan-500/30 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Live Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-cyan-400 transition-colors"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
