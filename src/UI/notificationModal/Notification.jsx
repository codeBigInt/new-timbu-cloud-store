import React from "react";
import styles from "./notification.module.css";
import { FaRegBellSlash } from "react-icons/fa";

const Notification = ({ text }) => {
  return (
    <div className={styles.notifier}>
      <span className={styles.close}>
        <FaRegBellSlash />
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Notification;
