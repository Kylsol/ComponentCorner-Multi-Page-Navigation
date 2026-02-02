import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">{storeName}</h1>

        <nav className="header__nav">
          <a className="header__link" href="#">
            Home
          </a>
          <a className="header__link" href="#">
            Products
          </a>
          <a className="header__link" href="#">
            About
          </a>
          <a className="header__link" href="#">
            Contact
          </a>
        </nav>

        {/* <button className="header__btn" type="button">
          Sign In
        </button> */}

        <div className="header__actions">
            <div className="header__cart">
                <span className="header__cart-icon">🛒</span>

            {cartCount > 0 && (
                <span className="header__cart-count">{cartCount}</span>
            )}
            </div>

            <button className="header__btn" type="button">
                Sign In
            </button>
        </div>
        
      </div>
    </header>
  );
}

export default Header;