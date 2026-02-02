import "./Hero.css";

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <h2 className="hero__title">{title}</h2>
          <p className="hero__subtitle">{subtitle}</p>
          <button className="hero__cta" type="button">
            {ctaText}
          </button>
        </div>

        <img className="hero__image" src={image} alt="Store banner" />
      </div>
    </section>
  );
}

export default Hero;