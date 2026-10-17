import Section from "../Section";
import PixelIcon from "../PixelIcon";
import { pasatiempos } from "../../data/perfil";

// Un icono por pasatiempo, en el mismo orden que perfil.js.
const iconos = ["libro", "guante", "caballo", "candado", "chip"];

const Pasatiempos = () => {
  return (
    <Section
      id="fuera"
      cwd="~"
      cmd="eza --icons ~/fuera"
      tag="[04] fuera"
      title="Lo que hago lejos del teclado"
      intro="La disciplina del tatami y del tablero se nota en cómo depuro."
    >
      <ul className="grid gap-x-12 sm:grid-cols-2">
        {pasatiempos.map((item, i) => (
          <li key={item} className="flex items-center gap-4 border-t border-linea py-4" data-out>
            <PixelIcon name={iconos[i] ?? "chip"} className="text-fosforo" />
            <span className="font-tty text-[26px] leading-[1.15] text-texto">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Pasatiempos;
