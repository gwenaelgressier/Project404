import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";

export default function Gaming() {
  return (
    <div className="gaming">
      <Navbar />
      <div>Gaming</div>
    </div>
  );
}
