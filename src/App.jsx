import NavBar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Divider from "./components/Divider";
import Stack from "./components/Stack";
import Proyectos from "./components/Proyectos";
import ComoTrabajo from "./components/ComoTrabajo";
import Pasatiempos from "./components/Pasatiempos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
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
        <Footer />
      </main>
    </>
  );
}

export default App;
