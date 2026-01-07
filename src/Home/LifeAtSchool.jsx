import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Sports",
    img: "/image_home/sports.png",
    imgW: "273px",
    imgH: "191px",
    shape: "top",
  },
  {
    title: "Social Welfare",
    img: "/image_home/music.png",
    imgW: "273px",
    imgH: "191px",
    shape: "top",
  },
  {
    title: "Sports",
    img: "/image_home/music.png",
    imgW: "273px",
    imgH: "180px",
    shape: "bottom",
  },
  {
    title: "InterSchool Activities",
    img: "/image_home/pool.png",
    imgW: "273px",
    imgH: "180px",
    shape: "bottom",
  },
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[80px] px-[60px] max-[1024px]:px-[20px]"
    >
      <div className="max-w-[1272px] mx-auto flex gap-[40px] max-[1024px]:flex-col">

        {/* LEFT – CARD GRID */}
        <div className="grid grid-cols-2 gap-[30px] max-[768px]:grid-cols-1">
          {cards.map((card, index) => {
            const animateClass =
              animate && index === 0
                ? "animate-life-up"
                : animate && index === 3
                ? "animate-life-down"
                : "";

            return (
              <div
                key={index}
                className={`
                  w-[330px] h-[379px]
                  border border-[#3D53A3]
                  p-[18px] box-border
                  flex flex-col
                  ${card.shape === "top"
                    ? "rounded-t-[180px] rounded-b-[10px]"
                    : "rounded-b-[180px] rounded-t-[10px]"}
                  ${animateClass}
                `}
              >
                {/* IMAGE */}
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: card.imgW, height: card.imgH }}
                  className={`
                    mx-auto object-cover
                    ${card.shape === "top"
                      ? "rounded-t-[180px] rounded-b-[6px]"
                      : "rounded-[10px]"}
                  `}
                />

                {/* TITLE */}
                <h4 className="text-center text-[#f0942a] font-semibold text-[14px] mt-[12px]">
                  {card.title}
                </h4>

                {/* PARAGRAPH – INSIDE BOX */}
                <p className="text-center text-[13px] leading-[20px] text-[#6b6b6b] mt-[10px] px-[4px]">
                  Nurture each student to reach his or her fullest potential in
                  Nurture each student to reach his or her fullest reach
                  potential.
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT – CONTENT (CENTERED, NO ANIMATION) */}
        <div className="flex-1 flex items-center max-[1024px]:items-start">
          <div className="w-full">
            <span className="block w-[20px] h-[2px] bg-[#f0942a] mb-[10px]" />

            <h2 className="text-[20px] font-bold text-[#3D53A3]">
              LIFE AT
            </h2>

            <h3 className="text-[16px] text-[#444] mt-[4px]">
              Shree B.P. Davda Sarasvati Vidyalay
            </h3>

            <p className="text-[14px] leading-[24px] text-[#777] mt-[14px]">
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his.
            </p>

            <div className="mt-[20px] rounded-[16px] overflow-hidden">
              <img
                src="/image_home/group.png"
                alt="Group"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex gap-[8px] mt-[14px] justify-center">
              <span className="w-[8px] h-[8px] bg-[#f0942a] rounded-full" />
              <span className="w-[8px] h-[8px] bg-[#d9d9d9] rounded-full" />
              <span className="w-[8px] h-[8px] bg-[#d9d9d9] rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LifeAtSchool;
