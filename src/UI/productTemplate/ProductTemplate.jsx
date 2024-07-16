import React, { useContext, useEffect, useState } from "react";
import styles from "./CSS/productTemplate.module.css";
import Control from "../controls/Control";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const ProductTemplate = ({ items, setNotification, setErrMessage }) => {
  const [qty, setQty] = useState(1);
  const [pdtImg, setPdtImg] = useState("");

  const id = items.id;
  const name = items.name;
  const price = items.current_price[0].NGN[0];
  const image = items.photos[0].url;
  const imgUrl = `https://api.timbu.cloud/images/${image}`;
  const { addItemToCart } = useContext(cartContext);

  useEffect(() => {
    const productData = { ...items };
    if (productData.photos && productData.photos.length > 0) {
      const target = "https://api.timbu.cloud/images/";
      const firstImageUrl = productData.photos[0].url; // Assuming the first element has the URL
      const url = target + firstImageUrl;
      setPdtImg(url);
      // You can use this URL to display the image in your HTML using an img tag:
      // <img src="${firstImageUrl}" alt="Mini Avocado Pack">
    } else {
      console.log("No images found for product.");
    }
  }, [items]);

  const incrementItem = () => {
    setQty((prev) => prev + 1);
  };
  const decrementItem = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };

  return (
    <li className={styles.container}>
      <Link className={styles.Link} to={`/product/${items.id}`}>
        <div className={styles.imgHolder}>
          <img className={styles.img} src={imgUrl} alt="product" />
        </div>
      </Link>
      <div className={styles.info}>
        <p>{name}</p>
        <p className={styles.bold}>$ {price.toFixed(2)}</p>
      </div>
      <Control
        decrementItem={decrementItem}
        incrementItem={incrementItem}
        qty={qty}
      />
      <button
        onClick={() => {
          if (qty > 0) {
            addItemToCart({
              pdtImg,
              id,
              name,
              price,
              qty,
            });
            setNotification(true);
          setTimeout(() => {
            setNotification(false);
          }, 2000);
          setErrMessage("Added To Cart Successfully");
        }}
          }
          
        className={styles.add}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default ProductTemplate;
