import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./dev.scss";

export default function Dev() {
  return (
    <div id="dev">
      <Navbar />
      <div className="mt-5 col-8 m-auto contener-origine">
        <NavLink className="d-flex justify-content-center" to="/dev/htmlcss">
          <p className="my-auto me-5">HTML & CSS</p>
        </NavLink>
        <NavLink className="d-flex justify-content-center" to="/dev/scss">
          <p className="my-auto me-5">SCSS</p>
        </NavLink>
        <NavLink className="d-flex justify-content-center" to="/dev/js">
          <p className="my-auto me-5">JS</p>
        </NavLink>
        <NavLink className="d-flex justify-content-center" to="/dev/react">
          <p className="my-auto me-5">React</p>
        </NavLink>
        <NavLink className="d-flex justify-content-center" to="/dev/librairie">
          <p className="my-auto me-5">Librairie</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dev/cybersecurite"
        >
          <p className="my-auto me-5">Cybersécurité</p>
        </NavLink>
        <NavLink className="d-none justify-content-center" to="/dev/bootstrap">
          <p className="my-auto me-5">bootstrap</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dev/openclassrooms"
        >
          <p className="my-auto me-5">Openclassrooms</p>
        </NavLink>
      </div>
    </div>
  );
}
