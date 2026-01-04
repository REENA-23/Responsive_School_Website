import "./SchoolCampus.css";

const SchoolCampus = () => {
  return (
    <section className="campus-section">
      {/* LEFT CONTENT */}
      <div className="campus-content">
        <span className="campus-tag">SCHOOL CAMPUS</span>

        <p className="campus-text">
          Nurture each student to reach his or her fullest potential in Nurture
          each student to reach his or her fullest potential in Nurture each
          student to reach his or her fullest potential Nurture each student to
          reach his or her fullest potential Nurture each student to reach his
          or her fullest potential.
        </p>

        <p className="campus-text">
          Nurture each student to reach his or her fullest potential in Nurture
          each student to reach his or her fullest potential.
        </p>

        <button className="campus-btn">
          <span className="campus-arrow">→</span>
          View All
        </button>
      </div>

      {/* RIGHT IMAGE GRID */}
      <div className="campus-images-wrapper">
        <div className="campus-images">
          <img src="/1.png" alt="Campus 1" />
          <img src="/2.png" alt="Campus 2" />
          <img src="/3.png" alt="Campus 3" />
          <img src="/4.png" alt="Campus 4" />
        </div>
      </div>
    </section>
  );
};

export default SchoolCampus;
