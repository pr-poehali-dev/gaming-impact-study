import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Brain,
  ChevronUp,
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
  BookOpen,
  LineChart,
  Globe,
  Zap,
  ArrowUpRight,
  Calendar,
  Laptop,
  Shield,
  Eye,
  BarChart,
  History,
  Trophy,
  User,
  Smartphone,
  Atom,
  GraduationCap,
  School,
  Baby,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

// Подробные данные о положительном влиянии
const positiveImpactsDetailed = [
  {
    icon: <Brain />,
    title: "Когнитивные способности",
    description:
      "Улучшение памяти, внимания, скорости обработки информации и многозадачности.",
    details: [
      "Экшн-игры улучшают пространственное внимание и скорость реакции на 10-20% по данным исследований",
      "Стратегические игры развивают аналитическое мышление и планирование",
      "Головоломки и логические игры улучшают память и функции префронтальной коры головного мозга",
      "Регулярные игроки демонстрируют лучшие результаты в тестах на переключение внимания",
      "Геймеры лучше справляются с многозадачностью и мониторингом нескольких объектов одновременно",
    ],
    studies: [
      {
        author: "Green & Bavelier",
        year: 2003,
        title: "Action video games modify visual selective attention",
      },
      {
        author: "Anguera et al.",
        year: 2013,
        title: "Video game training enhances cognitive control in older adults",
      },
    ],
  },
  {
    icon: <Sparkles />,
    title: "Креативность",
    description:
      "Развитие творческого мышления и инновационных подходов к решению проблем.",
    details: [
      "Игры с открытым миром стимулируют дивергентное мышление и генерацию идей",
      "Песочницы (Minecraft, Roblox) способствуют развитию креативного самовыражения",
      "Нестандартные решения игровых задач переносятся на реальные проблемы",
      "Разработка модификаций развивает технические и творческие навыки",
      "Повышение гибкости мышления через нелинейные сюжеты и множественные решения",
    ],
    studies: [
      {
        author: "Jackson et al.",
        year: 2012,
        title: "Information technology use and creativity",
      },
      {
        author: "Qian & Clark",
        year: 2016,
        title: "Game-based learning and 21st century skills",
      },
    ],
  },
  {
    icon: <Network />,
    title: "Координация",
    description: "Повышение зрительно-моторной координации и скорости реакции.",
    details: [
      "Улучшение координации движений рук и глаз на 30% у регулярных игроков",
      "Увеличение скорости реакции до 25% после 10 часов игрового процесса",
      "Развитие тонкой моторики при использовании контроллеров и клавиатуры",
      "Повышение точности движений и способности к микрокоррекции",
      "Снижение времени принятия решений в динамических условиях",
    ],
    studies: [
      {
        author: "Dye et al.",
        year: 2009,
        title: "Increasing speed of processing with action video games",
      },
      {
        author: "Li et al.",
        year: 2016,
        title: "Action video game play facilitates visual learning",
      },
    ],
  },
  {
    icon: <MessageCircle />,
    title: "Социализация",
    description:
      "Формирование новых социальных связей и развитие коммуникативных навыков в многопользовательских играх.",
    details: [
      "Развитие навыков командной работы и коммуникации в MMO и кооперативных играх",
      "Формирование международных сообществ и межкультурное взаимодействие",
      "Создание устойчивых социальных связей через общие игровые интересы",
      "Развитие лидерских качеств при организации рейдов и кланов",
      "Интеграция в социум людей с ограниченными возможностями и социальной тревожностью",
    ],
    studies: [
      {
        author: "Granic et al.",
        year: 2014,
        title: "The benefits of playing video games",
      },
      {
        author: "Kowert & Oldmeadow",
        year: 2013,
        title: "Social reputation: Exploring the relationship between gaming",
      },
    ],
  },
  {
    icon: <Heart />,
    title: "Эмоциональная разгрузка",
    description:
      "Снижение стресса и улучшение настроения в результате игрового процесса.",
    details: [
      "Снижение уровня кортизола (гормона стресса) на 17% после 30 минут игры",
      "Повышение уровня эндорфинов и дофамина при достижении игровых целей",
      "Переключение внимания от реальных проблем и тревожных мыслей",
      "Развитие навыков эмоциональной регуляции через игровые ситуации",
      "Создание безопасной среды для выражения и проработки сложных эмоций",
    ],
    studies: [
      {
        author: "Russoniello et al.",
        year: 2009,
        title: "The effectiveness of casual video games in improving mood",
      },
      {
        author: "Bowman & Tamborini",
        year: 2012,
        title:
          "Task demand and mood repair: The intervention potential of video games",
      },
    ],
  },
  {
    icon: <Lightbulb />,
    title: "Образовательный эффект",
    description:
      "Получение новых знаний и навыков через образовательные и исторические игры.",
    details: [
      "Повышение мотивации к обучению через геймификацию образовательного процесса",
      "Усвоение исторических знаний через игры с исторической тематикой (Assassin's Creed, Civilization)",
      "Освоение иностранных языков через погружение в игровой среду",
      "Развитие понимания экономических и ресурсных систем через стратегии",
      "Приобретение базовых навыков программирования через игры с элементами кодинга",
    ],
    studies: [
      {
        author: "Squire",
        year: 2008,
        title:
          "Video games and education: Designing learning systems for an interactive age",
      },
      {
        author: "McCall",
        year: 2016,
        title: "Teaching history with digital historical games",
      },
    ],
  },
];

