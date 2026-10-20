import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { headline, bio, contacto } from "../../data/perfil";
import Prompt from "../Prompt";
import DitherField from "../DitherField";
import PixelIcon from "../PixelIcon";
import "./Inicio.scss";

const Inicio = () => {
  return (
    <section id="inicio" className="hero">
      <DitherField />

      <div className="hero__content">
        <Prompt cmd="whoami" typed delay={200} />
        <p className="hero__name">Esteban Galván</p>
        <p className="hero__role">Desarrollador FullStack · Arquitectura y Despliegue · Integraciones IA </p>

        <h1 className="heading heading--xl heading--glow hero__title">{headline}</h1>

        <Prompt cmd="cat bio.txt" typed delay={600} className="hero__prompt" />
        <p className="hero__bio">{bio}</p>

        <div className="hero__actions">
          <a href="#contacto" className="button button--primary">
            <span aria-hidden="true">[ </span>
            {contacto.email || contacto.linkedin ? "escríbeme" : "contacto"}
            <span aria-hidden="true"> ]</span>
          </a>
          <a href={pdfFile} download="EstebanGalvanCV.pdf" className="button button--outline">
            <PixelIcon name="descarga" />
            <span aria-hidden="true">[ </span>descargar cv<span aria-hidden="true"> ]</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
