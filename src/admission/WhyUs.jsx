import { useEffect, useRef, useState } from "react";

const WhyUs = () => {
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
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="inline-block w-[24px] h-[3px] bg-[#f0942a] mb-3"></span>

            <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#3d53a3] mb-4">
              WHY US
            </h2>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Nurture each student to reach his or her fullest potential in a
              supportive and inspiring environment that encourages excellence.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Our school focuses on academic strength, character building, and
              holistic development to prepare students for the future.
            </p>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div
            className={`
              w-full md:w-1/2
              flex justify-center
              ${animate ? "animate-slide-left" : "opacity-0"}
            `}
          >
            {/* RELATIVE WRAPPER */}
            <div className="relative w-[520px] max-w-full">
              {/* SQUARE IMAGE */}
              <div
                className="
                  w-full
                  h-[395px]
                  border-[1.5px]
                  border-dashed
                  border-[#3d53a3]
                  rounded-[10px]
                  p-[6px]
                  bg-white
                "
              >
                <img
                  src="/image_home/group.png"
                  alt="Group"
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>

              {/* CIRCULAR IMAGE (OVERLAPPING BOTTOM) */}
              <div
                className="
                  absolute
                  -bottom-[60px]
                  -left-[60px]
                  w-[230px]
                  h-[230px]
                  border-[1.5px]
                  border-dashed
                  border-[#3d53a3]
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  z-[10]

                  max-[768px]:left-1/2
                  max-[768px]:-translate-x-1/2
                  max-[768px]:-bottom-[40px]
                "
              >
                <div className="w-[210px] h-[210px] rounded-full overflow-hidden">
                  <img
                    src="/image_home/main.png"
                    alt="Main"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
