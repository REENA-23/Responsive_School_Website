import { useEffect, useRef, useState } from "react";

const SchoolCampus = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div
        className="
          max-w-[1274px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
        "
      >
        {/* ===== MOBILE TITLE ONLY ===== */}
        <div className="md:hidden text-center mb-10">
          <span className="inline-block w-[28px] h-[3px] bg-[#f0942a] mb-3 rounded-full" />
          <h2 className="text-2xl font-bold text-[#3d53a3]">
            SCHOOL CAMPUS
          </h2>
          <p className="text-sm text-[#525252] mt-2 max-w-[700px] mx-auto">
            Explore our thoughtfully designed campus that nurtures learning,
            creativity, and growth.
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT – CONTENT BOX */}
          <div className="flex-1 w-full">
            {/* ===== DESKTOP TITLE ONLY (UNCHANGED POSITION) ===== */}
            <div className="hidden md:block mb-6">
              <span className="inline-block w-[28px] h-[3px] bg-[#f0942a] mb-3 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d53a3]">
                SCHOOL CAMPUS
              </h2>
              <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-[700px]">
                Explore our thoughtfully designed campus that nurtures learning,
                creativity, and growth.
              </p>
            </div>

            <div
              className="
                bg-[#f9fafc]
                rounded-2xl
                p-6 sm:p-8
                shadow-[0_8px_25px_rgba(0,0,0,0.06)]
              "
            >
              <p className="text-sm sm:text-base leading-relaxed text-[#525252] mb-4">
                Nurture each student to reach his or her fullest potential in an
                environment designed for holistic development. Our campus
                supports academic excellence, creativity, and well-being.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#525252] mb-6">
                From modern classrooms to open activity spaces, every corner of
                our campus inspires learning beyond books.
              </p>

              <button className="inline-flex items-center gap-3 text-[#525252] text-sm sm:text-base font-medium group">
                <span
                  className="
                    w-12 h-12
                    bg-[#f0942a]
                    text-white
                    rounded-full
                    flex items-center justify-center
                    text-2xl
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
                View All
              </button>
            </div>
          </div>

          {/* RIGHT – IMAGE GRID */}
          <div className="flex-1 w-full flex justify-center">
            <div
              className="
                w-full max-w-[640px]
                border border-dashed border-[#3d53a3]
                rounded-[60px]
                p-3
              "
            >
              <div className="grid grid-cols-2 gap-2">
                {[
                  { src: "/image_home/1.png", anim: "animate-campus-left", tl: true },
                  { src: "/image_home/2.png", anim: "animate-campus-right", tr: true },
                  { src: "/image_home/3.png", anim: "animate-campus-left", br: true },
                  { src: "/image_home/4.png", anim: "animate-campus-right", bl: true },
                ].map((img, i) => (
                  <div
                    key={i}
                    className={`
                      relative w-full aspect-[4/3] overflow-hidden
                      ${img.tl ? "rounded-tl-[80px] rounded-br-[110px]" : ""}
                      ${img.tr ? "rounded-tr-[80px] rounded-bl-[110px]" : ""}
                      ${img.br ? "rounded-tr-[110px] rounded-bl-[80px]" : ""}
                      ${img.bl ? "rounded-tl-[110px] rounded-br-[80px]" : ""}
                      ${animate ? img.anim : "opacity-100"}
                    `}
                  >
                    <img
                      src={img.src}
                      alt={`Campus ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCampus;
