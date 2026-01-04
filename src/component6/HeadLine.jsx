import "./HeadLine.css";

const HeadLine = () => {
  return (
    <section className="admission-section">
      <div className="admission-container">
        {/* Small orange line */}
        <span className="admission-line"></span>

        {/* Title */}
        <h2 className="admission-title">
          ADMISSION OPEN (2025–2026)
        </h2>
        {/* School name */}
        <h3 className="admission-school">
          SHREE B.P. DAVDA SARASVATI VIDYALAY
        </h3>

        {/* Description */}
        <p className="admission-desc">
          We welcome young learners to a nurturing environment where education
          meets values and innovation. Give your child the opportunity to grow
          with confidence and curiosity.<br></br> Enroll Now!
        </p>

        {/* Button */}
        <button className="admission-btn">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default HeadLine;
