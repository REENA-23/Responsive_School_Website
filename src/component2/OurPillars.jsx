import "./OurPillars.css";

const pillarsData = [
  {
    name: "Girishbhai Patel",
    role: "Vice President",
    image: "/images/One.jpg",
  },
  {
    name: "Rameshbhai Shah",
    role: "Chairman SVPM",
    image: "/images/Two.jpg",
  },
  {
    name: "Maheshbhai Patel",
    role: "Vice President",
    image: "/images/Three.jpg",
  },
  {
    name: "Sureshbhai Mehta",
    role: "Vice President",
    image: "/images/Four.jpg",
  },
  {
    name: "Nileshbhai Desai",
    role: "Vice President",
    image: "/images/Five.jpg",
  },
];

const OurPillars = () => {
  return (
    <section className="pillars-section">
      {/* Heading */}
      <div className="pillars-heading">
        <span className="pillars-line"></span>
        <h2>OUR PILLARS</h2>
      </div>

      {/* Container */}
      <div className="pillars-wrapper">
        <div className="pillars-orange-bar"></div>

        <div className="pillars-cards">
          {pillarsData.map((person, index) => (
            <div className="pillar-card" key={index}>
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
