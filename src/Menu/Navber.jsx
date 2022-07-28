import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Router } from 'react-router-dom';
import NavLink from 'react-bootstrap/esm/NavLink';


function Navber() {
  return (
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid className="col-md-10">
        <Navbar.Brand To="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink as={Link} to="/">Home</NavLink>
            <NavLink as={Link} to="/about">About</NavLink>
            <NavLink as={Link} to="/service">Service</NavLink>
            <NavLink as={Link} to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Router>
  );
}

export default Navber;