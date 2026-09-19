import { features } from "../data.js";

export default function Features() {
  return (
    <section className="features" id="support">
      <h2 className="features__title">Why people switch to Lumen.</h2>
      <div className="features__grid">
        {features.map((f) => (
          <article key={f.title} className="feature">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
