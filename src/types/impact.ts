
export type StudyReference = {
  author: string;
  year: number;
  title: string;
  journal?: string;
  volume?: string;
  pages?: string;
};

export type ImpactDetail = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  studies: StudyReference[];
  examples?: string[];
  prevention?: string[];
};

export type AgeGroup = {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  risks: string[];
  recommendations: string[];
  studies: StudyReference[];
};

export type HistoricalEra = {
  icon: React.ReactNode;
  title: string;
  description: string;
  events: Array<{
    year: number;
    title: string;
  }>;
  impact: string;
};

export type HealthyGamingCategory = {
  icon: React.ReactNode;
  title: string;
  recommendations: string[];
};

export type HealthyGamingRecommendation = {
  title: string;
  description: string;
  categories: HealthyGamingCategory[];
};

export type EsportStatistic = {
  value: string;
  label: string;
};

export type EsportAspect = {
  icon: React.ReactNode;
  title: string;
  points: string[];
};

export type ProfessionalGamingData = {
  statistics: EsportStatistic[];
  aspects: EsportAspect[];
};
