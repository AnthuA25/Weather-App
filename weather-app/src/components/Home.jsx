import React from "react";
import style from "./Home.module.css";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Home({ onSearch, cities, onClose }) {
  return (
    <div className={style.container}>
      <div className={style.left}>

        <div>
          <Link to='/about'>
            <p className={style.aboutme}>About me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
