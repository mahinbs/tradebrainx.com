import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { Button } from '../../../components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
import ParticlesBackground from '../../../components/ui/ParticlesBackground';

interface HeroSectionProps {
  scrollToDemo: () => void;
  openEnquiry: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToDemo, openEnquiry }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#020617] z-0">
        {/* Base Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale-[0.5]"
          style={{ backgroundImage: 'url("/src/assets/premium_hero_bg.png")' }}
        ></div>

        {/* Dynamic Image Overlay - The one generated */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 animate-pulse-slow"
          style={{
            backgroundImage: 'url("/src/assets/premium_hero_bg.png")'
          }}
        ></div>

        {/* Premium Mesh Gradient */}
        <div className="absolute inset-0 opacity-40 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#065f46_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#064e3b_30%,transparent_70%)]"></div>
        </div>

        {/* Animated Static Grid */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98122_1px,transparent_1px),linear-gradient(to_bottom,#10b98122_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98111_1px,transparent_1px),linear-gradient(to_bottom,#10b98111_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        </div>

        {/* Moving Scan Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute h-[2px] w-full bg-linear-to-r from-transparent via-emerald-500/50 to-transparent animate-scan-vertical"></div>
          <div className="absolute h-full w-[2px] bg-linear-to-b from-transparent via-emerald-500/30 to-transparent animate-scan-horizontal"></div>
        </div>

        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] z-10"></div>

        {/* Glowing Orbs - Emerald and Gold */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px] animate-pulse-slow mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[160px] animate-pulse-slow mix-blend-screen pointer-events-none animation-delay-2000"></div>

        <ParticlesBackground count={40} className="opacity-30 z-20" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan-vertical {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 0.8; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes scan-horizontal {
          0% { left: -10%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { left: 110%; opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scan-vertical 8s linear infinite;
        }
        .animate-scan-horizontal {
          animation: scan-horizontal 12s linear infinite;
        }
      `}} />

      <div className="container mx-auto z-30 relative max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal delay={0.2}>
            <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase">Institutional Grade Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 text-white select-none whitespace-pre-line drop-shadow-2xl !leading-tight">
              QUANTUM <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-emerald-400 to-amber-200 animate-pulse">
                PRECISION
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-2xl text-emerald-50 max-w-4xl mx-auto mb-16 font-light leading-relaxed drop-shadow-md">
              Experience the next evolution of trade intelligence.
              We translate multi-dimensional market data into <span className="text-emerald-400 font-bold">high-probability</span> execution streams.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
              <Button
                onClick={scrollToDemo}
                className="group h-16 px-12 rounded-2xl bg-emerald-500 text-black hover:bg-emerald-400 font-black text-lg transition-all hover:scale-105 shadow-[0_0_60px_rgba(16,185,129,0.3)] flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                <span>View Demo</span>
                <FaArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button
                onClick={openEnquiry}
                variant="outline"
                className="h-16 px-12 rounded-2xl border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/20 text-white font-black text-lg backdrop-blur-3xl transition-all hover:border-emerald-500/60 flex items-center justify-center gap-4 group uppercase tracking-widest"
              >
                <span>Connect with Us</span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Floating Data Modules */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            {[
              { label: 'Latency', val: '0.4ms' },
              { label: 'Accuracy', val: '94.2%' },
              { label: 'Assets', val: '250+' },
              { label: 'Uptime', val: '99.9%' }
            ].map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
