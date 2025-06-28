import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import { selectCurrentTheme , hovertheme} from "../../store/themeSlice";
import {useSelector} from "react-redux"

const TitlesH2 = ({children}) => {

    const textRef = useRef();

    const currentTheme = useSelector(selectCurrentTheme)


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
      char.addEventListener("mouseenter", () => {
        gsap.fromTo(
          char,
          { y: 0 },
          { y: -5, duration: 0.3, ease: "back.out(2)" }
        );
      });
    });

    return () => {
      split.revert(); // Limpieza
    };
  },[]);
  
  return (
<h1
  ref={textRef}
  className="text-2xl block w-fit sm:flex silkscreen-regular transition-colors duration-300"
  style={{ color: currentTheme }}>
  <span>
    {">_"}{children}
  </span>
</h1>
  )
}

export default TitlesH2;