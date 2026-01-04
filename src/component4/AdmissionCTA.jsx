import "./AdmissionCTA.css";

const AdmissionCTA = () => {
  return (
    <section className="admission-cta">
      {/* small orange line */}
      <span className="cta-line"></span>

      {/* main heading */}
      <h2 className="cta-title">ADMISSION OPEN (2025–2026)</h2>

      {/* school name */}
      <h3 className="cta-school">
        SHREE B.P. DAVDA SARASVATI VIDYALAY
      </h3>

      {/* description */}
      <p className="cta-desc">
        Nurture each student to reach his or her fullest potential in Nurture
        each student to reach his. Nurture each student to reach his or her
        fullest student to reach his or her fullest potential in Nurture each
        student to reach his.
      </p>

      {/* button */}
      <button className="cta-btn">Enroll Now</button>
    </section>
  );
};

export default AdmissionCTA;
