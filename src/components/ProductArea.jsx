import React, { useContext } from "react";
import styles from "./CSS/productArea.module.css";
import ProductTemplate from "../UI/productTemplate/ProductTemplate";
import { products } from "../assets/arrays/productsArray";
import { mediaContext } from "../context/mediaContext";

const ProductArea = (props) => {
  const { search, selectedCategory } = useContext(mediaContext);


  // const content = products
  //   .filter((item) => {
  //     const matchesSearch = search.toLowerCase() === ""
  //       ? item
  //       : item.name.toLowerCase().includes(search.toLowerCase())
  //     const matchesCategory = selectedCategory === "All"
  //     ? item
  //     : item.filter((item) => item.category === selectedCategory);
  //     return matchesCategory && matchesSearch
  //   })
  //   .map((item) => <ProductTemplate item={item} />);

  const filteredItems = products.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearchTerm = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  }).map((item) => <ProductTemplate item={item} />);


  return (
    <ul className={styles.container}>
      {filteredItems.length > 1 ? filteredItems : <h3>No Product Found</h3>}
    </ul>
  );
};

export default ProductArea;
