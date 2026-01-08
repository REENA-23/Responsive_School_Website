import { useEffect, useRef, useState } from "react";

const AboutSchool = () => {
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
          w-[92%]
          sm:w-[88%]
          md:w-[80%]
          lg:w-[900px]   /* desktop locked */
          mx-auto
          py-14 sm:py-16 md:py-20
          text-center
        "
      >
        {/* ORANGE LINE */}
        <span
          className={`
            block
            w-[28px]
            h-[3px]
            bg-[#f39a2b]
            mx-auto
            mb-5
            rounded
            ${animate ? "animate-cta-title" : "opacity-0"}
          `}
        />

        {/* MAIN TITLE */}
        <h2
          className={`
            text-lg sm:text-xl md:text-2xl
            font-bold
            text-[#3a53a4]
            tracking-wide
            mb-3
            ${animate ? "animate-cta-title" : "opacity-0"}
          `}
        >
          START YOUR DREAM CAREER WITH
        </h2>

        {/* SUB TITLE */}
        <h3 className="text-base sm:text-lg font-semibold text-[#3c3c3c] mb-4">
          SHREE B.P. DAVDA SARASVATI VIDYALAY
        </h3>

        {/* TEXT */}
        <p className="mb-8 text-sm sm:text-base leading-6 sm:leading-7 text-[#6b6b6b]">
          Start your dream career with us and unlock a world of opportunities.
          <br />
          Our holistic education nurtures talent, builds confidence, and shapes
          future leaders.
          <br />
          Take the first step toward a brighter tomorrow—your journey begins
          here.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`
            inline-flex
            items-center
            justify-center
            bg-[#f39a2b]
            text-white
            rounded-full
            px-7 sm:px-9
            py-2.5
            text-sm sm:text-base
            font-medium
            transition-colors
            duration-300
            hover:bg-[#e88c1f]
            ${animate ? "animate-cta-btn" : "opacity-0"}
          `}
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default AboutSchool;
