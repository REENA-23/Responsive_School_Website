import Header1 from "../component2/Header1";
import AboutSchool from "../components/AboutSchool";
import Footer from "../components/Footer";
import CoCurricularHero from "../component4/CoCurricular";
import CAS from "../component3/CAS";
import Inclusive from "../component3/InclusiveDevelopment";
import AdmissionCTA from "../component4/AdmissionCTA";


const CoCurricular = () => {
  return <>
   <Header1/>
 <CoCurricularHero/>
 <AdmissionCTA/>
 <CAS/>
 <Inclusive/>
 <CAS/>
   <AboutSchool/>
   <Footer/>
  </>

};

export default CoCurricular;
