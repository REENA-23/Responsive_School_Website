import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About Us" },
    { to: "/academic", label: "Academic Culture" },
    { to: "/co-curricular", label: "Co-Curricular" },
    { to: "/gallery", label: "Gallery" },
    { to: "/admission", label: "Admission" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-[1000] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      {/* % BASED CONTAINER */}
      <div className="w-[92%] xl:w-[88%] mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src="/image_home/Logo.png"
                alt="School Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#f57c00] leading-tight">
                Shree B.P. Davda
              </h4>
              <p className="text-xs sm:text-sm text-[#3f51b5]">
                Saraswati Vidhyalay, Dholka
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `
                  relative text-sm font-medium
                  ${
                    isActive
                      ? "text-[#3f51b5] after:w-full"
                      : "text-[#525252]"
                  }
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-[#3f51b5]
                  after:w-0 after:transition-all
                  hover:after:w-full
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 grid place-items-center text-[#3f51b5]"
          >
            <span className="text-2xl leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4 border-t pt-4">
              {links.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-sm
                    ${
                      isActive
                        ? "font-semibold text-[#3f51b5]"
                        : "text-[#525252]"
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
