import { useRef, useEffect, useState } from "react";
import * as dayjs from "dayjs";
import "../index.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2021-06-30T10:30:00",
    end: "2021-07-02T12:30:00",
  },
  {
    id: 2,
    title: "event 2",
    start: "2021-06-14T13:30:00",
    end: "2021-06-14T18:30:00",
  },
  { id: 3, title: "event 3", start: "2021-06-12", end: "2021-06-15" },
];

function FullCalendarApp() {
  const [calendarType, setCalendarType] = useState("month");
  const calendarRef = useRef();

  const handleNextClick = () => {
    const calendar = calendarRef.current.getApi();
    calendar.next();
    const date = calendar.getDate();
    console.log(dayjs(date).format());
    if (calendarType === "month") {
      console.log(dayjs(date).add(1, "month").format());
    }
    if (calendarType === "week") {
      console.log(dayjs(date).add(1, "week").format());
    }
    if (calendarType === "day") {
      console.log(dayjs(date).add(1, "day").format());
    }
  };
  const handlePrevClick = () => {
    const calendar = calendarRef.current.getApi();
    calendar.prev();
    const date = calendar.getDate();
    console.log(dayjs(date).format());
    if (calendarType === "month") {
      console.log(dayjs(date).add(1, "month").format());
    }
    if (calendarType === "week") {
      console.log(dayjs(date).add(1, "week").format());
    }
    if (calendarType === "day") {
      console.log(dayjs(date).add(1, "day").format());
    }
  };

  const handleMonthClick = () => {
    const calendar = calendarRef.current.getApi();
    const date = calendar.getDate();
    calendar.changeView("dayGridMonth");
    setCalendarType("month");
    console.log(dayjs(date).date(1).format());
    console.log(dayjs(date).date(1).add(1, "month").format());
  };
  const handleWeekClick = () => {
    const calendar = calendarRef.current.getApi();
    const date = calendar.getDate();
    calendar.changeView("timeGridWeek");
    setCalendarType("week");
    console.log(dayjs(date).day(0).format());
    console.log(dayjs(date).day(0).add(1, "week").format());
  };
  const handleDayClick = () => {
    const calendar = calendarRef.current.getApi();
    const date = calendar.getDate();
    calendar.changeView("timeGridDay");
    setCalendarType("day");
    console.log(dayjs(date).format());
    console.log(dayjs(date).add(1, "day").format());
  };

  console.log(calendarType);

  return (
    <div className="App">
      <FullCalendar
        ref={calendarRef}
        nowIndicator
        height="100vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        customButtons={{
          newEvent: {
            text: "予定を追加",
            click: () => console.log("new event"),
          },
          next: { click: handleNextClick },
          prev: { click: handlePrevClick },
          month: { text: "月", click: handleMonthClick },
          week: { text: "週", click: handleWeekClick },
          day: { text: "日", click: handleDayClick },
        }}
        headerToolbar={{
          center: "month,week,day newEvent",
          end: "today prev,next",
        }}
        initialView="dayGridMonth"
        events={events}
        eventColor="#005745"
        locale={jaLocale}
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}

export default FullCalendarApp;
