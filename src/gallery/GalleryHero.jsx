const GalleryHero = ({
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

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Title */}
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

export default GalleryHero;
