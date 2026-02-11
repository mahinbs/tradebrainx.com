import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import SeoHead from '../../components/SeoHead';
import AiPredictionHeader from '../../components/AiPredictionHeader';
import AiPredictionFooter from '../../components/AiPredictionFooter';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-gsans selection:bg-emerald-500 selection:text-black overflow-x-hidden flex flex-col">
            <SeoHead
                title="Thank You | tradebrainx.com"
                description="Thank you for your interest. We'll be in touch soon."
                path="/thank-you"
                noIndex
            />

            <AiPredictionHeader />

            <main className="grow relative flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto z-10 relative max-w-2xl px-4">
                    <div className="bg-[#050b1a] backdrop-blur-xl border border-emerald-500/10 p-10 md:p-16 rounded-[3rem] shadow-2xl text-center relative overflow-hidden group">

                        {/* Glow behind card */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>

                        {/* Icon */}
                        <div className="mb-12 flex justify-center relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 text-black">
                                    <FaCheckCircle className="text-4xl" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter uppercase">
                            Connection Established
                        </h1>

                        <div className="space-y-8 mb-12">
                            <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Clearance Level: Tier-1 Authorized</p>
                            </div>
                            <p className="text-emerald-50/40 text-sm leading-relaxed max-w-sm mx-auto">
                                Our institutional desk is reviewing your access request. Expect a briefing at <span className="text-emerald-400 font-black">support@tradebrainx.com</span> within the next 4 computational hours.
                            </p>
                        </div>

                        {/* Button */}
                        <Link to="/">
                            <Button className="bg-emerald-500 text-black hover:bg-emerald-400 font-black px-12 py-7 rounded-full shadow-2xl shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-widest group">
                                <span className="flex items-center gap-3">
                                    Return to Terminal
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <AiPredictionFooter />
        </div>
    );
};

export default ThankYou;
