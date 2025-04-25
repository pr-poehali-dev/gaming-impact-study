
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Eye, ActivitySquare, BrainCircuit, HeartPulse, Moon } from "lucide-react";

const HealthyGamingSection = () => {
  return (
    <section id="healthy-gaming" className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Рекомендации для здорового гейминга</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Следуя этим рекомендациям, вы можете наслаждаться видеоиграми 
          и минимизировать потенциальные негативные последствия для здоровья
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300 border-l-4" 
                  style={{ borderLeftColor: 'var(--primary)' }}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-foreground">
                  {item.description}
                </CardDescription>
                <ul className="mt-2 space-y-1">
                  {item.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const recommendations = [
  {
    title: "Контроль времени",
    description: "Ограничивайте время, проведенное за играми:",
    icon: <Clock className="h-5 w-5" />,
    tips: [
      "Устанавливайте таймер на игровые сессии",
      "Делайте перерыв 10-15 минут каждый час",
      "Ведите учет времени, проведенного за играми"
    ]
  },
  {
    title: "Забота о зрении",
    description: "Защищайте глаза от перенапряжения:",
    icon: <Eye className="h-5 w-5" />,
    tips: [
      "Используйте правило 20-20-20: каждые 20 минут смотрите на объект в 20 футах на 20 секунд",
      "Настройте освещение в комнате для уменьшения бликов",
      "Регулируйте яркость и контрастность экрана"
    ]
  },
  {
    title: "Физическая активность",
    description: "Компенсируйте сидячий образ жизни:",
    icon: <ActivitySquare className="h-5 w-5" />,
    tips: [
      "Делайте физические упражнения между игровыми сессиями",
      "Рассмотрите возможность использования активных игр (VR, танцевальные игры)",
      "Практикуйте упражнения для запястий и спины"
    ]
  },
  {
    title: "Ментальный баланс",
    description: "Сохраняйте здоровый баланс между виртуальной и реальной жизнью:",
    icon: <BrainCircuit className="h-5 w-5" />,
    tips: [
      "Разнообразьте досуг активностями вне игр",
      "Социализируйтесь в реальной жизни, а не только онлайн",
      "Отслеживайте признаки зависимости от игр"
    ]
  },
  {
    title: "Правильное питание",
    description: "Поддерживайте здоровые пищевые привычки:",
    icon: <HeartPulse className="h-5 w-5" />,
    tips: [
      "Избегайте энергетических напитков и нездоровых снеков во время игр",
      "Пейте достаточно воды, а не только кофеин-содержащие напитки",
      "Не пропускайте приемы пищи из-за игр"
    ]
  },
  {
    title: "Режим сна",
    description: "Обеспечьте здоровый сон:",
    icon: <Moon className="h-5 w-5" />,
    tips: [
      "Избегайте игр за 1-2 часа до сна",
      "Используйте фильтры синего света в вечернее время",
      "Не жертвуйте сном ради игровых сессий"
    ]
  }
];

export default HealthyGamingSection;
