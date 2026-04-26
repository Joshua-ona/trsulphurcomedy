import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Events() {
  return (
    <div>
      <h2>Events</h2>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "National Theatre", date: "2026-03-10" },
          { title: "National Theatre", date: "2026-06-15" }
        ]}
      />
    </div>
  );
}