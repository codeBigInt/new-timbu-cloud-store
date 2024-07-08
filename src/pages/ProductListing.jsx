import React, { useContext, useState } from "react";
import styles from "./CSS/productListing.module.css";
import SearchBar from "../UI/search/SearchBar";
import { mediaContext } from "../context/mediaContext";
import { categories } from "../assets/arrays/categoriesArray";
import Nav from "../components/Nav";
import ProductArea from "../components/ProductArea";
import Category from "../UI/category/Category";


const ProductListing = () => {
  const { mediaWidth } = useContext(mediaContext);
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        {mediaWidth <= 640 && <div className={styles.intro}>
          <div className={styles.infoText}>
            <h1 className={styles.greyText}>Find the</h1>
            <h1>Best</h1>
            <h1>Food</h1>
            <h1 className={styles.greyText}>around you</h1>
          </div>
          <SearchBar />
        </div>}
        <ul className={styles.categories}>
          {categories.map((item) => (
            <Category text={item.text} image={item.image} key={item.id}/>
          ))}
        </ul>
        <ProductArea />
      </main>
    </div>
  );
};

export default ProductListing;
