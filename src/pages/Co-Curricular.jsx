import Header1 from "../aboutus/Header1";
import AboutSchool from "../Home/AboutSchool";
import Footer from "../Home/Footer";
import CoCurricularHero from "../cocurricular/CoCurricular";
import CAS from "../acedemic/CAS";
import Inclusive from "../acedemic/InclusiveDevelopment";
import AdmissionCTA from "../cocurricular/AdmissionCTA";


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
