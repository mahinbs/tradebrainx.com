import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { FaUserTie, FaChartBar, FaBitcoin, FaBuilding } from 'react-icons/fa';

const WhoThisIsForSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] border-y border-emerald-500/5">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-mono tracking-[0.3em] text-[10px] uppercase mb-4 block">Optimal Demographics</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Built For Serious Players</h2>
            <p className="text-emerald-50/60 text-sm font-light uppercase tracking-widest">Tailored experiences for every market participant</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaUserTie />,
              title: "Strategic Traders",
              desc: "Augment your vector analysis with micro-millisecond confirmation layers.",
              color: "text-emerald-400"
            },
            {
              icon: <FaChartBar />,
              title: "Volume Scalpers",
              desc: "Isolate institutional footprints and liquidity shifts with high-fidelity accuracy.",
              color: "text-amber-400"
            },
            {
              icon: <FaBitcoin />,
              title: "Asset Custodians",
              desc: "Optimize high-conviction accumulation zones during deep volatility cycles.",
              color: "text-emerald-400"
            },
            {
              icon: <FaBuilding />,
              title: "Capital Managers",
              desc: "Deploy consistency modules engineered to exceed strict allocation parameters.",
              color: "text-emerald-400"
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative group p-0.5 rounded-4xl bg-linear-to-b from-emerald-500/10 to-transparent hover:from-emerald-500/30 transition-all duration-500">
                <div className="relative bg-[#050b1a] rounded-4xl p-10 h-full overflow-hidden">
                  <div className={`mx-auto w-16 h-16 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-2xl mb-8 ${item.color} group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500 shadow-inner border border-emerald-500/10`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-emerald-50/60 text-[13px] leading-relaxed group-hover:text-emerald-50/80 transition-colors">{item.desc}</p>
                  <div className="absolute inset-0 bg-linear-to-b from-emerald-500/2 to-transparent group-hover:from-emerald-500/5 transition-all"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
