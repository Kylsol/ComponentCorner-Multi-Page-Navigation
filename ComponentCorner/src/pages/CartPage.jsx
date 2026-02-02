import CartItem from "../components/CartItem";

export default function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="app__main">
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
  );
}
