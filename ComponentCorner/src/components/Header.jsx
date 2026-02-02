import "./Header.css";
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">{storeName}</h1>

        <nav className="header__nav">
          <Link className="header__link" to="/">
            Home
          </Link>
          <Link className="header__link" to="/products">
            Products
          </Link>

          {/* Optional: keep these for styling, send them home for now */}
          <Link className="header__link" to="/">
            About
          </Link>
          <Link className="header__link" to="/">
            Contact
          </Link>
        </nav>

        <div className="header__actions">
          <Link className="header__cart" to="/cart">
            <span className="header__cart-icon">🛒</span>

            {cartCount > 0 && (
              <span className="header__cart-count">{cartCount}</span>
            )}
          </Link>

          <button className="header__btn" type="button">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;