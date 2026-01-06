import { useEffect, useRef, useState } from "react";

const cards = [
  { title: "Sports", img: "/image_home/sports.png", shape: "top" },
  { title: "Social Welfare", img: "/image_home/music.png", shape: "top" },
  { title: "Activities", img: "/image_home/music.png", shape: "bottom" },
  { title: "InterSchool Activities", img: "/image_home/pool.png", shape: "bottom" },
];

const LifeAtSchool = () => {
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
          <span className="inline-block w-[28px] h-[3px] bg-[#f57c00] mb-3 rounded-full" />
          <h2 className="text-2xl font-bold text-[#3d53a3]">LIFE AT</h2>
          <p className="text-base text-[#222] mt-2">
            Shree B.P. Davda Sarasvati Vidyalay
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT – CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1 justify-items-center">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`
                  w-full max-w-[330px]
                  border-2 border-[#4b61d1]
                  p-5 text-center
                  ${
                    item.shape === "top"
                      ? "rounded-tl-[180px] rounded-tr-[180px] rounded-bl-[20px] rounded-br-[20px]"
                      : "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[180px] rounded-br-[180px]"
                  }
                  ${
                    animate
                      ? item.shape === "top"
                        ? "animate-life-up"
                        : "animate-life-down"
                      : "opacity-100"
                  }
                `}
              >
                {/* IMAGE */}
                <div
                  className={`
                    relative w-full aspect-[4/3] overflow-hidden mb-4
                    ${
                      item.shape === "top"
                        ? "rounded-tl-[160px] rounded-tr-[160px] rounded-bl-[20px] rounded-br-[20px]"
                        : "rounded-[20px]"
                    }
                  `}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-[#f57c00] text-sm mb-2">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                  Nurture each student to reach his or her fullest potential in
                  a caring and inspiring environment.
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT – CONTENT BOX */}
          <div className="flex-1">
            {/* ===== DESKTOP TITLE ONLY (UNCHANGED POSITION) ===== */}
            <div className="hidden md:block mb-6">
              <span className="inline-block w-[28px] h-[3px] bg-[#f57c00] mb-3 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3d53a3]">
                LIFE AT
              </h2>
              <p className="text-base sm:text-lg text-[#222] mt-2">
                Shree B.P. Davda Sarasvati Vidyalay
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
              <p className="text-sm sm:text-base text-[#666] leading-relaxed mb-6">
                We believe every child holds the potential to shine. Our mission
                is to guide them with knowledge, discipline, and compassion.
                We create an environment where students grow academically,
                socially, and emotionally.
              </p>

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src="/image_home/group.png"
                  alt="Students Group"
                  className="w-full"
                />
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f57c00]" />
                <span className="w-2 h-2 rounded-full bg-[#ccc]" />
                <span className="w-2 h-2 rounded-full bg-[#ccc]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSchool;
