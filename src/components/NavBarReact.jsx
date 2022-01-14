import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function NavBarReact() {
    return (
        <div className="nav-linea">
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                className="color-gris-fondo p-0"
            >
                <Container>
                    <Navbar.Brand className="index" href="/">
                        <div>
                            <img
                                className="logo-nav ms-5 me-lg-5"
                                src="https://res.cloudinary.com/dkz/image/upload/v1635466317/CGA/Logo-CGA_cwyjll.png"
                                alt=""
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav mt-auto">
                        <Nav className="ms-auto  mt-sm-0">
                            <Nav.Link
                                exact 
                                to="/"
                                as={NavLink}
                                className="ms-auto mx-xl-2 my-auto peso-bold color-negro"
                                href
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                to="/colaboradores"
                                as={NavLink}
                                className="ms-auto mx-xl-2 my-auto peso-bold color-negro"
                                href
                            >
                                Convenios
                            </Nav.Link>
                            <Nav.Link
                                to="/noticias"
                                as={NavLink}
                                className="ms-auto mx-xl-2 my-auto peso-bold color-negro"
                                href
                            >
                                Noticias
                            </Nav.Link>
                            <Nav.Link
                                to="/nosotros"
                                as={NavLink}
                                className="ms-auto mx-xl-2 my-auto peso-bold color-negro"
                                href
                            >
                                Nosotros
                            </Nav.Link>
                            <Nav.Link
                                to="/socios"
                                as={NavLink}
                                className="ms-auto mx-xl-2 my-auto peso-bold color-negro"
                                href
                            >
                                Socios
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="color-vino-fondo p-1"></div>
        </div>
    );
}
