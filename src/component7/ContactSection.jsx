import "./ContactSection.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras posuere purus ut leo iaculis convallis.
            Nullam fermentum consectetur adipiscing elit.
          </p>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <span>Have any questions?</span>
              <a href="mailto:sbpdsvgmail.com">sbpdsvgmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <div>
              <span>Call us</span>
              <a href="tel:+918592969332">+91-859-296-9332</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <span>Lorem ipsum dolor sit amet,</span>
              <span>dolor consectetur adipiscing</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name<span>*</span></label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Last Name<span>*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email<span>*</span></label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Phone Number<span>*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="form-group full">
            <label>Address</label>
            <input type="text" />
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea placeholder="Write your message..."></textarea>
          </div>

          <button type="submit">Submit Message</button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
