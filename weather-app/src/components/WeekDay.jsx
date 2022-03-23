import React, { useState, useEffect } from "react";
import style from "./WeekDay.module.css";
import { BsDropletHalf } from "react-icons/bs";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDateFormat(time) {
  const newTime = new Date(time * 1000);
  const date = newTime.getDate();
  const day = newTime.getDay();
  const weekDay = week[day];

  return `${weekDay} ${date}`;
}

export default function WeekDay({ city }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitud}&lon=${city.longitud}&exclude=current,minutely,hourly,alerts&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        const dayResponse = recurso.daily;
        const nextDays = dayResponse.map((day) => {
          return {
            dateFormat: getDateFormat(day.dt),
            pop: day.pop,
            description: day.weather[0]["description"],
            icon: day.weather[0]["icon"],
            min: Math.round(day.temp.min),
            max: Math.round(day.temp.max),
            id: day.weather[0]["id"],
          };
        });
        setDays(nextDays);
      });
  }, [city])

  days.shift();

  return (
    <div className={style.card}>
      <div className={style.days}>
        {days.map((newDay) => (
          <div className={style.dayss}>
            <p className={style.date}>{newDay.dateFormat}</p>
            <img
              src={`http://openweathermap.org/img/wn/${newDay.icon}@2x.png`}
              alt="imagen"
            />
            <p className={style.des}>{newDay.description}</p>
            <div className={style.pop}>
              <p>
                <BsDropletHalf /> {Math.floor(newDay.pop)}
              </p>
            </div>
            <p className={style.minmax}>
              Min: {newDay.min}° / Max: {newDay.max}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
