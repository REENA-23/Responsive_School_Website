const AdmissionCTA = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1100px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
          text-center
        "
      >
        {/* small orange line */}
        <span className="inline-block w-6 h-[3px] bg-[#f0942a] mb-3 rounded" />

        {/* main heading */}
        <h2 className="font-['Inter'] font-bold text-lg sm:text-xl md:text-2xl uppercase text-[#3d53a3] mb-3">
          ADMISSION OPEN (2025–2026)
        </h2>

        {/* school name */}
        <h3 className="font-['Poppins'] font-semibold text-base sm:text-lg uppercase text-[#525252] mb-4">
          SHREE B.P. DAVDA SARASVATI VIDYALAY
        </h3>

        {/* description */}
        <p
          className="
            max-w-[1100px]
            mx-auto
            mb-6 sm:mb-8
            font-['Poppins']
            text-sm sm:text-base
            leading-6
            tracking-wide
            text-[#525252]
          "
        >
          Nurture each student to reach his or her fullest potential in Nurture
          each student to reach his. Nurture each student to reach his or her
          fullest student to reach his or her fullest potential in Nurture each
          student to reach his.
        </p>

        {/* button */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="
            inline-flex
            items-center
            justify-center
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
            hover:bg-[#e5831f]
          "
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default AdmissionCTA;
