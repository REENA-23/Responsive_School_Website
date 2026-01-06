const pillarsData = [
  {
    name: "Girishbhai Patel",
    role: "Vice President",
    image: "/image_about/One.jpg",
  },
  {
    name: "Rameshbhai Shah",
    role: "Chairman SVPM",
    image: "/image_about/Two.jpg",
  },
  {
    name: "Maheshbhai Patel",
    role: "Vice President",
    image: "/image_about/Three.jpg",
  },
  {
    name: "Sureshbhai Mehta",
    role: "Vice President",
    image: "/image_about/Four.jpg",
  },
  {
    name: "Nileshbhai Desai",
    role: "Vice President",
    image: "/image_about/Five.jpg",
  },
];

const OurPillars = () => {
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
        <div className="flex flex-col items-center mb-10">
          <span className="w-7 h-[3px] bg-[#f7941d] rounded"></span>
          <h2 className="mt-2 font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold text-[#3d53a3] uppercase">
            OUR PILLARS
          </h2>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            relative
            bg-white
            rounded-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.12)]
            pt-12 sm:pt-14
            pb-10 sm:pb-12
            px-6 sm:px-10
          "
        >
          {/* ORANGE BAR */}
          <div className="absolute top-0 left-0 w-full h-3 bg-[#f7941d] rounded-t-2xl" />

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-5
              gap-8 sm:gap-10
              text-center
            "
          >
            {pillarsData.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="
                    w-36 h-36
                    sm:w-40 sm:h-40
                    rounded-full
                    object-cover
                    mb-4
                  "
                />

                <h4 className="text-base sm:text-lg font-semibold text-[#525252] mb-1">
                  {person.name}
                </h4>

                <p className="text-sm sm:text-base font-medium text-[#3d53a3] tracking-wide">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
