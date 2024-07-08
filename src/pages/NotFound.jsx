import React from "react";
import { Link } from "react-router-dom";
import img from './images/notfound.png'
import styles from './CSS/notfound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={img} alt="404" />
      <p>OPPS! PAGE NOT FOUND</p>
      <Link to={"/"}>Back To Product Page</Link>
    </div>
  );
};

export default NotFound;
