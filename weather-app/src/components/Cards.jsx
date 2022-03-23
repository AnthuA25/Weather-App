import React from "react";

import Card from "./Card.jsx";
import style from "./Cards.module.css";

import SearchBar from "./SearchBar.jsx";
export default function Cards({ cities, onClose, onSearch }) {

  let cardCity = cities.length;

  return (
    <div className={style.cards}>
      <div className={style.left}>
        <SearchBar onSearch={onSearch} />
      </div>
      {
        <div className={style.right}>
        {cities.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            latitud={c.latitud}
            longitud={c.longitud}
            temp={c.temp}
            pressure={c.pressure}
            humidity={c.humidity}
            description={c.description}
            timezone={c.timezone}
            wind={c.wind}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          />
        ))}
      </div>
      }
      {
        !cardCity ?<div className={style.nodata}>
          <p className={style.textdata}>No city yet</p>
        </div> : <p></p>
      }
      
    </div>
  );
}
