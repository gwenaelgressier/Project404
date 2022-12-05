import React from "react";
import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";

export default function DevCybersecurite() {
  return (
    <div>
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center">Cybersecurite</p>
        <NavLink
          className="d-flex justify-content-center"
          to="/dashboard/dev/cybersecurite/addarticle"
        >
          <p className="mt-4 text-center">ajouter un nouvelle article</p>
        </NavLink>
      </div>
    </div>
  );
}
