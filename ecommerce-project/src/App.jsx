import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ErrorPage } from "./pages/ErrorPage";
import { TrackingPage } from "./pages/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} setCart={setCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} setCart={setCart} />}
      />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
