import "./Parent.css";

const testimonials = [
  {
    img: "/Parent1.jpg",
    name: "Mrs. Neha Patel",
    text:
      "My child’s academic growth has been remarkable. The school’s focus on concept clarity and regular assessments is impressive.",
  },
  {
    img: "/Parent1.jpg",
    name: "Mr. Rajesh Mehta",
    text:
      "The teachers are approachable and truly care about each student. The school feels like a second home for my child.",
  },
  {
    img: "/Parent1.jpg",
    name: "Mrs. Anjali Desai",
    text:
      "From sports to arts, my child is encouraged to explore every talent. It’s not just studies—it’s all-round growth.",
  },
  {
    img: "/Parent1.jpg",
    name: "Mr. Kiran Shah",
    text:
      "I’m always informed about my child’s progress. Parent-teacher meetings and updates make us feel included in the journey.",
  },
];

const Parent = () => {
  return (
    <section className="test">
      {/* Section Heading */}
      <div className="testimonials-heading">
        <span className="heading-line"></span>
        <h2>HEAR WHAT PARENTS HAVE TO SAY ABOUT US</h2>
      </div>

      {/* Cards */}
      <div className="testimonials-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>“{item.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parent;
