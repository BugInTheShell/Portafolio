import NavBar from "./Navbar";
import Inicio from "./Inicio";
import WebMasterExperience from "./WebMasterExperience";
import ReactXperience from "./ReactXperience";
import BackendXperience from "./BackendXperience";
import FullStackXperience from "./FullStackXperience";
const Index = () => {
  return (
    <div className="bg-slate-950 p-2 overflow-hidden">
      
      <NavBar />

      <Inicio />

      <WebMasterExperience />

      <ReactXperience />

      <BackendXperience/>

      <FullStackXperience/>



    </div>
  );
};

export default Index;
