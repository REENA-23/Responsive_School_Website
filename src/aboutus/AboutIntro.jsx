const AboutIntro = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          w-full
          mx-auto
          flex flex-col
          items-center
          text-center
          pt-12 sm:pt-16 md:pt-20
          pb-10 sm:pb-14 md:pb-16
          px-4 sm:px-6 md:px-10 lg:px-16
        "
      >
        {/* Orange line */}
        <span
          className="
            w-8 sm:w-10
            h-[3px]
            bg-[#f7931e]
            rounded
            mb-4 sm:mb-5
          "
        ></span>

        {/* Title */}
        <h2
          className="
            font-['Inter']
            text-lg sm:text-xl md:text-2xl lg:text-[26px]
            font-bold
            text-[#3d53a3]
            uppercase
            mb-4 sm:mb-5
            max-w-4xl
          "
        >
          ABOUT SHREE B.P. DAVDA SARASVATI VIDYALAY
        </h2>

        {/* Description */}
        <p
          className="
            max-w-full sm:max-w-md md:max-w-3xl lg:max-w-[1184px]
            font-['Poppins']
            text-sm sm:text-base
            font-normal
            leading-6 sm:leading-7
            tracking-wide
            text-[#444444]
          "
        >
          Shree B.P. Davda Sarasvati Vidyalay is committed to nurturing young
          minds through a balanced blend of academic excellence, cultural
          values, and character-building. With a dedicated faculty and a
          supportive environment, the school fosters curiosity, discipline,
          and all-round development. We strive to create responsible citizens
          ready for tomorrow’s challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
