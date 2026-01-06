import { useEffect, useRef, useState } from "react";

const CAS = () => {
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
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1274px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-10 md:gap-16
          "
        >
          {/* IMAGE */}
          <div className="w-full md:flex-1 flex justify-center">
            <div
              className={`
                w-full
                max-w-md sm:max-w-lg md:max-w-[563px]
                aspect-[3/2]
                border-[1.5px]
                border-dashed
                border-[#3d53a3]
                rounded-xl
                p-3
                flex
                items-center
                justify-center
                ${animate ? "animate-principal-image" : "opacity-0"}
              `}
            >
              <img
                src="/image_acedemic/casImage.png"
                alt="CAS Activity"
                className="
                  w-full
                  h-full
                  rounded-xl
                  object-cover
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <h2 className="relative font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold text-[#3d53a3] uppercase mb-5">
              <span className="absolute -top-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-7 h-[3px] bg-[#f0942a] rounded"></span>
              CAS (CREATIVITY ACTIVITY AND SERVICES)
            </h2>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              CAS is an integral part of our educational approach, encouraging
              students to grow beyond the classroom. Through Creativity, students
              engage in artistic pursuits, innovation, and imaginative thinking
              that enhances their problem-solving skills.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Activity promotes physical wellness and teamwork through sports,
              fitness, and outdoor adventures. Service fosters empathy and social
              responsibility, allowing students to contribute meaningfully to
              their communities.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              CAS cultivates leadership, global awareness, and a sense of purpose.
              It transforms learning into action and shapes well-rounded
              individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CAS;
