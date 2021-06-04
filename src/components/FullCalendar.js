import "../index.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2021-06-16T10:30:00",
    end: "2021-06-16T12:30:00",
  },
  {
    id: 2,
    title: "event 2",
    start: "2021-06-14T13:30:00",
    end: "2021-06-14T18:30:00",
  },
  { id: 3, title: "event 3", start: "2021-06-13", end: "2021-06-18" },
];

function FullCalendarApp() {
  return (
    <div className="App">
      <FullCalendar
        nowIndicator
        height="100vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
          end: "today prev,next",
        }}
        initialView="dayGridMonth"
        events={events}
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}

export default FullCalendarApp;
