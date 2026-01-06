const Gallery = () => {
  return (
    <section
      className="
        w-full
        bg-white
        relative
        pt-[180px]   
      "
    >
      <div
        className="
          max-w-[1274px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16npm 
          py-12 sm:py-16 md:py-20
        "
      >
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* LEFT – CIRCULAR IMAGE LAYOUT */}
          <div className="w-full lg:flex-1 flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
              {/* Dashed Circle */}
              <div className="absolute inset-0 border-2 border-dashed border-[#4156a6] rounded-full" />

              {/* Center Image */}
              <div className="absolute inset-0 m-auto w-[55%] h-[55%] rounded-full overflow-hidden z-10">
                <img
                  src="/image_home/main.png"
                  alt="Main Gallery"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#f7941d] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm">
                  Watch Video
                </span>
              </div>

              {/* Small Images */}
              <img
                src="/image_home/small1.png"
                className="absolute w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full top-[18px] left-[50px] object-cover"
              />
              <img
                src="/image_home/small1.png"
                className="absolute w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full right-[-28px] top-1/2 -translate-y-1/2 object-cover"
              />
              <img
                src="/image_home/small3.png"
                className="absolute w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bottom-[-13px] left-[35%] -translate-x-1/2 object-cover"
              />

              {/* Tags */}
              <span className="absolute bg-[#f7941d] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium top-[-22px] left-[-38px]">
                Lohri Celebration
              </span>
              <span className="absolute bg-[#f7941d] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium bottom-[36px] left-[-38px]">
                Annual Function
              </span>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="w-full lg:flex-1 max-w-[520px] text-center lg:text-left">
            {/* Heading */}
            <span className="inline-block w-[28px] h-[3px] bg-[#f7941d] mb-3 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4156a6] mb-4">
              GALLERY
            </h2>

            <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4">
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his or her fullest potential.
            </p>

            <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-6">
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his or her fullest.
            </p>

            {/* BUTTON WITH HOVER */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative inline-flex items-center h-[44px] group cursor-pointer">
                <span
                  className="
                    absolute left-0
                    w-[44px] h-[44px]
                    bg-[#f7941d]
                    rounded-full
                    grid place-items-center
                    text-white text-[18px]
                    transition-all duration-300 ease-in-out
                    group-hover:w-[160px]
                  "
                >
                  →
                </span>

                <span
                  className="
                    pl-[60px]
                    text-[14px] sm:text-[16px]
                    text-[#555]
                    relative z-10
                    whitespace-nowrap
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  View Gallery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
