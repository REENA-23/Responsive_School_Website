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
      {/* OUTER WRAPPER */}
      <div className="w-full px-[2%] py-[10px]">
        {/* BLUE CARD */}
        <div
          className="
            w-full
            bg-[#3a53a4]
            rounded-[20px]
            px-[40px]
            py-[35px]
            grid
            grid-cols-1
            lg:grid-cols-[1.3fr_1fr_1.6fr]
            gap-[40px]
            items-start
          "
        >
          {/* LEFT : LOGO + SOCIAL */}
          <div className="text-white">
            <div className="flex items-center gap-[16px]">
              <div className="w-[80px] h-[80px] bg-white rounded-[12px] flex items-center justify-center">
                <img
                  src="/image_home/Logo.png"
                  alt="School Logo"
                  className="w-[60px]"
                />
              </div>

              <h3 className="text-[20px] leading-[30px] font-semibold">
                Shree <br />
                B.P. Davda <br />
                Sarasvati Vidyalay
              </h3>
            </div>

            <div className="my-[20px] border-t border-white/30 w-[90%]" />

            <p className="text-[14px] mb-[10px]">Follow us</p>

            <div className="flex gap-[10px]">
              {[faInstagram, faFacebookF, faGoogle, faXTwitter].map(
                (icon, i) => (
                  <span
                    key={i}
                    className="
                      w-[38px]
                      h-[38px]
                      bg-white
                      text-[#3a53a4]
                      rounded-full
                      grid
                      place-items-center
                      cursor-pointer
                      hover:scale-105
                      transition
                    "
                  >
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )
              )}
            </div>
          </div>

          {/* CENTER : LINKS */}
          <div className="text-white flex flex-col gap-[10px] lg:pl-[30px] lg:border-l lg:border-white/30">
            {[
              ["About Us", "/about"],
              ["Academic Culture", "/academic"],
              ["School Culture", "/school"],
              ["Co-Curricular", "/co-curricular"],
              ["Gallery", "/gallery"],
              ["Admission", "/admission"],
              ["Contact Us", "/contact"],
            ].map(([label, link]) => (
              <Link
                key={label}
                to={link}
                className="text-[14px] hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* RIGHT : MAP (DESKTOP ONLY) */}
          <div className="hidden lg:flex justify-end">
            <img
              src="/image_home/map.png"
              alt="School Location"
              className="
                w-full
                max-w-[535px]
                h-[310px]
                object-cover
                rounded-[14px]
                shadow-[0_4px_34px_rgba(0,0,0,0.35)]
              "
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-[18px]
            text-[12px]
            text-[#555]
            flex
            flex-col
            md:flex-row
            gap-[8px]
            justify-between
            items-center
            text-center
          "
        >
          <p>© 2024 All Rights Reserved SHREE B.P. DAVDA SARASVATI VIDYALAY</p>

          <p>Design and Develop by PRUTHATEK</p>

          <p className="flex gap-[6px]">
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
