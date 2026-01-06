import { useEffect, useRef, useState } from "react";

const MessageFromPrincipal = () => {
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
    <section ref={sectionRef} className="w-full bg-white font-['Poppins']">
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
            gap-10 md:gap-20
          "
        >
          {/* IMAGE */}
          <div className="flex justify-center w-full md:w-auto">
            <div
              className={`
                w-64 h-64
                sm:w-72 sm:h-72
                md:w-[415px] md:h-[415px]
                border-[1.5px] border-dashed border-[#3d53a3]
                rounded-full
                flex items-center justify-center
                ${animate ? "animate-principal-image" : "opacity-0"}
              `}
            >
              <img
                src="/image_about/Principal.jpg"
                alt="Principal"
                className="
                  w-56 h-56
                  sm:w-64 sm:h-64
                  md:w-[383px] md:h-[383px]
                  rounded-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 text-center md:text-left">
            {/* ORANGE DASH */}
            <span className="inline-block w-[22px] h-[3px] bg-[#f0942a] mb-3"></span>

            {/* TITLE */}
            <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold text-[#3d53a3] uppercase mb-4">
              MESSAGE FROM THE PRINCIPAL
            </h2>

            {/* TEXT */}
            <p className="max-w-full md:max-w-[595px] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Nurture each student to reach his or her fullest potential in Nurture
              each student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest potential in Nurture each student
              to reach his or her fullest Nurture each.
            </p>

            <p className="max-w-full md:max-w-[595px] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Nurture each student to reach his or her fullest potential in Nurture
              each student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest potential in Nurture each student
              to reach his or her fullest Nurture each.
            </p>

            {/* SIGNATURE */}
            <p className="max-w-full md:max-w-[595px] text-center md:text-right text-sm sm:text-base font-semibold text-[#f0942a]">
              – Girishbhai Patel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromPrincipal;
