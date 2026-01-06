const AnnualFunction = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1263px]
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
            justify-items-center
          "
        >
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="
                relative
                w-full
                max-w-sm
                aspect-[4/3]
                rounded-xl
                overflow-hidden
                border-8
                border-white
                shadow-[0_0_40px_rgba(0,0,0,0.1)]
              "
            >
              {/* Image */}
              <img
                src="/images/Annual.png"
                alt="Annual Function"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="font-['Poppins'] text-lg sm:text-xl font-semibold text-white">
                  Annual Function
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnualFunction;
