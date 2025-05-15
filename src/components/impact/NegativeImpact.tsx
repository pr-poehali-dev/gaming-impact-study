
import { negativeImpactsData } from "@/data/impactData";
import ActionButtons from "./ActionButtons";
import ImpactGrid from "./ImpactGrid";
import SectionTitle from "./SectionTitle";

export const NegativeImpact = () => {
  return (
    <section id="negative" className="py-16 bg-primary/5">
      <div className="container">
        <SectionTitle 
          title="Потенциальные риски" 
          description="При чрезмерном увлечении компьютерными играми могут возникать следующие проблемы"
        />

        <ImpactGrid impacts={negativeImpactsData} iconColor="text-destructive" />

        <ActionButtons 
          detailsPath="/impact-details" 
          nextSectionId="genres" 
        />
      </div>
    </section>
  );
};

export default NegativeImpact;
