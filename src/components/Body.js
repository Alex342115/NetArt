import React from "react";
import "../App.css";

//
import Award from "../asserts/1.png";
import RecogImage from "../asserts/2.png";
import Util from "../asserts/3.png";
//

export default function Body() {
  return (
    <div className="main">
      <div className="main-desc">
        <div className="main-left">
          <img src={Award} alt="Award" className="award" />
        </div>
        <div className="main-right">
          <h3 className="main-heading">
            C.R.I. Pumps wins the natinal energy conservation award 2018 for the
            4th time
          </h3>
          <ul className="main-para">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={RecogImage} alt="RecogImage" className="recog-img" />

          <h5 className="recog-desc">
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State
          </h5>
        </div>
      </div>
      <div className="main-util">
        <p className="util-desc">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={Util} alt="Util" className="util-img" />
        <p className="utils">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    </div>
  );
}
