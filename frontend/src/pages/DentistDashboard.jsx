// src/pages/DentistDashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Dashboard.css";


const DentistDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointmentsOfDay, setAppointmentsOfDay] = useState([]);
  const overlayRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth() - 6, 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 6, 30);

    fetch(
      `http://localhost:3000/api/calendar?start=${start.toISOString()}&end=${end.toISOString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((rdv) => ({
          id: rdv.id,
          title: rdv.title,
          start: rdv.start,
          extendedProps: rdv.extendedProps,
        }));
        setEvents(formatted);
      });
  }, []);

  const handleDateClick = (arg) => {
    const dateStr = arg.dateStr.split("T")[0];
    const appointments = events.filter((ev) => ev.start.startsWith(dateStr));
    setAppointmentsOfDay(appointments);
    setSelectedDate(dateStr);
    overlayRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="dashboard-main">
        <h2 className="dashboard-title">📅 Planning des Rendez-vous</h2>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          fixedWeekCount={false}
          height="auto"
        />
      </main>

      {selectedDate && (
        <section ref={overlayRef} className="dashboard-overlay">
          <h3 className="overlay-title">
            Rendez-vous du {new Date(selectedDate).toLocaleDateString("fr-FR")}
          </h3>
          <div className="overlay-grid">
            {Array.from({ length: 12 }, (_, i) => {
              const hour = 9 + i;
              const hourStr = `${hour.toString().padStart(2, "0")}:00`;
              const rdv = appointmentsOfDay.find((ev) =>
                ev.start.includes(`T${hourStr.slice(0, 2)}:`)
              );
              return (
                <div key={hour} className="overlay-hour">
                  <span className="hour-label">{hourStr}</span>
                  {rdv ? (
                    <div className="appointment-card">
                      <p><strong>{rdv.title}</strong></p>
                      <p>Tél : {rdv.extendedProps.telephone}</p>
                      <p>Mutuelle : {rdv.extendedProps.mutuelle}</p>
                      <p>{rdv.extendedProps.motifConsultation}</p>
                    </div>
                  ) : (
                    <p className="no-appointment">–</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

    </>
  );
};

export default DentistDashboard;
