import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaTelegram, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const AiPredictionFooter: React.FC = () => {
    const year = new Date().getFullYear();
    const { pathname } = useLocation();
    return (
        <footer className="bg-[#05020a] border-t border-emerald-500/10 pt-20 pb-10 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container relative z-10 px-4">
                <div className={`grid ${pathname === "/" ? "md:grid-cols-4" : "md:grid-cols-3"} gap-12 mb-16`}>

                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img src="/logo.png" alt="tradebrainx.com" className="w-40" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            Advanced AI-powered market analysis providing probability-based predictions for serious traders. Stop guessing, start calculating.
                        </p>
                        <div className="flex gap-4">
                            {[FaTwitter, FaDiscord, FaTelegram, FaLinkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all border border-white/5 hover:border-emerald-500/30">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    {pathname === "/" && <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Overview</button></li>
                            <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Features</button></li>
                            <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Pricing</button></li>
                            <li><button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Demo</button></li>
                        </ul>
                    </div>}

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/risk-disclaimer" className="hover:text-emerald-400 transition-colors">Risk Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {year} tradebrainx.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default AiPredictionFooter;
