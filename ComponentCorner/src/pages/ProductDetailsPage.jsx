import { useParams } from "react-router-dom";

export default function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <main className="app__main">
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="app__main">
      <h2 className="app__section-title">{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "500px", width: "100%" }} />
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </main>
  );
}
