import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { MdAutoGraph, MdOutlinePriceChange } from 'react-icons/md';
import { BiStats } from 'react-icons/bi';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaLayerGroup, FaShieldAlt } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#020617] relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="container mx-auto px-4">

        <ScrollReveal>
          <div className="mb-24 text-center">
            <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">The Quantitative Edge</span>
            <h2 className="text-4xl md:text-6xl font-black text-white max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Engineered for <span className="text-emerald-500">Alpha</span>. <br /> Built for Execution.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <MdAutoGraph />,
              title: "Proprietary Signal Logic",
              desc: "Deploy neural networks that identify high-probability reversal clusters across multiple asset classes.",
              accent: "emerald"
            },
            {
              icon: <BiStats />,
              title: "Institutional Flow Mapping",
              desc: "Track large-scale order flow and liquidity absorption to understand where the 'smart money' is positioning.",
              accent: "emerald"
            },
            {
              icon: <BsLightningChargeFill />,
              title: "Ultra-Low Latency Feed",
              desc: "Get sub-second notifications on volatility breakouts before they reflect on traditional retail dashboards.",
              accent: "gold"
            },
            {
              icon: <FaLayerGroup />,
              title: "Dynamic Market Structure",
              desc: "Automated identification of premium vs discount zones and complex internal structure shifts.",
              accent: "emerald"
            },
            {
              icon: <FaShieldAlt />,
              title: "Risk Calibration Engine",
              desc: "Adaptive position sizing and invalidation logic that evolves with real-time market regime changes.",
              accent: "emerald"
            },
            {
              icon: <MdOutlinePriceChange />,
              title: "Sentiment Equilibrium",
              desc: "Analyze cross-platform retail sentiment to identify potential contrarian liquidity traps.",
              accent: "gold"
            },
          ].map((feat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative h-full">
                {/* Gold/Emerald Border Glow Effect */}
                <div className={`absolute -inset-px bg-linear-to-br ${feat.accent === 'gold' ? 'from-amber-500/0 via-amber-500/0 to-amber-500/0' : 'from-emerald-500/0 via-emerald-500/0 to-emerald-500/0'} rounded-[24px] group-hover:from-emerald-500/20 group-hover:to-amber-500/10 transition-all duration-700`}></div>

                <div className="relative h-full bg-[#050b1a] border border-emerald-500/5 rounded-[23px] p-10 hover:bg-[#060d1f] transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.05),transparent)] pointer-events-none"></div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 border ${feat.accent === 'gold' ? 'text-amber-400 border-amber-500/10 bg-amber-500/5' : 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5'}`}>
                    {feat.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{feat.title}</h3>
                  <p className="text-emerald-50/80 text-sm leading-relaxed mb-6 grow">
                    {feat.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-500/60 tracking-wider">
                    <span>ST-MODULE</span>
                    <div className="h-px w-8 bg-emerald-500/10"></div>
                    <span>{feat.accent === 'gold' ? 'LV-2' : 'LV-1'}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
