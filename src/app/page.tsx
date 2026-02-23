import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchPublications from "@/components/ResearchPublications";
import IndustryImpact from "@/components/IndustryImpact";
import InnovationEntrepreneurship from "@/components/InnovationEntrepreneurship";
import ResearchEngagement from "@/components/ResearchEngagement";
import InnovationPatents from "@/components/InnovationPatents";
import GlobalRecognition from "@/components/GlobalRecognition";
import TeachingLeadership from "@/components/TeachingLeadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-academic-white overflow-x-hidden selection:bg-accent-blue/20 selection:text-deep-slate">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchPublications />
      <IndustryImpact />
      <InnovationEntrepreneurship />
      <ResearchEngagement />
      <InnovationPatents />
      <GlobalRecognition />
      <TeachingLeadership />
      <Certifications />
      <Contact />
    </main>
  );
}
