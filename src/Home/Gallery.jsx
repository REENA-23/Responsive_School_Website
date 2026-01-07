const Gallery = () => {
  return (
    <section className="w-full bg-white pt-[250px]">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-[70px]">

        {/* LEFT – CIRCULAR GALLERY */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="relative w-[420px] h-[420px]">

            {/* OUTER DASHED CIRCLE */}
            <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#4156a6]" />

            {/* CENTER IMAGE */}
            <div className="absolute inset-0 m-auto w-[240px] h-[240px] rounded-full overflow-hidden z-[5]">
              <img
                src="/image_home/main.png"
                alt="Main Gallery"
                className="w-full h-full object-cover"
              />

              {/* WATCH VIDEO BUTTON */}
              <span className="absolute bottom-[12px] left-1/2 -translate-x-1/2 bg-[#f7941d] text-white px-[18px] py-[8px] rounded-[30px] text-[14px] font-medium">
                Watch Video
              </span>
            </div>

            {/* SMALL IMAGE – TOP LEFT */}
            <img
              src="/image_home/small1.png"
              alt=""
              className="absolute w-[62px] h-[62px] rounded-full object-cover top-[36px] left-[36px]"
            />

            {/* SMALL IMAGE – RIGHT */}
            <img
              src="/image_home/small1.png"
              alt=""
              className="absolute w-[62px] h-[62px] rounded-full object-cover right-[-30px] top-1/2 -translate-y-1/2"
            />

            {/* SMALL IMAGE – BOTTOM */}
            <img
              src="/image_home/small3.png"
              alt=""
              className="absolute w-[62px] h-[62px] rounded-full object-cover bottom-[-18px] left-1/2 -translate-x-1/2"
            />

            {/* TAG – TOP */}
            <span className="absolute bg-[#f7941d] text-white px-[18px] py-[8px] rounded-[30px] text-[15px] font-medium top-[-22px] left-[-80px]">
              Lohri Celebration
            </span>

            {/* TAG – BOTTOM */}
            <span className="absolute bg-[#f7941d] text-white px-[18px] py-[8px] rounded-[30px] text-[15px] font-medium bottom-[54px] left-[-80px]">
              Annual Function
            </span>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">

          {/* HEADING */}
          <span className="inline-block w-[28px] h-[3px] bg-[#f7941d] mb-[12px] rounded-full" />
          <h2 className="text-[28px] font-bold text-[#4156a6] mb-[18px]">
            GALLERY
          </h2>

          <p className="text-[15px] leading-[26px] text-[#555] mb-[16px]">
            Nurture each student to reach his or her fullest potential in
            Nurture each student to reach his or her fullest potential.
          </p>

          <p className="text-[15px] leading-[26px] text-[#555] mb-[28px]">
            Nurture each student to reach his or her fullest potential in
            Nurture each student to reach his.
          </p>

          {/* BUTTON */}
          <div className="relative inline-flex items-center h-[46px] group cursor-pointer overflow-hidden">
            <span
              className="
                absolute left-0
                w-[46px] h-[46px]
                bg-[#f7941d]
                rounded-full
                flex items-center justify-center
                text-white text-[20px]
                transition-all duration-300
                group-hover:w-[170px]
              "
            >
              →
            </span>

            <span
              className="
                pl-[66px]
                text-[16px]
                text-[#555]
                relative z-10
                whitespace-nowrap
                transition-colors duration-300
                group-hover:text-white
              "
            >
              View Gallery
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
