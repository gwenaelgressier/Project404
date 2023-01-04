import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Gaming() {
  return (
    <div id="dev">
      <Navbar />
      <div className="mt-5 col-8 m-auto contener-origine">
        <NavLink className="d-flex justify-content-center" to="/gaming/wow">
          <p className="my-auto me-5">World Of Warcraft</p>
        </NavLink>
        <NavLink className="d-flex justify-content-center" to="/gaming/neocron">
          <p className="my-auto me-5">Neocron</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/gaming/warframe"
        >
          <p className="my-auto me-5">Warframe</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/gaming/destinity2"
        >
          <p className="my-auto me-5">Destiny 2</p>
        </NavLink>
      </div>
    </div>
  );
}
