import React, { Component } from 'react'
import { FaHome, FaSignInAlt, FaInfo, FaInfoCircle, FaUsers, FaUserGraduate, FaUserAlt, FaUserTie, FaGraduationCap } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, NavbarBrand, Dropdown } from 'react-bootstrap'

export default class NavbarComp extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                                <Button href="/" variant="dark">
                                    <FaHome /> Inicio
                                </Button>

                                <Dropdown>
                                    <Button href="/" variant="dark">
                                        <FaInfoCircle /> ¿Quiénes Somos?
                                    </Button>
                                    <Dropdown.Toggle id="dropdown-info" variant="dark" />

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="/personal">
                                            <FaUserTie /> Personal
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/alumnos">
                                            <FaUserGraduate /> Alumnos
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-maestria" variant="dark">
                                        <FaGraduationCap /> Maestría
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="/">
                                            a
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/">
                                            b
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/">
                                            c
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Nav.Link href="/collab">
                                    <FaUsers /> Colaboración
                                </Nav.Link>

                                <Button href="/login" variant="dark">
                                    <FaSignInAlt /> Acceso
                                </Button>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

                {/*
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">
                                    <FaHome /> Inicio
                                </Nav.Link>
                                <Nav.Link href="/info">
                                    <FaInfoCircle /> Información
                                </Nav.Link>
                                <Nav.Link href="/collab">
                                    <FaUsers /> Colaboración
                                </Nav.Link>
                                <Nav.Link href="/alumnos">
                                    <FaUserGraduate /> Alumnos
                                </Nav.Link>
                                <Nav.Link href="/personal">
                                    <FaUserTie /> Personal
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Nav className="auto">
                            <Nav.Link href="/login">
                                <FaSignInAlt /> Acceso
                            </Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>*/}
            </div>
        )
    }
}
