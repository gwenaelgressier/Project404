import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";

export default function AdminDashboard() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div>
      <Navbar />
      <div className="ms-5">
        <p className="mt-5 text-center">bonjour {userData.pseudo}</p>
      </div>
    </div>
  );
}
