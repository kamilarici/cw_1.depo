import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import SidebarProvider from "./contexts/SidebarContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    
      
        <App />
      
    
  </SidebarProvider>
);
