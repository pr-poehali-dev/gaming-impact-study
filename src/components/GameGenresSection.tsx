
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Swords, Brain, Users, Timer, Map } from "lucide-react";

interface GenreCardProps {
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
}

const GenreCard = ({ title, description, impact, icon }: GenreCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="p-3 bg-purple-50 rounded-md">
          <p className="font-medium text-sm">Влияние на человека:</p>
          <p className="text-muted-foreground">{impact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const GameGenresSection = () => {
  return (
    <section id="genres" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Жанры игр и их влияние</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Разные жанры компьютерных игр оказывают различное влияние на психику, когнитивные 
          функции и поведение игроков
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GenreCard 
            title="Стратегии"
            description="Игры, требующие планирования, управления ресурсами и долгосрочного мышления."
            impact="Развивает аналитическое мышление, способность к планированию и принятию решений."
            icon={<Brain className="h-6 w-6" />}
          />
          <GenreCard 
            title="Экшн и шутеры"
            description="Динамичные игры с быстрым геймплеем, требующие хорошей реакции."
            impact="Улучшает скорость реакции и координацию, но может повышать уровень агрессии при чрезмерном увлечении."
            icon={<Swords className="h-6 w-6" />}
          />
          <GenreCard 
            title="MMO и социальные игры"
            description="Многопользовательские игры с фокусом на взаимодействие между игроками."
            impact="Развивает коммуникативные навыки и командную работу, но может вызывать зависимость."
            icon={<Users className="h-6 w-6" />}
          />
          <GenreCard 
            title="Казуальные игры"
            description="Простые игры с низким порогом вхождения, часто для мобильных устройств."
            impact="Снижают стресс и подходят для кратковременного отдыха, но могут формировать привычку к прокрастинации."
            icon={<Timer className="h-6 w-6" />}
          />
          <GenreCard 
            title="Ролевые игры (RPG)"
            description="Игры с фокусом на развитие персонажа, сюжет и исследование мира."
            impact="Стимулируют воображение, эмпатию и помогают в моральном развитии через сложные сценарии выбора."
            icon={<Map className="h-6 w-6" />}
          />
          <GenreCard 
            title="Симуляторы"
            description="Игры, имитирующие реальные процессы и деятельность, от вождения до управления городом."
            impact="Развивают профессиональные навыки и понимание сложных систем в безопасной среде."
            icon={<Gamepad2 className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default GameGenresSection;
