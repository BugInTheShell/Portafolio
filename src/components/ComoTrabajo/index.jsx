import Section from "../Section";
import { principios } from "../../data/perfil";

const ComoTrabajo = () => {
  return (
    <Section
      id="metodo"
      cwd="~"
      cmd="man esteban"
      tag="[03] método"
      title="Cómo trabajo"
      intro="Lo que puedes esperar si trabajamos juntos."
    >
      <div aria-hidden="true" className="flex justify-between font-tty text-[20px] text-tenue" data-out>
        <span>ESTEBAN(1)</span>
        <span className="max-md:hidden">Manual de trabajo</span>
        <span>ESTEBAN(1)</span>
      </div>
      <p aria-hidden="true" className="tty-key mt-6 text-fosforo" data-out>
        principios
      </p>
      <ol className="mt-3">
        {principios.map((principio, i) => (
          <li key={principio.title} className="grid grid-cols-[4ch_1fr] border-t border-linea py-5 md:grid-cols-[7ch_1fr]" data-out>
            <span aria-hidden="true" className="font-tty text-[26px] leading-[1.15] text-tenue">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="tty-h3">{principio.title}</h3>
              <p className="mt-2 max-w-[60ch]">{principio.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p aria-hidden="true" className="crt-lines mt-6 bg-tenue px-2 font-tty text-[20px] leading-7 text-tinta" data-out>
        <span className="max-sm:hidden">Página de manual esteban(1) línea 1 (END) (pulse q para salir)</span>
        <span className="sm:hidden">esteban(1) (END)</span>
      </p>
    </Section>
  );
};

export default ComoTrabajo;
