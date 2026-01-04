import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="/Logo.png" alt="School Logo" />
        <div className="heading">
          <h4>Shree B.P. Davda</h4>
          <p>Saraswati Vidhyalay, Dholka</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/academic">Academic Culture</NavLink>
        <NavLink to="/co-curricular">Co-Curricular</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/admission">Admission</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </header>
  );
};

export default Header;
