import Section from "../Section";
import Chips from "../Chips";
import { ConFlechas } from "../PixelIcon";
import { proyectos } from "../../data/perfil";
import "./Proyectos.scss";

// "Pipeline de leads HubSpot → Zoho" -> "pipeline-de-leads-hubspot-zoho"
const slug = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Proyectos = () => {
  return (
    <Section
      id="proyectos"
      cwd="~/proyectos"
      cmd="cat *.md"
      tag="[02] proyectos"
      title="Proyectos destacados"
      intro="Cosas que están en producción y por qué existen."
    >
      <div className="projects">
        {proyectos.map((proyecto, i) => (
          <article key={proyecto.title} className="project-card" data-out>
            <div aria-hidden="true" className="project-card__bar">
              <span className="project-card__file">{slug(proyecto.title)}.md</span>
              <span className="project-card__count">
                {String(i + 1).padStart(2, "0")}/{String(proyectos.length).padStart(2, "0")}
              </span>
            </div>
            <div className="project-card__body">
              <h3 className="heading heading--md">
                <ConFlechas text={proyecto.title} />
              </h3>
              <dl className="project-card__details">
                <dt className="project-card__term project-card__term--problem">
                  <span aria-hidden="true">- </span>problema
                </dt>
                <dd className="project-card__description">{proyecto.problem}</dd>
                <dt className="project-card__term project-card__term--solution">
                  <span aria-hidden="true">+ </span>solución
                </dt>
                <dd className="project-card__description">{proyecto.solution}</dd>
                <dt className="project-card__term project-card__term--stack">stack</dt>
                <dd>
                  <Chips items={proyecto.stack} className="project-card__chips" />
                </dd>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Proyectos;
