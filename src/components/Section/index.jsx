import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Prompt from "../Prompt";

gsap.registerPlugin(ScrollTrigger);

// Cada sección es un comando y su salida: prompt, título, comentario y output.
// Con movimiento permitido, el comando se teclea al entrar en pantalla y
// luego aparecen los bloques marcados con data-out.
const Section = ({ id, cwd, cmd, tag, title, intro, children }) => {
  const ref = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const n = cmd.length;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
        tl.fromTo("[data-cmd]", { width: 0 }, { width: `${n}ch`, ease: `steps(${n})`, duration: Math.min(n * 0.04, 0.6) });
        tl.fromTo("[data-out]", { opacity: 0 }, { opacity: 1, ease: "steps(1)", duration: 0.06, stagger: 0.06 });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-titulo`} className="mx-auto max-w-[1120px] px-4 py-16 md:px-8 md:py-24">
      <Prompt cwd={cwd} cmd={cmd} tag={tag} />
      <h2 id={`${id}-titulo`} className="tty-h2 tty-glow mt-6">
        {title}
      </h2>
      {intro && (
        <p className="tty-comment mt-3 max-w-[64ch]">
          <span aria-hidden="true"># </span>
          {intro}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
};

export default Section;
