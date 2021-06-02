import "../index.css"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";

const events = [
  { title: 'event 1', start: '2021-06-12T10:30:00', end: '2021-06-12T12:30:00' },
  { title: 'event 2', start: '2021-06-14T13:30:00', end: '2021-06-14T18:30:00' },
  { title: 'event 3', start: '2021-06-12', end: '2021-06-15' }
]

function FullCalendarApp() {

  return (
    <div className="App">
      <FullCalendar nowIndicator height="100vh" plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]} customButtons={{ newEvent: {
      text: "予定を追加",
      click: () => console.log('new event')
    }}
  } headerToolbar={{ center: 'dayGridMonth,timeGridWeek,timeGridDay newEvent'}} dayHeaderFormat={{ weekday: 'short' }} initialView="dayGridMonth" events={events} eventColor="#005745" locale={jaLocale} dateClick={(e) => console.log(e.dateStr)} />
    </div>
  );
}

export default FullCalendarApp;