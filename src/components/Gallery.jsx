import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">

        <div className="gallery-left">
          <div className="circle-wrapper">

            <div className="dashed-circle"></div>

            {/* Main image */}
            <div className="main-circle">
              <img src="/images/main.png" alt="Students" />
              <span className="watch-video">Watch Video</span>
            </div>

            {/* Small images */}
            <img src="/images/small1.png" className="small-img top" />
            <img src="/images/small2.png" className="small-img right" />
            <img src="/images/small3.png" className="small-img bottom" />

            {/* Tags */}
            <span className="tag lohri">Lohri Celebration</span>
            <span className="tag annual">Annual Function</span>

          </div>
        </div>

        <div className="gallery-right">
          <span className="title-line"></span>
          <h2>GALLERY</h2>

          <p>
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>

          <p>
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>

          <div className="view-gallery">
            <span className="arrow-bg">→</span>
            <span className="view-text">View Gallery</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
