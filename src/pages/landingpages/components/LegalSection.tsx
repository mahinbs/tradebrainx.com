const LegalSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#020617] border-t border-emerald-500/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-emerald-500/60 font-mono tracking-[0.4em] text-[10px] uppercase block mb-4">Regulatory Disclosure</span>
            <p className="text-emerald-50/40 text-[11px] leading-relaxed font-light">
              <strong className="text-emerald-500/60 block mb-3 uppercase tracking-widest font-mono text-[10px]">Strategic Risk Protocol</strong>
              Trading in global financial markets involves substantial risk of capital loss and is not suitable for all participants. Initial investment capital is subject to total depreciation. Past algorithmic performance metrics do not correlate with future execution results.
            </p>
          </div>
          <div className="h-px w-8 bg-emerald-500/5 mx-auto"></div>
          <div className="space-y-4">
            <p className="text-emerald-50/40 text-[11px] leading-relaxed font-light">
              <strong className="text-emerald-500/60 block mb-3 uppercase tracking-widest font-mono text-[10px]">Operational Disclaimer</strong>
              Computational data provided by TBX-Intelligence is for educational and quantitative research purposes exclusively. No information constitutes financial advisory, fiduciary recommendation, or direct execution signals. TBX is a software engineering provider, not a licensed financial institution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
