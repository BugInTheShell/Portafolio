import Section from "../Section";
import { pasatiempos } from "../../data/perfil";

const Pasatiempos = () => {
  return (
    <Section id="fuera" number={4} label="Fuera del editor" title="Lo que hago lejos del teclado" intro="La disciplina del tatami y del tablero se nota en cómo depuro.">
      <ul className="grid gap-x-12 sm:grid-cols-2">
        {pasatiempos.map((pasatiempo) => (
          <li key={pasatiempo} className="ink-h3 flex items-baseline gap-4 border-t border-linea py-4">
            <span className="text-sm text-laton" aria-hidden="true">◇</span>
            {pasatiempo}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Pasatiempos;
