import React, { useContext, useEffect, useState } from "react";
import styles from "./CSS/productListing.module.css";
import SearchBar from "../UI/search/SearchBar";
import { mediaContext } from "../context/mediaContext";
import { categories } from "../assets/arrays/categoriesArray";
import Nav from "../components/Nav";
import ProductArea from "../components/ProductArea";
import Category from "../UI/category/Category";
import Notification from "../UI/notificationModal/Notification";
import { FaBackward, FaForward } from "react-icons/fa";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { mediaWidth } = useContext(mediaContext);

  //API Details 
  const apiKey = import.meta.env.VITE_API_KEY
  const apiId = import.meta.env.VITE_API_ID
  const orgId = import.meta.env.VITE_ORGANISATION_ID


  useEffect(() => {
    try {
      const apiUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${orgId}&Appid=${apiId}&Apikey=${apiKey}`;
      fetch(apiUrl)
        .then((data) => data.json())
        .then((res) => {
          setIsLoading(false)
          setProducts((prev) => {
            let data = { ...prev };
            data = res.items;
            console.log(data);
            return data;
          })
          setNotification(true);
          setTimeout(() => {
            setNotification(false);
          }, 2000);
          setErrMessage("Finished Loading Succefully");
    });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginateLeft = () => {
    currentPage >=1 ? setCurrentPage(prev => prev - 1) : setCurrentPage(1)
  }
  const paginateRight = () => {
    currentPage < Math.ceil(products.length/productsPerPage) ? setCurrentPage(prev => prev + 1) : setCurrentPage(Math.ceil(products.length/productsPerPage))
  }

  return (
    <div className={styles.container}>
      <Nav />
      <main>
        {mediaWidth <= 640 && (
          <div className={styles.intro}>
            <div className={styles.infoText}>
              <h1 className={styles.greyText}>Find the</h1>
              <h1>Best</h1>
              <h1>Food</h1>
              <h1 className={styles.greyText}>around you</h1>
            </div>
            <SearchBar />
          </div>
        )}
        <ul className={styles.categories}>
          {categories.map((item) => (
            <Category text={item.text} image={item.image} key={item.id} />
          ))}
        </ul>
        {loading? (
          <p>Loading Products...</p>
        ) : (
          <ProductArea
            setNotification={setNotification}
            setErrMessage={setErrMessage}
            products={currentProducts}
          />
        )}
        <div className={styles.pagination_cont}>
          <div className={styles.pagination_detail}>
            <p>
              Showing: <span>{currentProducts.length}</span>{" "}
              <span>
                out of <span>{products.length}</span>
              </span>
            </p>
          </div>
          <div className={styles.pagination_control}>
            {currentPage > 1 && (
              <button onClick={() => paginateLeft()} className={styles.move}>
                <FaBackward />
              </button>
            )}
            <span className={styles.box}>{currentPage}</span>
            <button onClick={() => paginateRight()} className={styles.move}>
              <FaForward />
            </button>
          </div>
        </div>
        {notification && <Notification text={errMessage} />}
      </main>
    </div>
  );
};

export default ProductListing;
