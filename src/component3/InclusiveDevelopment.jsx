import "./InclusiveDevelopment.css";


const InclusiveDevelopment = () => {
  return (
    <section className="inclusive-wrapper">
      <div className="inclusive-container">
        
        {/* LEFT CONTENT */}
        <div className="inclusive-text">
          <span className="section-dot"></span>
          <h2 className="inclusive-title">INCLUSIVE DEVELOPMENT</h2>

          <p>
            At our school, inclusive development is at the heart of everything we do.
            We nurture every student’s unique abilities, talents, and backgrounds.
            Our classrooms encourage collaboration, empathy, and mutual respect.
            We ensure equal opportunities for all learners to grow and shine.
          </p>

          <p>
            From differentiated teaching methods to support programs, every child is
            valued. Our inclusive practices go beyond academics to emotional and social
            growth. We embrace diversity as a strength that enriches the school
            environment.
          </p>

          <p>
            Together, we build a community where every student feels seen, heard, and
            empowered.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="inclusive-image-wrapper">
          <div className="inclusive-image-border">
            <img src="./images/Inc.png" alt="Inclusive Classroom" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InclusiveDevelopment;
