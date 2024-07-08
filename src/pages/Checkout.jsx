import React, { useContext, useEffect, useState } from "react";
import styles from "./CSS/checkout.module.css";
import Nav from "../components/Nav";
import { mediaContext } from "../context/mediaContext";
import avocado from "./images/avocado.png";
import group from "./images/Group.png";
import chicken from "./images/poultry.png";
import chery from "./images/tomatoes-cherry.png";
import fried from "./images/fried-shrimp.png";

import { FaChevronLeft } from "react-icons/fa";
import Control from "../UI/controls/Control";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/arrays/productsArray";
import { cartContext } from "../context/cartContext";

const Checkout = () => {
  const { mediaWidth } = useContext(mediaContext);
  const { addItemToCart } = useContext(cartContext);
  const { productid } = useParams();
  const navigate = useNavigate();

  const product = products.find((pdt) => pdt.id === parseInt(productid));

  if (!product) {
    return (
      <div>
        <h1>Opps no product found</h1>
        <Link to={"/"}>Back to Products Page</Link>
      </div>
    );
  }

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
    <div className={styles.container}>
      {mediaWidth > 640 && <Nav />}
      <div className={styles.content}>
        <div className={styles.upper_container}>
          {mediaWidth <= 640 && (
            <button onClick={() => navigate("/")} className={styles.btn}>
              <FaChevronLeft />
            </button>
          )}
          <div className={styles.view}>
            <div className={styles.imgHolder}>
              <img
                className={styles.img}
                src={product.image}
                alt="product you choose"
              />
            </div>
            <div className={styles.cont}>
              <Control
                decrementItem={decrementItem}
                incrementItem={incrementItem}
                qty={qty}
              />
            </div>
          </div>
        </div>
        <div className={styles.lower_cont}>
          <h3 className={styles.product_detail}>{product.name}</h3>
          <p className={styles.description}>{product.desc}</p>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.ingredients}>
            <h2>Ingredients</h2>
            <div className={styles.ingrediennt_holder}>
              <div className={styles.circle}>
                <img src={avocado} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={fried} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={chicken} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={group} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={chery} alt="" />
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              addItemToCart({
                image: product.image,
                id: product.id,
                name: product.name,
                price: product.price,
                qty: qty,
              })
            }
            className={styles.add}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
