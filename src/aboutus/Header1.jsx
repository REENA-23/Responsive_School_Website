import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header1 = () => {
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
    <header className="w-full sticky top-0 z-[1000] font-['Inter']">
      
      {/* ===== WHITE TOP BAR (DESKTOP ONLY) ===== */}
      <div className="hidden lg:flex h-[48px] bg-white justify-end items-center px-10">
        <div className="flex gap-5 text-sm text-[#3f51b5]">
          <a href="#" className="font-medium">Admission Form</a>
          <span>(914) 703-2250</span>
        </div>
      </div>

      {/* ===== BLUE BAR ===== */}
      <div className="bg-[#3f51b5] w-full">
        <div className="relative mx-auto w-[92%] lg:w-[95%]">

          {/* ===== MOBILE / iPAD HEADER ===== */}
          <div className="flex lg:hidden items-center justify-between h-[64px] px-2">
            
            {/* LOGO */}
            <div className="bg-white rounded-lg p-1 flex items-center justify-center">
              <img
                src="/image_home/Logo.png"
                alt="School Logo"
                className="w-[48px] h-[48px] object-contain"
              />
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl leading-none"
            >
              ☰
            </button>
          </div>

          {/* ===== DESKTOP FLOATING LOGO ===== */}
          <div className="hidden lg:block absolute left-10 top-[-74px] bg-white border-2 border-white rounded-2xl">
            <img
              src="/image_home/Logo.png"
              alt="School Logo"
              className="w-[164px] h-[160px] object-contain"
            />
          </div>

          {/* ===== DESKTOP NAVIGATION (RIGHT SIDE + CENTERED) ===== */}
          <div className="hidden lg:flex items-center justify-end min-h-[72px] pl-[220px]">
            <nav className="flex items-center gap-16">
              {links.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `text-base transition-colors
                    ${isActive ? "text-white font-semibold" : "text-[#dfe3ff]"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* ===== MOBILE MENU ===== */}
          {open && (
            <div className="lg:hidden pb-4">
              <nav className="flex flex-col items-center gap-4 pt-4">
                {links.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-base text-center
                      ${isActive ? "text-white font-semibold" : "text-[#dfe3ff]"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}

          {/* DESKTOP LOREM TEXT */}
          <p className="hidden lg:flex text-sm text-white leading-10 h-10 justify-center items-end overline decoration-overline">
            “Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit, sed do eiusmod tempor incididunt ut  magna aliqua..”
          </p>

        </div>
      </div>
    </header>
  );
};

export default Header1;

