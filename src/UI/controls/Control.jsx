import React, { useState } from "react";
import styles from "./CSS/control.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Control = (props) => {
  return (
    <div className={styles.controls}>
      <button onClick={props.incrementItem} className={styles.btn}>
        <FaPlus />
      </button>
      <input
        className={styles.input}
        type="text"
        value={props.qty}
        disabled={true}
      />
      <button onClick={props.decrementItem} className={styles.btn}>
        <FaMinus />
      </button>
    </div>
  );
};

export default Control;
