import React from "react";
import {Container,Nav,Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">TasteTrove</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Nav.Link as={"span"}>Home</Nav.Link>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/favorites">
            <Nav.Link as={"span"}>Favorites</Nav.Link>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/categories">
            <Nav.Link as={"span"}>Categories</Nav.Link>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
