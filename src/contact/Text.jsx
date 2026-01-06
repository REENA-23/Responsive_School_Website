const HighlightText = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1184px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-10 sm:py-12 md:py-16
          text-center
        "
      >
        <p
          className="
            font-['Poppins']
            text-sm sm:text-base
            font-normal
            leading-6 sm:leading-7
            tracking-wide
            text-[#525252]
          "
        >
          Nurture each student to reach his or her fullest potential in Nurture
          each student to reach his or her fullest potential in{" "}
          <span className="font-semibold text-[#f0942a]">
            Nurture each student to reach his or her fullest
          </span>{" "}
          Nurture each student to reach his or her fullest potential in Nurture
          each student to reach his or her fullest{" "}
          <span className="font-semibold text-[#f0942a]">
            potential in Nurture each
          </span>{" "}
          student to reach his or her fullest potential.
        </p>
      </div>
    </section>
  );
};

export default HighlightText;
