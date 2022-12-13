import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import NavbarContent from "./NavbarContent";
export default function Navbar() {
  const [show, setShow] = useState(false);

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
      <NavLink className="d-flex link" to="/dashboard">
        <p className="my-auto ms-md-3 logo ">Project 404</p>
      </NavLink>
      <NavbarContent />
      <p className="me-3 my-auto my-md-2 info">info</p>
    </div>
  );
}
