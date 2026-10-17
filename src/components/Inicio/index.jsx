import retrato from "../../assets/retrato-96.png";
import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { headline, bio } from "../../data/perfil";
import Prompt from "../Prompt";
import DitherField from "../DitherField";
import PixelIcon from "../PixelIcon";

const Inicio = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <DitherField />

      <div className="relative mx-auto grid max-w-[1120px] gap-10 px-4 py-12 md:grid-cols-[1fr_308px] md:gap-12 md:px-8 md:py-24">
        <div className="min-w-0">
          <Prompt cmd="whoami" typed delay={200} />
          <p className="mt-2 font-tty text-[28px] leading-8 text-texto">esteban galván</p>
          <p className="tty-label">MarTech · Infraestructura · Aliat</p>

          <h1 className="tty-h1 tty-glow mt-6 max-w-[22ch]">{headline}</h1>

          <Prompt cmd="cat bio.txt" typed delay={600} className="mt-10" />
          <p className="mt-2 max-w-[64ch]">{bio}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="tty-btn tty-btn-primario tty-key">
              <span aria-hidden="true">[ </span>escríbeme<span aria-hidden="true"> ]</span>
            </a>
            <a href={pdfFile} download="EstebanGalvanCV.pdf" className="tty-btn tty-btn-linea tty-key">
              <PixelIcon name="descarga" />
              <span aria-hidden="true">[ </span>descargar cv<span aria-hidden="true"> ]</span>
            </a>
          </div>
        </div>

        <figure className="self-start">
          <Prompt cmd="catimg retrato.png" host={false} />
          <div className="px-frame mt-3 w-fit bg-panel p-2">
            <div className="crt-lines [--scan-alpha:.28] [--scan:2px] md:[--scan:3px]">
              <img
                src={retrato}
                width="96"
                height="96"
                alt="Retrato de Esteban Galván en pixel art"
                className="retrato tty-scan block h-[192px] w-[192px] max-w-none md:h-[288px] md:w-[288px]"
              />
            </div>
          </div>
          <figcaption className="tty-key mt-3 text-tenue">retrato.png · 96×96</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Inicio;
