import React, { Component } from 'react'
import { FaHome, FaSignInAlt, FaInfoCircle, FaUsers, FaUserGraduate, FaUserAlt, FaUserTie } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            {/* */}
ç
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#index">
                                        <FaHome></FaHome> Inicio
                                    </Nav.Link>
                                    <Nav.Link href="#info">
                                        <FaInfoCircle></FaInfoCircle> Información
                                    </Nav.Link>
                                    <Nav.Link href="#collab">
                                        <FaUsers></FaUsers> Colaboración
                                    </Nav.Link>
                                    <Nav.Link href="#alumnos">
                                        <FaUserGraduate></FaUserGraduate> Alumnos
                                    </Nav.Link>
                                    <Nav.Link href="#personal">
                                        <FaUserTie></FaUserTie> Personal
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                            <Nav className="auto">
                                <Nav.Link href="#acceso">
                                    <FaSignInAlt></FaSignInAlt> Acceso
                                </Nav.Link>
                            </Nav>
                             
                        </Container>
                    </Navbar>
                </>
        
            </div>
        )
    }
}
