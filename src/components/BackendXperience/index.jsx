import TitlesH1 from '../TitlesH1'

const BackendXperience = () => {
  return (
    <div>
        <TitlesH1 texto="Mi experiencia con backend" style={"silkscreen-regular"}/>
        <p className="mt-4 text-3xl text-gray-100/75 vt323-regular">
            Tengo experiencia en desarrollo backend con Node.js, Express y MySQL, creando endpoints y realizando operaciones CRUD. 
            He integrado APIs externas como Mercado Pago para pagos en línea y Meta para consultar datos de Business Manager. 
            Uso middlewares para autenticación, manejo de archivos, recepción de webhooks y sanitización de datos. Además, conecto eficazmente el frontend con el backend mediante APIs.
        </p>
    </div>
  )
}

export default BackendXperience