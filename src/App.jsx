import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Tile from "./components/Tile.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import { LaptopVisual, WatchVisual, BudsVisual, PhoneVisual } from "./components/Visuals.jsx";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />

        <div className="stack">
          <Tile
            id="book"
            theme="dark"
            title="Lumen Book Pro"
            sub="Built for people who never stop making things."
            price="From $1,299"
            visual={<LaptopVisual size={13} />}
          />

          <div className="pair">
            <Tile
              id="watch"
              theme="light"
              size="half"
              title="Lumen Watch"
              sub="Your health, on your wrist."
              price="From $399"
              visual={<WatchVisual size={11} />}
            />
            <Tile
              id="buds"
              theme="gray"
              size="half"
              title="Lumen Buds"
              sub="Quiet the world. Or let it in."
              price="From $179"
              visual={<BudsVisual size={12} />}
            />
          </div>

          <Tile
            id="store"
            theme="light"
            title="Lumen Phone Mini"
            sub="All the power. Half the weight."
            price="From $599"
            visual={<PhoneVisual size={11} />}
          />
        </div>

        <Features />
      </main>
      <Footer />
    </div>
  );
}
