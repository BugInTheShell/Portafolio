import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Trazo de aguja fina: línea de 1px con rombo y dos puntos en latón.
// Se dibuja una vez al entrar en pantalla, salvo con prefers-reduced-motion.
const Divider = ({ variant = "ornament" }) => {
  const ref = useRef();
  const hasOrnament = variant === "ornament";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ink-stroke", {
          scaleX: 0,
          // El primer trazo crece hacia la izquierda y los demás hacia la derecha:
          // con ornamento, ambos salen del rombo hacia los extremos.
          transformOrigin: (i) => (i === 0 ? "100% 50%" : "0% 50%"),
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} role="separator" className="mx-auto w-full max-w-[1120px] px-4 md:px-8">
      <svg viewBox="0 0 600 16" preserveAspectRatio="none" aria-hidden="true" className="block h-4 w-full overflow-visible">
        <line className="ink-stroke stroke-linea-fuerte" x1="0" y1="8" x2={hasOrnament ? 284 : 600} y2="8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        {hasOrnament && (
          <>
            <circle className="fill-laton" cx="276" cy="8" r="1.5" />
            <path className="fill-none stroke-laton" d="M292 8 L300 0 L308 8 L300 16 Z" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <circle className="fill-laton" cx="324" cy="8" r="1.5" />
            <line className="ink-stroke stroke-linea-fuerte" x1="316" y1="8" x2="600" y2="8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </>
        )}
      </svg>
    </div>
  );
};

export default Divider;
