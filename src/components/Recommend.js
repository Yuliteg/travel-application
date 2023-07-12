import React, { useState } from "react";
import { tourData } from "../lib/const";
import PackageButton from "./PackageButton";
import Destination from "./Destination";
import { Section } from "../styles/Recommend.styled";

export default function Recommend() {
  const allCategories = [
    "all",
    ...new Set(tourData.map((tour) => tour.category)),
  ];

  const [activeCategory, setActiveCategory] = useState(allCategories);
  const [filteredItems, setFilteredItems] = useState(tourData);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredItems(tourData);
    } else {
      const newItems = tourData.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
    setActiveCategory(category);
  };

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommend Destinations</h2>
      </div>
      <div className="packages">
        {allCategories.map((category, index) => (
          <PackageButton
            key={index}
            category={category}
            active={activeCategory === category}
            filterItems={filterItems}
          />
        ))}
      </div>

      <div className="destinations">
        {filteredItems.map((tour) => (
          <Destination key={tour.id} tour={tour} />
        ))}
      </div>
    </Section>
  );
}
