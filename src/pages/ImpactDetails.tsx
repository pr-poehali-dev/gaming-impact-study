import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Подробные данные о положительном влиянии
const positiveImpactsDetailed = [
  {
    icon: <Brain />,
    title: "Когнитивные способности",
    description: "Улучшение памяти, внимания, скорости обработки информации и многозадачности.",
    details: [
      "Экшн-игры улучшают пространственное внимание и скорость реакции на 10-20% по данным исследований",
      "Стратегические игры развивают аналитическое мышление и планирование",
      "Головоломки и логические игры улучшают память и функции префронтальной коры головного мозга",
      "Регулярные игроки демонстрируют лучшие результаты в тестах на переключение внимания",
      "Геймеры лучше справляются с многозадачностью и мониторингом нескольких объектов одновременно"
    ],
    studies: [
      { author: "Green & Bavelier", year: 2003, title: "Action video games modify visual selective attention" },
      { author: "Anguera et al.", year: 2013, title: "Video game training enhances cognitive control in older adults" }
    ]
  },
  {
    icon: <Sparkles />,
    title: "Креативность",
    description: "Развитие творческого мышления и инновационных подходов к решению проблем.",
    details: [
      "Игры с открытым миром стимулируют дивергентное мышление и генерацию идей",
      "Песочницы (Minecraft, Roblox) способствуют развитию креативного самовыражения",
      "Нестандартные решения игровых задач переносятся на реальные проблемы",
      "Разработка модификаций развивает технические и творческие навыки",
      "Повышение гибкости мышления через нелинейные сюжеты и множественные решения"
    ],
    studies: [
      { author: "Jackson et al.", year: 2012, title: "Information technology use and creativity" },
      { author: "Qian & Clark", year: 2016, title: "Game-based learning and 21st century skills" }
    ]
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
      "Снижение времени принятия решений в динамических условиях"
    ],
    studies: [
      { author: "Dye et al.", year: 2009, title: "Increasing speed of processing with action video games" },
      { author: "Li et al.", year: 2016, title: "Action video game play facilitates visual learning" }
    ]
  },
  {
    icon: <MessageCircle />,
    title: "Социализация",
    description: "Формирование новых социальных связей и развитие коммуникативных навыков в многопользовательских играх.",
    details: [
      "Развитие навыков командной работы и коммуникации в MMO и кооперативных играх",
      "Формирование международных сообществ и межкультурное взаимодействие",
      "Создание устойчивых социальных связей через общие игровые интересы",
      "Развитие лидерских качеств при организации рейдов и кланов",
      "Интеграция в социум людей с ограниченными возможностями и социальной тревожностью"
    ],
    studies: [
      { author: "Granic et al.", year: 2014, title: "The benefits of playing video games" },
      { author: "Kowert & Oldmeadow", year: 2013, title: "Social reputation: Exploring the relationship between gaming" }
    ]
  },
  {
    icon: <Heart />,
    title: "Эмоциональная разгрузка",
    description: "Снижение стресса и улучшение настроения в результате игрового процесса.",
    details: [
      "Снижение уровня кортизола (гормона стресса) на 17% после 30 минут игры",
      "Повышение уровня эндорфинов и дофамина при достижении игровых целей",
      "Переключение внимания от реальных проблем и тревожных мыслей",
      "Развитие навыков эмоциональной регуляции через игровые ситуации",
      "Создание безопасной среды для выражения и проработки сложных эмоций"
    ],
    studies: [
      { author: "Russoniello et al.", year: 2009, title: "The effectiveness of casual video games in improving mood" },
      { author: "Bowman & Tamborini", year: 2012, title: "Task demand and mood repair: The intervention potential of video games" }
    ]
  },
  {
    icon: <Lightbulb />,
    title: "Образовательный эффект",
    description: "Получение новых знаний и навыков через образовательные и исторические игры.",
    details: [
      "Повышение мотивации к обучению через геймификацию образовательного процесса",
      "Усвоение исторических знаний через игры с исторической тематикой (Assassin's Creed, Civilization)",
      "Освоение иностранных языков через погружение в игровую среду",
      "Развитие понимания экономических и ресурсных систем через стратегии",
      "Приобретение базовых навыков программирования через игры с элементами кодинга"
    ],
    studies: [
      { author: "Squire", year: 2008, title: "Video games and education: Designing learning systems for an interactive age" },
      { author: "McCall", year: 2016, title: "Teaching history with digital historical games" }
    ]
  },
];

