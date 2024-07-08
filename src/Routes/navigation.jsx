import React from "react";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductListing from "../pages/ProductListing";
import Payment from "../pages/Payment";
import Thanks from "../pages/Thanks";

export const navArray = [
    {path: '/', element: <ProductListing />},
    {path: '/cart', element: <Cart />},
    {path: '/payment', element: <Payment />},
    {path: '/thankyou', element: <Thanks />},
    {path: '/product/:productid', element: <Checkout />}
]