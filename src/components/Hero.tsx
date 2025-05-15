import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            Влияние компьютерных игр на человека
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Современные исследования раскрывают как положительные, так и
            отрицательные аспекты влияния игр на когнитивные способности,
            социальные навыки и психологическое благополучие.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base"
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
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => {
                document
                  .getElementById("negative")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Негативное влияние
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => {
                document
                  .getElementById("research")
                  ?.scrollIntoView({ behavior: "smooth" });
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
