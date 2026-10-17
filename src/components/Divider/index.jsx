import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PixelIcon from "../PixelIcon";

gsap.registerPlugin(ScrollTrigger);

// Divisor: dos reglas de guiones con un rombo de píxeles al centro.
// Las reglas se trazan hacia fuera al entrar en pantalla, salvo con movimiento reducido.
const Divider = ({ variant = "ornament" }) => {
  const ref = useRef();
  const ornament = variant === "ornament";

  useGSAP(
    () => {
      if (!ornament) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".dash-rule", {
          scaleX: 0,
          transformOrigin: (i) => (i === 0 ? "100% 50%" : "0% 50%"),
          ease: "steps(16)",
          duration: 0.4,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} role="separator" className="mx-auto flex max-w-[1120px] items-center gap-3 px-4 md:px-8">
      {ornament ? (
        <>
          <span className="dash-rule flex-1" />
          <PixelIcon name="rombo" cell={4} className="text-linea-fuerte" />
          <span className="dash-rule flex-1" />
        </>
      ) : (
        <span className="dot-rule flex-1" />
      )}
    </div>
  );
};

export default Divider;
