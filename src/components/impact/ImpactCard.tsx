import { Card, CardContent } from "@/components/ui/card";
import { ImpactData } from "@/data/impactData";

type ImpactCardProps = ImpactData & {
  iconColor?: string;
};

const ImpactCard = ({
  icon,
  title,
  description,
  iconColor = "text-primary",
}: ImpactCardProps) => (
  <Card className="hover:shadow-md transition-shadow h-full">
    <CardContent className="pt-6 pb-5 h-full flex flex-col">
      <div className="flex items-start gap-4">
        <div className={`h-8 w-8 ${iconColor} flex-shrink-0 mt-0.5`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ImpactCard;
