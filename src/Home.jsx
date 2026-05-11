import About from "./About";
import Programs from "./Programs";
import Events from "./Events";
import Contact from "./Contact";
import Donate from "./Donate";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO (stays unique to home) */}
      <section className="hero">
        <h1>TR Sulphur Comedy</h1>
        <p>Spreading the Gospel Through Laughter</p>

        <div className="cta">
          <button><a href="https://ticketyange.com/event/?token=2HWJXG34M7LDINBZRCSK">Buy ticket</a></button>
          
          
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

      <section id="contact">
        <Contact />
      </section>

      <section id="donate">
        <Donate />
      </section>

    </div>
  );
}