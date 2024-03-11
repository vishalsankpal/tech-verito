import { useState } from "react";
import "./App.css";
import { DataProvider } from "./Contexts/DataContext";
import PLP from "./Component/PLP/PLP";
import { CartProvider } from "./Contexts/CartContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Header/Header";
import PDP from "./Component/ProductDetail/ProductDetail";
const App: React.FC = () => {
  return (
    <Router>
      <DataProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<PLP />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<PDP />} />
            </Routes>
          </div>
        </CartProvider>
      </DataProvider>
    </Router>
  );
};

export default App;
