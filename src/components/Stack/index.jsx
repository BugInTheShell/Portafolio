import Section from "../Section";
import Chips from "../Chips";
import { stack, herramientas } from "../../data/perfil";
import "./Stack.scss";

const Stack = () => {
  return (
    <Section
      id="stack"
      cwd="~/stack"
      cmd="ls -la"
      tag="[01] stack"
      title="Con qué trabajo"
      intro="Herramientas que uso a diario en producción, no una lista de cursos."
    >
      <div className="stack">
        <p aria-hidden="true" className="stack__total" data-out>
          total {stack.length}
        </p>
        <div className="stack__groups">
          {stack.map((group) => (
            <div key={group.title} className="stack__group" data-out>
              <h3 className="stack__group-title">
                {/* permisos solo desde lg: a 768px la columna es estrecha y el nombre se partía */}
                <span aria-hidden="true" className="stack__permissions">
                  drwxr-xr-x{" "}
                </span>
                {group.title}
                <span aria-hidden="true">/</span>
              </h3>
              <Chips items={group.items} className="stack__chips" />
            </div>
          ))}
        </div>
        <p className="stack__daily" data-out>
          <span aria-hidden="true"># </span>día a día: {herramientas}
        </p>
      </div>
    </Section>
  );
};

export default Stack;
