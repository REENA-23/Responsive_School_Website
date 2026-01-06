import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Highlights from "../Home/Highlights";
import LifeAtSchool from "../Home/LifeAtSchool";
import SchoolCampus from "../Home/SchoolCampus";
import StudentLife from "../Home/StudentLife";
import Achievements from "../Home/Achievements";
import Gallery from "../Home/Gallery";
import Parent from "../aboutus/Parent";
import AboutSchool from "../Home/AboutSchool";
import Footer from "../Home/Footer";


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights/>
      <LifeAtSchool />
      <SchoolCampus />
      <StudentLife />
      <Achievements />
      <Gallery/>
      <Parent/>
      <AboutSchool/>
      <Footer/>
    </>
  );
}

export default Home;