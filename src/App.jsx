import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Admission from "./pages/Admission";
import CoCurricular from "./pages/Co-Curricular";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/co-curricular" element={<CoCurricular />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
