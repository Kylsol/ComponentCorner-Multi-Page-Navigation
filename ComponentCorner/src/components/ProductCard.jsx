import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <Link to={`/product/${product.id}`}>
          <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>

      <div className="product-card__content">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__bottom">
          <span className="product-card__price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className="product-card__btn"
            type="button"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
