import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SEO Analytics',
    'Trend Analytics',
    'Digital Presence',
    'Digital Product'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (selectedCategory === 'SEO Analytics') return p.category.includes('SEO');
        if (selectedCategory === 'Trend Analytics') return p.category.includes('Trend');
        if (selectedCategory === 'Digital Presence') return p.category.includes('Web') || p.category.includes('Brand');
        if (selectedCategory === 'Digital Product') return p.category.includes('Product');
        return true;
      });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative bg-[#FAF8F3] border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/20 pb-6 mb-12 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-[#FF5A1F] uppercase tracking-widest">[ 05 ]</span>
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">SELECTED CASE STUDIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              PROJECTS & CASE STUDIES
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-[#F5F2EA]'
                    : 'bg-[#F5F2EA] text-[#111111] border border-[#111111]/20 hover:border-[#FF5A1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Case Study Cards Grid */}
        <div className="space-y-12 text-left">
          {filteredProjects.map((project, idx) => {
            const stepNum = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                className="bg-[#F5F2EA] border-2 border-[#111111] p-6 sm:p-8 relative group hover:border-[#FF5A1F] transition-all duration-300 shadow-[6px_6px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#FF5A1F]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Image Block */}
                  <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border-2 border-[#111111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#111111] text-[#F5F2EA] font-mono text-[10px] uppercase font-bold px-2 py-1">
                      {project.category}
                    </div>
                  </div>

                  {/* Right Column: Content Breakdown */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between border-b border-[#111111]/15 pb-3">
                      <span className="font-serif text-3xl font-extrabold text-[#FF5A1F]">
                        {stepNum}
                      </span>
                      <span className="font-mono text-xs text-[#111111]/70 uppercase font-bold">
                        {project.typeTag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] group-hover:text-[#FF5A1F] transition-colors leading-tight">
                      {project.title.toUpperCase()}
                    </h3>

                    <p className="font-sans text-sm text-[#111111]/80 leading-relaxed font-light">
                      {project.shortDescription}
                    </p>

                    {/* Tools list */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#FAF8F3] border border-[#111111] font-mono text-xs uppercase font-bold text-[#111111]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F2EA] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#FF5A1F] transition-colors"
                      >
                        <span>READ CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-transparent border border-[#111111] text-[#111111] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#111111] hover:text-white transition-colors"
                        >
                          <span>VISIT WEBSITE</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
