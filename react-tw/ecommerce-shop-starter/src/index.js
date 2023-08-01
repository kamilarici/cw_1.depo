import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./components/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </SidebarProvider>
);
