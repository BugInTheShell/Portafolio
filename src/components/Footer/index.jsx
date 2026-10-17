const Footer = () => {
  return (
    <footer className="border-t border-linea">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 py-8 md:px-8">
        <p className="font-mono text-sm lowercase">
          <span className="text-brasa">{">_"}</span> esteban galván
        </p>
        <p className="ink-label">Hecho con React, Tailwind y tinta</p>
      </div>
    </footer>
  );
};

export default Footer;
