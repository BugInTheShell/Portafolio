import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../Section";
import PixelIcon from "../PixelIcon";
import pdfFile from "../../assets/EstebanGalvanCV.pdf";
import { contacto } from "../../data/perfil";

gsap.registerPlugin(ScrollTrigger);

const Corchetes = ({ children }) => (
  <>
    <span aria-hidden="true">[ </span>
    {children}
    <span aria-hidden="true"> ]</span>
  </>
);

const Externo = ({ href, primario = false, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`tty-btn tty-key ${primario ? "tty-btn-primario" : "tty-btn-linea"}`}>
    <PixelIcon name="externo" />
    <Corchetes>{children}</Corchetes>
    <span className="sr-only"> (se abre en otra pestaña)</span>
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
        onEnter: () => footer.current.querySelector(".tty-cursor")?.classList.add("tty-blink"),
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
        <div className="relative mr-2 mb-2 max-w-[680px]" data-out>
          <div aria-hidden="true" className="tty-sombra" />
          <div className="relative border-[6px] border-double border-fosforo bg-panel p-4 pt-8 md:p-8">
            <span aria-hidden="true" className="tty-key tty-rev absolute -top-[15px] left-4 px-2">
              contacto.sh
            </span>
            <div className="flex flex-wrap gap-4">
              {contacto.email && (
                <a href={`mailto:${contacto.email}`} className="tty-btn tty-btn-primario tty-key">
                  <Corchetes>escríbeme</Corchetes>
                </a>
              )}
              <a href={pdfFile} download="EstebanGalvanCV.pdf" className="tty-btn tty-btn-linea tty-key">
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

      <footer ref={footer} className="border-t border-linea">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 py-8 md:px-8">
          <p className="tty-prompt">
            <span aria-hidden="true">
              <span className="text-fosforo">
                esteban<span className="max-sm:hidden">@bugintheshell</span>
              </span>
              <span className="text-tenue">:~$</span>
              <span className="tty-cursor" />
            </span>
            <span className="sr-only">Esteban Galván</span>
          </p>
          <p className="tty-label">
            <span aria-hidden="true"># </span>hecho con React, Tailwind y tinta
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contacto;
