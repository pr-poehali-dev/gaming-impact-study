
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { NegativeImpact, PositiveImpact } from "@/components/ImpactSection";
import Navbar from "@/components/Navbar";
import ResearchSection from "@/components/ResearchSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PositiveImpact />
        <NegativeImpact />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
