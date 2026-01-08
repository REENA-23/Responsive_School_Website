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
      {/*  WHITE TOP BAR */}
      <div className="hidden lg:flex h-[48px] bg-white justify-end items-center px-10">
        <div className="flex gap-5 text-sm text-[#3f51b5]">
          <a href="#" className="font-medium">Admission Form</a>
          <span>(914) 703-2250</span>
        </div>
      </div>

      {/*BLUE BAR  */}
      <div className="bg-[#3f51b5] w-full">
        <div className="relative mx-auto w-[92%] lg:w-[95%]">

          {/*  MOBILE / iPAD / iPAD MINI HEADER  */}
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

          {/*  DESKTOP FLOATING LOGO  */}
          <div className="hidden lg:block absolute left-10 top-[-74px] bg-white border-2 border-white rounded-2xl">
            <img
              src="/image_home/Logo.png"
              alt="School Logo"
              className="w-[164px] h-[160px] object-contain"
            />
          </div>

          {/* NAVIGATION  */}
          <nav
            className={`
              ${open ? "flex" : "hidden"}
              lg:flex
              flex-col lg:flex-row
              items-center
              gap-5 lg:gap-16
              mt-4 lg:mt-0
              px-4 lg:px-0
              lg:ml-[220px]
            `}
          >
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors text-center
                  ${isActive ? "text-white font-semibold" : "text-[#dfe3ff]"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/*  DESKTOP LOREM  */}
          <p className="hidden lg:flex text-sm text-white leading-6 h-10 justify-center items-end underline decoration-overline">
            “Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit.”
          </p>

        </div>
      </div>
    </header>
  );
};

export default Header1;
