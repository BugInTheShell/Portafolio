import Section from "../Section";
import { principios } from "../../data/perfil";

const ComoTrabajo = () => {
  return (
    <Section id="metodo" number={3} label="Método" title="Cómo trabajo" intro="Lo que puedes esperar si trabajamos juntos.">
      <ol>
        {principios.map((principio, i) => (
          <li key={principio.title} className="grid grid-cols-[56px_1fr] gap-4 border-t border-linea py-6">
            <span className="font-serif text-[40px] leading-none font-light text-laton">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="ink-h3">{principio.title}</h3>
              <p className="mt-2 max-w-[60ch] text-ceniza">{principio.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default ComoTrabajo;
