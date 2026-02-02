import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero
        title="Tech that just works."
        subtitle="Shop a small collection of gadgets picked for students and everyday setups."
        ctaText="Browse Products"
        image="https://placehold.co/1200x400/111111/ffffff?text=ComponentCorner"
      />

      <main className="app__main">
        <h2 className="app__section-title">Why shop with us?</h2>
        <p>
          Simple store, clean design, and a cart that stays saved while you browse.
        </p>
      </main>
    </div>
  );
}
