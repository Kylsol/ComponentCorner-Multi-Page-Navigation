import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
    if (!product) return null;
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
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