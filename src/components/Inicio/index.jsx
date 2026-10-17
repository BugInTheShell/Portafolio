import EstebanPhoto from "../../assets/EstebanPhoto.jpg";
import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { headline, bio } from "../../data/perfil";

const Inicio = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="ink-dotwork pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 md:grid-cols-[1fr_280px] md:px-8 md:py-28">
        <div>
          <p className="ink-label">MarTech · Infraestructura · Aliat</p>
          <h1 className="ink-display mt-6 max-w-[18ch]">{headline}</h1>
          <p className="ink-lead mt-8 max-w-[60ch] text-ceniza">{bio}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="ink-btn ink-btn-primary">
              Escríbeme
            </a>
            <a href={pdfFile} download="EstebanGalvanCV.pdf" className="ink-btn ink-btn-line">
              Descargar CV
            </a>
          </div>
        </div>

        <div className="order-first w-40 md:order-none md:w-full">
          <div className="aspect-square border border-linea p-2">
            <img
              src={EstebanPhoto}
              alt="Retrato de Esteban Galván"
              className="h-full w-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
