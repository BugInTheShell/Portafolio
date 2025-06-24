import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

const TitlesH1 = ({ children }) => {
  const textRef = useRef();

  useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "chars" });

    // Asegurar que cada char es inline-block
    split.chars.forEach((char) => {
      char.style.display = "inline-block";
      char.style.opacity = "0"; // Ocultar al inicio
    });

    // Efecto de escritura
    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 0.09,
      ease: "power1.inOut",
      stagger: 0.05,
    });

    // Hover para rebote opcional
    split.chars.forEach((char) => {
      char.addEventListener("mouseenter", () => {
        gsap.fromTo(
          char,
          { y: 0 },
          { y: -5, duration: 0.3, ease: "back.out(2)" }
        );
      });
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className={`text-2xl mx-2 block w-auto sm:flex text-[#CF0F47] silkscreen-bold`}
    >
      <span>{children}</span>
    </h1>
  );
};

export default TitlesH1;
