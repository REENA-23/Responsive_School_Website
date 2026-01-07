const StudentLife = () => {
  return (
    <section className="bg-white px-[60px] py-[80px]">
      {/* SECTION TITLE */}
      <div className="flex items-center justify-center gap-[10px] mb-[40px]">
        <span className="w-[18px] h-[2px] bg-[#f0942a]"></span>
        <h2 className="text-[18px] font-bold text-[#3d53a3] tracking-[1px]">
          STUDENT LIFE
        </h2>
      </div>

      {/* CARD WRAPPER */}
      <div
        className="
          relative
          max-w-[1272px]
          mx-auto
          h-[421px]

          max-[1024px]:h-auto
        "
      >
        {/* IMAGE */}
        <div
          className="
            w-[65%] h-full
            rounded-[12px]
            overflow-hidden

            max-[1024px]:w-full
            max-[1024px]:h-[300px]
          "
        >
          <img
            src="/image_home/Student.png"
            alt="Student"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* OVERLAPPING CONTENT CARD */}
        <div
          className="
            absolute top-1/2 right-0
            -translate-y-1/2
            w-[55%]
            bg-white
            p-[40px]
            rounded-[12px]
            shadow-[0_0_25px_rgba(173,173,173,0.25)]
            box-border

            max-[1024px]:static
            max-[1024px]:translate-y-0
            max-[1024px]:w-full
            max-[1024px]:mt-[-40px]
          "
        >
          <h3 className="text-[18px] font-semibold text-[#f0942a] mb-[14px]">
            Career Counselling
          </h3>

          <p className="text-[14px] leading-[24px] text-[#8a8a8a] mb-[14px]">
            Nurture each student to reach his or her fullest potential in Nurture
            each student to reach his or her fullest potential in Nurture each
            student to reach his or her fullest potential in Nurture each student
            to reach his or her fullest Nurture each student to reach his or her
            fullest potential in Nurture each student to reach his or her fullest
            potential in Nurture each student to reach his or her fullest
            potential in Nurture each student to reach his or her fullest
            potential in...
          </p>

          <p className="text-[14px] leading-[24px] text-[#8a8a8a]">
            Nurture each student to reach his or her fullest potential.
            <span className="text-[#3d53a3] font-medium cursor-pointer">
              {" "}
              Read more
            </span>
          </p>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-[8px] mt-[20px]">
        <span className="w-[8px] h-[8px] rounded-full bg-[#f0942a]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#d9d9d9]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#d9d9d9]"></span>
      </div>
    </section>
  );
};

export default StudentLife;
