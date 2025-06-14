import { useEffect, useState , useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';

const PrincipalPage = () => {

    const textRef = useRef();

    SplitText.create(textRef.current, {
        type: "chars",
        onSplit(self) {
            gsap.from(self.chars, {
            duration: 1, 
            yPercent:[-100,100], 
            autoAlpha: 0,
            stagger: {
                amount: 0.5, 
                from:"random"
            }
            });
        }
    });
  return (
    <div className="sticky">
      <div className="flex justify-between px-4 py-2">
        <h1 ref={textRef} className="text-xl text-blue-800/75 silkscreen-bold">
          Esteban Galván
        </h1>

        <nav>
          <ul className="flex silkscreen-regular text-cyan-900/75 ">
            <li className="mx-2 hover:text-cyan-500 hover:scale-110">
              <a href="#about">Inicio</a>
            </li> |
            <li className="mx-2 hover:text-cyan-500 hover:scale-110">
              <a href="#projects">Acerca de</a>
            </li> |
            <li className="mx-2 hover:text-cyan-500 hover:scale-110">
              <a href="#skills">Habilidades</a>
            </li> |
            <li className="mx-2 hover:text-cyan-500 hover:scale-110">
              <a href="#experience">Experiencia</a>
            </li> |
            <li className="mx-2 hover:text-cyan-500 hover:scale-110">
              <a href="#contact">Contacto</a>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PrincipalPage;
