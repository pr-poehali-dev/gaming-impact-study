type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <>
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
      {title}
    </h2>
    <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
      {description}
    </p>
  </>
);

export default SectionTitle;
