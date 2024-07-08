import React, { useContext } from "react";
import styles from "./CSS/nav.module.css";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../assets/icons/cart.png";
import user from "../assets/images/user.png";
import { mediaContext } from "../context/mediaContext";
import SearchBar from "../UI/search/SearchBar";
import { cartContext } from "../context/cartContext";
import LinkEl from "./LinkEl";

const Nav = () => {
  const { mediaWidth } = useContext(mediaContext);
  const {cart} = useContext(cartContext)

  return (
    <nav className={styles.nav_cont}>
      <h3 className={styles.nav_brand}>Timbu Store</h3>
      <div className={styles.rightCont}>
        <LinkEl />
        {mediaWidth >= 640 && <SearchBar />}
        <div className={styles.controls}>
          <img className={styles.user} src={user} alt="user" />
          <Link to={'/cart'} className={styles.imgBtn}>
            <img className={styles.bell} src={cartImg} alt="notification" />
            <span className={styles.notif}>{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
