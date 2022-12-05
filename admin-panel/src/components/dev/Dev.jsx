import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Dev() {
  return (
    <div id="Dev">
      <Navbar />
      <div className="mt-5">
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/htmlcss"
        >
          <p className="my-auto me-5">HTML & CSS</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/sass"
        >
          <p className="my-auto me-5">SASS</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/js"
        >
          <p className="my-auto me-5">JS</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/react"
        >
          <p className="my-auto me-5">React</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/librairie"
        >
          <p className="my-auto me-5">Librairie</p>
        </NavLink>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/cybersecurite"
        >
          <p className="my-auto me-5">Cybersécurité</p>
        </NavLink>
        <NavLink
          className="d-none justify-content-center"
          to="/dashboard/dev/bootstrap"
        >
          <p className="my-auto me-5">bootstrap</p>
        </NavLink>
      </div>
    </div>
  );
}
