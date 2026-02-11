import React from 'react';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../../../components/ui/carousel';
import { FaQuoteLeft } from 'react-icons/fa';
import AutoScroll from "embla-carousel-auto-scroll";

interface TestimonialsSectionProps {
  setApi?: (api: CarouselApi) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ setApi }) => {
  return (
    <section className="py-32 bg-[#020617] border-y border-emerald-500/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="">
        <ScrollReveal>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-emerald-500 font-mono tracking-[0.3em] text-[10px] uppercase mb-4 block">Feedback Verification</span>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter text-white">
                Intelligence <br />Communique
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[10px] text-emerald-500/60 uppercase tracking-[0.3em] font-mono mb-2">Network Strength</div>
              <p className="text-2xl font-black text-white tracking-tight">1,200+ NODES</p>
            </div>
          </div>
        </ScrollReveal>

        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            })
          ]}
        >
          <CarouselContent className="-ml-4">
            {[
              {
                name: "Ahmed R.",
                loc: "Dubai, UAE",
                text: "The probability score has completely changed how I manage risk. It's the filter I didn't know I needed.",
                role: "Forex Trader"
              },
              {
                name: "Sarah L.",
                loc: "London, UK",
                text: "Finally software that doesn't spam signals. It gives me context for my trades rather than blind instructions.",
                role: "Swing Trader"
              },
              {
                name: "Michael K.",
                loc: "Singapore",
                text: "I use it for crypto. The volatility alerts saved me from the last crash by giving me a 2-hour heads up.",
                role: "Crypto Investor"
              },
              {
                name: "David W.",
                loc: "New York, USA",
                text: "Institutional grade tools for a retail price. The backtesting data is invaluable for my confidence.",
                role: "Day Trader"
              },
              {
                name: "Elena M.",
                loc: "Berlin, Germany",
                text: "The AI's ability to spot trend reversals is uncanny. It's like having a professional analyst watching the charts 24/7.",
                role: "Scalper"
              },
              {
                name: "James T.",
                loc: "Sydney, Australia",
                text: "I was skeptical at first, but the win rate speaks for itself. The risk management features alone are worth the subscription.",
                role: "Swing Trader"
              }
            ].map((user, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#050b1a] border border-emerald-500/5 p-12 rounded-[2.5rem] text-center relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-b from-emerald-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <FaQuoteLeft className="text-emerald-500/10 text-4xl mb-8 group-hover:text-emerald-500/20 transition-colors" />
                    <p className="text-emerald-50/80 text-lg leading-relaxed mb-10 font-light italic">
                      "{user.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-5 relative z-10 pt-8 border-t border-emerald-500/5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black text-sm border border-emerald-500/10 shadow-inner">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-white text-sm tracking-tight">{user.name}</div>
                      <div className="text-[10px] text-emerald-500/60 uppercase tracking-[0.2em] font-mono">{user.loc}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
