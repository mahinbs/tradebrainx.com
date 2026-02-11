import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUserShield } from 'react-icons/fa';
import SeoHead from '../components/SeoHead';
import AiPredictionHeader from '../components/AiPredictionHeader';
import AiPredictionFooter from '../components/AiPredictionFooter';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-emerald-50/80 font-gsans selection:bg-emerald-500 selection:text-black">
            <SeoHead
                title="Privacy Policy | tradebrainx.com"
                description="Privacy Policy for tradebrainx.com. How we handle your data, cookies, and personal information."
                path="/privacy-policy"
                ogType="article"
            />

            <AiPredictionHeader />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-emerald-500/5">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-transparent opacity-30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-500/5 via-[#020617] to-[#020617]"></div>
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mb-8 transition-colors text-[10px] uppercase tracking-[0.3em] font-mono"
                    >
                        <FaArrowLeft /> Return Terminal
                    </Link>
                    <div className="flex items-start gap-8">
                        <div className="p-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/10 shadow-2xl">
                            <FaUserShield className="text-4xl text-emerald-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                                Privacy Policy
                            </h1>    <p className="text-emerald-50/60 text-sm font-light uppercase tracking-widest">Your information security is our primary protocol.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-invert max-w-none">

                        {/* Section 1 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">1. Information Acquisition</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-10">
                                We collect data necessary to maintain computational integrity and optimize individual terminal parameters.
                            </p>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Core Telemetry</h3>
                                    <ul className="space-y-3 text-emerald-50/60 text-sm font-light">
                                        <li>• Authorized Email Access Identification</li>
                                        <li>• Strategic User Identification</li>
                                        <li>• Financial Transaction Metadata (via Secure Gateways)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Network Logistics</h3>
                                    <ul className="space-y-3 text-emerald-50/60 text-sm font-light">
                                        <li>• Logic Origin (IP) & Hardware Vectoring</li>
                                        <li>• Internal Protocol Interaction Logs</li>
                                        <li>• Sub-millisecond latent tracking for performance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">2. Algorithmic Utilization</h2>
                            <ul className="space-y-6 text-emerald-50/70 font-light leading-relaxed">
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 mt-1 font-mono">[01]</span>
                                    <span>Provision of prioritized computational intelligence and market vectoring.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 mt-1 font-mono">[02]</span>
                                    <span>Validation of strategic authorization and terminal security status.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 mt-1 font-mono">[03]</span>
                                    <span>Refinement of neural footprint analysis for global network optimization.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-emerald-500 mt-1 font-mono">[04]</span>
                                    <span>Detection and mitigation of unauthorized systemic arbitrage or abuse.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">3. Data Distribution Ethics</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed mb-10">
                                TradeBrainX does not commercialize user data to third-party advertising modules.
                            </p>
                            <div className="p-8 bg-black/40 rounded-2xl border border-emerald-500/5">
                                <p className="text-emerald-50/60 mb-6 font-bold tracking-tight">Access restricted to authorized operational partners:</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-emerald-500/5 rounded-xl text-[10px] text-emerald-500/60 border border-emerald-500/10 uppercase tracking-widest font-mono">Liquidity Gateways</span>
                                    <span className="px-4 py-2 bg-emerald-500/5 rounded-xl text-[10px] text-emerald-500/60 border border-emerald-500/10 uppercase tracking-widest font-mono">briefing dispatch</span>
                                    <span className="px-4 py-2 bg-emerald-500/5 rounded-xl text-[10px] text-emerald-500/60 border border-emerald-500/10 uppercase tracking-widest font-mono">Infrastructure Nodes</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="group mb-12 p-8 md:p-12 bg-[#050b1a] rounded-[2.5rem] border border-emerald-500/5 hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight uppercase">4. Memory Modules (Cookies)</h2>
                            <p className="text-emerald-50/70 font-light leading-relaxed">
                                We utilize local memory modules to maintain session integrity and individual customization. Protocol adjustment via browser settings may result in restricted terminal accessibility.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="p-12 bg-linear-to-r from-emerald-500/5 to-amber-500/5 rounded-[3rem] border border-emerald-500/5 text-center shadow-2xl">
                            <span className="text-emerald-500 font-mono tracking-[0.3em] text-[10px] uppercase mb-4 block">Communication Portal</span>
                            <p className="text-emerald-50/70 mb-6 text-sm font-light">Direct address for privacy-related technical documentation:</p>
                            <a href="mailto:privacy@tradebrainx.com" className="text-2xl font-black text-white hover:text-emerald-500 transition-all tracking-tighter">privacy@tradebrainx.com</a>
                        </div>

                    </div>
                </div>
            </section>

            <AiPredictionFooter />
        </div>
    );
};

export default PrivacyPolicy;
