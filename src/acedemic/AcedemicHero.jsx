const AcedemicHero = ({
  title = "ACADEMIC CULTURE",
  image = "/image_about/About.jpg",
}) => {
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
      {/* BACKGROUND IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-[60%]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* TITLE */}
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

export default AcedemicHero;
