const CoCurricularHero = ({ title = "Co-curricular", image }) => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        h-[200px]
        sm:h-[240px]
        md:h-[300px]
        lg:h-[360px]
      "
    >
      {/* Background image */}
      <img
        src={image || "/image_about/About.jpg"}
        alt={title}
        className="w-full h-full object-cover brightness-[60%]"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Centered title */}
      <h1
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-white
          font-bold
          uppercase
          tracking-wide
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          px-4
          text-center
        "
      >
        {title}
      </h1>
    </section>
  );
};

export default CoCurricularHero;
