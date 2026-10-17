import Section from "../Section";
import Chips from "../Chips";
import { stack, herramientas } from "../../data/perfil";

const Stack = () => {
  return (
    <Section id="stack" index={1} label="Stack" title="Con qué trabajo" intro="Herramientas que uso a diario en producción, no una lista de cursos.">
      <div className="grid gap-x-12 md:grid-cols-2">
        {stack.map((group) => (
          <div key={group.title} className="grid gap-3 border-t border-linea py-6">
            <h3 className="ink-label">{group.title}</h3>
            <Chips items={group.items} />
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ceniza">
        <span className="ink-label">Día a día —</span> {herramientas}
      </p>
    </Section>
  );
};

export default Stack;
