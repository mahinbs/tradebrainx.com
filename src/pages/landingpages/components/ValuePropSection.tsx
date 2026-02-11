import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { FaBrain, FaShieldAlt, FaChartArea } from 'react-icons/fa';

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Decorative localized glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <ScrollReveal>
            <div className="max-w-xl">
              <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-6 block">Resource Sovereignty</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
                Software. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">Pure Intelligence.</span>
              </h2>
              <p className="text-lg text-emerald-50/70 font-light mb-12 leading-relaxed">
                TBX delivers raw computational vectoring across global liquidity hubs. We provide the probability zones and sentiment clusters—you maintain strategic execution authority.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FaBrain />,
                    title: "Neural footprint Tracking",
                    desc: "Identifies institutional positions across 50+ asset classes in sub-millisecond intervals.",
                  },
                  {
                    icon: <FaChartArea />,
                    title: "Probability Matrix",
                    desc: "Replaces standard bias with multi-variant confidence intervals for high-conviction entries.",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Strategic Custody",
                    desc: "Full autonomy over decision vectors. No blind following; only data-driven conviction.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group p-6 rounded-3xl hover:bg-emerald-500/3 transition-all duration-500 border border-transparent hover:border-emerald-500/10">
                    <div className="w-16 h-16 bg-[#050b1a] rounded-2xl flex items-center justify-center text-emerald-500 text-2xl shadow-inner border border-emerald-500/10 group-hover:bg-emerald-500/10 transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-emerald-50/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="relative bg-[#050b1a] border border-emerald-500/10 rounded-[3rem] p-10 overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]"></div>

                {/* Visual Representation of Analysis */}
                <div className="flex justify-between items-start mb-14">
                  <div>
                    <div className="text-[10px] text-emerald-500/60 uppercase tracking-[0.3em] font-mono mb-3">Asset Analysis</div>
                    <div className="text-4xl font-black text-white tracking-tighter">BTC // USD</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-emerald-500 font-mono font-black bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 inline-flex items-center gap-3 uppercase tracking-widest shadow-lg shadow-emerald-500/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      Validated Edge
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  {/* Metric 1 */}
                  <div className="bg-black/20 rounded-2xl p-6 border border-emerald-500/5">
                    <div className="flex justify-between text-xs font-mono mb-4 uppercase tracking-widest">
                      <span className="text-emerald-500/60">Vector Bias</span>
                      <span className="text-emerald-400 font-black">Institutional Long</span>
                    </div>
                    <div className="h-2 w-full bg-emerald-950/30 rounded-full overflow-hidden flex">
                      <div className="h-full bg-emerald-500 w-[78%] shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
                      <div className="h-full bg-transparent w-[22%]"></div>
                    </div>
                    <div className="mt-4 text-right text-[10px] text-emerald-500 font-mono uppercase tracking-[0.2em]">78.4% Confidence Level</div>
                  </div>

                  {/* Metric 2 */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-black/20 rounded-2xl p-8 border border-emerald-500/5 text-center group-hover:border-emerald-500/20 transition-colors">
                      <div className="text-3xl font-black text-white mb-2 tracking-tighter">HIGH</div>
                      <div className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-mono">Volatility Index</div>
                    </div>
                    <div className="bg-black/20 rounded-2xl p-8 border border-emerald-500/5 text-center group-hover:border-emerald-500/20 transition-colors">
                      <div className="text-3xl font-black text-amber-500 mb-2 tracking-tighter">0.92</div>
                      <div className="text-[10px] text-amber-500/60 uppercase tracking-widest font-mono">Efficiency Ratio</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
