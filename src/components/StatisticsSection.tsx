
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  progress: number;
  color?: string;
}

const StatCard = ({ title, value, description, progress, color = "bg-primary" }: StatCardProps) => {
  const [showProgress, setShowProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(progress), 300);
    return () => clearTimeout(timer);
  }, [progress]);
  
  return (
    <Card className="overflow-hidden">
      <div className={`h-2 ${color}`} />
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-1">{value}</p>
        <Progress value={showProgress} className="h-2 mb-3" />
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const StatisticsSection = () => {
  return (
    <section id="statistics" className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Статистика и факты</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Игровая индустрия стремительно развивается, вовлекая миллиарды людей по всему миру
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Игроки в мире"
            value="3.2 млрд"
            description="Около 40% населения планеты регулярно играет в видеоигры"
            progress={85}
            color="bg-indigo-500"
          />
          <StatCard
            title="Рынок видеоигр"
            value="$217 млрд"
            description="Объем мирового рынка видеоигр к 2023 году (больше, чем кино и музыка вместе)"
            progress={90}
            color="bg-emerald-500"
          />
          <StatCard
            title="Мобильные игры"
            value="57%"
            description="Доля рынка мобильных игр от общего объема индустрии"
            progress={57}
            color="bg-amber-500"
          />
          <StatCard
            title="Возраст игроков"
            value="34 года"
            description="Средний возраст игрока в видеоигры"
            progress={62}
            color="bg-rose-500"
          />
          <StatCard
            title="Время на игры"
            value="8.4 ч/нед"
            description="Среднее время, которое геймеры тратят на игры еженедельно"
            progress={70}
            color="bg-sky-500"
          />
          <StatCard
            title="Женщины-геймеры"
            value="45%"
            description="Доля женщин среди всех игроков в видеоигры"
            progress={45}
            color="bg-purple-500"
          />
        </div>

        <div className="mt-12 p-6 bg-background rounded-lg border">
          <h3 className="text-xl font-medium mb-4">Интересные факты</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary font-bold text-lg mr-2">•</span>
              <span>Более 75% родителей считают, что видеоигры могут быть полезны для их детей</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-lg mr-2">•</span>
              <span>Профессиональные киберспортсмены могут выполнять до 400 действий в минуту</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-lg mr-2">•</span>
              <span>Около 14% игроков проводят за играми более 20 часов в неделю</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-lg mr-2">•</span>
              <span>С 2020 года более 70% школ в США используют образовательные видеоигры</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold text-lg mr-2">•</span>
              <span>Виртуальная реальность используется в медицине для лечения фобий и хронической боли</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
