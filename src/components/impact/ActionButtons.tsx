
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronUp, Info } from "lucide-react";
import { Link } from "react-router-dom";
import NavigationButton from "./NavigationButton";

type ActionButtonsProps = {
  detailsPath: string;
  nextSectionId: string;
  topSectionId?: string;
};

const ActionButtons = ({ detailsPath, nextSectionId, topSectionId = "hero" }: ActionButtonsProps) => (
  <div className="flex justify-center gap-4 mt-10">
    <Button asChild variant="outline" className="gap-2">
      <Link to={detailsPath}>
        Подробнее <Info className="h-4 w-4" />
      </Link>
    </Button>
    <NavigationButton targetId={nextSectionId}>
      {nextSectionId === "negative" ? "Негативное влияние" : "Жанры игр"} <ChevronRight className="h-4 w-4" />
    </NavigationButton>
    <NavigationButton targetId={topSectionId}>
      Вернуться наверх <ChevronUp className="h-4 w-4" />
    </NavigationButton>
  </div>
);

export default ActionButtons;
