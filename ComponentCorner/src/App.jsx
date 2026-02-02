import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";


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

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(cartIndex) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== cartIndex));
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Hero
        title="Tech that just works."
        subtitle="Shop a small collection of gadgets picked for students and everyday setups."
        ctaText="Browse Products"
        image="https://placehold.co/1200x400/111111/ffffff?text=ComponentCorner"
      />

      <main className="app__main">
        <h2 className="app__section-title">Featured Products</h2>

        <div className="app__grid">
          {/* <ProductCard
            name="Noise-Canceling Headphones"
            price="129.99"
            image="https://placehold.co/600x400"
            description="Comfortable over-ear design with solid active noise cancellation."
          />
          <ProductCard
            name="Mechanical Keyboard"
            price="89.00"
            image="https://placehold.co/600x400"
            description="Tactile switches and a sturdy frame for long coding sessions."
          />
          <ProductCard
            name="USB-C Hub"
            price="39.50"
            image="https://placehold.co/600x400"
            description="HDMI, USB, and SD card expansion for modern laptops."
          /> */}

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <section className="cart">
          <h2 className="app__section-title">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="cart__empty">Your cart is empty. Add something!</p>
          ) : (
            <>
              <div className="cart__items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    onRemove={() => removeFromCart(index)}
                  />
                ))}
              </div>

              <div className="cart__total">
                <span>Total:</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>
            </>
          )}
        </section>

      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
        location="Eugene, OR"
      />
    </div>
  );
}

export default App;