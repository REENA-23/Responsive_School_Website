import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        {/* LEFT CONTENT */}
        <div className="whyus-content">
          <span className="whyus-line"></span>
          <h2 className="whyus-title">WHY US</h2>

          <p className="whyus-text">
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>

          <p className="whyus-text">
           Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="whyus-images">
          {/* Main image */}
          <div className="main-image">
            <img src="./images/group.png" alt="Why Us" />
          </div>

          {/* Circular image with dashed border */}
          <div className="circle-border">
            <div className="circle-image">
              <img src="./images/main.png" alt="Students" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
