
import { Button } from "@/components/ui/button";

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Статистика игровой индустрии</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">3.1 млрд</div>
            <p className="text-muted-foreground">активных игроков в мире</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">184 млрд $</div>
            <p className="text-muted-foreground">объем рынка в 2023 году</p>
          </div>
          
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">8.4 часа</div>
            <p className="text-muted-foreground">среднее время игры в неделю</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              onClick={() => {
                document.getElementById("genres")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Жанры игр
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                document.getElementById("healthy-gaming")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Здоровый гейминг
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
