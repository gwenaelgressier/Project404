import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import "./adminDashboard.scss";

export default function AdminDashboard() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div id="admin-dashboard">
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center welcome">bonjour {userData.pseudo}</p>
      </div>
    </div>
  );
}
