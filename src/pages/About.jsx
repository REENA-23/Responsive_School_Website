import Header1 from "../aboutus/Header1";
import Footer from "../Home/Footer";
import AboutSchool from "../Home/AboutSchool"
import PageHero from "../aboutus/PageHero";
import AboutIntro from "../aboutus/AboutIntro";
import MissionVision from "../aboutus/MissionVision";
import SchoolCampus from "../Home/SchoolCampus";
import OurPillars from "../aboutus/OurPillars";
import OurTrusty from "../aboutus/OurTrusty";
import OurTeam from "../aboutus/OurTeam";
import MessageFromPrincipal from "../aboutus/MessageFromPrincipal";
import Parent from "../aboutus/Parent";


function About() {
  return (
    <>
      <Header1 />
      <PageHero/>
      <AboutIntro/>
      <MissionVision/>
      <SchoolCampus/>
      <OurPillars/>
      <OurTrusty/>
      <OurTeam/>
      <MessageFromPrincipal/>
      <Parent/>
      <AboutSchool/>
      <Footer/>


    </>
  );
}

export default About;

