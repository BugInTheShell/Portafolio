import TitlesH2 from '../TitlesH2'

const ReactXperience = () => {
  return (
    <div className='my-2 px-4 '>
        <TitlesH2>
          Mi experiencia con react
        </TitlesH2>
        <div className="flex">
          <p className="mt-4 text-xl  sm:w-full md:w-1/2 text-gray-100/75 nova-square-regular">
              Tengo experiencia desarrollando aplicaciones con React, utilizando React Router Dom para el manejo de rutas y Redux con RTK Query para la gestión 
              centralizada del estado y consumo de APIs. Manejo Git para el control de versiones y he trabajado con entornos como Vite. Además, uso frameworks de estilos 
              como Tailwind, Bootstrap y GSAP para interfaces modernas y responsivas. También tengo conocimientos básicos en Laravel.
          </p>

        </div>
    </div>
  )
}

export default ReactXperience