const Achievements = () => {
  return (
    <section className="w-full bg-white">
      {/* BLUE BACKGROUND */}
      <div className="bg-[#3D53A3]">
        <div
          className="
            max-w-[1200px]
            mx-auto
            px-4 sm:px-6 md:px-10 lg:px-16
            pt-[80px]
            pb-[220px]   /* IMPORTANT: reserves space for absolute card */
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

          {/* OVERLAPPING CARD */}
          <div
            className="
              absolute
              right-[-150px]
              top-[140px]
              bg-white
              rounded-[14px]
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              p-[28px]
              w-[754px]
              z-10
            "
          >
            {/* CARD HEADER */}
            <div className="flex justify-between items-center mb-[24px]">
              <h3 className="text-[#f7941d] text-[18px] font-semibold">
                CBSE 10
              </h3>
              <span className="text-[13px] text-[#777]">2023</span>
            </div>

            {/* STAT ITEM */}
            {[
              { value: "60.91%", width: "61%", color: "bg-[#2fa46c]" },
              { value: "100%", width: "100%", color: "bg-[#2fa46c]" },
              { value: "40.91%", width: "41%", color: "bg-[#f7941d]" },
              { value: "60.91%", width: "61%", color: "bg-[#2fa46c]" },
            ].map((stat, index) => (
              <div key={index} className="mb-[22px] last:mb-0">
                {/* VALUE */}
                <strong className="block text-[16px] text-[#333] mb-[4px]">
                  {stat.value}
                </strong>

                {/* LABEL */}
                <p className="text-[12px] text-[#666] mb-[8px]">
                  Students Scoring 90% And Above
                </p>

                {/* PROGRESS BAR */}
                <div className="h-[6px] bg-[#eee] rounded-[4px] overflow-hidden">
                  <span
                    className={`block h-full ${stat.color}`}
                    style={{ width: stat.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
