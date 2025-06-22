import TitlesH1 from '../TitlesH1'

const FullStackXperience = () => {
  return (
    <div>
        <TitlesH1 texto="Mi experiencia Full Stack" style={"silkscreen-regular"}/>
        <p className="mt-4 text-3xl text-gray-100/75 vt323-regular">
            Tengo conocimientos en TypeScript y uso DTOs, interfaces y TypeORM para interactuar con bases de datos. 
            Tengo nociones básicas de NestJS, Node y Express. 
            En el entorno AWS, he desplegado frontends en S3, gestionado instancias en EC2, automatizado despliegues con AWS CLI y administrado accesos mediante IAM. 
            También he trabajado con SQS para comunicación entre microservicios, funciones Lambda, monitoreo con CloudWatch y bases de datos en Mongo Atlas.

        </p>
    </div>
  )
}

export default FullStackXperience