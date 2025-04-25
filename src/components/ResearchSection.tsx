
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, BookOpen } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="research" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Научные исследования</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Актуальные научные работы, изучающие влияние видеоигр на познавательные способности, поведение и здоровье
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Когнитивные науки</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Impact of Video Games on Cognitive Function</h3>
              <p className="text-muted-foreground mb-4">Daphne Bavelier, C. Shawn Green (2019)</p>
              <p className="text-sm">Исследование показывает, что определенные жанры видеоигр могут улучшать внимание, память и пространственные навыки у игроков всех возрастов.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> Nature Reviews Neuroscience
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Психология</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Games and Prosocial Behavior</h3>
              <p className="text-muted-foreground mb-4">Tobias Greitemeyer, Silvia Osswald (2022)</p>
              <p className="text-sm">Метаанализ показал, что просоциальные видеоигры способствуют более альтруистическому поведению и повышают эмпатию в реальных ситуациях.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> Journal of Personality and Social Psychology
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Медицина</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gaming Disorder: Clinical Implications</h3>
              <p className="text-muted-foreground mb-4">Vladimir Poznyak, Daria Kuss (2021)</p>
              <p className="text-sm">Клиническое исследование игрового расстройства, включенного в МКБ-11, и рекомендации по диагностике и лечению игровой зависимости.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> World Health Organization
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Образование</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Educational Games and Academic Performance</h3>
              <p className="text-muted-foreground mb-4">James Paul Gee, Elisabeth Hayes (2023)</p>
              <p className="text-sm">Долгосрочное исследование показало, что интеграция образовательных игр в учебный процесс улучшает успеваемость и вовлеченность учащихся.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> Educational Researcher
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Неврология</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Neural Correlates of Video Game Experience</h3>
              <p className="text-muted-foreground mb-4">Simone Kühn, Jürgen Gallinat (2020)</p>
              <p className="text-sm">МРТ-исследование обнаружило, что регулярная игра в видеоигры связана с увеличением объема серого вещества в определенных областях мозга.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> Neuroscience &amp; Biobehavioral Reviews
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4">
                <span className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full">Социология</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gender and Gaming Communities</h3>
              <p className="text-muted-foreground mb-4">T.L. Taylor, Amanda Cote (2022)</p>
              <p className="text-sm">Исследование изучает гендерную динамику и инклюзивность в игровых сообществах, а также факторы, влияющие на разнообразие в игровой индустрии.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" /> Games and Culture
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Подробнее <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Вернуться наверх
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
