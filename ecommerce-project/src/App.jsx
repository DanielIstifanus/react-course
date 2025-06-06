import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ErrorPage } from "./pages/ErrorPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
