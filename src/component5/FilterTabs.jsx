import { useState } from "react";
import "./FilterTabs.css";

const FilterTabs = () => {
  const [active, setActive] = useState("All");

  const tabs = ["All", "Functions", "Infrastructure"];

  return (
    <section className="filter-section">
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${active === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FilterTabs;
