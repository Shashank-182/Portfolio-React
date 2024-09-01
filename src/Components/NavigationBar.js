import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import '/Users/SOWMYA/portfolio/portfolio/src/App.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-dark pt-4 text-light nav" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#Home">SHASHANK</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <AnchorLink href="#Home" className="anchor-link"><Nav.Link className="nav-link mx-2">Home</Nav.Link></AnchorLink>
                        <AnchorLink href="#About" className="anchor-link"><Nav.Link  className="nav-link mx-2">About</Nav.Link></AnchorLink>
                        <AnchorLink href="#Services" className="anchor-link"><Nav.Link  className="nav-link mx-2">Projects</Nav.Link></AnchorLink>
                        <AnchorLink href="#Contact" className="anchor-link"><Nav.Link href="#contact" className="nav-link mx-2">Contact</Nav.Link></AnchorLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
