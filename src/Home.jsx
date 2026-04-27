import About from "./About";
import Programs from "./Programs";
import Events from "./Events";
import Gallery from "./Gallery";
import Donate from "./Donate";

export default function Home() {
  return (
    <div>

      {/* HERO (stays unique to home) */}
      <section className="hero">
        <h1>TR Sulphur Comedy</h1>
        <p>Spreading the Gospel Through Laughter</p>

        <div className="cta">
          <button><a href="tel:+256 706 423099">Buy ticket</a></button>
          <button><a href="./donate">Donate</a></button>
          
        </div>
      </section>

      {/* PAGE SECTIONS AS COMPONENTS */}
      <section id="about">
        <About />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="donate">
        <Donate />
      </section>

    </div>
  );
}