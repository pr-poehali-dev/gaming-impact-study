
import Footer from "@/components/Footer";
import GameGenresSection from "@/components/GameGenresSection";
import HealthyGamingSection from "@/components/HealthyGamingSection";
import Hero from "@/components/Hero";
import { NegativeImpact, PositiveImpact } from "@/components/ImpactSection";
import Navbar from "@/components/Navbar";
import ResearchSection from "@/components/ResearchSection";
import StatisticsSection from "@/components/StatisticsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatisticsSection />
        <PositiveImpact />
        <NegativeImpact />
        <GameGenresSection />
        <HealthyGamingSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
