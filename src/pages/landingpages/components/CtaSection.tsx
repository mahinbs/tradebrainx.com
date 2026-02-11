import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { Button } from '../../../components/ui/button';
import { FaArrowRight } from 'react-icons/fa';

interface CtaSectionProps {
  openEnquiry: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ openEnquiry }) => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-full left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <span className="text-emerald-500 font-mono tracking-[0.4em] text-xs uppercase mb-6 block">Final Authorization</span>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
            CLAIM YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-200">SUPERIORITY.</span>
          </h2>
          <p className="text-xl text-emerald-50/70 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            Deployment for the Q1 Institutional Cohort is now active. <br />
            Secure your terminal access before allocation window closes.
          </p>
          <Button
            onClick={openEnquiry}
            className="group bg-emerald-500 text-black hover:bg-emerald-400 text-xl px-16 py-8 rounded-full font-black shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            <span>Request Activation</span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

          <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-xs font-mono tracking-widest text-emerald-500 uppercase">Secured by TBX-Cipher</div>
            <div className="text-xs font-mono tracking-widest text-emerald-500 uppercase">99.9% uptime guaranteed</div>
            <div className="text-xs font-mono tracking-widest text-emerald-500 uppercase">GDPR-Q COMPLIANT</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
