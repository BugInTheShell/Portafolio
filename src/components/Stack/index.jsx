import Section from "../Section";
import Chips from "../Chips";
import { stack, herramientas } from "../../data/perfil";

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
      <p aria-hidden="true" className="tty-label" data-out>
        total {stack.length}
      </p>
      <div className="mt-2 grid gap-x-12 md:grid-cols-2">
        {stack.map((group) => (
          <div key={group.title} className="border-t border-linea py-5" data-out>
            <h3 className="font-tty text-[24px] leading-7 text-fosforo">
              <span aria-hidden="true" className="hidden font-tty text-[20px] text-tenue md:inline">
                drwxr-xr-x{" "}
              </span>
              {group.title}
              <span aria-hidden="true">/</span>
            </h3>
            <Chips items={group.items} className="mt-3 md:pl-[88px]" />
          </div>
        ))}
      </div>
      <p className="tty-comment mt-6" data-out>
        <span aria-hidden="true"># </span>día a día: {herramientas}
      </p>
    </Section>
  );
};

export default Stack;
