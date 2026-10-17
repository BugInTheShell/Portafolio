import Section from "../Section";
import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { contacto } from "../../data/perfil";

const Contacto = () => {
  return (
    <Section id="contacto" number={5} label="Contacto" title="¿Tienes un funnel que pierde leads o un deploy que da miedo?" intro="Escríbeme y cuéntame qué está roto. Respondo con lo que haría primero.">
      <div className="flex flex-wrap gap-4">
        {contacto.email && (
          <a href={`mailto:${contacto.email}`} className="ink-btn ink-btn-primary">
            Escríbeme
          </a>
        )}
        <a href={pdfFile} download="EstebanGalvanCV.pdf" className="ink-btn ink-btn-line">
          Descargar CV
        </a>
        {contacto.github && (
          <a href={contacto.github} target="_blank" rel="noreferrer" className="ink-btn ink-btn-line">
            GitHub ↗
          </a>
        )}
        {contacto.linkedin && (
          <a href={contacto.linkedin} target="_blank" rel="noreferrer" className="ink-btn ink-btn-line">
            LinkedIn ↗
          </a>
        )}
      </div>
    </Section>
  );
};

export default Contacto;
