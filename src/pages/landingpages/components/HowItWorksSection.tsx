import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Cross-Asset Ingestion",
      desc: "TBX-Node aggregates synchronous price, volume, and depth data from 18 global liquidity providers in sub-millisecond cycles."
    },
    {
      num: "02",
      title: "Neural Structural Analysis",
      desc: "Our transformer models identify high-dimensional market structures and institutional accumulation zones invisible to retail indicators."
    },
    {
      num: "03",
      title: "Probabilistic Regime Match",
      desc: "Current volatility signatures are cross-referenced with synthetic backtest libraries spanning 250,000+ market scenarios."
    },
    {
      num: "04",
      title: "Alpha Generation",
      desc: "A pure-data directional forecast is output with strictly calculated Tier-1 confidence intervals and risk-optimized entry nodes."
    },
    {
      num: "05",
      title: "Algorithmic Refinement",
      desc: "Every signal outcome is vectorized back into the core logic, ensuring the intelligence remains adaptive to shifting market regimes."
    }
  ];

  return (
    <section className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-xl">
              <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">Deployment Protocol</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                The Intelligence <span className="text-emerald-500 underline underline-offset-8 decoration-emerald-500/20">Pipeline</span>
              </h2>
            </div>
            <div className="hidden md:block h-px w-64 bg-emerald-500/10 mb-5"></div>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,transparent,rgba(16,185,129,0.3)_10%,rgba(16,185,129,0.3)_90%,transparent)]"></div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Card */}
                  <div className="flex-1 md:text-right pl-14 md:pl-0">
                    <div className="group bg-[#050b1a] border border-emerald-500/5 p-8 rounded-4xl hover:border-emerald-500/20 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                      <p className="text-emerald-50/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Dynamic Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#020617] border border-emerald-500/20 z-10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500 animate-pulse-slow flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    </div>
                  </div>

                  {/* Step ID (Opposite side) */}
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="text-8xl font-black text-emerald-500/10 select-none">{step.num}</span>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
