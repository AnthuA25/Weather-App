import React from "react";
import style from "./Card.module.css";
import h from "../images/humidity.png";
import p from "../images/pressure.png";
import w from "../images/wind.png";
import { MapView } from "./MapView";
import WeekDay from "./WeekDay";
import moment from "moment"


const btnc = {
  color: "white",
  position: "relative",
  top: "8px",
};

export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  id,
  humidity,
  pressure,
  wind,
  temp,
  description,
  latitud,
  longitud,
}) {
  const timeElapsed = Date.now();
  const now = new Date(timeElapsed);

  let city = { latitud: latitud, longitud: longitud, name: name };
  
  return (
    <div className={style.card}>
      <div className={style.closeIcon}>
        <button
          onClick={onClose}
          className="btn btn-sm btn-secondary"
          style={btnc}
        >
          X
        </button>
      </div>
      <h5 className={style.title}>{name}</h5>
      <div className={style.body}>
        <div className={style.temp}>
          <p className={style.temp1}>{temp.toString().slice(0, 2)} °C</p>
          <p className={style.now}>{now.toDateString()}</p>
          {/* <p>{current}</p> */}
          <div className={style.icon}>
            <p className={style.description}>{description}</p>
            <img
              className={style.iconoClima}
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
        <div className={style.data}>
          <div className={style.humidity}>
            <img
              src={h}
              alt=""
              width="40px"
              height="40px"
              className={style.hum}
            />
            <div className={style.column}>
              <div className={style.move}>Humidity</div>
              <div>{humidity}%</div>
            </div>
          </div>
          <div className={style.pressure}>
            <img
              src={p}
              alt=""
              width="40px"
              height="40px"
              className={style.hum}
            />
            <div className={style.column1}>
              <div className={style.move}>Pressure</div>
              <div className={style.p}>{pressure} hPa</div>
            </div>
          </div>
          <div className={style.aire}>
            <img
              src={w}
              alt=""
              width="40px"
              height="40px"
              className={style.hum}
            />
            <div className={style.column1}>
              <div className={style.move1}>Wind</div>
              <div className={style.p1}>{wind} M/S</div>
            </div>
          </div>
        </div>
        <div className={style.map}>
          <MapView city={city} />
        </div>
        {/* <div className={style.week}>
          <h1 className={style.daily}>Daily</h1>
          <WeekDay city={city} />
        </div> */}
      </div>
      <div className={style.week}>
        <h1 className={style.daily}>Daily</h1>
        <WeekDay city={city} />
      </div>
    </div>
  );
}
