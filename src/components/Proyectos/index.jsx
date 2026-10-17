import Section from "../Section";
import Chips from "../Chips";
import { ConFlechas } from "../PixelIcon";
import { proyectos } from "../../data/perfil";

// "Pipeline de leads HubSpot → Zoho" -> "pipeline-de-leads-hubspot-zoho"
const slug = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {proyectos.map((proyecto, i) => (
          <article key={proyecto.title} className="px-frame min-w-0 bg-panel" data-out>
            <div
              aria-hidden="true"
              className="tty-rev tty-rev-tenue flex h-8 items-center justify-between gap-3 px-3 font-tty text-[20px]"
            >
              <span className="min-w-0 truncate">{slug(proyecto.title)}.md</span>
              <span className="max-sm:hidden">
                {String(i + 1).padStart(2, "0")}/{String(proyectos.length).padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-4 p-5 md:p-6">
              <h3 className="tty-h3">
                <ConFlechas text={proyecto.title} />
              </h3>
              <dl className="grid gap-1">
                <dt className="tty-key text-brasa">
                  <span aria-hidden="true">- </span>problema
                </dt>
                <dd className="mb-3 text-[16px] leading-[26px]">{proyecto.problem}</dd>
                <dt className="tty-key text-fosforo">
                  <span aria-hidden="true">+ </span>solución
                </dt>
                <dd className="mb-3 text-[16px] leading-[26px]">{proyecto.solution}</dd>
                <dt className="tty-key text-tenue">stack</dt>
                <dd>
                  <Chips items={proyecto.stack} className="mt-1" />
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
