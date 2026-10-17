import Section from "../Section";
import Chips from "../Chips";
import { proyectos } from "../../data/perfil";

const Proyectos = () => {
  return (
    <Section id="proyectos" number={2} label="Proyectos" title="Proyectos destacados" intro="Cosas que están en producción y por qué existen.">
      <div className="grid gap-8 md:grid-cols-2">
        {proyectos.map((proyecto) => (
          <article key={proyecto.title} className="grid content-start gap-4 border border-linea bg-carbon p-6">
            <h3 className="ink-h3">{proyecto.title}</h3>
            <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-2">
              <dt className="ink-label">Problema</dt>
              <dd>{proyecto.problem}</dd>
              <dt className="ink-label">Solución</dt>
              <dd>{proyecto.solution}</dd>
            </dl>
            <Chips items={proyecto.stack} />
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Proyectos;
