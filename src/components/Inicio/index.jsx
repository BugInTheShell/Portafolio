import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { headline, bio, contacto } from "../../data/perfil";
import Prompt from "../Prompt";
import DitherField from "../DitherField";
import PixelIcon from "../PixelIcon";

const Inicio = () => { 
  return (
    <section id="inicio" className="relative overflow-hidden">
      <DitherField />

      <div className="relative mx-auto max-w-[1120px] px-4 py-12 md:px-8 md:py-24">
        <Prompt cmd="whoami" typed delay={200} />
        <p className="tty-dw mt-2 text-texto">Esteban Galván</p>
        <p className="tty-label">Desarrollador FullStack · Arquitectura y Despliegue · Integraciones IA </p>

        <h1 className="tty-h1 tty-glow mt-6 max-w-[22ch]">{headline}</h1>

        <Prompt cmd="cat bio.txt" typed delay={600} className="mt-10" />
        <p className="mt-2 max-w-[64ch]">{bio}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contacto" className="tty-btn tty-btn-primario tty-key">
            <span aria-hidden="true">[ </span>
            {contacto.email || contacto.linkedin ? "escríbeme" : "contacto"}
            <span aria-hidden="true"> ]</span>
          </a>
          <a href={pdfFile} download="EstebanGalvanCV.pdf" className="tty-btn tty-btn-linea tty-key">
            <PixelIcon name="descarga" />
            <span aria-hidden="true">[ </span>descargar cv<span aria-hidden="true"> ]</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
