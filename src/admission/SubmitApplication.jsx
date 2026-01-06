import { useEffect, useRef, useState } from "react";

const SubmitApplication = () => {
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
                p-2.5
                ${animate ? "animate-slide-right" : "opacity-0"}
              `}
            >
              <img
                src="/image_admission/Application.png"
                alt="Submit Application"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <h2 className="font-['Inter'] text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#3d53a3] mb-5">
              SUBMIT AN APPLICATION
            </h2>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Nurture each student to reach his or her fullest potential in Nurture
              each student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest Nurture each.
            </p>

            <p className="font-['Poppins'] text-sm sm:text-base leading-6 text-[#525252] mb-4">
              Nurture each student to reach his or her fullest potential in Nurture
              each student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest potential in Nurture each
              student to reach his or her fullest Nurture each.
            </p>

            <a
              href="#"
              className="inline-block font-['Poppins'] text-sm sm:text-base text-[#f0942a] font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitApplication;
