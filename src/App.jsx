import React from "react";
import Router from "./Routes/Router";
import MediaWrapper from "./context/mediaContext";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <MediaWrapper>
      <CartProvider>
        <Router />
      </CartProvider>
    </MediaWrapper>
  );
}

export default App;
