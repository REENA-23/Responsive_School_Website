import { useEffect, useRef, useState } from "react";

const InclusiveDevelopment = () => {
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
          {/* LEFT CONTENT */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="inline-block w-5 h-[3px] bg-[#f0942a] mb-3"></span>

            <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#3d53a3] mb-5">
              INCLUSIVE DEVELOPMENT
            </h2>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              At our school, inclusive development is at the heart of everything we do.
              We nurture every student’s unique abilities, talents, and backgrounds.
              Our classrooms encourage collaboration, empathy, and mutual respect.
              We ensure equal opportunities for all learners to grow and shine.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              From differentiated teaching methods to support programs, every child is
              valued. Our inclusive practices go beyond academics to emotional and social
              growth. We embrace diversity as a strength that enriches the school
              environment.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252]">
              Together, we build a community where every student feels seen, heard, and
              empowered.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:flex-1 flex justify-center">
            <div
              className={`
                w-full
                max-w-md sm:max-w-lg md:max-w-[563px]
                aspect-[3/2]
                border-[1.5px]
                border-dashed
                border-[#3d53a3]
                rounded-2xl
                p-3
                flex
                items-center
                justify-center
                ${animate ? "animate-slide-right" : "opacity-0"}
              `}
            >
              <img
                src="/image_acedemic/Inc.png"
                alt="Inclusive Classroom"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveDevelopment;
