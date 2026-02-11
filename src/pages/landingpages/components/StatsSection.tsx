import React from 'react';

interface StatsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stats: Record<string, { acc: string; trades: string; win: string }>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ activeTab, setActiveTab, stats }) => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle glow behind metrics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-4 block">Verified Performance</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight leading-none">Intelligence Metrics</h2>

          <div className="inline-flex bg-[#050b1a] p-1.5 rounded-2xl border border-emerald-500/10 shadow-xl">
            {Object.keys(stats).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === tab ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20" : "text-emerald-500/60 hover:text-emerald-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Accuracy card */}
            <div className="bg-[#050b1a] border border-emerald-500/5 p-12 rounded-[2.5rem] text-center relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-b from-emerald-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 mb-4 tracking-tighter">
                  {stats[activeTab as keyof typeof stats]?.acc}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-px w-8 bg-emerald-500/50"></div>
                  <p className="text-emerald-500 font-mono tracking-[0.2em] text-[10px] uppercase">Accuracy Rate</p>
                </div>
              </div>
            </div>

            {/* Signals card */}
            <div className="bg-[#050b1a] border border-emerald-500/5 p-12 rounded-[2.5rem] text-center relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-b from-amber-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 mb-4 tracking-tighter">
                  {stats[activeTab as keyof typeof stats]?.trades}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-px w-8 bg-amber-500/50"></div>
                  <p className="text-amber-500 font-mono tracking-[0.2em] text-[10px] uppercase">Signals Processed</p>
                </div>
              </div>
            </div>

            {/* Win rate card */}
            <div className="bg-[#050b1a] border border-emerald-500/5 p-12 rounded-[2.5rem] text-center relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-b from-emerald-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 mb-4 tracking-tighter">
                  {stats[activeTab as keyof typeof stats]?.win}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-px w-8 bg-emerald-500/50"></div>
                  <p className="text-emerald-500 font-mono tracking-[0.2em] text-[10px] uppercase">Profit Factor</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[10px] text-emerald-50/40 font-mono uppercase tracking-widest mt-12 max-w-2xl mx-auto leading-relaxed">
            *Verification conducted via TBX-Compute Engine. Backtested results are theoretical and maintain intrinsic execution risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
