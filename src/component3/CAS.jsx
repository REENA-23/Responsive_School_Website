import "./CAS.css";
// import casImage from "../../assets/casImage.png";

const CAS = () => {
  return (
    <section className="cas-section">
      <div className="cas-wrapper">
        {/* Left Image */}
        <div className="cas-image-box">
          <div className="cas-image-border">
            <img src="./images/casImage.png" alt="CAS Activity" />
          </div>
        </div>

        {/* Right Content */}
        <div className="cas-content">
          <h2 className="cas-title">
            CAS (CREATIVITY ACTIVITY AND SERVICES)
          </h2>

          <p>
            CAS is an integral part of our educational approach, encouraging
            students to grow beyond the classroom. Through Creativity, students
            engage in artistic pursuits, innovation, and imaginative thinking
            that enhances their problem-solving skills.
          </p>

          <p>
            Activity promotes physical wellness and teamwork through sports,
            fitness, and outdoor adventures. Service fosters empathy and social
            responsibility, allowing students to contribute meaningfully to
            their communities.
          </p>

          <p>
            CAS cultivates leadership, global awareness, and a sense of purpose.
            It transforms learning into action and shapes well-rounded
            individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CAS;
