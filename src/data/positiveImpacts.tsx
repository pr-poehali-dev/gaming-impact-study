
import { ImpactDetail } from "@/types/impact";
import { 
  Brain, 
  Heart, 
  Lightbulb, 
  MessageCircle, 
  Network, 
  Sparkles
} from "lucide-react";

export const positiveImpactsDetailed: ImpactDetail[] = [
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
