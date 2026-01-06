const HeadLine = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
          text-center
        "
      >
        {/* Small orange line */}
        <span className="inline-block w-6 h-[3px] bg-[#f0942a] mb-3 rounded" />

        {/* Title */}
        <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#3d53a3] mb-4">
          ADMISSION OPEN (2025–2026)
        </h2>

        {/* School name */}
        <h3 className="font-['Poppins'] text-base sm:text-lg font-semibold uppercase text-[#525252] mb-4">
          SHREE B.P. DAVDA SARASVATI VIDYALAY
        </h3>

        {/* Description */}
        <p
          className="
            max-w-[930px]
            mx-auto
            mb-6 sm:mb-8
            font-['Poppins']
            text-sm sm:text-base
            leading-6
            tracking-wide
            text-[#525252]
          "
        >
          We welcome young learners to a nurturing environment where education
          meets values and innovation. Give your child the opportunity to grow
          with confidence and curiosity.
          <br />
          Enroll Now!
        </p>

        {/* Button */}
        <button
          className="
            bg-[#f0942a]
            text-white
            rounded-full
            px-7 sm:px-9
            py-2.5
            font-['Poppins']
            text-sm sm:text-base
            font-medium
            transition-colors
            duration-300
            hover:bg-[#d87f1e]
          "
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default HeadLine;
