
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HealthyGamingSection = () => {
  return (
    <section id="healthy-gaming" className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Рекомендации по здоровому геймингу</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Как наслаждаться видеоиграми, сохраняя физическое и психическое здоровье
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Контролируйте время</h3>
                <p className="text-muted-foreground">Установите четкие ограничения времени для игр. Используйте таймеры и делайте регулярные перерывы каждые 50-60 минут игры.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Следите за осанкой</h3>
                <p className="text-muted-foreground">Используйте эргономичный стул, держите монитор на уровне глаз и поддерживайте правильное положение рук на клавиатуре и мыши.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Защищайте зрение</h3>
                <p className="text-muted-foreground">Используйте правило 20-20-20: каждые 20 минут смотрите на объект на расстоянии 20 футов (6 метров) в течение 20 секунд.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Сбалансируйте жизнь</h3>
                <p className="text-muted-foreground">Не позволяйте играм заменять физическую активность, социальные контакты, учебу или работу. Поддерживайте баланс.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Выбирайте игры осознанно</h3>
                <p className="text-muted-foreground">Обращайте внимание на возрастные рейтинги и содержание игр. Выбирайте игры, которые приносят положительные эмоции.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Общайтесь об играх</h3>
                <p className="text-muted-foreground">Обсуждайте игровой опыт с друзьями и семьей. Это помогает обрабатывать эмоции и развивает социальные навыки.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              onClick={() => {
                document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Исследования
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Вернуться наверх
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyGamingSection;
