import { useEffect, useRef, useState } from "react";

const SchoolTimings = () => {
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
      { threshold: 0.4 }
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
        {/* MOBILE TITLE ONLY */}
        <div className="md:hidden text-center mb-8">
          <span className="block w-[28px] h-[3px] bg-[#f0942a] mx-auto mb-3"></span>
          <h2 className="font-['Inter'] text-xl font-bold uppercase text-[#3d53a3]">
            SCHOOL TIMINGS
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* IMAGE */}
          <div className="w-full md:flex-1 flex justify-center">
            <div
              className={`
                w-full
                max-w-md sm:max-w-lg md:max-w-[672px]
                aspect-[16/9]
                border-[1.5px]
                border-dashed
                border-[#3d53a3]
                rounded-xl
                p-2.5
                ${animate ? "animate-slide-right" : "opacity-0"}
              `}
            >
              <img
                src="/image_admission/School.png"
                alt="School Timings"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-lg
                  border-[1.5px]
                  border-[#3d53a3]
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:flex-1 text-center md:text-left">
            {/* DESKTOP TITLE ONLY (UNCHANGED) */}
            <h2 className="hidden md:block font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#3d53a3] mb-5">
              SCHOOL TIMINGS
            </h2>

            <h4 className="font-['Poppins'] text-sm sm:text-base font-semibold text-[#f0942a] mb-2">
              School Timings
            </h4>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Our school is open from Monday to Friday.
            </p>
            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Grade 9 (8:00 AM to 3:00 PM)
            </p>
            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Grade 10 (8:00 AM to 3:00 PM)
            </p>

            <h4 className="font-['Poppins'] text-sm sm:text-base font-semibold text-[#f0942a] mb-2">
              Office Timings
            </h4>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Monday to Friday (8:30 AM to 4:30 PM)
            </p>
            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Saturday (8:30 AM to 12:30 PM)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTimings;
