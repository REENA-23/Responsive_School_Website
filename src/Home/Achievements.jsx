const Achievements = () => {
  return (
    <section className="w-full bg-white overflow-visible">
      {/*  BLUE SECTION  */}
      <div
        className="
          bg-[#3D53A3]
          w-full
          md:w-screen
          md:relative
          md:left-1/2
          md:-ml-[50vw]
        "
      >
        <div
          className="
            w-[92%]
            sm:w-[90%]
            lg:w-[1200px]     /* DESKTOP SAME AS BEFORE */
            mx-auto
            pt-[80px]
            pb-[220px]       /* space for overlapping card */
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

          {/* ===== DESKTOP OVERLAPPING CARD ===== */}
          <div
            className="
              hidden lg:block
              absolute
              right-0
              top-[140px]
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

      {/*  MOBILE / TABLET CARD */}
      <div
        className="
          block lg:hidden
          w-[92%]
          sm:w-[90%]
          mx-auto
          -mt-[160px]
          bg-white
          rounded-[14px]
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          p-[28px]
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
          className="mb-[22px] last:mb-0 px-[2px]" /* tablet safety */
        >
          <strong className="block text-[16px] text-[#333] mb-[6px]">
            {stat.value}
          </strong>

          <p className="text-[12px] text-[#666] mb-[10px]">
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
