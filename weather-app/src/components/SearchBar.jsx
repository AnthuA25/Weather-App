import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
      <div className={style.container}>
        <h1 className={style.title}>Weather App</h1>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault(); 
            onSearch(city);
            setCity("");
          }}
        >
          <input
            className={style.input}
            type="text"
            placeholder="Search City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className={style.btn}>
            <BsSearch />
          </button>
        </form>
      </div>
  );
}
