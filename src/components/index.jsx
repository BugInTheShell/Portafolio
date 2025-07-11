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

        <TitlesH1>
         <p className="hidden sm:flex md:flex lg;flex">{'>_'}</p> Esteban Galván
        </TitlesH1>

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
