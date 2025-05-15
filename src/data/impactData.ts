
import {
  Brain,
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
} from "lucide-react";
import { ReactNode } from "react";

export type ImpactData = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const positiveImpactsData: ImpactData[] = [
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

export const negativeImpactsData: ImpactData[] = [
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
