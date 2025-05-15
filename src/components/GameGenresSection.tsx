import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GameGenresSection = () => {
  return (
    <section id="genres" className="py-14 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
          Жанры игр и их влияние
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Различные жанры компьютерных игр по-разному влияют на когнитивные и
          социальные навыки игроков
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Стратегии</CardTitle>
              <CardDescription className="text-base">
                RTS, пошаговые, 4X
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Развивают стратегическое мышление, планирование, принятие
                решений и управление ресурсами. Улучшают когнитивную гибкость и
                способность к долгосрочному планированию.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Экшн и шутеры</CardTitle>
              <CardDescription className="text-base">
                FPS, TPS, Battle Royale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Улучшают реакцию, пространственное мышление и координацию.
                Развивают навыки многозадачности и быстрого принятия решений в
                стрессовых ситуациях.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Ролевые игры</CardTitle>
              <CardDescription className="text-base">
                RPG, MMORPG, Action RPG
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Развивают эмпатию, навыки повествования и социального
                взаимодействия. Способствуют развитию креативности и
                эмоционального интеллекта.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Головоломки</CardTitle>
              <CardDescription className="text-base">
                Логические игры, пазлы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Улучшают логическое мышление, способность решать проблемы и
                критическое мышление. Положительно влияют на когнитивные функции
                мозга.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Симуляторы</CardTitle>
              <CardDescription className="text-base">
                Спортивные, жизни, техники
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Развивают специализированные навыки и знания в конкретных
                областях. Помогают улучшить внимание к деталям и точность
                действий.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Образовательные</CardTitle>
              <CardDescription className="text-base">
                Серьезные игры, обучающие
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Помогают осваивать новые знания и навыки в увлекательной форме.
                Повышают мотивацию к обучению и развивают любознательность.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              className="text-base min-w-[160px] h-11"
              onClick={() => {
                document
                  .getElementById("positive")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Положительное влияние
            </Button>
            <Button
              variant="outline"
              className="text-base min-w-[160px] h-11"
              onClick={() => {
                document
                  .getElementById("negative")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Негативное влияние
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameGenresSection;
