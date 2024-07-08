import React, { useContext } from "react";
import styles from "./carttemplate.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { cartContext } from "../../context/cartContext";

const CartTemplate = () => {
  const {cart, dispatch} = useContext(cartContext)
  const increase = (id) => {
    const index = cart.findIndex(p => p.id === id)
    if(cart[index].qty < 10){
      dispatch({ type: 'INCREASE', payload: { id } });
    }
  }
  const decrease = (id) => {
    const index = cart.findIndex(p => p.id === id)
    if(cart[index].qty > 0){
      dispatch({ type: 'DECREASE', payload: { id } });
    }
  }
  
  const content = cart.map((item) => (
    <li key={item.id} className={styles.cartItem}>
    <div className={styles.details}>
      <img src={item.image} alt="image" />
      <div className={styles.info}>
        <p className={styles.name}><pre>{item.name}</pre></p>
        <p className={styles.price}>${item.price}</p>
      </div>
    </div>
    <div className={styles.cont}>
      <h3>${item.qty * item.price}</h3>
      <div className={styles.control}>
        <button onClick={() => increase(item.id)}>
          <FaPlus />
        </button>
        <input type="text" value={item.qty} />
        <button onClick={() => decrease(item.id)}>
          <FaMinus />
        </button>
      </div>
    </div>
  </li>
  ))

  return (
    <>
    {content.length > 0 ? content : <p style={{color: 'grey'}}>Opps! Foodie, You cart is empty</p>}
    </>
  );
};

export default CartTemplate;
