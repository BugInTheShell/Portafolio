import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../Section";
import PixelIcon from "../PixelIcon";
import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { contacto } from "../../data/perfil";
import "./Contacto.scss";

gsap.registerPlugin(ScrollTrigger);

const Corchetes = ({ children }) => (
  <>
    <span aria-hidden="true">[ </span>
    {children}
    <span aria-hidden="true"> ]</span>
  </>
);

const Externo = ({ href, primario = false, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`button ${primario ? "button--primary" : "button--outline"}`}>
    <PixelIcon name="externo" />
    <Corchetes>{children}</Corchetes>
    <span className="visually-hidden"> (se abre en otra pestaña)</span>
  </a>
);

const Contacto = () => {
  const footer = useRef();

  // El cursor del footer parpadea cuatro veces cuando el footer entra en pantalla.
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: footer.current,
        start: "top bottom",
        once: true,
        onEnter: () => footer.current.querySelector(".cursor")?.classList.add("cursor--blink"),
      });
    },
    { scope: footer }
  );

  // Sin correo ni LinkedIn no se promete "escríbeme": GitHub pasa a ser la acción principal.
  const puedeEscribir = Boolean(contacto.email || contacto.linkedin);

  return (
    <>
      <Section
        id="contacto"
        cwd="~/contacto"
        cmd="./contacto.sh"
        tag="[05] contacto"
        title="¿Tienes un funnel que pierde leads o un deploy que da miedo?"
        intro={
          puedeEscribir
            ? "Escríbeme y cuéntame qué está roto. Respondo con lo que haría primero."
            : "Revisa mi código en GitHub o descarga mi CV."
        }
      >
        <div className="contact" data-out>
          <div aria-hidden="true" className="contact__shadow" />
          <div className="contact__dialog">
            <span aria-hidden="true" className="contact__badge">
              contacto.sh
            </span>
            <div className="contact__actions">
              {contacto.email && (
                <a href={`mailto:${contacto.email}`} className="button button--primary">
                  <Corchetes>escríbeme</Corchetes>
                </a>
              )}
              <a href={pdfFile} download="EstebanGalvanCV.pdf" className="button button--outline">
                <PixelIcon name="descarga" />
                <Corchetes>descargar cv</Corchetes>
              </a>
              {contacto.github && (
                <Externo href={contacto.github} primario={!contacto.email}>
                  github
                </Externo>
              )}
              {contacto.linkedin && <Externo href={contacto.linkedin}>linkedin</Externo>}
            </div>
          </div>
        </div>
      </Section>

      <footer ref={footer} className="footer">
        <div className="footer__inner">
          <p className="footer__prompt">
            <span aria-hidden="true">
              <span className="footer__user">
                esteban<span className="footer__host">@bugintheshell</span>
              </span>
              <span className="footer__path">:~$</span>
              <span className="cursor" />
            </span>
            <span className="visually-hidden">Esteban Galván</span>
          </p>
          <p className="footer__credit">
            <span aria-hidden="true"># </span>hecho con React, Sass y tinta
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contacto;
