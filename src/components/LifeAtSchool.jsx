import "./LifeAtSchool.css";

const LifeAtSchool = () => {
  return (
    <section className="life-section">
      {/* LEFT SIDE CARDS */}
      <div className="life-cards">
        <div className="life-card">
          <div className="life-img">
            <img src="/sports.png" alt="Sports" />
          </div>
          <h4>Sports</h4>
          <p>
            Nurture each student to reach his or her fullest potential in
            Nurture each be student to reach his or her fullest reach potential
            in Nurture each student to be reach in Nurture.
          </p>
        </div>

        <div className="life-card Up">
          <div className="life-img">
            <img src="/music.png" alt="Social Welfare" />
          </div>
          <h4>Social Welfare</h4>
          <p>
            Nurture each student to reach his or her fullest potential in
            Nurture each be student to reach his or her fullest reach potential
            in Nurture each student to be reach in Nurture.
          </p>
        </div>

        <div className="life-card one Down">
          <div className="life-img two">
            <img src="/music.png" alt="Activities" />
          </div>
          <h4>Sports</h4>
          <p>
            Nurture each student to reach his or her fullest potential in
            Nurture each be student to reach his or her fullest reach potential
            in Nurture each student to be reach in Nurture.
          </p>
        </div>

        <div className="life-card one">
          <div className="life-img two">
            <img src="/pool.png" alt="Inter School Activities" />
          </div>
          <h4>InterSchool Activities</h4>
          <p>
            Nurture each student to reach his or her fullest potential in
            Nurture each be student to reach his or her fullest reach potential
            in Nurture each student to be reach in Nurture.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="life-content">
        <span className="life-tag two">LIFE AT</span>
        <h2>Shree B.P. Davda Sarasvati Vidyalay</h2>
        <p>
          Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his.
        </p>

        <div className="life-big-img">
          <img src="/group.png" alt="Students Group" />
        </div>

        <div className="life-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSchool;
