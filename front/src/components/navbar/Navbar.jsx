import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import NavbarContent from "./NavbarContent";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const userData = useSelector((state) => state.userReducer);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="navbar" className="d-flex justify-content-between">
      <div className="d-md-none hamburger">
        <Button className="ms-3" onClick={handleShow}>
          Launch
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <NavLink className="d-flex link" to="/">
        <p className="my-auto ms-md-3 logo ">Project 404</p>
      </NavLink>
      <NavbarContent />
      {userData._id && <p className="me-3 my-auto my-md-2 info">info</p>}
      {!userData._id && <p className="me-3 my-auto my-md-2 info"></p>}
    </div>
  );
}
