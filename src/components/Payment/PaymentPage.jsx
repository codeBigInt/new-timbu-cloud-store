import React, { useContext, useState } from "react";
import card from "./images/card.png";
import option1 from "./images/visa.png";
import option2 from "./images/master.png";
import option3 from "./images/paypal.png";
import option4 from "./images/bank.png";

import styles from "./CSS/paymentpage.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { mediaContext } from "../../context/mediaContext";
import Total from "../Total";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const { mediaWidth } = useContext(mediaContext);

  const navigate = useNavigate();

  const handleFormDataChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
  };
  //Checking Validity of form
  const formIsValid =
    formData.cardNumber.length > 0 &&
    formData.username.length > 0 &&
    formData.cvv.length > 0 &&
    formData.expiryDate.length > 0;

    console.log(formIsValid);

  return (
    <div className={styles.container}>
      {mediaWidth <= 960 && (
        <div className={styles.nav}>
          <button onClick={() => navigate("/cart")} className={styles.btn}>
            <FaChevronLeft />
          </button>
          <h3 className={styles.title}>Payment Details</h3>
        </div>
      )}
      {mediaWidth >= 960 && <h3 className={styles.title}>Payment Details</h3>}
      <p className={styles.instruction}>
        Required fields are indicated with an asterick*
      </p>
      <form action="/">
        <label htmlFor="username">Name on Card *</label>
        <input
          onChange={(e) => handleFormDataChange(e)}
          name="username"
          type="text"
          required
        />
        <label htmlFor="card">Card Number *</label>
        <div className={styles.card_field}>
          <img src={card} alt="" />
          <input
            onChange={(e) => handleFormDataChange(e)}
            name="cardNumber"
            type="text"
            required
          />
        </div>
        <div className={styles.secret}>
          <div className={styles.secret_field}>
            <label htmlFor="expiry_date">Expiry date *</label>
            <input
              onChange={(e) => handleFormDataChange(e)}
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className={styles.secret_field}>
            <label htmlFor="expiry_date">CVV *</label>
            <input
              onChange={(e) => handleFormDataChange(e)}
              type="text"
              name="cvv"
            />
          </div>
        </div>
        <Total />
        <div className={styles.card_cont}>
          <h3>Payment options</h3>
          <div className={styles.option}>
            <img src={option2} alt="" />
            <img src={option1} alt="" />
            <img src={option3} alt="" />
            <img src={option4} alt="" />
          </div>
        </div>
        <button
          onClick={() => navigate("/thankyou")}
          type="submit"
          disabled = {formIsValid === true ? false : true}
          className={`${formIsValid === false ? styles.invalid : ''} ${styles.submit}`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
