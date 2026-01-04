import "./StudentLife.css";

const StudentLife = () => {
  return (
    <section className="student-life">
      {/* SECTION TITLE */}
      <div className="student-life-title">
        <span className="line"></span>
        <h2>STUDENT LIFE</h2>
      </div>

      {/* SLIDER CARD */}
      <div className="student-life-card">
        {/* IMAGE */}
        <div className="student-life-image">
          <img src="/Student.png" alt="Student" />
        </div>

        {/* CONTENT */}
        <div className="student-life-content">
          <h3>Career Counselling</h3>

          <p>
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in...
          </p>

          <p>
            Nurture each student to reach his or her fullest potential in Nurture
            each student to reach his or her fullest potential.
            <span className="read-more"> Read more</span>
          </p>
        </div>
      </div>

      {/* DOTS */}
      <div className="student-life-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default StudentLife;
