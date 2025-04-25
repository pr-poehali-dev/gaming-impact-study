
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  ChevronRight, 
  Gamepad2, 
  Heart, 
  Lightbulb, 
  MessageCircle, 
  Network, 
  PlusCircle, 
  Sparkles, 
  TimerOff, 
  Timer, 
  Wallet,
  ChevronUp,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";

// Типы для карточек влияния
type ImpactCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
};

// Переиспользуемый компонент карточки
const ImpactCard = ({ icon, title, description, iconColor = "text-primary" }: ImpactCardProps) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="pt-6">
      <div className="flex items-start gap-4">
        <div className={`h-8 w-8 ${iconColor} flex-shrink-0`}>{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Компонент навигационной кнопки
type NavigationButtonProps = {
  targetId: string;
  children: React.ReactNode;
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

// Данные о положительном влиянии
const positiveImpacts = [
  {
    icon: <Brain />,
    title: "Когнитивные способности",
    description: "Улучшение памяти, внимания, скорости обработки информации и многозадачности.",
  },
  {
    icon: <Sparkles />,
    title: "Креативность",
    description: "Развитие творческого мышления и инновационных подходов к решению проблем.",
  },
  {
    icon: <Network />,
    title: "Координация",
    description: "Повышение зрительно-моторной координации и скорости реакции.",
  },
  {
    icon: <MessageCircle />,
    title: "Социализация",
    description: "Формирование новых социальных связей и развитие коммуникативных навыков в многопользовательских играх.",
  },
  {
    icon: <Heart />,
    title: "Эмоциональная разгрузка",
    description: "Снижение стресса и улучшение настроения в результате игрового процесса.",
  },
  {
    icon: <Lightbulb />,
    title: "Образовательный эффект",
    description: "Получение новых знаний и навыков через образовательные и исторические игры.",
  },
];

// Данные о негативном влиянии
const negativeImpacts = [
  {
    icon: <Gamepad2 />,
    title: "Игровая зависимость",
    description: "Формирование патологического влечения к играм, классифицированного ВОЗ как расстройство.",
  },
  {
    icon: <TimerOff />,
    title: "Нарушение режима",
    description: "Сбои режима сна, питания и физической активности из-за длительных игровых сессий.",
  },
  {
    icon: <Timer />,
    title: "Снижение продуктивности",
    description: "Ухудшение успеваемости и результатов работы из-за чрезмерного времени, уделяемого играм.",
  },
  {
    icon: <Wallet />,
    title: "Финансовые проблемы",
    description: "Неконтролируемые расходы на внутриигровые покупки и новые игры.",
  },
  {
    icon: <PlusCircle />,
    title: "Проблемы со здоровьем",
    description: "Ухудшение зрения, туннельный синдром запястья, боли в спине и шее при длительных игровых сессиях.",
  },
  {
    icon: <MessageCircle />,
    title: "Социальная изоляция",
    description: "Замена реального общения виртуальным и ослабление существующих социальных связей.",
  },
];

// Компонент с карточками влияния
type ImpactGridProps = {
  impacts: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
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

// Компонент заголовка секции
type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <>
    <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
    <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
      {description}
    </p>
  </>
);

// Компонент положительного влияния
export const PositiveImpact = () => {
  return (
    <section id="positive" className="py-16 bg-background">
      <div className="container">
        <SectionTitle 
          title="Положительное влияние игр" 
          description="Современные исследования подтверждают многочисленные позитивные эффекты от умеренного и сбалансированного геймплея"
        />

        <ImpactGrid impacts={positiveImpacts} />

        <div className="flex justify-center gap-4 mt-10">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/impact-details">
              Подробнее <Info className="h-4 w-4" />
            </Link>
          </Button>
          <NavigationButton targetId="negative">
            Негативное влияние <ChevronRight className="h-4 w-4" />
          </NavigationButton>
          <NavigationButton targetId="hero">
            Вернуться наверх <ChevronUp className="h-4 w-4" />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
};

// Компонент негативного влияния
export const NegativeImpact = () => {
  return (
    <section id="negative" className="py-16 bg-primary/5">
      <div className="container">
        <SectionTitle 
          title="Потенциальные риски" 
          description="При чрезмерном увлечении компьютерными играми могут возникать следующие проблемы"
        />

        <ImpactGrid impacts={negativeImpacts} iconColor="text-destructive" />

        <div className="flex justify-center gap-4 mt-10">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/impact-details">
              Подробнее <Info className="h-4 w-4" />
            </Link>
          </Button>
          <NavigationButton targetId="genres">
            Жанры игр <ChevronRight className="h-4 w-4" />
          </NavigationButton>
          <NavigationButton targetId="hero">
            Вернуться наверх <ChevronUp className="h-4 w-4" />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
};
