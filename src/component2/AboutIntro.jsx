import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-intro">
      {/* Orange line */}
      <span className="about-line"></span>

      {/* Title */}
      <h2 className="about-title">
        ABOUT SHREE B.P. DAVDA SARASVATI VIDYALAY
      </h2>

      {/* Description */}
      <p className="about-text">
        Shree B.P. Davda Sarasvati Vidyalay is committed to nurturing young
        minds through a balanced blend of academic excellence, cultural
        values, and character-building. With a dedicated faculty and a
        supportive environment, the school fosters curiosity, discipline,
        and all-round development. We strive to create responsible citizens
        ready for tomorrow’s challenges.
      </p>
    </section>
  );
};

export default AboutIntro;
