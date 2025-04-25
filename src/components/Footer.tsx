
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:max-w-xs">
            <Link to="/" className="text-xl font-bold text-primary mb-4 block">
              GameImpact
            </Link>
            <p className="text-muted-foreground mb-6">
              Исследуем влияние компьютерных игр на когнитивные, социальные и психологические аспекты жизни человека
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Навигация</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <a 
                    href="#positive" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Положительное влияние
                  </a>
                </li>
                <li>
                  <a 
                    href="#negative" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Риски
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Разделы</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#genres" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Жанры игр
                  </a>
                </li>
                <li>
                  <a 
                    href="#healthy-gaming" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Здоровый гейминг
                  </a>
                </li>
                <li>
                  <a 
                    href="#research" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Исследования
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-medium mb-4">Информация</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Наверх
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} GameImpact. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
