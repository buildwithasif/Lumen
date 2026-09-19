import { PhoneVisual } from "./Visuals.jsx";

export default function Hero() {
  return (
    <section className="hero" id="phone">
      <div className="hero__copy">
        <p className="hero__eyebrow">New</p>
        <h1 className="hero__title">Lumen 5</h1>
        <p className="hero__sub">Bright thinking. Brighter display.</p>
        <div className="links">
          <a href="#phone" className="link">Learn more</a>
          <a href="#phone" className="link">Buy</a>
        </div>
      </div>
      <div className="hero__visual">
        <PhoneVisual size={17} />
      </div>
    </section>
  );
}