// Подробные данные о негативном влиянии
const negativeImpactsDetailed = [
  {
    icon: <Gamepad2 />,
    title: "Игровая зависимость",
    description:
      "Формирование патологического влечения к играм, классифицированного ВОЗ как расстройство.",
    details: [
      "В 2018 году ВОЗ официально включила игровое расстройство в Международную классификацию болезней (МКБ-11)",
      "3-4% игроков соответствуют критериям игровой зависимости по данным международных исследований",
      "Основные симптомы: потеря контроля над игровым процессом, приоритет игр над другими жизненными сферами",
      "Механики лутбоксов и микротранзакций усиливают зависимость через механизмы, схожие с азартными играми",
      "Высокая коморбидность с тревожными и депрессивными расстройствами",
    ],
    studies: [
      {
        author: "Király et al.",
        year: 2020,
        title: "Policy responses to problematic video game use",
      },
      {
        author: "Zastrow",
        year: 2017,
        title: "News Feature: Is video game addiction really an addiction?",
      },
    ],
  },
  {
    icon: <TimerOff />,
    title: "Нарушение режима",
    description:
      "Сбои режима сна, питания и физической активности из-за длительных игровых сессий.",
    details: [
      "Подавление выработки мелатонина из-за синего света экранов, нарушающего циркадные ритмы",
      "Сокращение продолжительности сна на 1-2 часа у активных игроков по сравнению со средними показателями",
      "Снижение качества сна и увеличение времени засыпания после игровых сессий",
      "Повышенный риск развития метаболического синдрома из-за малоподвижного образа жизни",
      "Нерегулярное питание, пропуск приемов пищи и предпочтение фастфуда во время игр",
    ],
    studies: [
      {
        author: "Hale & Guan",
        year: 2015,
        title:
          "Screen time and sleep among school-aged children and adolescents",
      },
      {
        author: "Turel et al.",
        year: 2017,
        title: "Health outcomes of information system use lifestyles",
      },
    ],
  },
  {
    icon: <Timer />,
    title: "Снижение продуктивности",
    description:
      "Ухудшение успеваемости и результатов работы из-за чрезмерного времени, уделяемого играм.",
    details: [
      "Снижение академической успеваемости у студентов, проводящих более 20 часов в неделю за играми",
      "Прокрастинация и откладывание важных задач в пользу игрового процесса",
      "Дефицит внимания к неигровым задачам из-за привыкания к интенсивной стимуляции в играх",
      "Трудности с долгосрочной концентрацией на монотонных задачах после яркого игрового опыта",
      "Снижение самоконтроля и целеполагания в реальной жизни",
    ],
    studies: [
      {
        author: "Gentile et al.",
        year: 2011,
        title: "Pathological video game use among youths",
      },
      {
        author: "Schmitt & Livingston",
        year: 2015,
        title: "Video game addiction and college performance",
      },
    ],
  },
  {
    icon: <Wallet />,
    title: "Финансовые проблемы",
    description:
      "Неконтролируемые расходы на внутриигровые покупки и новые игры.",
    details: [
      "Средние расходы активного игрока на внутриигровые покупки составляют $70-120 в месяц",
      "«Киты» — 0.5% игроков, обеспечивающие до 50% доходов от микротранзакций в free-to-play играх",
      "Принцип FOMO (Fear of Missing Out) провоцирует импульсивные покупки ограниченных предметов",
      "Внутриигровые валюты психологически отделяют пользователя от реальной стоимости покупок",
      "Риск развития импульсивного финансового поведения у подростков, не имеющих опыта управления финансами",
    ],
    studies: [
      {
        author: "King et al.",
        year: 2020,
        title: "Problematic risk-taking involving emerging technologies",
      },
      {
        author: "Zendle et al.",
        year: 2019,
        title: "Paying for loot boxes is linked to problem gambling",
      },
    ],
  },
  {
    icon: <PlusCircle />,
    title: "Проблемы со здоровьем",
    description:
      "Ухудшение зрения, туннельный синдром запястья, боли в спине и шее при длительных игровых сессиях.",
    details: [
      "Синдром компьютерного зрения: сухость глаз, размытость зрения, головные боли после длительной игры",
      "Туннельный синдром запястья из-за повторяющихся движений мышью и клавиатурой",
      "Нарушения осанки и проблемы с позвоночником при неправильной позе за компьютером",
      "Повышенный риск ожирения и сердечно-сосудистых заболеваний из-за сидячего образа жизни",
      "Тендинит и тендосиновит запястий и пальцев у профессиональных игроков",
    ],
    studies: [
      {
        author: "Torsheim et al.",
        year: 2010,
        title:
          "Screen-based activities and physical complaints among adolescents",
      },
      {
        author: "DiFrancisco-Donoghue et al.",
        year: 2019,
        title: "Managing the health of the eSport athlete",
      },
    ],
  },
  {
    icon: <MessageCircle />,
    title: "Социальная изоляция",
    description:
      "Замена реального общения виртуальным и ослабление существующих социальных связей.",
    details: [
      "Снижение частоты и качества реальных социальных взаимодействий при погружении в виртуальный мир",
      "Ограничение развития навыков невербальной коммуникации, важных для реального общения",
      "Формирование однобоких социальных кругов, ограниченных игровыми интересами",
      "Риск социальной тревожности при необходимости реального взаимодействия вне игры",
      "Потеря существующих дружеских и семейных связей из-за чрезмерного времени в игре",
    ],
    studies: [
      {
        author: "Lo et al.",
        year: 2005,
        title:
          "Physical and psychosocial consequences of excessive internet use",
      },
      {
        author: "Lemmens et al.",
        year: 2011,
        title: "Psychosocial causes and consequences of pathological gaming",
      },
    ],
  },
];

