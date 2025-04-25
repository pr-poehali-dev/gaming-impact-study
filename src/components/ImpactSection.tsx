
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Gamepad2, Heart } from "lucide-react";

interface ImpactItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ImpactItem = ({ title, description, icon }: ImpactItemProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export const PositiveImpact = () => {
  return (
    <section id="positive" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Положительное влияние</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ImpactItem
            title="Улучшение когнитивных функций"
            description="Игры, особенно стратегические и ролевые, развивают память, внимание, способность к планированию и пространственному мышлению."
            icon={<Brain className="h-6 w-6" />}
          />
          <ImpactItem
            title="Развитие навыков решения проблем"
            description="Игровые сценарии часто требуют принятия быстрых и эффективных решений, что развивает критическое мышление."
            icon={<Gamepad2 className="h-6 w-6" />}
          />
          <ImpactItem
            title="Психологическая разгрузка"
            description="Умеренное увлечение играми может служить способом релаксации и снятия стресса после напряженного дня."
            icon={<Heart className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export const NegativeImpact = () => {
  return (
    <section id="negative" className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Отрицательное влияние</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ImpactItem
            title="Игровая зависимость"
            description="Чрезмерное увлечение играми может привести к формированию зависимого поведения, влияющего на все сферы жизни."
            icon={<Gamepad2 className="h-6 w-6" />}
          />
          <ImpactItem
            title="Проблемы со здоровьем"
            description="Длительное сидение за компьютером способствует развитию проблем со зрением, осанкой и общим физическим состоянием."
            icon={<Heart className="h-6 w-6" />}
          />
          <ImpactItem
            title="Снижение социальной активности"
            description="При замещении реального общения виртуальным может страдать развитие социальных навыков и эмоционального интеллекта."
            icon={<Brain className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};
