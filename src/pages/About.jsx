import Header1 from "../component2/Header1";
import Footer from "../components/Footer";
import AboutSchool from "../components/AboutSchool"
import PageHero from "../component2/PageHero";
import AboutIntro from "../component2/AboutIntro";
import MissionVision from "../component2/MissionVision";
import SchoolCampus from "../components/SchoolCampus";
import OurPillars from "../component2/OurPillars";
import OurTrusty from "../component2/OurTrusty";
import OurTeam from "../component2/OurTeam";
import MessageFromPrincipal from "../component2/MessageFromPrincipal";
import Parent from "../component2/Parent";


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

