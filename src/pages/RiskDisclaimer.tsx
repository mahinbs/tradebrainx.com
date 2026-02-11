import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import SeoHead from '../components/SeoHead';
import AiPredictionHeader from '../components/AiPredictionHeader';
import AiPredictionFooter from '../components/AiPredictionFooter';

const RiskDisclaimer = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-emerald-50/80 font-gsans selection:bg-red-500 selection:text-white">
            <SeoHead
                title="Risk Disclaimer | tradebrainx.com"
                description="Important risk disclosure for tradebrainx.com users. Trading involves substantial risk of loss."
                path="/risk-disclaimer"
                ogType="article"
            />

            <AiPredictionHeader />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-emerald-500/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-500/5 via-[#020617] to-[#020617]"></div>
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mb-8 transition-colors text-[10px] uppercase tracking-[0.3em] font-mono"
                    >
                        <FaArrowLeft /> Return Terminal
                    </Link>
                    <div className="flex items-start gap-8">
                        <div className="p-5 bg-red-500/10 rounded-2xl border border-red-500/10 shadow-2xl">
                            <FaExclamationTriangle className="text-4xl text-red-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 uppercase">Risk Protocol</h1>
                            <p className="text-red-500 font-mono tracking-widest uppercase text-xs">Critical Clearance - Read Carefully</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warning Banner */}
            <section className="bg-red-500/5 border-y border-red-500/10 backdrop-blur-md sticky top-[72px] z-30">
                <div className="container mx-auto px-4 py-4 text-center">
                    <p className="text-red-400 font-bold text-xs md:text-sm uppercase tracking-widest">
                        [ Systemic Warning ]: Trading financial markets involves a high degree of risk and may result in the loss of your entire capital.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-invert max-w-none">

                        {/* Section 1 */}
                        <div className="mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-red-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">1. General Trading Risk</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-6">
                                Trading currencies, stocks, options, cryptocurrencies, and other financial instruments ("Assets") carries a high level of risk and may not be suitable for all participants. High degrees of leverage can result in accelerated capital erosion.
                            </p>
                            <p className="text-emerald-50/70 font-light leading-relaxed italic">
                                Before deciding to trade any Asset, you must carefully evaluate your investment objectives, level of technical experience, and risk tolerance. The possibility exists that you could sustain a loss of all initial capital; therefore, you should not deploy capital that you cannot afford to lost in total.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-red-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">2. No Guarantees of Alpha</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-10">
                                There are no guarantees of profit nor of avoiding losses when trading. You have received no such guarantees from tradebrainx.com or any of its operational nodes.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-black/40 p-6 rounded-2xl border border-emerald-500/5 text-center transition-colors hover:border-red-500/20">
                                    <p className="text-red-500 font-mono font-black text-2xl mb-2">0%</p>
                                    <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-mono">Guaranteed Success</p>
                                </div>
                                <div className="bg-black/40 p-6 rounded-2xl border border-emerald-500/5 text-center transition-colors hover:border-red-500/20">
                                    <p className="text-amber-500 font-mono font-black text-2xl mb-2">HIGH</p>
                                    <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-mono">Market Volatility</p>
                                </div>
                                <div className="bg-black/40 p-6 rounded-2xl border border-emerald-500/5 text-center transition-colors hover:border-red-500/20">
                                    <p className="text-emerald-500 font-mono font-black text-2xl mb-2">100%</p>
                                    <p className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-mono">Your Responsibility</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}\r
                        <div className="mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-red-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">3. Technology & AI Constraints</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-8">
                                While TBX neural algorithms are sophisticated, they are based on historical datasets and probabilistic vectoring. They cannot anticipate:
                            </p>
                            <ul className="list-none space-y-4 mb-10">
                                <li className="flex items-center gap-4 text-emerald-50/70 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <span>Asymmetric geopolitical shifts (conflicts, policy reversals)</span>
                                </li>
                                <li className="flex items-center gap-4 text-emerald-50/40 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <span>Black swan liquidity collapses</span>
                                </li>
                                <li className="flex items-center gap-4 text-emerald-50/40 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <span>Exchange outages or systemic clearing failures</span>
                                </li>
                            </ul>
                            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <p className="text-red-400 font-light text-sm italic">
                                    Algorithmic failure, network latency, and software deviations can occur. TBX-Intelligence is not liable for technical anomalies resulting in capital loss.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-12 p-12 bg-linear-to-br from-red-500/5 to-black rounded-[2.5rem] border border-red-500/20 shadow-2xl">
                            <h2 className="text-2xl font-black text-red-500 mb-8 tracking-tight uppercase">4. Strategic Autonomy</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-10">
                                tradebrainx.com is a quantitative analysis tool, <span className="text-red-400 font-black uppercase underline decoration-red-500 underline-offset-8">not a financial advisor.</span> All trading decisions are made solely by you.
                            </p>
                            <div className="bg-red-500/10 p-10 rounded-2xl border border-red-500/20">
                                <p className="text-red-400 font-medium text-center uppercase tracking-widest text-xs leading-loose">
                                    "I acknowledge that I am solely responsible for my own execution, and I will not hold TradeBrainX or its operators liable for any capital depreciation incurred."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <AiPredictionFooter />
        </div>
    );
};

export default RiskDisclaimer;
