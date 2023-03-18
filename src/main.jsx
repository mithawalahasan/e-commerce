import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProductContext from "./contexts/ProductContext";
import SidebarContext from "./contexts/SidebarContext";
import CartContext from "./contexts/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarContext>
    <CartContext>
      <ProductContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContext>
    </CartContext>
  </SidebarContext>
);
