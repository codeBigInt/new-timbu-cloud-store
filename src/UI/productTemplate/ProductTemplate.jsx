import React, { useContext, useState } from "react";
import styles from "./CSS/productTemplate.module.css";
import Control from "../controls/Control";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const ProductTemplate = ({ item }) => {
  const { image, id, name, price } = item;
  const { addItemToCart } = useContext(cartContext);

  const [qty, setQty] = useState(0);
  const incrementItem = () => {
    setQty((prev) => prev + 1);
  };
  const decrementItem = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };

  return (
    <li key={id} className={styles.container}>
      <Link className={styles.Link} to={`/product/${id}`}>
        <div className={styles.imgHolder}>
          <img className={styles.img} src={image} alt="product" />
        </div>
      </Link>
      <div className={styles.info}>
        <p>{name}</p>
        <p className={styles.bold}>$ {price}</p>
      </div>
      <Control
        decrementItem={decrementItem}
        incrementItem={incrementItem}
        qty={qty}
      />
      <button
        onClick={() =>
          addItemToCart({
            image,
            id,
            name,
            price,
            qty,
          })
        }
        className={styles.add}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default ProductTemplate;
