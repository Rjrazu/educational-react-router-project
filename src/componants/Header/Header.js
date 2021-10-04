import React from 'react';
import { Container, Form, FormControl, Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Commiment S&C</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                style={{
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "15px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/home">Home</NavLink>
                            <NavLink
                                style={{
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "15px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/services">Services</NavLink>
                            <NavLink
                                style={{
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "15px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/teachers">Teachers</NavLink>
                            <NavLink
                                style={{
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "15px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/about">About Us</NavLink>
                            <NavLink
                                style={{
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "15px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/contact">Contact Us</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;