import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Noise-Canceling Headphones",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "Comfortable over-ear design with solid active noise cancellation.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.0,
      image: "https://placehold.co/600x400",
      description: "Tactile switches and a sturdy frame for long coding sessions.",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.5,
      image: "https://placehold.co/600x400",
      description: "HDMI, USB, and SD card expansion for modern laptops.",
    },
  ];

  // ✅ Load cart from localStorage on first load
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  // Keep your current “remove by index” logic
  function removeFromCart(cartIndex) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== cartIndex));
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header storeName="ComponentCorner" cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>

        <Footer
          storeName="ComponentCorner"
          email="support@componentcorner.com"
          phone="(555) 123-4567"
          location="Eugene, OR"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;