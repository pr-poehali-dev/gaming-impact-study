
import PositiveImpact from "./impact/PositiveImpact";
import NegativeImpact from "./impact/NegativeImpact";

// Экспортируем компоненты отдельно для гибкости использования
export { PositiveImpact, NegativeImpact };

// Экспортируем их вместе как единый модуль для удобства импорта
const ImpactSection = {
  Positive: PositiveImpact,
  Negative: NegativeImpact
};

export default ImpactSection;
