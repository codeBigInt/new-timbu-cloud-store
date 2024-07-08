import React, { useContext } from "react";
import styles from "./CSS/productArea.module.css";
import ProductTemplate from "../UI/productTemplate/ProductTemplate";
import { products } from "../assets/arrays/productsArray";
import { mediaContext } from "../context/mediaContext";

const ProductArea = (props) => {
  const { search } = useContext(mediaContext);
  const content = products
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((item) => <ProductTemplate item={item} />);

  return (
    <ul className={styles.container}>
      {content.length > 1 ? content : <h3>No Product Found</h3>}
    </ul>
  );
};

export default ProductArea;
