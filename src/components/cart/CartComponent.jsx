import React, { useContext } from "react";
import img from "../../assets/images/products/pro4.png";
import styles from "./CSS/cartcomponent.module.css";
import { FaChevronLeft, FaLifeRing, FaMinus, FaPlus } from "react-icons/fa";
import ticket from "./ticket.png";
import CartTemplate from "../../UI/cartItem/CartTemplate";
import { mediaContext } from "../../context/mediaContext";
import { useNavigate } from "react-router-dom";
import { cartContext, totalPrice } from "../../context/cartContext";
import Total from "../Total";

const CartComponent = () => {
  const { mediaWidth } = useContext(mediaContext);
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.btn_cont}>
          <button onClick={() => navigate("/")} className={styles.btn}>
            <FaChevronLeft />
          </button>
          {mediaWidth >= 760 && <span>Continue shoping</span>}
        </div>
        <h3>Cart</h3>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.cartList}>
          <CartTemplate />
        </ul>
        <div className={styles.promo}>
          <img src={ticket} alt="" className={styles.ticket} />
          <input type="text" placeholder={`Promo code`} />
          <button>Apply</button>
        </div>
        <Total />
        {mediaWidth >= 960 && (
          <button className={styles.back_btn}>
            <FaChevronLeft />
            <span>Continue shoping</span>
          </button>
        )}
        {mediaWidth <= 960 && (
          <button
            onClick={() => navigate("/payment")}
            disabled={cart.length > 0 ? false : true}
            className={`${cart.length > 0 ? "" : styles.disabled} ${
              styles.proceedBtn
            }`}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
