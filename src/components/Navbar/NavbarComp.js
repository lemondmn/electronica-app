import React, { Component } from 'react'
import { FaHome, FaSignInAlt, FaInfoCircle, FaUsers } from 'react-icons/fa'
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
                                </Nav>
                            </Navbar.Collapse>
                             
                        </Container>
                    </Navbar>
                </>
            </div>
        )
    }
}
