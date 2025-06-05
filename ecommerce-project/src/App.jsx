import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>checkout page</div>} />
    </Routes>
  );
}

export default App;
