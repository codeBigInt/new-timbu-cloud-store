import React, { useContext } from 'react'
import styles from './CSS/total.module.css'
import { cartContext, totalPrice } from '../context/cartContext'

const Total = () => {
    const {cart} = useContext(cartContext)
  return (
    <div>
      <div className={styles.subTotal}>
          <p>Subtotal</p>
          <p>$ {totalPrice(cart)}</p>
        </div>
        <div className={styles.total}>
          <h3>Total</h3>
          <h3>$ {Math.round(totalPrice(cart))}.00</h3>
        </div>
    </div>
  )
}

export default Total
