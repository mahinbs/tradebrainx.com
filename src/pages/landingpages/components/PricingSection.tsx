import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { Button } from '../../../components/ui/button';
import { FaCheck } from 'react-icons/fa';

interface PricingSectionProps {
  openEnquiry: (plan: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ openEnquiry }) => {
  return (
    <section id="pricing" className="py-32 bg-[#020617] relative">
      {/* Decorative background blend */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">Capital Allocation</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Access the Terminal</h2>
            <p className="text-emerald-50/70 max-w-xl mx-auto">Select a subscription tier that aligns with your portfolio management objectives.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1: Professional */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#050b1a] border border-emerald-500/5 rounded-[32px] p-10 flex flex-col h-full hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="mb-10">
                <h3 className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4">Professional</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$49</span>
                  <span className="text-emerald-500/60 font-mono text-sm uppercase">/ Monthly</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 grow">
                {['Global Asset Indexing', 'Standard Probability Models', 'Signal Notification (Delayed)', 'Legacy Support Ticketing'].map((feature, i) => (
                  <li key={i} className="flex gap-4 text-sm text-emerald-50/80 group-hover:text-emerald-50/90 transition-colors">
                    <div className="w-5 h-5 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-emerald-500" size={8} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => openEnquiry("monthly")}
                variant="outline"
                className="w-full h-14 rounded-2xl border-emerald-500/20 bg-emerald-500/5 text-white hover:bg-emerald-500 transition-all duration-300"
              >
                Initialize Tier
              </Button>
            </div>
          </ScrollReveal>

          {/* Tier 2: Institutional (Recommended) */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[#060e24] border border-emerald-500/40 rounded-[32px] p-10 flex flex-col h-full relative shadow-[0_30px_60px_-15px_rgba(16,185,129,0.1)] transform md:-translate-y-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20">
                Institutional Preference
              </div>
              <div className="mb-10">
                <h3 className="text-amber-400 font-mono text-xs tracking-widest uppercase mb-4">Institutional</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white">$129</span>
                  <span className="text-emerald-500/60 font-mono text-sm uppercase">/ Quarterly</span>
                </div>
                <div className="inline-block px-2 py-0.5 bg-emerald-500/10 rounded text-[10px] text-emerald-400 font-bold mt-3">Priority Allocation (Save 15%)</div>
              </div>
              <ul className="space-y-5 mb-10 grow">
                {['Real-time execution signals', 'Priority cluster identification', 'Liquidity absorption heatmaps', 'Strategic Alpha workshops', '24/7 Dedicated terminal rep'].map((feature, i) => (
                  <li key={i} className="flex gap-4 text-sm text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-black" size={8} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => openEnquiry("quarterly")}
                className="w-full h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-base shadow-xl shadow-emerald-500/20 transition-all duration-300"
              >
                Access Terminal
              </Button>
            </div>
          </ScrollReveal>

          {/* Tier 3: Sovereign */}
          <ScrollReveal delay={0.3}>
            <div className="bg-[#050b1a] border border-emerald-500/5 rounded-[32px] p-10 flex flex-col h-full hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="mb-10">
                <h3 className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4">Sovereign</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$499</span>
                  <span className="text-emerald-500/60 font-mono text-sm uppercase">/ Once</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 grow">
                {['Perpetual access rights', 'Exclusive "Sovereign" network', 'All future alpha deployments', 'API beta-endpoint access', 'Direct developer consultation'].map((feature, i) => (
                  <li key={i} className="flex gap-4 text-sm text-emerald-50/80 group-hover:text-emerald-50/90 transition-colors">
                    <div className="w-5 h-5 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-emerald-500" size={8} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => openEnquiry("lifetime")}
                variant="outline"
                className="w-full h-14 rounded-2xl border-emerald-500/20 bg-emerald-500/5 text-white hover:bg-emerald-500 transition-all duration-300"
              >
                Authorize License
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
