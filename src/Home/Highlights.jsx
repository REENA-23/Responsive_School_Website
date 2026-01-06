const highlightsData = [
  {
    title: "Academic Excellence",
    text:
      "We are committed to delivering quality education that empowers students to reach their full potential.",
  },
  {
    title: "Empowering Minds",
    text:
      "At our school, we focus on intellectual development along with emotional intelligence and empathy.",
  },
  {
    title: "Real-World Success",
    text:
      "Equipping learners with the skills, mindset, and confidence to succeed beyond school walls.",
  },
  {
    title: "Guiding Every Child",
    text:
      "We believe each student has unique potential. Our mission is to support, guide, and inspire.",
  },
];

const Highlights = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-[1274px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-10 sm:py-14 md:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6
                rounded-xl
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                flex flex-col
                transition-all duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
              "
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#f57c00] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#555] leading-6 mb-5">
                {item.text}
              </p>

              <span className="mt-auto text-xs font-medium text-[#3f51b5] cursor-pointer hover:underline">
                Know More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
