import Section from "../Section";
import PixelIcon from "../PixelIcon";
import { pasatiempos } from "../../data/perfil";
import "./Pasatiempos.scss";

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
      <ul className="hobbies">
        {pasatiempos.map((item, i) => (
          <li key={item} className="hobbies__item" data-out>
            <PixelIcon name={iconos[i] ?? "chip"} className="hobbies__icon" />
            <span className="hobbies__name">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Pasatiempos;
