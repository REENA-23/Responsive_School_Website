import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import LifeAtSchool from "../components/LifeAtSchool";
import SchoolCampus from "../components/SchoolCampus";
import StudentLife from "../components/StudentLife";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import AboutSchool from "../components/AboutSchool";
import Footer from "../components/Footer";


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
      <Testimonials/>
      <AboutSchool/>
      <Footer/>
    </>
  );
}

export default Home;