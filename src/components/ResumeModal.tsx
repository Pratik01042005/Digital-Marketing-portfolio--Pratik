import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Briefcase, Sparkles, GraduationCap, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-10 text-left shadow-2xl space-y-6 print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black">
        
        {/* Action Header bar (Hidden in print) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-6 print:space-y-4 font-sans">
          
          {/* Header */}
          <div className="border-b border-white/10 print:border-black/20 pb-6 print:pb-4 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              {RESUME_DATA.name}
            </h1>
            <p className="text-emerald-400 print:text-emerald-700 font-bold text-sm sm:text-base">
              {RESUME_DATA.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 print:text-gray-700 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                {RESUME_DATA.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-400 print:text-black" />
                {RESUME_DATA.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                {RESUME_DATA.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-purple-400 print:text-black" />
                Open for Digital Marketing Roles
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-emerald-800">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Categorized Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-emerald-800">
              Skills & Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.skillGroups.map((group, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] print:bg-gray-50 border border-white/10 print:border-gray-200 space-y-2">
                  <h3 className="text-xs font-bold text-white print:text-black">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-2 py-0.5 rounded bg-white/5 print:bg-gray-200 border border-white/5 text-[11px] font-medium text-slate-300 print:text-gray-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Social Media Account & Analytics Work */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-emerald-800">
              Practical Social Media & Analytics Work
            </h2>
            
            {RESUME_DATA.realWorldExperience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] print:bg-gray-50 border border-white/10 print:border-gray-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">{exp.role}</h3>
                    <p className="text-xs font-semibold text-emerald-400 print:text-emerald-700">{exp.entity}</p>
                  </div>
                  <span className="text-xs text-slate-400 print:text-gray-600 font-mono">{exp.period}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 print:text-black">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Training & Learning (Horyzen Technologies) */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 print:text-cyan-800">
              Training & Coursework
            </h2>

            {RESUME_DATA.trainingData.map((train, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] print:bg-gray-50 border border-white/10 print:border-gray-200 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400 print:text-black" />
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">{train.course}</h3>
                      <p className="text-xs font-semibold text-cyan-400 print:text-cyan-700">{train.institution}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 print:text-gray-600 font-mono">Duration: {train.duration} ({train.status})</span>
                </div>

                <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800 pt-1">
                  {train.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 print:text-black">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-emerald-800">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] print:bg-gray-50 border border-white/10 print:border-gray-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white print:text-black">
                    <GraduationCap className="w-4 h-4 text-emerald-400 print:text-black" />
                    <span>{edu.degree}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 print:text-gray-600">{edu.institution}</p>
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 print:text-emerald-800 text-[10px] font-mono">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
