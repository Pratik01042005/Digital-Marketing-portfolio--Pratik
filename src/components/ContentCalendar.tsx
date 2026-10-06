import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { CALENDAR_DAYS } from '../data/portfolioData';
import type { CalendarDay } from '../data/portfolioData';

export const ContentCalendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = [
    'All',
    'Educational',
    'Engagement',
    'Promotional',
    'Brand Awareness',
    'Trending',
    'Behind The Scenes'
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Educational': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Engagement': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Promotional': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Brand Awareness': return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'Trending': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Behind The Scenes': return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      default: return 'bg-white/10 text-slate-300 border-white/10';
    }
  };

  const filteredDays = categoryFilter === 'All'
    ? CALENDAR_DAYS
    : CALENDAR_DAYS.filter(d => d.category === categoryFilter);

  return (
    <section id="calendar" className="py-10 sm:py-12 md:py-16 relative bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Content Strategy Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            30-Day Social Media <span className="gradient-text">Content Calendar</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interactive preview of a structured content schedule designed for consistent brand engagement.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-2 p-1.5 bg-[#0e1626] border border-white/10 rounded-full max-w-full">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  categoryFilter === cat
                    ? 'bg-amber-500 text-dark-bg font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Grid Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDays.map((dayItem) => (
            <div
              key={dayItem.day}
              onClick={() => setSelectedDay(dayItem)}
              className="group cursor-pointer glass-card rounded-2xl p-5 border border-white/10 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3 text-left">
                {/* Day Badge & Category Header */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono font-bold text-xs text-amber-400">
                    DAY {dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryColor(dayItem.category)}`}>
                    {dayItem.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {dayItem.title}
                </h3>

                {/* Hook preview */}
                <p className="text-xs text-slate-300 italic bg-white/[0.02] p-2.5 rounded-xl border border-white/5 line-clamp-2">
                  "{dayItem.hook}"
                </p>

                {/* Platform & Format pill */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">{dayItem.platform}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono">{dayItem.format}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Full Strategy</span>
                <ChevronRight className="w-4 h-4" />
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Day Detail */}
        {selectedDay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-white/15 p-6 text-left shadow-2xl space-y-5">
              <button
                onClick={() => setSelectedDay(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 font-mono font-bold text-xs">
                  DAY {selectedDay.day}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(selectedDay.category)}`}>
                  {selectedDay.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedDay.title}</h3>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider">Hook Line</span>
                <p className="text-sm text-white font-medium italic">"{selectedDay.hook}"</p>
              </div>

              <div className="space-y-2">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Caption Concept</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  {selectedDay.captionPreview}
                </p>
              </div>

              <div className="space-y-1">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Visual Concept</span>
                <p className="text-xs text-cyan-300 font-mono">{selectedDay.visualConcept}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedDay.hashtags.map((h, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-emerald-400">
                    {h}
                  </span>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
