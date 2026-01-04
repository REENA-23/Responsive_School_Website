import "./MissionVision.css";

const data = [
  {
    title: "OUR MISSION",
    text:
      "Nurture each student to reach his or her fullest potential in Nurture each be student to reach his or her  potential in Nurture each student to be reach  in Nurture. Nurture each student to reach his or her his or her fullest reach potential  reach his or her.",
    img: "/images/group.png",
  },
  {
    title: "CORE VISION",
    text:
      "NNurture each student to reach his or her fullest potential in Nurture each be student to reach his or her  potential in Nurture each student to be reach  in Nurture. Nurture each student to reach his or her his or her fullest reach potential  reach his or her.",
    img: "/images/group.png",
  },
  {
    title: "CORE VALUES",
    text:
      "Nurture each student to reach his or her fullest potential in Nurture each be student to reach his or her  potential in Nurture each student to be reach  in Nurture. Nurture each student to reach his or her his or her fullest reach potential  reach his or her.",
    img: "/images/group.png",
  },
];

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {data.map((item, index) => (
          <div className="mission-card" key={index}>
            <span className="orange-line"></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="mission-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="dots">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
