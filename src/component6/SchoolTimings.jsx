import "./SchoolTimings.css";


const SchoolTimings = () => {
  return (
    <section className="school-timings-section">
      <div className="school-timings-container">

        {/* LEFT IMAGE */}
        <div className="image-wrapper">
          <div className="image-border">
            <img src="./images/School.png" alt="School Timings" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-wrapper">
          <h2 className="main-heading">SCHOOL TIMINGS</h2>

          <h4 className="sub-heading">School Timings</h4>
          <p className="text">Our school is open from Monday to Friday.</p>
          <p className="text">Grade 9 (8:00 AM to 3:00 PM)</p>
          <p className="text">Grade 10 (8:00 AM to 3:00 PM)</p>

          <h4 className="sub-heading office">Office Timings</h4>
          <p className="text">Monday to Friday (8:30 AM to 4:30 PM)</p>
          <p className="text">Saturday (8:30 AM to 12:30 PM)</p>
        </div>

      </div>
    </section>
  );
};

export default SchoolTimings;
