import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products, addToCart }) {
  return (
    <main className="app__main">
      <h2 className="app__section-title">Featured Products</h2>

      <div className="app__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}
