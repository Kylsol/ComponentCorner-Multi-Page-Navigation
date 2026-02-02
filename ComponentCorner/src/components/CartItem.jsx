import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <div className="cart-item__name">{item.name}</div>
        <div className="cart-item__price">${item.price.toFixed(2)}</div>
      </div>

      <button className="cart-item__remove" type="button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;