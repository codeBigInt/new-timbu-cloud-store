import React, { useContext, useEffect, useState } from "react";
import styles from "./CSS/checkout.module.css";
import Nav from "../components/Nav";
import { mediaContext } from "../context/mediaContext";
import avocado from "./images/avocado.png";
import group from "./images/Group.png";
import chicken from "./images/poultry.png";
import chery from "./images/tomatoes-cherry.png";
import fried from "./images/fried-shrimp.png";

import { FaChevronLeft } from "react-icons/fa";
import Control from "../UI/controls/Control";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { products } from "../assets/arrays/productsArray";
import { cartContext } from "../context/cartContext";

const Checkout = () => {
  const [messsage, setMessage] = useState("");
  const [pdtImg, setPdtImg] = useState('')
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(0);
  const { mediaWidth } = useContext(mediaContext);
  const { addItemToCart } = useContext(cartContext);
  const { productid } = useParams();
  const navigate = useNavigate();

  //API config
  const apiKey = import.meta.env.VITE_API_KEY
  const apiId = import.meta.env.VITE_API_ID
  const orgId = import.meta.env.VITE_ORGANISATION_ID


  useEffect(async () => {
    const apiUrl = `https://timbu-get-single-product.reavdev.workers.dev/${productid}?organization_id=${orgId}&Appid=${apiId}&Apikey=${apiKey}`;
    fetch(`${apiUrl}`)
      .then((data) => data.json())
      .then((res) =>
        setProduct((prev) => {
          let data = { ...prev };
          data = res;
          console.log(data);
          return data;
        })
      );
  }, [productid]);

  // Creating display items
  const id = product.id;
  const name = product.name;
  const description = product.description;
  const price = product.current_price;

  const productData = { ...product }; // Assuming your fetched data is in a variable

  useEffect(() => {
    setPdtImg(productData.photos && productData.photos.length > 0 ? `https://api.timbu.cloud/images/${productData.photos[0].url}` : '')

  }, [product])
  // if (productData.photos && productData.photos.length > 0) {
  //   const target = 'https://api.timbu.cloud/images/'
  //   const firstImageUrl = productData.photos[0].url; 
  //   const
  //   setImage(target + firstImageUrl)
  //   // Assuming the first element has the URL
  //   console.log("First Image URL:", firstImageUrl);
  //   // You can use this URL to display the image in your HTML using an img tag:
  //   // <img src="${firstImageUrl}" alt="Mini Avocado Pack">
  // }
  // const image = product.photos[0].url
  // const imgUrl = `https://api.timbu.cloud/images/${image}`

  // const product = products.find(item => item.id === productid)
  // if (!product) {
  //   return <div>Loading...</div>;
  //   // return (
  //   //   <div>
  //   //     <h1>Opps no product found</h1>
  //   //     <Link to={"/"}>Back to Products Page</Link>
  //   //   </div>
  //   // );
  // }

  const incrementItem = () => {
    setQty((prev) => prev + 1);
  };
  const decrementItem = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };
  const showMessage = () => {
    setMessage("Added to Cart Sucessfully");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {mediaWidth > 640 && <Nav />}
      <div className={styles.content}>
        <div className={styles.upper_container}>
          {mediaWidth <= 640 && (
            <button onClick={() => navigate("/")} className={styles.btn}>
              <FaChevronLeft />
            </button>
          )}
          <div className={styles.view}>
            <div className={styles.imgHolder}>
              <img className={styles.img} src={productData.photos && productData.photos.length > 0 ? `https://api.timbu.cloud/images/${productData.photos[0].url}` : ''} alt="product you choose" />
            </div>
            <div className={styles.cont}>
              <Control
                decrementItem={decrementItem}
                incrementItem={incrementItem}
                qty={qty}
              />
            </div>
          </div>
        </div>
        <div className={styles.lower_cont}>
          <h3 className={styles.product_detail}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          <div className={styles.ingredients}>
            <h2>Ingredients</h2>
            <div className={styles.ingrediennt_holder}>
              <div className={styles.circle}>
                <img src={avocado} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={fried} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={chicken} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={group} alt="" />
              </div>
              <div className={styles.circle}>
                <img src={chery} alt="" />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              addItemToCart({
                image: pdtImg,
                id: id,
                name: name,
                price: price,
                qty: qty,
              });
              showMessage();
            }}
            className={styles.add}
          >
            Add To Cart
          </button>
          <p>
            <span style={{ color: "green" }}>{messsage}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
