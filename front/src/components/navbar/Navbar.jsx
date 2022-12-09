import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.scss";
import NavbarContent from "./NavbarContent";
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-md-none">
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
      <p className="my-auto ms-md-3">Project 404</p>
      <NavbarContent />
      <p className="me-3 my-auto my-md-2">info</p>
    </div>
  );
}
