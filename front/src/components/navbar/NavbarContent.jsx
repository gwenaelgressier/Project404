import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarContent() {
  return (
    <div id="navbar-content" className="d-md-flex d-none ">
      <NavLink className="d-flex link" to="/dev">
        <p className="my-auto me-5 ">Dev</p>
      </NavLink>
      <NavLink className="d-flex link" to="/gaming">
        <p className="my-auto ">Gaming</p>
      </NavLink>
    </div>
  );
}