// Подробные данные о негативном влиянии
const negativeImpactsDetailed = [
  {
    icon: <Gamepad2 />,
    title: "Игровая зависимость",
    description: "Формирование патологического влечения к играм, классифицированного ВОЗ как расстройство.",
    details: [
      "В 2018 году ВОЗ официально включила игровое расстройство в Международную классификацию болезней (МКБ-11)",
      "3-4% игроков соответствуют критериям игровой зависимости по данным международных исследований",
      "Основные симптомы: потеря контроля над игровым процессом, приоритет игр над другими жизненными сферами",
      "Механики лутбоксов и микротранзакций усиливают зависимость через механизмы, схожие с азартными играми",
      "Высокая коморбидность с тревожными и депрессивными расстройствами"
    ],
    studies: [
      { author: "Király et al.", year: 2020, title: "Policy responses to problematic video game use" },
      { author: "Zastrow", year: 2017, title: "News Feature: Is video game addiction really an addiction?" }
    ]
  },
  {
    icon: <TimerOff />,
    title: "Нарушение режима",
    description: "Сбои режима сна, питания и физической активности из-за длительных игровых сессий.",
    details: [
      "Подавление выработки мелатонина из-за синего света экранов, нарушающего циркадные ритмы",
      "Сокращение продолжительности сна на 1-2 часа у активных игроков по сравнению со средними показателями",
      "Снижение качества сна и увеличение времени засыпания после игровых сессий",
      "Повышенный риск развития метаболического синдрома из-за малоподвижного образа жизни",
      "Нерегулярное питание, пропуск приемов пищи и предпочтение фастфуда во время игр"
    ],
    studies: [
      { author: "Hale & Guan", year: 2015, title: "Screen time and sleep among school-aged children and adolescents" },
      { author: "Turel et al.", year: 2017, title: "Health outcomes of information system use lifestyles" }
    ]
  },
  {
    icon: <Timer />,
    title: "Снижение продуктивности",
    description: "Ухудшение успеваемости и результатов работы из-за чрезмерного времени, уделяемого играм.",
    details: [
      "Снижение академической успеваемости у студентов, проводящих более 20 часов в неделю за играми",
      "Прокрастинация и откладывание важных задач в пользу игрового процесса",
      "Дефицит внимания к неигровым задачам из-за привыкания к интенсивной стимуляции в играх",
      "Трудности с долгосрочной концентрацией на монотонных задачах после яркого игрового опыта",
      "Снижение самоконтроля и целеполагания в реальной жизни"
    ],
    studies: [
      { author: "Gentile et al.", year: 2011, title: "Pathological video game use among youths" },
      { author: "Schmitt & Livingston", year: 2015, title: "Video game addiction and college performance" }
    ]
  },
  {
    icon: <Wallet />,
    title: "Финансовые проблемы",
    description: "Неконтролируемые расходы на внутриигровые покупки и новые игры.",
    details: [
      "Средние расходы активного игрока на внутриигровые покупки составляют $70-120 в месяц",
      "«Киты» — 0.5% игроков, обеспечивающие до 50% доходов от микротранзакций в free-to-play играх",
      "Принцип FOMO (Fear of Missing Out) провоцирует импульсивные покупки ограниченных предметов",
      "Внутриигровые валюты психологически отделяют пользователя от реальной стоимости покупок",
      "Риск развития импульсивного финансового поведения у подростков, не имеющих опыта управления финансами"
    ],
    studies: [
      { author: "King et al.", year: 2020, title: "Problematic risk-taking involving emerging technologies" },
      { author: "Zendle et al.", year: 2019, title: "Paying for loot boxes is linked to problem gambling" }
    ]
  },
  {
    icon: <PlusCircle />,
    title: "Проблемы со здоровьем",
    description: "Ухудшение зрения, туннельный синдром запястья, боли в спине и шее при длительных игровых сессиях.",
    details: [
      "Синдром компьютерного зрения: сухость глаз, размытость зрения, головные боли после длительной игры",
      "Туннельный синдром запястья из-за повторяющихся движений мышью и клавиатурой",
      "Нарушения осанки и проблемы с позвоночником при неправильной позе за компьютером",
      "Повышенный риск ожирения и сердечно-сосудистых заболеваний из-за сидячего образа жизни",
      "Тендинит и тендосиновит запястий и пальцев у профессиональных игроков"
    ],
    studies: [
      { author: "Torsheim et al.", year: 2010, title: "Screen-based activities and physical complaints among adolescents" },
      { author: "DiFrancisco-Donoghue et al.", year: 2019, title: "Managing the health of the eSport athlete" }
    ]
  },
  {
    icon: <MessageCircle />,
    title: "Социальная изоляция",
    description: "Замена реального общения виртуальным и ослабление существующих социальных связей.",
    details: [
      "Снижение частоты и качества реальных социальных взаимодействий при погружении в виртуальный мир",
      "Ограничение развития навыков невербальной коммуникации, важных для реального общения",
      "Формирование однобоких социальных кругов, ограниченных игровыми интересами",
      "Риск социальной тревожности при необходимости реального взаимодействия вне игры",
      "Потеря существующих дружеских и семейных связей из-за чрезмерного времени в игре"
    ],
    studies: [
      { author: "Lo et al.", year: 2005, title: "Physical and psychosocial consequences of excessive internet use" },
      { author: "Lemmens et al.", year: 2011, title: "Psychosocial causes and consequences of pathological gaming" }
    ]
  },
];

