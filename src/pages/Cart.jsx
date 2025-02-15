import React, { useContext, useState } from "react";
import styles from "./CSS/cart.module.css";
import CartComponent from "../components/cart/CartComponent";
import PaymentPage from "../components/Payment/PaymentPage";
import { mediaContext } from "../context/mediaContext";

const Cart = () => {
  const { mediaWidth } = useContext(mediaContext);
  return (
    <div className={styles.cart_cont}>
      <div className={styles.left_cont}>
        <CartComponent />
      </div>
      {mediaWidth >= 960 && (
        <div className={styles.right_cont}>
          <PaymentPage />
        </div>
      )}
    </div>
  );
};

export default Cart;
