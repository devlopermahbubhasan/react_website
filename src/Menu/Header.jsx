import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'


const header = () => {
    return (
                <Navbar bg="light" expand="lg">
                    <Container fluid className="col-md-10">
                    <LinkContainer to="/">
                    <Navbar.Brand>Mahbub-Hasan</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/">
            <Nav.Link className='menu_active'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link className='menu_active'>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
            <Nav.Link className='menu_active'>Service</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link className='menu_active'>Contact</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default header