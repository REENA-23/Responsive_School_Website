import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* MAIN BLUE BOX */}
      <div className="footer-box">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* IMAGE LOGO */}
              <img src="Logo.png" alt="School Logo" />
            </div>

            <h3>
              Shree<br />
              B.P. Davda<br />
              Sarasvati Vidyalay
            </h3>
          </div>

          <div className="footer-divider">----------------------------------------------------------------------------</div>

          <div className="follow-us">
            <p>Follow us</p>
            <div className="social-icons">
              {/* TEMP TEXT ICONS */}
              <span><FontAwesomeIcon icon={faInstagram} /></span>
              <span> <FontAwesomeIcon icon={faFacebookF} /></span>
              <span> <FontAwesomeIcon icon={faGoogle} /></span>
              <span><FontAwesomeIcon icon={faXTwitter} /></span>
            </div>
          </div>
        </div>

        {/* CENTER LINKS (TEXT ONLY) */}
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/academic">Academic Culture</Link>
          <Link to="/school">School Culture</Link>
          <Link to="/co-curricular">Co-Curricular</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* RIGHT MAP (IMAGE) */}
        <div className="footer-map">
          <img src="/images/map.png" alt="School Location Map" />
        </div>
      </div>

      {/* BOTTOM TEXT BAR */}
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved SHREE B.P. DAVDA SARASVATI VIDYALAY</p>

        <p>Design and Develop by PRUTHATEK</p>

        <p>
          <Link to="/privacy">Privacy Policy</Link> |
          <Link to="/copyright">Copyright</Link> |
          <Link to="/terms">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
