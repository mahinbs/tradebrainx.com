import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { FaTimes, FaCheck } from 'react-icons/fa';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] border-y border-emerald-500/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.02),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">Systemic Contrast</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              The Legacy <span className="text-red-500/50 italic">Friction</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">

          {/* Problem Side */}
          <ScrollReveal delay={0.1}>
            <div className="relative bg-[#050b1a] border border-red-500/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FaTimes className="text-9xl text-red-500 rotate-12" />
              </div>
              <h3 className="text-emerald-500/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">Legacy Infrastructure</h3>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center mt-1 shrink-0 text-red-500/40 text-[8px]">✕</div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-tight">Emotional Variance</h4>
                    <p className="text-emerald-50/60 text-sm mt-2 leading-relaxed italic">Biased decision making leads to inconsistent capital preservation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center mt-1 shrink-0 text-red-500/40 text-[8px]">✕</div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-tight">Indicator Latency</h4>
                    <p className="text-emerald-50/60 text-sm mt-2 leading-relaxed italic">Retail tools reflect historical data, missing instantaneous liquidity shifts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Solution Side */}
          <ScrollReveal delay={0.3}>
            <div className="relative bg-[#050b1a] border border-emerald-500/20 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.05)] ring-1 ring-emerald-500/10">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FaCheck className="text-9xl text-emerald-500 -rotate-12" />
              </div>
              <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">TBX Intelligence</h3>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/40 flex items-center justify-center mt-1 shrink-0 text-emerald-500 text-[8px]">✓</div>
                  <div>
                    <h4 className="font-black text-white text-lg tracking-tight">Quantum Precision</h4>
                    <p className="text-emerald-50/70 text-sm mt-2 leading-relaxed">Neural analysis identifies reversal clusters with institutional-grade accuracy.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/40 flex items-center justify-center mt-1 shrink-0 text-emerald-500 text-[8px]">✓</div>
                  <div>
                    <h4 className="font-black text-white text-lg tracking-tight">Predictive Synthesis</h4>
                    <p className="text-emerald-50/70 text-sm mt-2 leading-relaxed">Algorithms forecast future equilibrium zones based on real-time volume flow.</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
