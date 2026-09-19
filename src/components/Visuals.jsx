// Pure CSS product drawings. Sizes use "em", so change font-size on the
// wrapper to make any visual bigger or smaller.

export function PhoneVisual({ size = 14 }) {
  return (
    <div className="visual" style={{ fontSize: size }} aria-hidden="true">
      <div className="phone">
        <div className="phone__screen">
          <span className="phone__island" />
          <span className="phone__time">9:41</span>
          <span className="phone__date">Saturday, 19 September</span>
        </div>
        <span className="phone__button" />
      </div>
    </div>
  );
}

export function LaptopVisual({ size = 12 }) {
  return (
    <div className="visual" style={{ fontSize: size }} aria-hidden="true">
      <div className="laptop">
        <div className="laptop__lid">
          <div className="laptop__screen">
            <span className="laptop__notch" />
            <span className="laptop__glow" />
          </div>
        </div>
        <div className="laptop__base" />
      </div>
    </div>
  );
}

export function WatchVisual({ size = 12 }) {
  return (
    <div className="visual" style={{ fontSize: size }} aria-hidden="true">
      <div className="watch">
        <span className="watch__band watch__band--top" />
        <div className="watch__case">
          <div className="watch__screen">
            <span className="watch__time">10:09</span>
            <span className="watch__ring" />
          </div>
          <span className="watch__crown" />
        </div>
        <span className="watch__band watch__band--bottom" />
      </div>
    </div>
  );
}

export function BudsVisual({ size = 12 }) {
  return (
    <div className="visual" style={{ fontSize: size }} aria-hidden="true">
      <div className="buds">
        <span className="bud bud--left" />
        <span className="bud bud--right" />
        <div className="buds__case">
          <span className="buds__lid" />
          <span className="buds__led" />
        </div>
      </div>
    </div>
  );
}
