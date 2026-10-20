import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PixelIcon from "../PixelIcon";
import "./Divider.scss";

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
        gsap.from(".divider__rule--dashed", {
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
    <div ref={ref} role="separator" className="divider">
      {ornament ? (
        <>
          <span className="divider__rule divider__rule--dashed" />
          <PixelIcon name="rombo" cell={4} className="divider__ornament" />
          <span className="divider__rule divider__rule--dashed" />
        </>
      ) : (
        <span className="divider__rule divider__rule--double" />
      )}
    </div>
  );
};

export default Divider;
