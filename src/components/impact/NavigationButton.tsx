
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type NavigationButtonProps = {
  targetId: string;
  children: ReactNode;
};

const NavigationButton = ({ targetId, children }: NavigationButtonProps) => (
  <Button
    onClick={() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }}
    className="gap-2"
  >
    {children}
  </Button>
);

export default NavigationButton;
