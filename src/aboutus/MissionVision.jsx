const data = [
  {
    title: "OUR MISSION",
    text:
      "Nurture each student to reach his or her fullest potential in Nurture each be student to reach his or her potential in Nurture each student to be reach in Nurture. Nurture each student to reach his or her fullest reach potential reach his or her.",
    img: "/image_home/group.png",
  },
  {
    title: "CORE VISION",
    text:
      "Nurture each student to reach his or her fullest potential in Nurture each be student to reach his or her potential in Nurture each student to be reach in Nurture. Nurture each student to reach his or her fullest reach potential reach his or her.",
    img: "/image_home/group.png",
  },
  {
    title: "CORE VALUES",
    text:
      "Nurture each student to reach his or her fullest potential in Nurture each be student to reach his or her potential in Nurture each student to be reach in Nurture. Nurture each student to reach his or her fullest reach potential reach his or her.",
    img: "/image_home/group.png",
  },
];

const MissionVision = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1272px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#E1E1E1]
                rounded-2xl
                p-5 sm:p-6
                shadow-[0_0_25px_rgba(173,173,173,0.25)]
                flex flex-col
              "
            >
              {/* ORANGE LINE */}
              <span className="w-5 h-[3px] bg-[#f7941d] mb-3"></span>

              {/* TITLE */}
              <h3 className="font-['Inter'] text-base font-bold text-[#3d53a3] mb-3">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="font-['Poppins'] text-sm leading-6 text-[#525252] mb-4">
                {item.text}
              </p>

              {/* IMAGE */}
              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9d9d9]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d53a3]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9d9d9]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
