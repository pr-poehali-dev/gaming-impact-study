import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-10 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:max-w-xs">
            <Link to="/" className="text-xl font-bold text-primary mb-4 block">
              GameImpact
            </Link>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Исследуем влияние компьютерных игр на когнитивные, социальные и
              психологические аспекты жизни человека
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4 text-base">Навигация</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <a
                    href="#positive"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Положительное влияние
                  </a>
                </li>
                <li>
                  <a
                    href="#negative"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Риски
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-base">Разделы</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#genres"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Жанры игр
                  </a>
                </li>
                <li>
                  <a
                    href="#healthy-gaming"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Здоровый гейминг
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Исследования
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-muted-foreground">
          <p className="text-base">
            © {new Date().getFullYear()} GameImpact. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
