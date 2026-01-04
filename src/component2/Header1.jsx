import "./Header1.css";
import { NavLink } from "react-router-dom";

const Header1 = () => {
  return (
    <header className="about-header">

      {/* WHITE TOP BAR */}
      <div className="about-top-bar">
        <div className="top-right">
          <a href="#">✏ Admission Form</a>
          <span>📞 (914) 703-2250</span>
        </div>
      </div>

      {/* BLUE HEADER */}
      <div className="about-blue-bar">
        <div className="about-inner">

          {/* LOGO (OVERLAPPING) */}
          <div className="about-logo">
            <img src="/Logo.png" alt="School Logo" />
          </div>

          {/* NAV + TEXT */}
          <div className="about-content">
            <nav className="about-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/academic">Academic Culture</NavLink>
              <NavLink to="/co-curricular">Co-Curricular</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/admission">Admission</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </nav>

            <p className="about-info">
              “Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit,
              sed do eiusmod tempor incididunt ut magna aliqua.”
            </p>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header1;
