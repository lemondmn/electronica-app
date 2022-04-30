import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#informacion">Información</Nav.Link>
                                <Nav.Link href="#collab">Colaboración</Nav.Link>
                                <Nav.Link href="#alumnos">Alumnos</Nav.Link>
                                <Nav.Link href="#personal">Personal</Nav.Link>
                                <Nav.Link href="#pnpc">PNPC</Nav.Link>
                                <Nav.Link href="#acceso">Acceso</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>
        )
    }
}
