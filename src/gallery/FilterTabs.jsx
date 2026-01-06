import { useState } from "react";

const FilterTabs = () => {
  const [active, setActive] = useState("All");

  const tabs = ["All", "Functions", "Infrastructure"];

  return (
    <section className="w-full bg-white">
      {/* CONTENT WRAPPER */}
      <div
        className="
          flex
          justify-center
          px-4 sm:px-6 md:px-10
          py-8 sm:py-10
        "
      >
        <div
          className="
            flex
            items-center
            gap-2 sm:gap-3
            p-2
            bg-[#f0942a]
            rounded-full
            shadow-[0_0_25px_rgba(0,0,0,0.25)]
            overflow-x-auto
            scrollbar-hide
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                whitespace-nowrap
                font-['Poppins']
                text-sm sm:text-base
                font-medium
                px-4 sm:px-6
                py-2
                rounded-full
                transition-all
                duration-300
                cursor-pointer
                ${
                  active === tab
                    ? "bg-white text-[#f0942a] shadow-[0_0_14px_rgba(0,0,0,0.12)]"
                    : "bg-transparent text-white hover:opacity-90"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterTabs;
