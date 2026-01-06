const AcedemicHero = ({
  title = "Gallery",
  image = "/images/Gallery.png",
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
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-[60%]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Page Title – positioned like screenshot */}
      <h1
        className="
          absolute
          top-[70%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
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
          z-10
        "
      >
        {title}
      </h1>
    </section>
  );
};

export default AcedemicHero;
