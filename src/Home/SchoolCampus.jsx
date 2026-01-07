const SchoolCampus = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-[90%] mx-auto py-[80px] flex flex-col lg:flex-row gap-[60px] items-center">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[42%]">
          <span className="inline-block w-[28px] h-[3px] bg-[#f0942a] mb-[18px] rounded-full" />

          <h2 className="text-[28px] font-bold text-[#3d53a3] mb-[16px]">
            SCHOOL CAMPUS
          </h2>

          <p className="text-[15px] leading-[26px] text-[#525252] mb-[14px]">
            Nurture each student to reach his or her fullest potential in
            Nurture each student to reach his or her fullest potential in
            Nurture each student to reach his.
          </p>

          <p className="text-[15px] leading-[26px] text-[#525252] mb-[24px]">
            Nurture each student to reach his or her fullest potential in
            Nurture each student to reach his.
          </p>

          <button className="flex items-center gap-[12px] group">
            <span className="w-[48px] h-[48px] rounded-full bg-[#f0942a] text-white text-[22px] flex items-center justify-center transition-transform group-hover:translate-x-1">
              →
            </span>
            <span className="text-[#525252] font-medium text-[16px]">
              View All
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE CONTAINER */}
        <div className="w-full lg:w-[58%] flex justify-center">
          <div className="w-full p-[10px] border border-dashed border-[#3d53a3] rounded-[90px]">

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-[6px]">

              {/* IMAGE 1 – TOP LEFT */}
              <div className="w-full h-[270px] overflow-hidden rounded-tl-[80px] rounded-br-[110px]">
                <img
                  src="/image_home/1.png"
                  alt="Campus 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 2 – TOP RIGHT */}
              <div className="w-full h-[270px] overflow-hidden rounded-tr-[80px] rounded-bl-[110px]">
                <img
                  src="/image_home/2.png"
                  alt="Campus 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 3 – BOTTOM LEFT */}
              <div className="w-full h-[270px] overflow-hidden rounded-tr-[110px] rounded-bl-[80px]">
                <img
                  src="/image_home/3.png"
                  alt="Campus 3"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 4 – BOTTOM RIGHT */}
              <div className="w-full h-[270px] overflow-hidden rounded-tl-[110px] rounded-br-[80px]">
                <img
                  src="/image_home/4.png"
                  alt="Campus 4"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SchoolCampus;
