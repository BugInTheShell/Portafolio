import NavBar from "./Navbar";
import Inicio from "./Inicio";
import Divider from "./Divider";
import Stack from "./Stack";
import Proyectos from "./Proyectos";
import ComoTrabajo from "./ComoTrabajo";
import Pasatiempos from "./Pasatiempos";
import Contacto from "./Contacto";

const Index = () => {
  return (
    <>
      <NavBar />
      <main>
        <Inicio />
        <Divider />
        <Stack />
        <Divider />
        <Proyectos />
        <Divider />
        <ComoTrabajo />
        <Divider variant="line" />
        <Pasatiempos />
        <Divider />
        <Contacto />
      </main>
    </>
  );
};

export default Index;
