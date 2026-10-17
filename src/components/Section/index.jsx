// Contenedor de sección con su cabecera: etiqueta mono numerada, título e intro.
const Section = ({ id, number, label, title, intro, children }) => {
  return (
    <section id={id} className="mx-auto max-w-[1120px] px-4 py-16 md:px-8 md:py-24">
      <header className="mb-12">
        <p className="ink-label">
          <span className="text-laton">{String(number).padStart(2, "0")}</span> — {label}
        </p>
        <h2 className="ink-h2 mt-3">{title}</h2>
        {intro && <p className="ink-lead mt-4 max-w-[60ch] text-ceniza">{intro}</p>}
      </header>
      {children}
    </section>
  );
};

export default Section;
