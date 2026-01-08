const Achievements = () => {
  return (
    <section className="w-full bg-white overflow-visible">
      {/* BLUE SECTION */}
      <div
        className="
          bg-[#3D53A3]
          w-full
          lg:w-screen
          lg:relative
          lg:left-1/2
          lg:-ml-[50vw]
        "
      >
        <div
          className="
            w-full
            max-w-[1200px]
            mx-auto
            px-4 sm:px-6
            pt-[80px]
            pb-[260px]     /* ⬅️ MORE SPACE FOR CARD */
            relative
          "
        >
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] text-white">
            <h3 className="text-[24px] font-bold leading-[36px]">
              RECURRENT ACADEMIC <br />
              ACHIEVEMENTS YEAR OVER YEAR
            </h3>

            <p className="text-[16px] leading-[28px]">
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his or her fullest potential in
              Nurture each student to reach his.
            </p>
          </div>

          {/* DESKTOP CARD (UNCHANGED) */}
          <div
            className="
              hidden lg:block
              absolute
              right-0
              top-[180px]
              w-[754px]
              bg-white
              rounded-[14px]
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              p-[28px]
              z-10
            "
          >
            <AchievementCard />
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET CARD */}
      <div
        className="
          block lg:hidden
          w-full
          max-w-[92%]
          mx-auto
          -mt-[200px]     /* LESS NEGATIVE */
          bg-white
          rounded-[14px]
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          p-[28px]
          pb-[40px]       /* EXTRA BOTTOM SPACE */
          relative
          z-10
        "
      >
        <AchievementCard />
      </div>
    </section>
  );
};

export default Achievements;


/*  REUSABLE CARD  */
const AchievementCard = () => {
  const stats = [
    { value: "60.91%", width: "61%", color: "bg-[#2fa46c]" },
    { value: "100%", width: "100%", color: "bg-[#2fa46c]" },
    { value: "40.91%", width: "41%", color: "bg-[#f7941d]" },
    { value: "60.91%", width: "61%", color: "bg-[#2fa46c]" },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-[24px]">
        <h3 className="text-[#f7941d] text-[18px] font-semibold">
          CBSE 10
        </h3>
        <span className="text-[13px] text-[#777]">2023</span>
      </div>

      {/* STATS */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className="mb-[26px] last:mb-0 px-[2px]"
        >
          <strong className="block text-[16px] text-[#333] mb-[6px]">
            {stat.value}
          </strong>

          <p className="text-[12px] text-[#666] mb-[12px]">
            Students Scoring 90% And Above
          </p>

          <div className="h-[6px] bg-[#eee] rounded-[4px] overflow-hidden">
            <span
              className={`block h-full ${stat.color}`}
              style={{ width: stat.width }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
