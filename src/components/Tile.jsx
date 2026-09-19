export default function Tile({ id, theme = "light", title, sub, price, visual, size = "wide" }) {
  return (
    <section id={id} className={`tile tile--${theme} tile--${size}`}>
      <div className="tile__copy">
        <h2 className="tile__title">{title}</h2>
        <p className="tile__sub">{sub}</p>
        {price && <p className="tile__price">{price}</p>}
        <div className="links">
          <a href={`#${id}`} className="link">Learn more</a>
          <a href={`#${id}`} className="link">Buy</a>
        </div>
      </div>
      <div className="tile__visual">{visual}</div>
    </section>
  );
}
