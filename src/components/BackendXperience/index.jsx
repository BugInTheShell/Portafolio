import TitlesH2 from '../TitlesH2'

const BackendXperience = () => {
  return (
    <div className="my-2 px-4">
        <TitlesH2>
          Mi  experiencia como backend
        </TitlesH2>
        <div className="flex">
          <p className="mt-4 text-xl  sm:w-full md:w-1/2 text-gray-100/75 nova-square-regular">
              Tengo experiencia en desarrollo backend con Node.js, Express y MySQL, creando endpoints y realizando operaciones CRUD. 
              He integrado APIs externas como Mercado Pago para pagos en línea y Meta para consultar datos de Business Manager. 
              Uso middlewares para autenticación, manejo de archivos, recepción de webhooks y sanitización de datos. Además, conecto eficazmente el frontend con el backend mediante APIs.
          </p>
        </div>
    </div>
  )
}

export default BackendXperience