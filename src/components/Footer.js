import React from "react";
import "../App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import facebook from "../asserts/facebook.png";
// import Call from "../asserts/call.png";
// import Web from "../asserts/world-wide-web.png";
export default function Footer() {
  return (
    <div className="footer">
      {/* <hr></hr> */}
      <div className="border-top"></div>
      <div className="footer-top">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>

        <div className="footer-services">
          <p>CHEMICALS & PROCESS</p> <p>POWER</p>
          <p> WATER & WASTE WATER</p> <p> OILS & GAS</p> <p>PHARMA</p>{" "}
          <p>SUGARS & DISTILLERIES</p> <p>PAPER & PULP </p>
          <p>MARINE & DEFENCE</p>
          <p>METAL & MINING</p>
          <p>FOOD & BEVERAGE</p>
          <p>PETROCHEMICAL & REFINERIES</p>
          <p>SOLAR</p> <p>BUILDING</p> <p>HVAC</p>
          <p> FIRE FIGHTING</p> <p>AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>

      <div className="footer-bottom">
        <ul>
          <li>
            <a href="www.facebook.com/cripumps">
              <i class="fa-solid fa-phone icon"></i>Toll free
              <b>1800 200 1234</b>
            </a>
          </li>
          <li>
            <a href="www.facebook.com/cripumps">
              <i class="fa-brands fa-facebook icon"></i>
              www.facebook.com/cripumps
            </a>
          </li>
          <li>
            <a href="www.crigroups.com">
              <i class="fa-solid fa-globe icon"> </i>www.crigroups.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
