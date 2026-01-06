import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-['Poppins']">
      {/* BLUE CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <div
          className="
            bg-[#3a53a4]
            rounded-2xl
            p-6 sm:p-8 md:p-10
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            items-start
          "
        >
          {/* LEFT SECTION */}
          <div className="text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <img
                  src="/image_home/Logo.png"
                  alt="School Logo"
                  className="w-12"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                Shree <br />
                B.P. Davda <br />
                Sarasvati Vidyalay
              </h3>
            </div>

            <div className="my-6 border-t border-white/30" />

            <p className="text-sm mb-3">Follow us</p>
            <div className="flex gap-3">
              {[faInstagram, faFacebookF, faGoogle, faXTwitter].map(
                (icon, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 bg-white text-[#3a53a4] rounded-full grid place-items-center cursor-pointer"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )
              )}
            </div>
          </div>

          {/* CENTER LINKS */}
          <div className="flex flex-col gap-3 text-white md:pl-6 md:border-l md:border-white/30">
            {[
              ["About Us", "/about"],
              ["Academic Culture", "/academic"],
              ["Co-Curricular", "/co-curricular"],
              ["Gallery", "/gallery"],
              ["Admission", "/admission"],
              ["Contact Us", "/contact"],
            ].map(([label, link]) => (
              <Link
                key={label}
                to={link}
                className="text-sm hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* RIGHT MAP (HIDDEN ON MOBILE) */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/image_home/map.png"
              alt="School Location Map"
              className="
                w-full
                max-w-md
                aspect-[16/9]
                rounded-xl
                object-cover
                shadow-[0_4px_34px_rgba(0,0,0,0.35)]
              "
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-6
            text-xs
            text-[#555]
            flex
            flex-col
            sm:flex-row
            gap-2
            sm:gap-4
            justify-between
            items-center
            text-center
          "
        >
          <p>© 2024 All Rights Reserved SHREE B.P. DAVDA SARASVATI VIDYALAY</p>

          <p>Design and Develop by PRUTHATEK</p>

          <p className="flex gap-2">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            |
            <Link to="/copyright" className="hover:underline">
              Copyright
            </Link>
            |
            <Link to="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