// Данные о влиянии игр по возрастным группам
const ageGroupsData = [
  {
    icon: <Baby />,
    title: "Дети (5-12 лет)",
    description: "Влияние видеоигр на ранних этапах развития ребенка.",
    benefits: [
      "Развитие визуально-пространственных навыков через игры-головоломки",
      "Улучшение навыков чтения через игры с текстовыми элементами",
      "Повышение интереса к обучению через образовательные игры",
      "Развитие координации движений и моторики",
      "Формирование базовых навыков планирования и стратегического мышления"
    ],
    risks: [
      "Повышенная чувствительность к агрессивному контенту и возможное копирование поведения",
      "Риск раннего развития проблемного использования при отсутствии родительского контроля",
      "Вытеснение важных для развития видов деятельности (чтение, активные игры на свежем воздухе)",
      "Воздействие на незрелую систему регуляции эмоций и поведения",
      "Нарушение режима сна из-за повышенной стимуляции мозга"
    ],
    recommendations: [
      "Строгое ограничение игрового времени (не более 40-60 минут в день)",
      "Тщательный отбор игр с возрастным рейтингом, соответствующим развитию ребенка",
      "Совместная игра с родителями для обсуждения и контекстуализации контента",
      "Баланс между цифровыми и традиционными видами деятельности",
      "Использование родительского контроля для ограничения доступа к неподходящему контенту"
    ],
    studies: [
      { author: "Blumberg et al.", year: 2019, title: "Digital Games as a Context for Children's Cognitive Development", journal: "Journal of Applied Developmental Psychology", volume: "64", pages: "101054" },
      { author: "Przybylski & Weinstein", year: 2017, title: "Digital Screen Time Limits and Young Children's Psychological Well-being", journal: "Child Development", volume: "90", pages: "56-65" }
    ]
  },
  {
    icon: <School />,
    title: "Подростки (13-17 лет)",
    description: "Особенности влияния игр в подростковом возрасте.",
    benefits: [
      "Развитие навыков решения сложных проблем и систематического мышления",
      "Формирование идентичности и социальных связей через многопользовательские игры",
      "Поддержка освоения технических навыков и интереса к технологиям",
      "Развитие саморегуляции через соревновательный игровой опыт",
      "Обеспечение безопасного пространства для социальных экспериментов"
    ],
    risks: [
      "Повышенная уязвимость к развитию игровой зависимости из-за незрелости префронтальной коры",
      "Риск подверженности кибербуллингу и токсичным онлайн-взаимодействиям",
      "Нарушение учебного процесса при несбалансированном режиме игр",
      "Формирование искаженных представлений о гендерных ролях и социальных нормах",
      "Импульсивные внутриигровые покупки при отсутствии финансовой грамотности"
    ],
    recommendations: [
      "Установление согласованных правил использования игр с учетом мнения подростка",
      "Открытое обсуждение игрового контента и проблем онлайн-взаимодействия",
      "Поощрение участия в сбалансированных офлайн-активностях",
      "Обучение критическому анализу игрового контента и медиаграмотности",
      "Постепенное развитие навыков саморегуляции игрового времени"
    ],
    studies: [
      { author: "Drummond & Sauer", year: 2020, title: "Video game play is positively correlated with well-being", journal: "Royal Society Open Science", volume: "7", pages: "202049" },
      { author: "Lobel et al.", year: 2017, title: "Video Gaming and Children's Psychosocial Wellbeing", journal: "Journal of Youth and Adolescence", volume: "46", pages: "884-897" }
    ]
  },
  {
    icon: <GraduationCap />,
    title: "Молодые взрослые (18-25 лет)",
    description: "Влияние игр в период формирования самостоятельности.",
    benefits: [
      "Поддержание социальных связей в период учебной или профессиональной мобильности",
      "Развитие критического мышления и анализа сложных систем",
      "Помощь в справлении со стрессом в период жизненных перемен",
      "Формирование сообществ по интересам и новых профессиональных контактов",
      "Возможности освоения профессиональных навыков (программирование, дизайн, менеджмент проектов)"
    ],
    risks: [
      "Пренебрежение учебными или карьерными обязанностями при проблемном использовании",
      "Финансовые риски из-за чрезмерных расходов на игры и микротранзакции",
      "Нарушение режима сна из-за поздних игровых сессий",
      "Социальная изоляция при замене реального общения виртуальным",
      "Потенциальное влияние на профессиональное самоопределение"
    ],
    recommendations: [
      "Развитие осознанного отношения к игровому процессу и потраченному времени",
      "Интеграция игровых хобби в профессиональное развитие (например, стриминг, киберспорт, дизайн)",
      "Использование систем тайм-менеджмента для баланса игровой активности",
      "Поддержание разнообразия социальной активности как онлайн, так и офлайн",
      "Установление четких приоритетов между обязанностями и развлечениями"
    ],
    studies: [
      { author: "Johannes et al.", year: 2021, title: "Video game use and emotional functioning in emerging adults", journal: "Developmental Psychology", volume: "57", pages: "97-110" },
      { author: "Partin & Hussain", year: 2019, title: "Digital games and career development in young adults", journal: "International Journal of Game-Based Learning", volume: "9", pages: "1-15" }
    ]
  },
  {
    icon: <Briefcase />,
    title: "Взрослые (26+ лет)",
    description: "Особенности влияния игр на сформировавшихся личностей.",
    benefits: [
      "Поддержание когнитивной гибкости и замедление возрастного снижения когнитивных функций",
      "Средство расслабления и борьбы со стрессом в рабочей среде",
      "Поддержание социальных связей, особенно в условиях ограниченной мобильности",
      "Реализация творческого потенциала через игры-песочницы и моды",
      "Возможность совместного досуга с детьми и партнерами"
    ],
    risks: [
      "Конфликты в семейных отношениях из-за несбалансированного игрового времени",
      "Пренебрежение профессиональными и семейными обязанностями",
      "Эргономические проблемы и боли при длительных игровых сессиях",
      "Использование игр как единственного способа справления со стрессом",
      "Финансовые риски при импульсивных покупках"
    ],
    recommendations: [
      "Интеграция игр в семейный досуг вместо изоляции для игры",
      "Сознательное планирование игрового времени с учетом рабочих и семейных обязанностей",
      "Выбор игр, соответствующих доступному времени (например, с сохранением прогресса короткими сессиями)",
      "Поддержание эргономичного игрового пространства для минимизации физических проблем",
      "Использование игр как дополнительного, а не основного способа релаксации"
    ],
    studies: [
      { author: "Kühn et al.", year: 2014, title: "Playing Super Mario induces structural brain plasticity", journal: "Molecular Psychiatry", volume: "19", pages: "265-271" },
      { author: "Pallavicini et al.", year: 2018, title: "Video games for well-being: A systematic review", journal: "Games for Health Journal", volume: "7", pages: "209-224" }
    ]
  }
];

