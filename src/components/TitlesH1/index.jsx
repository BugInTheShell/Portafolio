import { useEffect, useState , useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';

const TitlesH1 = ({texto}) => {

    const textRef = useRef();

    useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "chars" });

    // Animación inicial
    gsap.from(split.chars, {
      duration: 2,
      yPercent: [-100, 100],
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });

    split.chars.forEach((char) => {

      char.style.display = "inline-block ";

      char.addEventListener("mouseenter", () => {
        gsap.fromTo(
          char,
          { y: 0 },
          {
            y: -10,
            duration:1,
          }
        );
      });
    });

    return () => {
      split.revert(); // Limpieza
    };
  },[]);
  return (
        <h1 ref={textRef} className="text-xl text-[#CF0F47] silkscreen-bold">
          {texto}
        </h1>
  )
}

export default TitlesH1;