
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchSection = () => {
  return (
    <section id="research" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Последние исследования</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Научное сообщество активно изучает многогранное влияние видеоигр на психологическое и
          физиологическое состояние человека
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchData.map((item, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{item.description}</p>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <p>{item.source}, {item.year}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const researchData = [
  {
    title: "Влияние видеоигр на когнитивные функции",
    description: "Исследование показало, что регулярные игроки в стратегические видеоигры демонстрируют улучшенные навыки визуально-пространственного внимания и многозадачности.",
    source: "Журнал когнитивной психологии",
    year: "2022"
  },
  {
    title: "Видеоигры и социальное взаимодействие",
    description: "Многопользовательские онлайн-игры могут способствовать формированию социальных связей и развитию навыков сотрудничества у игроков разных возрастных групп.",
    source: "Международный журнал игровых исследований",
    year: "2021"
  },
  {
    title: "Психологические аспекты игровой зависимости",
    description: "Долгосрочное исследование выявило факторы риска, способствующие развитию проблемного использования видеоигр, и предложило стратегии профилактики.",
    source: "Психологический вестник",
    year: "2023"
  }
];

export default ResearchSection;
