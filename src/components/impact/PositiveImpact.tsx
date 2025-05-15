
import { positiveImpactsData } from "@/data/impactData";
import ActionButtons from "./ActionButtons";
import ImpactGrid from "./ImpactGrid";
import SectionTitle from "./SectionTitle";

export const PositiveImpact = () => {
  return (
    <section id="positive" className="py-16 bg-background">
      <div className="container">
        <SectionTitle 
          title="Положительное влияние игр" 
          description="Современные исследования подтверждают многочисленные позитивные эффекты от умеренного и сбалансированного геймплея"
        />

        <ImpactGrid impacts={positiveImpactsData} />

        <ActionButtons 
          detailsPath="/impact-details" 
          nextSectionId="negative" 
        />
      </div>
    </section>
  );
};

export default PositiveImpact;