// Данные о профессиональном гейминге и киберспорте
const professionalGamingData = {
  title: "Профессиональный гейминг и киберспорт",
  description: "Особенности и влияние профессиональной игровой деятельности на физическое и психологическое состояние.",
  statistics: [
    { value: "$1.1 млрд", label: "объем мирового рынка киберспорта в 2023 году" },
    { value: "30 000+", label: "профессиональных игроков по всему миру" },
    { value: "$50 млн", label: "призовой фонд крупнейшего турнира The International" },
    { value: "14-16 часов", label: "среднее время тренировок профессионалов в день" },
    { value: "80%", label: "профессиональных игроков моложе 25 лет" }
  ],
  aspects: [
    {
      icon: <Trophy />,
      title: "Карьера и доходы",
      points: [
        "Средняя карьера киберспортсмена длится 4-5 лет из-за высоких физических и психологических нагрузок",
        "Топовые игроки зарабатывают от $500 тыс. до $3 млн в год через призовые, зарплаты и спонсорские контракты",
        "Значительное неравенство доходов: 1% киберспортсменов получает более 30% всех доходов отрасли",
        "Риски финансовой нестабильности после завершения карьеры из-за отсутствия долгосрочного планирования",
        "Дополнительные карьерные пути: тренер, аналитик, стример, комментатор, менеджер команды"
      ]
    },
    {
      icon: <Heart />,
      title: "Здоровье и благополучие",
      points: [
        "Распространенные проблемы: туннельный синдром, тендинит запястья, сухость глаз, боли в спине и шее",
        "73% профессиональных игроков сообщают о симптомах эмоционального выгорания",
        "Нарушения сна у 60% киберспортсменов из-за графика тренировок и соревнований",
        "Высокий уровень стресса из-за публичности и непостоянства результатов",
        "Несбалансированное питание и низкий уровень физической активности у большинства игроков"
      ]
    },
    {
      icon: <Brain />,
      title: "Когнитивные особенности",
      points: [
        "Экстремально высокий уровень реакции: до 0.15-0.2 мс у профессиональных игроков",
        "Способность обрабатывать и интерпретировать до 400 игровых действий в минуту",
        "Исключительная визуальная концентрация и распределение внимания",
        "Повышенная когнитивная гибкость и адаптивность к изменяющимся условиям",
        "Развитые навыки принятия решений в условиях неполной информации и временных ограничений"
      ]
    },
    {
      icon: <Briefcase />,
      title: "Организационные аспекты",
      points: [
        "Развитие профессиональной инфраструктуры: тренировочные базы, медицинское сопровождение, психологи",
        "Включение киберспорта в образовательные программы университетов через стипендии и курсы",
        "Формирование отраслевых стандартов по контрактам, медицинским проверкам и условиям тренировок",
        "Развитие киберспортивных федераций и ассоциаций для защиты прав игроков",
        "Интеграция спортивной науки: анализ производительности, оптимизация тренировок, ментальный коучинг"
      ]
    }
  ],
  recommendations: [
    "Регулярные медицинские осмотры, включая проверку зрения и состояния опорно-двигательного аппарата",
    "Интеграция физических тренировок и эргономических перерывов в режим тренировок",
    "Работа с психологом для управления стрессом и предотвращения выгорания",
    "Финансовое планирование и инвестирование для обеспечения будущего после завершения карьеры",
    "Сбалансированное питание и режим сна с учетом графика соревнований",
    "Развитие навыков вне игры для обеспечения успешного перехода после завершения карьеры"
  ],
  studies: [
    { author: "Hollist", year: 2015, title: "Time to be grown-ups about video gaming: the rising eSports industry", journal: "Arizona Law Review", volume: "57", pages: "823-847" },
    { author: "DiFrancisco-Donoghue et al.", year: 2019, title: "Managing the health of the eSport athlete", journal: "BMJ Open Sport & Exercise Medicine", volume: "5", pages: "e000467" },
    { author: "Pedraza-Ramirez et al.", year: 2020, title: "Setting the scientific stage for esports psychology", journal: "International Review of Sport and Exercise Psychology", volume: "13", pages: "319-352" }
  ]
};

