import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import SidebarProvider from "./contexts/SidebarContext";
import ProductProvider from "./contexts/ProductContext";
import CardProvider from "./contexts/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CardProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CardProvider>
  </SidebarProvider>
);
