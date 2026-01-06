import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full font-['Inter'] sticky top-0 z-[1000]">
      {/* WHITE TOP BAR (DESKTOP ONLY) */}
      <div className="hidden md:flex h-[48px] bg-white justify-end items-center px-10">
        <div className="flex gap-5 text-sm text-[#3f51b5]">
          <a href="#" className="font-medium no-underline">
            Admission Form
          </a>
          <span>(914) 703-2250</span>
        </div>
      </div>

      {/* BLUE BAR */}
<div className="bg-[#3f51b5] w-full">
  <div className="max-w-[1512px] mx-auto relative px-4 md:px-10
                  py-4 md:pt-[22px] md:pb-[16px]
                  min-h-[72px] md:min-h-0">

    {/* MOBILE HEADER ROW */}
    <div className="flex md:hidden justify-between items-center h-full">
      {/* LOGO LEFT */}
      <div className="bg-white border-2 border-white rounded-xl">
        <img
          src="/image_home/Logo.png"
          alt="School Logo"
          className="w-20 h-20"
        />
      </div>

      {/* HAMBURGER RIGHT */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl"
      >
        ☰
      </button>
    </div>

    {/* DESKTOP LOGO */}
    <div className="hidden md:block absolute left-10 top-[-74px] bg-white border-2 border-white rounded-2xl">
      <img
        src="/image_home/Logo.png"
        alt="School Logo"
        className="w-[164.5px] h-[160px]"
      />
    </div>

    



          {/* NAVIGATION */}
          <nav
            className={`
              ${open ? "flex" : "hidden"}
              md:flex
              flex-col md:flex-row
              items-center
              gap-6 md:gap-16
              mt-6 md:mt-0
              md:ml-[220px]
            `}
          >
            {[
              { to: "/", label: "Home", end: true },
              { to: "/about", label: "About Us" },
              { to: "/academic", label: "Academic Culture" },
              { to: "/co-curricular", label: "Co-Curricular" },
              { to: "/gallery", label: "Gallery" },
              { to: "/admission", label: "Admission" },
              { to: "/contact", label: "Contact Us" },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    text-base
                    font-light
                    text-[#dfe3ff]
                    text-center
                    transition-colors
                    ${isActive ? "text-white font-semibold" : ""}
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* INFO TEXT (DESKTOP ONLY) */}
          <p className="hidden md:flex text-sm text-white leading-6 h-10 justify-center items-end underline decoration-overline">
            “Lorem ipsum dolor sit amet,{" "}
            <strong>consectetur adipiscing</strong> elit, sed do eiusmod
            tempor incididunt ut magna aliqua.”
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header1;
