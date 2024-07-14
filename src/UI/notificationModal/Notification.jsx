import React from "react";
import styles from "./notification.module.css";
import { FaRegBellSlash, FaRegTimesCircle } from "react-icons/fa";

const Notification = ({ text }) => {
  return (
    <div className={styles.notifier}>
      <span className={styles.close}>
        <FaRegTimesCircle />
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Notification;
