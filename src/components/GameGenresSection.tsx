
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GameGenresSection = () => {
  return (
    <section id="genres" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Жанры игр и их влияние</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Различные жанры компьютерных игр по-разному влияют на когнитивные и социальные навыки игроков
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Стратегии</CardTitle>
              <CardDescription>RTS, пошаговые, 4X</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Развивают стратегическое мышление, планирование, принятие решений и управление ресурсами. Улучшают когнитивную гибкость и способность к долгосрочному планированию.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Экшн и шутеры</CardTitle>
              <CardDescription>FPS, TPS, Battle Royale</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Улучшают реакцию, пространственное мышление и координацию. Развивают навыки многозадачности и быстрого принятия решений в стрессовых ситуациях.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ролевые игры</CardTitle>
              <CardDescription>RPG, MMORPG, Action RPG</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Развивают эмпатию, навыки повествования и социального взаимодействия. Способствуют развитию креативности и эмоционального интеллекта.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Головоломки</CardTitle>
              <CardDescription>Логические игры, пазлы</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Улучшают логическое мышление, способность решать проблемы и критическое мышление. Положительно влияют на когнитивные функции мозга.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Симуляторы</CardTitle>
              <CardDescription>Спортивные, жизни, техники</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Развивают специализированные навыки и знания в конкретных областях. Помогают улучшить внимание к деталям и точность действий.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Образовательные</CardTitle>
              <CardDescription>Серьезные игры, обучающие</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Помогают осваивать новые знания и навыки в увлекательной форме. Повышают мотивацию к обучению и развивают любознательность.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => {
                document.getElementById("positive")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Положительное влияние
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                document.getElementById("negative")?.scrollIntoView({ behavior: "smooth" });
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
