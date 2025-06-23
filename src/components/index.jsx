import NavBar from "./Navbar";
import Inicio from "./Inicio";
import WebMasterExperience from "./WebMasterExperience";
import ReactXperience from "./ReactXperience";
import BackendXperience from "./BackendXperience";
import FullStackXperience from "./FullStackXperience";
import TitlesH1 from "./TitlesH1";
const Index = () => {
  return (
    <div className="bg-slate-950 p-2 overflow-hidden">

      <div className=" flex md:block lg:flex opacity-75 hover:opacity-100 justify-between px-4  py-2 ">
        <TitlesH1 texto="Esteban Galván" style={"silkscreen-bold"} />
        <NavBar />
      </div>

      <Inicio />

      <div className="" id="experience">
        <WebMasterExperience />

        <ReactXperience />

        <BackendXperience/>

        <FullStackXperience/>
      </div>



    </div>
  );
};

export default Index;
