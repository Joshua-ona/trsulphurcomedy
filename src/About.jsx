import {
  GiMicrophone,
  GiPartyPopper
} from "react-icons/gi";

import {
  FaBookOpen,
  FaChurch
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1 className="gradient-text">About TR Sulphur Comedy</h1>
        <p>Spreading the Gospel Through Laughter, Teaching, and Transformation</p>
      </section>

      {/* CARDS */}
      <section className="about-grid">

        <div className="about-card glass">
          <FaChurch className="about-icon" />
          <h3>Evangelist</h3>
          <p>
            Reaching souls across nations through the message of Christ and
            impactful evangelism missions.
          </p>
        </div>

        <div className="about-card glass">
          <GiMicrophone className="about-icon" />
          <h3>Comedian</h3>
          <p>
            Using clean, powerful comedy to inspire joy, healing, and connection
            while spreading positivity.
          </p>
        </div>

        <div className="about-card glass">
          <FaBookOpen className="about-icon" />
          <h3>Teacher</h3>
          <p>
            Training youth and leaders with knowledge, discipline, and purpose
            for transformation.
          </p>
        </div>

        <div className="about-card glass">
          <GiPartyPopper className="about-icon" />
          <h3>Mcee</h3>
          <p>
            A dynamic Christian MC who brings energy, joy, and faith-filled
            presence to every event — weddings, church programs, and concerts.
          </p>
        </div>

      </section>
    </div>
  );
}