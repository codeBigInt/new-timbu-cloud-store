import React, { useContext } from "react";
import emoji from "./images/emoji.png";
import Nav from "../components/Nav";
import styles from "./CSS/thanks.module.css";
import { useNavigate } from "react-router-dom";
import { mediaContext } from "../context/mediaContext";
import { FaChevronLeft } from "react-icons/fa";

const Thanks = () => {
  const navigate = useNavigate();
  const { mediaWidth } = useContext(mediaContext);
  return (
    <div className={styles.container}>
      {mediaWidth > 480 && <Nav />}
      {mediaWidth <= 760 && (
        <div className={styles.back}>
          <button onClick={() => navigate("/cart")} className={styles.btn}>
            <FaChevronLeft />
          </button>
          {mediaWidth > 480 && <p>Back</p>}
        </div>
      )}
      <div className={styles.feedback}>
        <img src={emoji} alt="" />
        <div>
          <h3>Hurray!,</h3>
          <h3>Your Order has been Confirmed</h3>
          <h3>Thanks for your purchase!</h3>
        </div>
        <button className={styles.bigBtn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Thanks;
