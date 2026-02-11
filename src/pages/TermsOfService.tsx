import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import SeoHead from '../components/SeoHead';
import AiPredictionHeader from '../components/AiPredictionHeader';
import AiPredictionFooter from '../components/AiPredictionFooter';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-emerald-50/80 font-gsans selection:bg-emerald-500 selection:text-black">
            <SeoHead
                title="Terms of Service | tradebrainx.com"
                description="Terms of Service for tradebrainx.com. Read our legal terms, user responsibilities, and software usage agreements."
                path="/terms-of-service"
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
                        <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/10 shadow-2xl">
                            <FaShieldAlt className="text-4xl text-emerald-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                                Terms of Service
                            </h1>
                            <p className="text-emerald-50/60 text-sm font-light uppercase tracking-widest">Governing the bounds of institutional engagement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 relative">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="prose prose-invert max-w-none">

                        <div className="mb-16">
                            <p className="text-xl text-emerald-50/80 leading-relaxed font-light">
                                Welcome to <span className="text-emerald-500 font-black">tradebrainx.com</span>. By accessing our platform, utilizing our neural algorithms, or subscribing to our computational streams, you agree to be bound by these protocols. If you do not agree, please terminate interaction immediately.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">01</span>
                                Acceptance of Protocol
                            </h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-6">
                                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and tradebrainx.com ("TBX", "Company"). By using our terminal, API, or intelligence modules, you accept these Terms in full.
                            </p>
                            <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                                <p className="text-emerald-400 text-xs uppercase tracking-widest font-mono font-black">
                                    [ System Confirmation ]: Implicit acceptance detected upon gateway entry.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">02</span>
                                Service Definition (Software Protocol)
                            </h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-10">
                                tradebrainx.com provides <strong>computational data analysis software</strong>. We are an engineering provider, not a financial institution.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-black/40 p-8 rounded-2xl border border-red-500/10 transition-colors hover:border-red-500/30">
                                    <h3 className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Negative Constraints</h3>
                                    <ul className="space-y-4 text-emerald-50/60 text-xs font-light">
                                        <li>• Zero Personal Investment Advisory</li>
                                        <li>• Zero Fiduciary Capital Management</li>
                                        <li>• Zero Autonomous Trade Execution</li>
                                        <li>• Zero Guaranteed Alpha Returns</li>
                                    </ul>
                                </div>
                                <div className="bg-black/40 p-8 rounded-2xl border border-emerald-500/10 transition-colors hover:border-emerald-500/30">
                                    <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Positive Assets</h3>
                                    <ul className="space-y-4 text-emerald-50/60 text-xs font-light">
                                        <li>• Historical Liquidity Vectoring</li>
                                        <li>• Probability Sentiment Clustering</li>
                                        <li>• Advanced Technical Neural Mapping</li>
                                        <li>• Institutional Educational briefed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">03</span>
                                User Clearance
                            </h2>
                            <ul className="space-y-6 text-emerald-50/70 font-light leading-relaxed">
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 font-mono">[✓]</span>
                                    <span>Age of Majority: Deployment requires verification of legal age (18+) or jurisdictional equivalent.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 font-mono">[✓]</span>
                                    <span>Legal Capacity: Full authorization to enter into binding digital engagement.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 font-mono">[✓]</span>
                                    <span>Regulatory Integrity: Not restricted by global financial compliance or local laws.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">04</span>
                                Systemic Assets
                            </h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-6">
                                All intelligence, algorithms, visual code, and processed datasets are the exclusive property of TBX-Intelligence.
                            </p>
                            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <p className="text-red-400 text-xs uppercase tracking-widest font-mono leading-relaxed">
                                    [ Prohibition ]: Reverse engineering, decompilation, or unauthorized signal arbitrage is strictly restricted under Tier-1 IP protection.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">05</span>
                                Depletion of Liability
                            </h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-8">
                                To the maximum systemic extent, tradebrainx.com declines liability for damages resulting from:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 text-[10px] text-emerald-500/60 uppercase tracking-widest font-mono mb-8">
                                <li className="bg-black/30 p-4 rounded-xl border border-emerald-500/10">Capital Depreciation via Markets</li>
                                <li className="bg-black/30 p-4 rounded-xl border border-emerald-500/10">Computational Disruption / Latency</li>
                                <li className="bg-black/30 p-4 rounded-xl border border-emerald-500/10">Neural Deviation in Metrics</li>
                                <li className="bg-black/30 p-4 rounded-xl border border-emerald-500/10">Unauthorized Clearance Breaches</li>
                            </ul>
                            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                                <p className="text-white font-black uppercase tracking-tighter text-sm">
                                    Use of this terminal constitutes assumption of all operational risk.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">06</span>
                                Subscriptions & Logistics
                            </h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed">
                                Subscription tokens for terminal access are non-refundable. Pricing remains subject to algorithmic adjustment with notice. Violation of interaction protocols results in immediate clearance revocation without compensation.
                            </p>
                        </div>

                        {/* Footer Note */}
                        <div className="mt-20 pt-10 border-t border-emerald-500/5 text-center">
                            <p className="text-emerald-50/60 text-xs font-light">
                                Systemic Inquiries? Direct briefing at <span className="text-emerald-500 font-bold">legal@tradebrainx.com</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <AiPredictionFooter />
        </div>
    );
};

export default TermsOfService;
