import TitlesH1 from "../TitlesH1"

const Inicio = () => {
  return (
    <div className='flex p-2 justify-around items-center align-middle h-screen bg-blue-950/25' id="about">
        <div className="block p-2 rounded-lg w-1/3">

            <TitlesH1 texto="Desarrollador FullStack" />
            <p className="mt-4 text-3xl text-gray-100/75 vt323-regular">
                Soy un desarrollador web con experiencia en la creación de aplicaciones para agilizar la interacción de usuarios en plataformas digitales.
                Desarrollo aplicaciones de servidor y administro la nube para despliegue a producción
            </p>

        </div>

        <div className='w-1/3 flex justify-center'>
            <img src="https://th.bing.com/th/id/R.9596d6ee5bf5f9f6cf0a64f74f990064?rik=yPm1vpHh7rlQ8A&riu=http%3a%2f%2f4.bp.blogspot.com%2f-D5NRmQNjh_g%2fT61GxlOENJI%2fAAAAAAAABJo%2fA9zPgiWRSD4%2fs1600%2fshow4.jpg&ehk=gb%2f1mcFB4VUoxvlHPeCy4fmnr5d9vq7yvOnM9RjEDfM%3d&risl=&pid=ImgRaw&r=0" alt="Imagen de perfil" className="h-auto rounded-lg" />
        </div>

    </div>
  )
}

export default Inicio