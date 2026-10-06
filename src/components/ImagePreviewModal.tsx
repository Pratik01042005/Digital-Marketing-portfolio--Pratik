import React from 'react';
import { X, Tag } from 'lucide-react';
import type { CreativeItem } from '../data/portfolioData';

interface ImagePreviewModalProps {
  item: CreativeItem | null;
  onClose: () => void;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/15 p-6 text-left shadow-2xl space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
              {item.category}
            </span>
            {item.canvaTemplate && (
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">
                Canva Pro Template
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-slate-300 text-xs sm:text-sm">{item.description}</p>
        </div>

        {/* Image Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 max-h-[60vh] bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh]"
          />
        </div>

        {/* Tags */}
        <div className="pt-2 flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-slate-300 flex items-center gap-1">
                <Tag className="w-3 h-3 text-emerald-400" />
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-slate-400">Designed with Canva Pro</span>
        </div>

      </div>
    </div>
  );
};
