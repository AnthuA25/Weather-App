import React from "react";
import style from "./About.module.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={style.center}>
      <div className={style.aboutMe}>
        <h2 className={style.titleA}>Welcome to the Weather App</h2>

        <p className={style.bodyText}>
          Hello👋, my name is Aylin Santa Cruz, and this time I am pleased to
          present you my first application.
          <br />
          With Weather App, you will be able to know the current climate of
          different cities around the world🌍.
          <br /> In addition, you can see additional information for each city.
          <br />
          <br />
          This application was developed using: Javascript, React. Booststrap
          and pure CSS.
        </p>
      </div>
      <div className={style.redes}>
        <h3 className={style.title}>Visit my profiles</h3>
        <div className={style.redesflex}>
          <div className={style.linkedin}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aylin-santa-cruz-vargas/"
            >
              <img className={style.li} src={linkedin} alt="img not found" />
            </a>
            <div className={style.titleLIM}>
              <p className={style.titleLI}>LinkedIn</p>
            </div>
          </div>
          <div className={style.github}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AnthuA25"
            >
              <img className={style.git} src={github} alt="img not found" />
            </a>
            <p className={style.titleGI}>Github</p>
          </div>
        </div>
      </div>
      <div className={style.arrow}>
        <Link to = '/'>
          <BsFillArrowLeftCircleFill className={style.icon}/>
        </Link>
      </div>
    </div>
  );
}
