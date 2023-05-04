import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Biru from '../../assets/biru.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <>
            <Navbar expand="lg" fixed="top" className="navbar-bg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Biru} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        scroll="true"
                        backdrop="true"
                        aria-labelledby="offcanvasNavbar-expand-lg"
                        placement="end"
                        style={{
                            width: '50%',
                        }}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbar-expand-lg">
                                BCR
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 nav-link">
                            <Nav.Link href="#OurService">Our Services</Nav.Link>
                            <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                            <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                            <Nav.Link href="#Faq">FAQ</Nav.Link>
                            <Button className="btn-regist">Register</Button>{' '}
                        </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}