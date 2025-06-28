import TitlesH2 from "../TitlesH2"
import EstebanPhoto from "../../assets/EstebanPhoto.jpg"

const Inicio = () => {
  return (
    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  p-2 justify-around items-center bg-blue-950/25' id="about">
      <div className="p-2 rounded-lg">

        <TitlesH2>
          Desarrollador FullStack
        </TitlesH2>

        <div className="flex flex-col text-center md:flex-row items-center justify-center py-4 gap-4">
          
          <p className="text-xl sm:text-start  text-gray-100/75 nova-square-regular sm:w-full md:w-1/2">
            Soy desarrollador web con experiencia en la creación de aplicaciones dinámicas que optimizan la interacción del usuario en plataformas digitales. 
            Me especializo en el desarrollo de soluciones backend y la administración de entornos en la nube para asegurar un despliegue eficiente y escalable a producción.
          </p>

          <div className='w-fit h-60 sm:w-fit sm:h-32 md:h-auto md:w-96'>
            <img src={EstebanPhoto} alt="Foto de perfil" className="rounded-full w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Inicio