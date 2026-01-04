import "./Achievement.css";

const Achievements = () => {
  return (
    <section className="Ach">
    <div className="achievements-section">
      <div className="achievements-container">

        {/* TOP CONTENT */}
        <div className="top-content">
          <div className="top-left">
            <h3>
              RECURRENT ACADEMIC <br />
              ACHIEVEMENTS YEAR OVER YEAR
            </h3>
          </div>

          <div className="top-right">
            <p>
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his.
            </p>
          </div>
        </div>

        {/* CARD */}
        <div className="stats-card">
          <div className="card-header">
            <h3>CBSE 10</h3>
            <span>2023</span>
          </div>

          <div className="stat">
            <strong>60.91%</strong>
            <p>Students Scoring 90% And Above</p>
            <div className="bar"><span style={{ width: "61%" }} /></div>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <p>Pass Percentage</p>
            <div className="bar"><span style={{ width: "100%" }} /></div>
          </div>

          <div className="stat">
            <strong>40.91%</strong>
            <p>Students Scoring 90% And Above</p>
            <div className="bar orange"><span style={{ width: "41%" }} /></div>
          </div>

          <div className="stat">
            <strong>60.91%</strong>
            <p>Students Scoring 90% And Above</p>
            <div className="bar"><span style={{ width: "61%" }} /></div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Achievements;
