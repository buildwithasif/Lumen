import { footerColumns } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__note">
          Lumen is a fictional brand created for this demo. Prices, products and
          features shown here are examples only.
        </p>

        <div className="footer__cols">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>Copyright © 2026 Lumen Inc. All rights reserved.</span>
          <span className="footer__legal">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Use</a>
            <a href="#top">Sales and Refunds</a>
            <a href="#top">Site Map</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
