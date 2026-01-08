const Hero = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        h-[80vh]
        sm:h-[85vh]
        lg:h-[90vh]
      "
    >
      {/* HERO IMAGE */}
      <img
        src="/image_home/hero.jpg"
        alt="School Building"
        className="w-full h-full object-cover brightness-[65%]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        {/* % BASED CONTAINER */}
        <div className="w-[92%] sm:w-[85%] lg:w-[65%] text-white">
          {/* WELCOME TEXT */}
          <span className="block text-xs sm:text-sm tracking-[2px] mb-3">
            WELCOME TO
          </span>

          {/* MAIN HEADING */}
          <h1
            className="
              font-bold
              leading-tight
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[42px]
            "
          >
            SHREE B.P. DAVDA SARASWATI VIDYALAY
          </h1>

          {/* BUTTON */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
              mt-6
              inline-flex items-center justify-center
              bg-white text-black
              px-6 sm:px-7
              py-2.5
              text-sm sm:text-base
              font-semibold
              rounded-full
              transition-all duration-300
              hover:bg-[#3f51b5] hover:text-white
            "
          >
            Admission Open for 2025–26
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
