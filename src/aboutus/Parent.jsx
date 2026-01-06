const testimonials = [
  {
    img: "/image_about/Parent1.jpg",
    name: "Mrs. Neha Patel",
    text:
      "My child’s academic growth has been remarkable. The school’s focus on concept clarity and regular assessments is impressive.",
  },
  {
    img: "/image_about/Parent1.jpg",
    name: "Mr. Rajesh Mehta",
    text:
      "The teachers are approachable and truly care about each student. The school feels like a second home for my child.",
  },
  {
    img: "/image_about/Parent1.jpg",
    name: "Mrs. Anjali Desai",
    text:
      "From sports to arts, my child is encouraged to explore every talent. It’s not just studies—it’s all-round growth.",
  },
  {
    img: "/image_about/Parent1.jpg",
    name: "Mr. Kiran Shah",
    text:
      "I’m always informed about my child’s progress. Parent-teacher meetings and updates make us feel included in the journey.",
  },
];

const Parent = () => {
  return (
    <section className="w-full bg-white font-['Poppins']">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1272px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
        "
      >
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="block w-6 h-[3px] bg-[#f0942a] mx-auto mb-3 rounded"></span>
          <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold text-[#3d53a3] uppercase px-4">
            HEAR WHAT PARENTS HAVE TO SAY ABOUT US
          </h2>
        </div>

        {/* CARDS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6 sm:gap-8
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-5 sm:p-6
                shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                transition-transform
                duration-300
                hover:-translate-y-1.5
              "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover mb-3"
              />

              <h4 className="text-sm sm:text-base font-medium text-[#525252] mb-2">
                {item.name}
              </h4>

              <p className="text-sm leading-6 text-[#525252]">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parent;
