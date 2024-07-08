import React from "react";
import { createContext, useEffect, useState } from "react";

export const mediaContext = createContext({});

const MediaWrapper = ({ children }) => {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const update = () => setMediaWidth(window.innerWidth);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <mediaContext.Provider
      value={{
        mediaWidth,
        search,
        setSearch,
        handleCategoryClick,
        selectedCategory,
      }}
    >
      {children}
    </mediaContext.Provider>
  );
};

export default MediaWrapper;
