import "./Footer.css";

function Footer({ storeName, email, phone, location }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h3 className="footer__title">{storeName}</h3>
          <p className="footer__text">
            Built with React. Simple, fast, and reusable components.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <p className="footer__text">{email}</p>
          <p className="footer__text">{phone}</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Location</h4>
          <p className="footer__text">{location}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {storeName}</span>
      </div>
    </footer>
  );
}

export default Footer;