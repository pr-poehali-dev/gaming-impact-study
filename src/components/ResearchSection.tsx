
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

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
            <Card key={index} className="flex flex-col h-full hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {item.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{item.description}</p>
                {item.findings && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-md">
                    <p className="font-medium text-sm">Основные выводы:</p>
                    <ul className="mt-1 space-y-1">
                      {item.findings.map((finding, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex items-center justify-between text-sm">
                <p className="text-muted-foreground">{item.source}, {item.year}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center text-primary hover:underline">
                    Подробнее <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                )}
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
    year: "2022",
    category: "Когнитивная психология",
    findings: [
      "Улучшение скорости обработки визуальной информации на 27%",
      "Повышение точности при выполнении многозадачных тестов",
      "Долгосрочные эффекты сохраняются в течение нескольких месяцев после прекращения игр"
    ],
    link: "#"
  },
  {
    title: "Видеоигры и социальное взаимодействие",
    description: "Многопользовательские онлайн-игры могут способствовать формированию социальных связей и развитию навыков сотрудничества у игроков разных возрастных групп.",
    source: "Международный журнал игровых исследований",
    year: "2021",
    category: "Социальная психология",
    findings: [
      "Формирование устойчивых социальных связей в виртуальных сообществах",
      "Развитие навыков командной работы и координации действий",
      "Снижение социальной тревожности у некоторых игроков"
    ],
    link: "#"
  },
  {
    title: "Психологические аспекты игровой зависимости",
    description: "Долгосрочное исследование выявило факторы риска, способствующие развитию проблемного использования видеоигр, и предложило стратегии профилактики.",
    source: "Психологический вестник",
    year: "2023",
    category: "Клиническая психология",
    findings: [
      "Идентификация предрасполагающих факторов: одиночество, депрессия, импульсивность",
      "Эффективность ограничительных мер времени игры для профилактики зависимости",
      "Роль семейной поддержки в предотвращении проблемного использования игр"
    ],
    link: "#"
  },
  {
    title: "Нейронаучные исследования влияния видеоигр",
    description: "МРТ-исследования показали изменения в структуре и функциях мозга, связанные с регулярной игровой активностью в различных жанрах видеоигр.",
    source: "Нейронаучный журнал",
    year: "2022",
    category: "Нейронаука",
    findings: [
      "Увеличение объема серого вещества в областях мозга, ответственных за пространственную навигацию",
      "Изменения в активности дофаминергической системы вознаграждения",
      "Различия в нейронных паттернах между случайными и профессиональными игроками"
    ],
    link: "#"
  },
  {
    title: "Влияние видеоигр на развитие детей",
    description: "Лонгитюдное исследование изучало влияние различных типов видеоигр на когнитивное, эмоциональное и социальное развитие детей в возрасте от 8 до 12 лет.",
    source: "Журнал детской психологии",
    year: "2023",
    category: "Детская психология",
    findings: [
      "Образовательные игры способствуют развитию базовых навыков чтения и математики",
      "Просоциальные игры связаны с развитием эмпатии и альтруистического поведения",
      "Важность родительского контроля и совместного обсуждения игрового контента"
    ],
    link: "#"
  },
  {
    title: "Терапевтическое применение видеоигр",
    description: "Исследование применения специализированных видеоигр в лечении различных психологических и неврологических состояний, включая депрессию, тревожность и СДВГ.",
    source: "Терапевтический журнал",
    year: "2021",
    category: "Медицина",
    findings: [
      "Эффективность игр виртуальной реальности в лечении фобий и посттравматического стресса",
      "Снижение симптомов СДВГ при использовании специализированных когнитивных тренажеров",
      "Потенциал использования игр для улучшения приверженности к терапии"
    ],
    link: "#"
  }
];

export default ResearchSection;
