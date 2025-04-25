
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Влияние компьютерных игр на человека
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Современные исследования раскрывают как положительные, так и отрицательные аспекты
            влияния игр на когнитивные способности, социальные навыки и психологическое благополучие.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("positive")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Положительное влияние
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("negative")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Негативное влияние
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Исследования
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
