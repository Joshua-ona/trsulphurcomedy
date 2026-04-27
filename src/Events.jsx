
export default function Events() {
  const events = [
    {
      title: "National Theatre Show",
      date: "15 March 2026",
      location: "National Theatre - Kampala",
      status: "Upcoming"
    },
    {
      title: "Comedy Night Live",
      date: "14 June 2026",
      location: "National Theatre - Kampala",
      status: "Upcoming"
    },
    {
      title: "Campus Tour Show",
      date: "28 July 2026",
      location: "Makerere University",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="section">
      <h2>Events</h2>

      <div className="grid">
        {events.map((event, index) => (
          <div className="card event-card" key={index}>
            <div className="event-badge">{event.status}</div>

            <h3>{event.title}</h3>
            <p>📅 {event.date}</p>
            <p>📍 {event.location}</p>

            <button className="event-btn">
              Get Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}