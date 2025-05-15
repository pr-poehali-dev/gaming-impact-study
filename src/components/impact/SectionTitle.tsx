
type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle = ({ title, description }: SectionTitleProps) => (
  <>
    <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
    <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
      {description}
    </p>
  </>
);

export default SectionTitle;
