
import { ImpactData } from "@/data/impactData";
import ImpactCard from "./ImpactCard";

type ImpactGridProps = {
  impacts: ImpactData[];
  iconColor?: string;
};

const ImpactGrid = ({ impacts, iconColor = "text-primary" }: ImpactGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {impacts.map((impact, index) => (
      <ImpactCard
        key={index}
        icon={impact.icon}
        title={impact.title}
        description={impact.description}
        iconColor={iconColor}
      />
    ))}
  </div>
);

export default ImpactGrid;
