import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { FaTimes } from 'react-icons/fa';

const WhatThisIsNotSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] relative border-y border-emerald-500/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="bg-[#050b1a] rounded-[2.5rem] p-10 md:p-16 border border-emerald-500/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>

            <div className="text-center mb-14 relative z-10">
              <span className="text-red-500 font-mono tracking-[0.3em] text-[10px] uppercase mb-4 block">Transparency Protocol</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                What This Is <span className="text-red-500 italic">NOT</span>
              </h2>
              <p className="text-emerald-50/60 text-xs font-mono uppercase tracking-widest leading-relaxed">Mandatory disclosure for all authorized participants.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 relative z-10">
              {[
                "Not a signal group or private channel",
                "Not financial advice or investment tips",
                "Not a 'get rich fast' mechanism",
                "Not a guarantee of fixed profitability",
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-5 bg-black/40 p-5 rounded-2xl border border-emerald-500/5 hover:border-red-500/30 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/10">
                      <FaTimes className="text-red-500 text-xs" />
                    </div>
                    <span className="text-emerald-50/70 font-medium text-sm group-hover:text-emerald-50/90 transition-colors">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatThisIsNotSection;
