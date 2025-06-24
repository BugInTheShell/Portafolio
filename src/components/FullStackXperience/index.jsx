import TitlesH2 from '../TitlesH2'

const FullStackXperience = () => {
  return (
    <div className="my-2 px-4">
        <TitlesH2>
          Mi experiencia Full Stack
        </TitlesH2>
        <div className="flex">
          <p className="mt-4 text-xl  sm:w-full md:w-1/2 text-gray-100/75 nova-square-regular">
              Tengo conocimientos en TypeScript y uso DTOs, interfaces y TypeORM para interactuar con bases de datos. 
              Tengo nociones básicas de NestJS, Node y Express. 
              En el entorno AWS, he desplegado frontends en S3, gestionado instancias en EC2, automatizado despliegues con AWS CLI y administrado accesos mediante IAM. 
              También he trabajado con SQS para comunicación entre microservicios, funciones Lambda, monitoreo con CloudWatch y bases de datos en Mongo Atlas.
          </p>
        </div>
    </div>
  )
}

export default FullStackXperience