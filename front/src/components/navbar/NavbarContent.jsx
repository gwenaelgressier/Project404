import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarContent() {
  return (
    <div className="d-md-flex d-none ">
      <NavLink className="d-flex" to="/dashboard/dev">
        <p className="my-auto me-5">Dev</p>
      </NavLink>
      <NavLink className="d-flex" to="/dashboard/gaming">
        <p className="my-auto">Gaming</p>
      </NavLink>
    </div>
  );
}
