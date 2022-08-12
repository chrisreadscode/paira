import _Head from "../../components/_Head";
import CalendarMonthly from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Footer from "../../components/Footer";
import FullCalender from "@fullcalendar/react";
import HeaderMentor from "../../components/HeaderMentor";
import listPlugin from "@fullcalendar/list";
import React from "react";
import styles from "../../styles/Calendar.module.css";
import { useEffect, useState } from "react";

export default function Calendar() {
  const calendarId = "jdkg942utcddst4mnc34nkc59o@group.calendar.google.com";

  let calendars = [
    {
      calendarId,
      color: "rgb(18, 136, 222)",
    },
    // {
    //   calendarId: "appacademy.io_jtt32ih2g9bb6djbev0e6o6rdg@group.calendar.google.com@group.calendar.google.com",
    //   color: "rgb(22, 136, 18)",
    // }
  ];

  let ericStyles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
    },
  
    //you can also use emotion's string styles
    today: css`
      /* highlight today by making the text red and giving it a red border */
      color: red;
      border: 1px solid red;
    `,
  }

  const url = `https://content.googleapis.com/calendar/v3/calendars/${calendarId}/events?maxResults=1000&key=${process.env.API_KEY}`;

  const [calEvents, setCalEvents] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const eventCopies = [];

        for (let i = 0; i < data.items.length; i++) {
          const item = data.items[i];

          const end = item.end.dateTime ? item.end.dateTime : item.end.date;
          const start = item.start.dateTime
            ? item.start.dateTime
            : item.start.date;

          const eventCopy = {
            end,
            id: item.id,
            start,
            title: item.summary,
          };
          eventCopies.push(eventCopy);
        }
        setCalEvents(eventCopies);
      });
  }, []);

  return (
    <>
      <_Head />
      <HeaderMentor />
      <main className={styles.main}>
        <div
          id={styles.monthly}
        >
          <CalendarMonthly
            apiKey={process.env.API_KEY}
            calendars={calendars}
            styles={ericStyles}
          />
        </div>
        <div id={styles.listView}>
          <FullCalender
            events={calEvents}
            initialView="listWeek"
            plugins={[listPlugin]}
            styles={{ backgroundColor: "black" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
