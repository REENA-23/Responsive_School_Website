import React from "react";
import "./SubmitApplication.css";

// ⬆️ replace with your actual image path

const SubmitApplication = () => {
  return (
    <section className="submit-section">
      <div className="submit-container">

        {/* Image */}
        <div className="submit-image-wrapper">
          <img
            src="./images/Application.png"
            alt="Submit Application"
            className="submit-image"
          />
        </div>

        {/* Content */}
        <div className="submit-content">
          <h2 className="submit-title">SUBMIT AN APPLICATION</h2>

          <p className="submit-text">
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>

          <p className="submit-text">
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>

          <a href="#" className="submit-link">
            Learn more
          </a>
        </div>

      </div>
    </section>
  );
};

export default SubmitApplication;