// Данные о влиянии игр по возрастным группам
const ageGroupsData = [
  /* ... (не изменялось, оставлено без изменений) */
];

// Компонент для возрастных групп
const AgeGroupCard = ({ group }: { group: (typeof ageGroupsData)[0] }) => (
  <Card className="mb-6">
    <CardHeader className="p-4 md:p-6">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="h-8 w-8 md:h-10 md:w-10 text-primary flex-shrink-0">
          {group.icon}
        </div>
        <div>
          <CardTitle className="text-base md:text-lg">{group.title}</CardTitle>
          <CardDescription className="text-xs md:text-sm mt-1">
            {group.description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="px-4 pb-4 md:px-6 md:pb-6 text-xs md:text-sm">
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-sm md:text-base text-primary">
            Положительное влияние:
          </h4>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            {group.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-sm md:text-base text-destructive">
            Риски и проблемы:
          </h4>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            {group.risks.map((risk, idx) => (
              <li key={idx}>{risk}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-sm md:text-base">
            Рекомендации:
          </h4>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            {group.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <details className="text-xs md:text-sm">
            <summary className="font-medium cursor-pointer text-sm md:text-base">
              Исследования
            </summary>
            <div className="mt-2">
              {group.studies.map((study, idx) => (
                <StudyItem
                  key={idx}
                  author={study.author}
                  year={study.year}
                  title={study.title}
                  journal={study.journal}
                  volume={study.volume}
                  pages={study.pages}
                />
              ))}
            </div>
          </details>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Данные о профессиональном гейминге и киберспорте
const professionalGamingData = {
  /* ... */
};

// Данные об истории игровой индустрии
const gameHistoryData = {
  title: "История и эволюция игровой индустрии",
  description: "Ключевые этапы развития видеоигр и их влияние на общество.",
  eras: [
    /* ... предыдущие эпохи без изменений ... */
    {
      icon: <Smartphone />,
      title: "Мобильная эра (2007-2013)",
      description: "Демократизация игр через смартфоны и казуальный гейминг.",
      events: [
        { year: 2007, title: "iPhone — начало революции мобильных игр" },
        { year: 2009, title: "Angry Birds — феномен казуальных мобильных игр" },
        {
          year: 2009,
          title: "League of Legends — рост популярности MOBA и киберспорта",
        },
        {
          year: 2011,
          title: "Minecraft — глобальный феномен пользовательского творчества",
        },
        { year: 2011, title: "Dark Souls — появление жанра «soulslike»" },
      ],
      impact:
        "Радикальное расширение игровой аудитории. Исследования геймификации образования и бизнес-процессов. Дискуссии о микротранзакциях и потенциальном сходстве с азартными играми. Первые серьезные исследования образовательного потенциала игр.",
    },
    /* ... последующие эпохи без изменений ... */
  ],
  trends: [
    /* ... */
  ],
};

const ImpactDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-6 md:py-16">
        <div className="container px-3 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 md:mb-8">
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="self-start font-medium"
            >
              <Link to="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1 md:mr-2" />
                На главную
              </Link>
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold mt-2 md:mt-0">
              Влияние игр
            </h1>
          </div>

          <Tabs defaultValue="positive" className="w-full">
            <div className="bg-background sticky top-0 z-10 pb-2 pt-1">
              <ScrollArea className="w-full pb-2">
                <TabsList className="w-full inline-flex min-w-max mb-2 text-sm">
                  <TabsTrigger
                    value="positive"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    Положительное
                  </TabsTrigger>
                  <TabsTrigger
                    value="negative"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    Негативное
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommendations"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    Рекомендации
                  </TabsTrigger>
                  <TabsTrigger
                    value="ages"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    Возрастные группы
                  </TabsTrigger>
                  <TabsTrigger
                    value="esports"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    Киберспорт
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="px-3 md:px-4 py-2 rounded-md"
                  >
                    История
                  </TabsTrigger>
                </TabsList>
              </ScrollArea>
            </div>

            <TabsContent value="positive" className="space-y-4 mt-2">
              {/* Остальной контент без изменений */}
            </TabsContent>

            {/* Остальные TabsContent без изменений */}
          </Tabs>

          <div className="flex justify-center mt-8 md:mt-12 sticky bottom-4 z-10">
            <Button
              onClick={scrollToTop}
              className="gap-2 shadow-md"
              size="default"
            >
              <ChevronUp className="h-4 w-4" /> Наверх
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactDetails;
