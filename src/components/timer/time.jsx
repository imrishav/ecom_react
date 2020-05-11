import React, { useState, useEffect, useReducer } from "react";

import "./timer.scss";

const intitalstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

const Time = () => {
  const [years, setYears] = useState(0);
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [count, dispatch] = useReducer(reducer, intitalstate);
  console.log("Timer", count);

  const launchDate = new Date("Dec 27, 2019 13:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds((seconds) => seconds + 1);
      const now = new Date().getTime();

      // Distance from now and the launch date (ms)
      //  const distance = launchDate - now;
      const distance = now - launchDate;

      // Time calculation
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const years = Math.floor(distance / (365 * 24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setYears(years);
      setdays(days);
      sethours(hours);
      setminutes(mins);
      setSeconds(seconds);
      //   console.log("This will run every second!");
    }, 1000);
    return () => clearInterval(interval);
  }, [count, years, days, hours, minutes, seconds]);

  //   console.log("Timer lauch", launchDate);
  //   console.log("Timer lauch", time);

  return (
    <div style={{ backgroundColor: "green", height: "80vh" }}>
      Timer
      <div className="items" style={{ backgroundColor: "red" }}>
        <div className="item">{years}</div>
        <div className="item"> {days}</div>
        <div className="item"> {hours}</div>
        <div className="item"> {minutes}</div>
        <div className="item"> {seconds} Seconds</div>
      </div>
    </div>
  );
};

export default Time;
