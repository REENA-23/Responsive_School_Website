import Header1 from "../aboutus/Header1";
import AboutSchool from "../Home/AboutSchool";
import Footer from "../Home/Footer";
import HeadLine from "../admission/HeadLine";
import SubmitApplication from "../admission/SubmitApplication";
import WhyUs from "../admission/WhyUs";
import SchoolTimings from "../admission/SchoolTimings";
import AdmissionHero from "../admission/AdmissionHero";

const Admission = () => {
  return <>
   <Header1/>
   <AdmissionHero/>
   <HeadLine/>
   <SubmitApplication/>
   <WhyUs/>
   <SchoolTimings/>
   <AboutSchool/>
   <Footer/>
   </>
};

export default Admission;
