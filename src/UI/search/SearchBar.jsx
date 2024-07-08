import React, { useContext, useState } from "react";
import styles from "./CSS/searchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { mediaContext } from "../../context/mediaContext";

const SearchBar = (props) => {
  const { mediaWidth, setSearch } = useContext(mediaContext);
  
  return (
    <div
      className={`${styles.container} ${
        mediaWidth <= 640 ? `${styles.enlarge}` : ""
      }`}
    >
      <span>
        <FaSearch className={styles.icon} />
      </span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Search by food name"
      />
    </div>
  );
};

export default SearchBar;
