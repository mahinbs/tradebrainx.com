import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { FaChartLine, FaGlobe, FaBitcoin } from 'react-icons/fa';

const MarketsSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">Institutional Reach</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Global Coverage
              </h2>
              <p className="text-emerald-50/70 text-sm leading-relaxed">
                TBX-Intelligence vectors tick-level liquidity data across major global asset classes for total situational awareness.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-emerald-500 font-mono text-xs tracking-widest uppercase">/ ACCESS_AUTHORIZATION_GLOBAL</div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartLine />,
              name: "Equity Indices",
              sub: "S&P 500, NASDAQ, NIFTY 50",
              acc: "Institutional",
              color: "text-emerald-400",
              bg: "from-emerald-900/20",
              border: "group-hover:border-emerald-500/50"
            },
            {
              icon: <FaGlobe />,
              name: "FX Liquidity",
              sub: "EUR, USD, GBP, JPY Majors",
              acc: "Tier-1",
              color: "text-amber-400",
              bg: "from-amber-900/20",
              border: "group-hover:border-amber-500/50"
            },
            {
              icon: <FaBitcoin />,
              name: "Digital Assets",
              sub: "BTC, ETH, SOL Ecosystems",
              acc: "Quantum",
              color: "text-emerald-400",
              bg: "from-emerald-900/20",
              border: "group-hover:border-emerald-500/50"
            }
          ].map((market, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative h-full bg-[#050b1a] rounded-[2.5rem] p-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-emerald-500/5">
                <div className={`absolute inset-0 bg-linear-to-br ${market.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className={`relative h-full bg-[#050b1a] rounded-[2.4rem] p-10 transition-colors flex flex-col justify-between`}>

                  <div className="mb-10">
                    <div className={`w-14 h-14 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 flex items-center justify-center ${market.color} text-2xl mb-8 shadow-inner`}>
                      {market.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{market.name}</h3>
                    <p className="text-emerald-50/60 text-xs font-mono uppercase tracking-widest">{market.sub}</p>
                  </div>

                  <div className="pt-8 border-t border-emerald-500/10 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-mono mb-2">Grade</div>
                      <div className={`text-2xl font-black ${market.color} tracking-tighter uppercase`}>{market.acc}</div>
                    </div>
                    <div className="h-10 w-px bg-emerald-500/10 mx-6"></div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-mono mb-2">Resolutions</div>
                      <div className="text-white font-mono text-xs tabular-nums">5M • 15M • 1H</div>
                    </div>
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

export default MarketsSection;
