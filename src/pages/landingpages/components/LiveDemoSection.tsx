import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { Button } from '../../../components/ui/button';
interface LiveDemoSectionProps {
  openEnquiry: () => void;
}

const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({ openEnquiry }) => {
  return (
    <section id="demo" className="py-32 relative bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 px-4">
            <span className="text-emerald-500 font-mono tracking-[0.3em] text-xs uppercase mb-6 block">Demo Video</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">See it in action</h2>
            <p className="text-emerald-50/40 max-w-xl mx-auto leading-relaxed">
              Watch how TBX-Intelligence processes market data and generates institutional-grade trading signals in real-time.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-5xl mx-auto group">
            {/* Emerald Window Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-600 to-emerald-400 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>

            {/* Main Window Frame */}
            <div className="relative bg-[#050b1a] rounded-2xl border border-emerald-500/10 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="bg-[#0a1229] px-6 py-4 border-b border-emerald-500/10 flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/30"></div>
                </div>
                <div className="bg-black/40 px-4 py-1.5 rounded-lg text-[10px] text-emerald-500/40 font-mono flex-1 text-center tracking-widest uppercase">
                  TBX-INTELLIGENCE // LIVE_STREAM_FEED // BTC_USD_CORE
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Live</span>
                </div>
              </div>

              <div className="aspect-video bg-black relative">
                <iframe
                  src="https://drive.google.com/file/d/1fM2jZ-PkUMO5f0dfp6DVPOzF0u8JxJ76/preview"
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              onClick={openEnquiry}
              className="bg-emerald-500 text-black hover:bg-emerald-400 font-black px-12 py-7 rounded-full shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-4 mx-auto uppercase tracking-widest"
            >
              Connect with us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LiveDemoSection;
