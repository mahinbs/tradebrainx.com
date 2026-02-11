import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import SeoHead from "../../components/SeoHead";
import { SEO } from "../../lib/seo";
import AiPredictionHeader from "../../components/AiPredictionHeader";
import AiPredictionFooter from "../../components/AiPredictionFooter";

// Components
import HeroSection from "./components/HeroSection";
import ValuePropSection from "./components/ValuePropSection";
import MarketsSection from "./components/MarketsSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import WhoThisIsForSection from "./components/WhoThisIsForSection";
import WhatThisIsNotSection from "./components/WhatThisIsNotSection";
import HowItWorksSection from "./components/HowItWorksSection";
import LiveDemoSection from "./components/LiveDemoSection";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LegalSection from "./components/LegalSection";
import EnquiryModal from "./components/EnquiryModal";
import type { EnquiryFormValues } from "./components/EnquiryModal";

const AiStockPrediction = () => {
  const [activeTab, setActiveTab] = useState("stocks");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    defaultValues: { name: "", email: "", phone: "", message: "", plan: "" },
  });

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Mock submission for now - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      reset();
      setIsEnquiryModalOpen(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToDemo = () =>
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  const openEnquiry = (plan?: string) => {
    if (plan) setValue("plan", plan);
    setIsEnquiryModalOpen(true);
  };

  // Stats Data
  const stats = {
    stocks: { acc: "81%", trades: "12K+", win: "74%" },
    forex: { acc: "84%", trades: "45K+", win: "78%" },
    crypto: { acc: "76%", trades: "9K+", win: "70%" },
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SEO.siteName,
      url: SEO.baseUrl,
      description: SEO.defaultDescription,
      logo: `${SEO.baseUrl}/logo.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeepMind Trades AI",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: SEO.defaultDescription,
      url: SEO.baseUrl,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "49",
        highPrice: "499",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-gsans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <SeoHead
        title={`${SEO.defaultTitle} | ${SEO.siteName}`}
        description={SEO.defaultDescription}
        path="/"
        ogImage="/hero-bg-ai-trading.png"
        jsonLd={jsonLd}
      />

      <AiPredictionHeader />

      <HeroSection scrollToDemo={scrollToDemo} openEnquiry={() => openEnquiry()} />
      <ProblemSolutionSection />
      <FeaturesSection />
      <LiveDemoSection openEnquiry={() => openEnquiry()} />
      <StatsSection activeTab={activeTab} setActiveTab={setActiveTab} stats={stats} />
      <PricingSection openEnquiry={openEnquiry} />
      <CtaSection openEnquiry={() => openEnquiry()} />
      <ValuePropSection />
      <MarketsSection />
      <WhoThisIsForSection />
      <WhatThisIsNotSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LegalSection />

      <AiPredictionFooter />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onOpenChange={setIsEnquiryModalOpen}
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
        control={control}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AiStockPrediction;
