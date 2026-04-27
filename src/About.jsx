export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About TR Sulphur Comedy</h1>
        <p>Spreading the Gospel Through Laughter, Teaching, and Transformation</p>
      </section>

      {/* CARDS */}
      <section className="about-grid">

        <div className="about-card glass">
          <h3>🙏 Evangelist</h3>
          <p>
            Reaching souls across nations through the message of Christ and
            impactful evangelism missions.
          </p>
        </div>

        <div className="about-card glass">
          <h3>😂 Comedian</h3>
          <p>
            Using clean, powerful comedy to inspire joy, healing, and connection
            while spreading positivity.
          </p>
        </div>

        <div className="about-card glass">
          <h3>📚 Teacher</h3>
          <p>
            Training youth and leaders with knowledge, discipline, and purpose
            for transformation.
          </p>
        </div>
        <div className="about-card glass">
          <h3>🎤 Mcee</h3>
          <p>
            A dynamic Christian MC who brings energy, joy, and a strong faith presence to every event. 
            Specializing in hosting church programs, weddings, concerts, and community gatherings, he creates a lively, uplifting atmosphere while keeping everything well-organized and engaging.
             Our goal is to glorify God and leave every audience inspired.
          </p>
        </div>

      </section>

    </div>
  );
}