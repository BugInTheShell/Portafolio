import Section from "../Section";
import { principios } from "../../data/perfil";
import "./ComoTrabajo.scss";

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
      <div className="manual">
        <div aria-hidden="true" className="manual__header" data-out>
          <span>ESTEBAN(1)</span>
          <span className="manual__header-title">Manual de trabajo</span>
          <span>ESTEBAN(1)</span>
        </div>
        <p aria-hidden="true" className="manual__heading" data-out>
          principios
        </p>
        <ol className="manual__list">
          {principios.map((principio, i) => (
            <li key={principio.title} className="manual__item" data-out>
              <span aria-hidden="true" className="manual__number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="heading heading--md">{principio.title}</h3>
                <p className="manual__text">{principio.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p aria-hidden="true" className="manual__status" data-out>
          <span className="manual__status-long">Página de manual esteban(1) línea 1 (END) (pulse q para salir)</span>
          <span className="manual__status-short">esteban(1) (END)</span>
        </p>
      </div>
    </Section>
  );
};

export default ComoTrabajo;
