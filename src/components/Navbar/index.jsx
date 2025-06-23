import TitlesH1 from "../TitlesH1";

import pdfFile from "../../assets/EstebanGRCV.pdf";

const NavBar = () => {

  return (
    <>
      <nav className="hidden sm:block">
            <ul className="flex silkscreen-regular text-[#FF0B55]">
              <li className="hover:text-[#FFDEDE] hover:scale-110">
                <a href="#about" className="mx-2">Inicio</a>
              </li> |
              <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
                <a href="#experience">Trayectoria</a>
              </li> |
              <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">
                <a href="#skills">Habilidades</a>
              </li> |
              <li className="mx-2 hover:text-[#FFDEDE] hover:scale-110">

              <a href={pdfFile} target="_blank" download="EstebanGRCV.pdf">
                <button>Contacto</button>
              </a>
              </li> 
            </ul>
      </nav>

      <div className="dropdown dropdown-end sm:block md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-[#FF0B55] hover:text-[#FFDEDE]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>

        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 silkscreen-regular text-[#FF0B55]">
          <li className="hover:text-[#FFDEDE] hover:scale-110 transition">
            <a href="#about" className="mx-2">Inicio</a>
          </li>
          <li className="hover:text-[#FFDEDE] hover:scale-110 transition">
            <a href="#experience" className="mx-2">Trayectoria</a>
          </li>
          <li className="hover:text-[#FFDEDE] hover:scale-110 transition">
            <a href="#skills" className="mx-2">Habilidades</a>
          </li>
          <li className="hover:text-[#FFDEDE] hover:scale-110 transition">
            <a href={pdfFile} target="_blank" download="EstebanGRCV.pdf" className="mx-2">
              <button>Contacto</button>
            </a>
          </li>
        </ul>
      </div>



    </>
  );
};

export default NavBar;