// Данные об истории игровой индустрии
const gameHistoryData = {
  title: "История и эволюция игровой индустрии",
  description: "Ключевые этапы развития видеоигр и их влияние на общество.",
  eras: [
    {
      icon: <History />,
      title: "Ранний период (1950-1970)",
      description: "Зарождение игровой индустрии в академической и экспериментальной среде.",
      events: [
        { year: 1952, title: "Создание «OXO» — первой графической компьютерной игры (крестики-нолики)" },
        { year: 1958, title: "Теннис для двоих» — первая игра с интерактивной графикой" },
        { year: 1962, title: "Spacewar! — первая широко распространенная компьютерная игра" },
        { year: 1972, title: "Появление Magnavox Odyssey — первой домашней игровой консоли" },
        { year: 1972, title: "Выпуск Pong компанией Atari — начало коммерческой эры аркадных игр" }
      ],
      impact: "В этот период игры рассматривались преимущественно как технологические демонстрации и простые развлечения. Исследования их влияния на человека практически отсутствовали, но был заложен фундамент интерактивного цифрового опыта."
    },
    {
      icon: <Gamepad2 />,
      title: "Золотой век аркад (1970-1983)",
      description: "Расцвет аркадных автоматов и первых домашних консолей.",
      events: [
        { year: 1978, title: "Space Invaders — игра, спровоцировавшая нехватку монет в Японии" },
        { year: 1980, title: "Pac-Man — культурный феномен, выходящий за рамки игровой индустрии" },
        { year: 1981, title: "Donkey Kong — дебют Марио и революция в повествовательной механике" },
        { year: 1982, title: "Пик аркадной индустрии с доходом $8 млрд только в США" },
        { year: 1983, title: "Кризис видеоигр в Северной Америке, обрушивший индустрию на 97%" }
      ],
      impact: "Появились первые общественные дискуссии о потенциальном негативном влиянии видеоигр, включая формирование зависимости и «пустую трату времени». Родительские группы выражали обеспокоенность влиянием аркад на академическую успеваемость."
    },
    {
      icon: <Atom />,
      title: "Эпоха 8-битных консолей (1983-1989)",
      description: "Возрождение индустрии благодаря Nintendo и появление первых игровых франшиз.",
      events: [
        { year: 1983, title: "Выпуск Nintendo Famicom в Японии (NES в Северной Америке)" },
        { year: 1985, title: "Super Mario Bros. — революция в дизайне платформеров" },
        { year: 1986, title: "The Legend of Zelda — создание жанра action-adventure" },
        { year: 1987, title: "Final Fantasy — становление JRPG как значимого жанра" },
        { year: 1989, title: "Game Boy — начало эры портативного гейминга" }
      ],
      impact: "Игры начали восприниматься как часть детской и подростковой культуры. Появились первые исследования когнитивных эффектов видеоигр, в основном фокусирующиеся на координации движений и реакции."
    },
    {
      icon: <Globe />,
      title: "Эра 16-битных систем (1989-1995)",
      description: "Соперничество Sega и Nintendo, технологическая эволюция игрового дизайна.",
      events: [
        { year: 1989, title: "Выпуск Sega Genesis/Mega Drive — начало «консольных войн»" },
        { year: 1991, title: "Sonic the Hedgehog — ответ Sega на успех Mario" },
        { year: 1991, title: "Street Fighter II — революция в жанре файтингов" },
        { year: 1992, title: "Mortal Kombat — первые крупные дебаты о насилии в играх" },
        { year: 1993, title: "Doom — популяризация жанра FPS и модификаций игр" }
      ],
      impact: "Повышенное внимание к насилию в играх привело к созданию систем рейтингов (ESRB) и первым серьезным исследованиям влияния игрового насилия на агрессивное поведение. Появились первые правительственные слушания по видеоиграм."
    },
    {
      icon: <Shield />,
      title: "Переход к 3D (1995-2000)",
      description: "Революция 3D-графики и расширение игровой аудитории.",
      events: [
        { year: 1994, title: "PlayStation — выход Sony на рынок консолей" },
        { year: 1996, title: "Nintendo 64 и Super Mario 64 — стандарт 3D-платформеров" },
        { year: 1996, title: "Resident Evil — определение жанра хоррор-выживания" },
        { year: 1997, title: "Final Fantasy VII — популяризация JRPG на Западе" },
        { year: 1998, title: "Half-Life — революция в повествовательных FPS" }
      ],
      impact: "Игры становятся признанной формой медиа с более сложными нарративами. Первые крупномасштабные исследования игровой зависимости и дискуссии о возрастных рейтингах и цензуре. Игровая аудитория начинает взрослеть вместе с индустрией."
    },
    {
      icon: <Zap />,
      title: "Онлайн-революция (2000-2005)",
      description: "Развитие онлайн-игр и расширение игровых жанров.",
      events: [
        { year: 2000, title: "The Sims — симулятор жизни, популярный среди нетрадиционной аудитории" },
        { year: 2001, title: "Xbox — выход Microsoft на консольный рынок" },
        { year: 2001, title: "Grand Theft Auto III — революция в открытом мире" },
        { year: 2004, title: "World of Warcraft — массовое распространение MMORPG" },
        { year: 2005, title: "Xbox 360 — развитие онлайн-сервисов для консолей" }
      ],
      impact: "Рост социальных аспектов игр через онлайн-взаимодействие. Углубление исследований положительных эффектов, включая социализацию и развитие навыков сотрудничества. Первые исследования MMO-зависимости и виртуальных экономик."
    },
    {
      icon: <Smartphone />,
      title: "Мобильная эра (2007-2013)",
      description: "Демократизация игр через смартфоны и казуальный гейминг.",
      events: [
        { year: 2007, title: "iPhone — начало революции мобильных игр" },
        { year: 2009, title: "Angry Birds — феномен казуальных мобильных игр" },
        { year: 2009, title: "League of Legends — рост популярности MOBA и киберспорта" },
        { year: 2011, title: "Minecraft — глобальный феномен пользовательского творчества" },
        { year: 2011, title: "Dark Souls — появление жанра «soulslike"" }
      ],
      impact: "Радикальное расширение игровой аудитории. Исследования геймификации образования и бизнес-процессов. Дискуссии о микротранзакциях и потенциальном сходстве с азартными играми. Первые серьезные исследования образовательного потенциала игр."
    },
    {
      icon: <User />,
      title: "Современная эпоха (2013-настоящее время)",
      description: "Расцвет инди-игр, виртуальной реальности и стриминга.",
      events: [
        { year: 2013, title: "Выпуск PlayStation 4 и Xbox One — консоли как медиа-центры" },
        { year: 2016, title: "Выход массовых VR-платформ: Oculus Rift, HTC Vive" },
        { year: 2016, title: "Pokémon GO — феномен дополненной реальности" },
        { year: 2018, title: "Fortnite — трансформация игр в социальные платформы" },
        { year: 2020, title: "Бум игровой индустрии во время пандемии COVID-19" }
      ],
      impact: "Признание игр как доминирующей формы медиа и искусства. Комплексные исследования психологического, социального и когнитивного влияния. Включение игрового расстройства в МКБ-11. Развитие терапевтических применений игр и виртуальной реальности."
    }
  ],
  trends: [
    {
      title: "Метавселенные и социальные пространства",
      description: "Эволюция игр от структурированных развлечений к виртуальным социальным пространствам с собственными экономиками и культурами.",
      examples: ["Roblox", "Fortnite", "VRChat", "Minecraft"]
    },
    {
      title: "Игры и здравоохранение",
      description: "Развитие терапевтических применений игр для лечения депрессии, тревожности, СДВГ и восстановления когнитивных функций.",
      examples: ["EndeavorRx", "Sea Hero Quest", "SPARX", "Rehabgaming"]
    },
    {
      title: "Искусственный интеллект",
      description: "Использование ИИ для создания процедурно-генерируемого контента, адаптивной сложности и реалистичного поведения NPC.",
      examples: ["No Man's Sky", "AI Dungeon", "Shadow of Mordor (система Nemesis)", "Façade"]
    },
    {
      title: "Доступность и инклюзивность",
      description: "Разработка технологий и дизайн-решений для расширения доступности игр для людей с ограниченными возможностями.",
      examples: ["Xbox Adaptive Controller", "The Last of Us Part II (более 60 функций доступности)", "Blind Legend", "Auditoria"]
    }
  ]
};

// Компонент для отображения научных исследований
type StudyItemProps = {
  author: string;
  year: number;
  title: string;
  journal?: string;
  volume?: string;
  pages?: string;
};

const StudyItem = ({ author, year, title, journal, volume, pages }: StudyItemProps) => (
  <div className="ml-4 mt-1 text-sm">
    <span className="font-medium">{author}</span> ({year}). <span className="italic">{title}</span>
    {journal && <span> ({journal}, {volume}, {pages})</span>}
  </div>
);

// Компонент для отображения подробной информации
type DetailCardProps = {
  impact: {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    studies: Array<{
      author: string;
      year: number;
      title: string;
    };
  };
  iconColor?: string;
};

const DetailCard = ({ impact, iconColor = "text-primary" }: DetailCardProps) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-start gap-4">
        <div className={`h-10 w-10 ${iconColor} flex-shrink-0`}>{impact.icon}</div>
        <div>
          <CardTitle>{impact.title}</CardTitle>
          <CardDescription>{impact.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Подробности:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {impact.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Исследования:</h4>
          {impact.studies.map((study, idx) => (
            <StudyItem 
              key={idx}
              author={study.author}
              year={study.year}
              title={study.title}
            />
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Компонент для отображения возрастных групп
const AgeGroupCard = ({ group }: { group: typeof ageGroupsData[0] }) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 text-primary flex-shrink-0">{group.icon}</div>
        <div>
          <CardTitle>{group.title}</CardTitle>
          <CardDescription>{group.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-primary">Положительное влияние:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {group.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2 text-destructive">Риски и проблемы:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {group.risks.map((risk, idx) => (
              <li key={idx}>{risk}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Рекомендации:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {group.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Ключевые исследования:</h4>
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
      </div>
    </CardContent>
  </Card>
);

// Компонент для профессионального гейминга
const ProfessionalGamingSection = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">{professionalGamingData.title}</h2>
    <p className="text-muted-foreground mb-6">{professionalGamingData.description}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {professionalGamingData.statistics.map((stat, idx) => (
        <Card key={idx} className="bg-primary/5 border-primary/20 text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    
    {professionalGamingData.aspects.map((aspect, idx) => (
      <Card key={idx} className="mb-6">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 text-primary flex-shrink-0">{aspect.icon}</div>
            <CardTitle>{aspect.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {aspect.points.map((point, pointIdx) => (
              <li key={pointIdx}>{point}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
    
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" /> Рекомендации для профессиональных игроков
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6 space-y-2">
          {professionalGamingData.recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" /> Научные исследования киберспорта
        </CardTitle>
      </CardHeader>
      <CardContent>
        {professionalGamingData.studies.map((study, idx) => (
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
      </CardContent>
    </Card>
  </div>
);

// Компонент для истории игр
const GameHistorySection = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">{gameHistoryData.title}</h2>
    <p className="text-muted-foreground mb-6">{gameHistoryData.description}</p>
    
    {gameHistoryData.eras.map((era, idx) => (
      <Card key={idx} className="mb-6">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 text-primary flex-shrink-0">{era.icon}</div>
            <div>
              <CardTitle>{era.title}</CardTitle>
              <CardDescription>{era.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ul className="space-y-2">
              {era.events.map((event, eventIdx) => (
                <li key={eventIdx} className="flex gap-2">
                  <span className="font-bold">{event.year}:</span>
                  <span>{event.title}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-4 bg-muted rounded-md mt-4">
              <h4 className="font-medium mb-2">Влияние на общество:</h4>
              <p>{era.impact}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
    
    <h3 className="text-xl font-bold mt-8 mb-4">Современные тенденции развития</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {gameHistoryData.trends.map((trend, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{trend.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{trend.description}</p>
            <div className="flex flex-wrap gap-2">
              {trend.examples.map((example, exIdx) => (
                <span key={exIdx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {example}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ImpactDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                На главную
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Подробная информация о влиянии игр</h1>
          </div>

          <Tabs defaultValue="positive" className="w-full">
            <TabsList className="flex flex-wrap mb-8">
              <TabsTrigger value="positive">Положительное</TabsTrigger>
              <TabsTrigger value="negative">Негативное</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
              <TabsTrigger value="ages">Возрастные группы</TabsTrigger>
              <TabsTrigger value="esports">Киберспорт</TabsTrigger>
              <TabsTrigger value="history">История игр</TabsTrigger>
            </TabsList>
            
            <TabsContent value="positive" className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Современные научные исследования подтверждают, что умеренное и контролируемое использование 
                компьютерных игр может оказывать значительное положительное влияние на различные аспекты 
                когнитивного, эмоционального и социального развития.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" /> Когнитивные преимущества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Регулярные игроки показывают улучшение на 10-15% в тестах на внимание, пространственное мышление и скорость обработки информации по сравнению с неиграющими сверстниками.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowUpRight className="h-5 w-5" /> Успехи в образовании
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Образовательные игры увеличивают усвоение материала на 40% и повышают мотивацию к обучению у 83% учащихся по данным исследований EdTech.</p>
                  </CardContent>
                </Card>
              </div>
              
              {positiveImpactsDetailed.map((impact, index) => (
                <DetailCard 
                  key={index}
                  impact={impact}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="negative" className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Несмотря на положительные аспекты, чрезмерное и неконтролируемое использование компьютерных игр 
                может привести к значительным негативным последствиям для физического и психического здоровья, 
                социальной адаптации и общего благополучия.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5" /> Распространенность зависимости
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>По данным международных исследований, от 3% до 4% игроков демонстрируют признаки игровой зависимости. Среди подростков эта цифра может достигать 8.5%.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PlusCircle className="h-5 w-5" /> Физические последствия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>70% регулярных игроков сообщают о проблемах со зрением, 60% — о болях в запястьях и шее после длительных игровых сессий, а 45% — о нарушениях сна.</p>
                  </CardContent>
                </Card>
              </div>
              
              {negativeImpactsDetailed.map((impact, index) => (
                <DetailCard 
                  key={index}
                  impact={impact}
                  iconColor="text-destructive"
                />
              ))}
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Здоровый гейминг — это баланс между получением удовольствия от игр и поддержанием физического и 
                психического благополучия. Следующие рекомендации помогут максимизировать положительные эффекты 
                от игр и минимизировать потенциальные риски.
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">{healthyGamingRecommendations.title}</h2>
                <p className="text-muted-foreground mb-8">{healthyGamingRecommendations.description}</p>
                
                {healthyGamingRecommendations.categories.map((category, index) => (
                  <HealthyGamingCard key={index} category={category} />
                ))}
              </div>
              
              <Card className="mb-6 bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" /> Оптимальное игровое время
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Исследования показывают, что оптимальное время для игр без негативных последствий составляет:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Дети 6-12 лет:</strong> не более 1 часа в день с перерывами</li>
                    <li><strong>Подростки 13-17 лет:</strong> до 2 часов в день</li>
                    <li><strong>Взрослые:</strong> до 2-3 часов в день при условии соблюдения других аспектов здорового образа жизни</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Признаки проблемного использования игр
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Обратите внимание на следующие предупреждающие сигналы:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Постоянные мысли об играх, даже когда вы не играете</li>
                    <li>Раздражительность и беспокойство при невозможности поиграть</li>
                    <li>Необходимость играть все дольше для получения удовлетворения</li>
                    <li>Безуспешные попытки сократить время в игре</li>
                    <li>Пренебрежение другими обязанностями и интересами ради игр</li>
                    <li>Использование игр как основного способа справиться со стрессом или негативными эмоциями</li>
                    <li>Ложь о времени, проведенном в играх</li>
                  </ul>
                  <p className="mt-4">Если вы заметили несколько из этих признаков, рекомендуется обратиться к специалисту по зависимостям или психологу.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ages" className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Влияние видеоигр существенно различается в зависимости от возраста и стадии развития человека. 
                Понимание этих различий помогает формировать здоровые игровые привычки на каждом этапе жизни.
              </p>
              
              {ageGroupsData.map((group, index) => (
                <AgeGroupCard key={index} group={group} />
              ))}
            </TabsContent>
            
            <TabsContent value="esports" className="space-y-4">
              <ProfessionalGamingSection />
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <GameHistorySection />
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button onClick={scrollToTop} className="gap-2">
              Вернуться наверх <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactDetails;