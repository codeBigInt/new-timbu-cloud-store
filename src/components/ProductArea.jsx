import React, { useContext } from "react";
import styles from "./CSS/productArea.module.css";
import ProductTemplate from "../UI/productTemplate/ProductTemplate";
// import { products } from "../assets/arrays/productsArray";
import { mediaContext } from "../context/mediaContext";

const ProductArea = ({ products, setNotification, setErrMessage }) => {
  const { search, selectedCategory } = useContext(mediaContext);

  const filteredItems = products
    .filter((item) => {
      // const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearchTerm = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesSearchTerm;
    })
    .map((item) => (
      <ProductTemplate
        items={item}
        setNotification={setNotification}
        setErrMessage={setErrMessage}
      />
    ));

  return (
    <ul className={styles.container}>
      {filteredItems.length > 1 ? filteredItems : <h3 style={{textAlign: 'center'}}>No Product Found <br /> Check the Next page</h3>}
    </ul>
  );
  // return (
  //   <ul className={styles.container}>
  //     {products.map((item) => (
  //       <ProductTemplate
  //         items={item}
  //         setNotification={setNotification}
  //         setErrMessage={setErrMessage}
  //       />
  //     ))}
  //   </ul>
  // );
};

export default ProductArea;
