import TitlesH1 from "../TitlesH1";

const NavBar = () => {

  return (
    <div className="sticky opacity-75 hover:opacity-100">
      <div className="flex justify-between px-4 py-2">
        <TitlesH1 texto="Esteban Galván" />

        <nav>
          <ul className="flex silkscreen-regular text-[#FF0B55] ">
            <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
              <a href="#about">Inicio</a>
            </li> |
            <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
              <a href="#projects">Acerca de</a>
            </li> |
            <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
              <a href="#experience">Proyectos</a>
            </li> |
            <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
              <a href="#skills">Habilidades</a>
            </li> |
            <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
              <a href="#contact">Contacto</a>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
