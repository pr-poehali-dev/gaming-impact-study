import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background py-3 md:py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-primary">
          GameImpact
        </Link>

        {/* Мобильная навигация */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Меню">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:max-w-sm">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                to="/"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                  Влияние игр
                </h3>
                <Link
                  to="/#positive"
                  className="text-lg pl-2 border-l-2 border-primary/20 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Положительное влияние
                </Link>
                <Link
                  to="/#negative"
                  className="text-lg pl-2 border-l-2 border-primary/20 hover:border-primary hover:text-primary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Негативное влияние
                </Link>
              </div>

              <Link
                to="/#research"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Исследования
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Десктопная навигация */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Влияние игр</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <Link
                    to="/#positive"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Положительное влияние
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Как игры улучшают навыки и когнитивные способности
                    </p>
                  </Link>
                  <Link
                    to="/#negative"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Негативное влияние
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Потенциальные риски и проблемы чрезмерного увлечения
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to="/#research">Исследования</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
