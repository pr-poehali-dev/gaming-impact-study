
const Footer = () => {
  return (
    <footer className="bg-primary/5 py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">GameImpact</p>
            <p className="text-sm text-muted-foreground">
              Информационный ресурс о влиянии компьютерных игр
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2023 GameImpact. Все права защищены.</p>
            <p>Информация предоставлена в образовательных целях</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
