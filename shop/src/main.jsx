import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
);
