
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ChevronRight, Gamepad2, Heart, Lightbulb, MessageCircle, Network, PlusCircle, Sparkles, TimerOff, Timer, Wallet } from "lucide-react";

export const PositiveImpact = () => {
  return (
    <section id="positive" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Положительное влияние игр</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Современные исследования подтверждают многочисленные позитивные эффекты от умеренного и сбалансированного геймплея
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Когнитивные способности</h3>
                  <p className="text-muted-foreground">Улучшение памяти, внимания, скорости обработки информации и многозадачности.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Креативность</h3>
                  <p className="text-muted-foreground">Развитие творческого мышления и инновационных подходов к решению проблем.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Network className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Координация</h3>
                  <p className="text-muted-foreground">Повышение зрительно-моторной координации и скорости реакции.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Социализация</h3>
                  <p className="text-muted-foreground">Формирование новых социальных связей и развитие коммуникативных навыков в многопользовательских играх.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Эмоциональная разгрузка</h3>
                  <p className="text-muted-foreground">Снижение стресса и улучшение настроения в результате игрового процесса.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Образовательный эффект</h3>
                  <p className="text-muted-foreground">Получение новых знаний и навыков через образовательные и исторические игры.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button
            onClick={() => {
              document.getElementById("negative")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-2"
          >
            Негативное влияние <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export const NegativeImpact = () => {
  return (
    <section id="negative" className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Потенциальные риски</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          При чрезмерном увлечении компьютерными играми могут возникать следующие проблемы
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Gamepad2 className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Игровая зависимость</h3>
                  <p className="text-muted-foreground">Формирование патологического влечения к играм, классифицированного ВОЗ как расстройство.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <TimerOff className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Нарушение режима</h3>
                  <p className="text-muted-foreground">Сбои режима сна, питания и физической активности из-за длительных игровых сессий.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Timer className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Снижение продуктивности</h3>
                  <p className="text-muted-foreground">Ухудшение успеваемости и результатов работы из-за чрезмерного времени, уделяемого играм.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Wallet className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Финансовые проблемы</h3>
                  <p className="text-muted-foreground">Неконтролируемые расходы на внутриигровые покупки и новые игры.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <PlusCircle className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Проблемы со здоровьем</h3>
                  <p className="text-muted-foreground">Ухудшение зрения, туннельный синдром запястья, боли в спине и шее при длительных игровых сессиях.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Социальная изоляция</h3>
                  <p className="text-muted-foreground">Замена реального общения виртуальным и ослабление существующих социальных связей.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button
            onClick={() => {
              document.getElementById("genres")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-2"
          >
            Жанры игр <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
