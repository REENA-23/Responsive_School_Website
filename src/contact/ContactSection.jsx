import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          max-w-[1196px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16 md:py-20
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-8 lg:gap-10
            bg-white
            rounded-2xl
            shadow-[0_0_30px_rgba(0,0,0,0.08)]
            p-6 sm:p-8 md:p-10
          "
        >
          {/* LEFT PANEL */}
          <div className="w-full lg:w-[403px] bg-[#f6f8fc] rounded-2xl p-6 sm:p-8">
            <h2 className="font-['Poppins'] text-xl sm:text-2xl font-medium text-[#3D53A3] mb-5">
              Contact Information
            </h2>

            <p className="text-sm sm:text-base text-[#525252] leading-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              posuere purus ut leo iaculis convallis. Nullam fermentum
              consectetur adipiscing elit.
            </p>

            {/* Email */}
            <div className="flex items-start gap-4 mb-5">
              <FaEnvelope className="text-[#3D53A3] text-lg mt-1" />
              <div>
                <span className="block text-sm text-[#525252]">
                  Have any questions?
                </span>
                <a
                  href="mailto:sbpdsvgmail.com"
                  className="text-base font-medium text-[#3D53A3]"
                >
                  sbpdsvgmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-5">
              <FaPhoneAlt className="text-[#3D53A3] text-lg mt-1" />
              <div>
                <span className="block text-sm text-[#525252]">Call us</span>
                <a
                  href="tel:+918592969332"
                  className="text-base font-medium text-[#3D53A3]"
                >
                  +91-859-296-9332
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#3D53A3] text-lg mt-1" />
              <div>
                <span className="block text-sm text-[#525252]">
                  Lorem ipsum dolor sit amet,
                </span>
                <span className="block text-sm text-[#525252]">
                  dolor consectetur adipiscing
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="flex-1">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#525252] mb-2.5">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none focus:border-[#3D53A3]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#525252] mb-2.5">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none focus:border-[#3D53A3]"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#525252] mb-2.5">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none focus:border-[#3D53A3]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#525252] mb-2.5">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none focus:border-[#3D53A3]"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col mb-8">
              <label className="text-sm font-medium text-[#525252] mb-2.5">
                Address
              </label>
              <input
                type="text"
                className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none focus:border-[#3D53A3]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-10">
              <label className="text-sm font-medium text-[#525252] mb-2.5">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="border-0 border-b border-[#9a9a9a] pb-2.5 text-sm sm:text-base outline-none resize-none h-24 focus:border-[#3D53A3]"
              />
            </div>

            {/* Button */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              type="submit"
              className="
                mx-auto
                block
                bg-[#3D53A3]
                text-white
                px-10
                py-3
                rounded-full
                text-sm sm:text-base
                font-medium
                shadow-[0_10px_25px_rgba(61,83,163,0.3)]
                hover:opacity-90
              "
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
