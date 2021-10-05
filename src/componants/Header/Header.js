import React from 'react';
import { Container, Form, FormControl, Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-center">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bolder", fontSize: "22px", color: "white" }} href="/home"> Commitment S&C</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "20px",
                                    marginLeft: "25px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/home">Home</NavLink>
                            <NavLink
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "20px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/services">Services</NavLink>
                            <NavLink
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "20px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/achivements">Achivements</NavLink>
                            <NavLink
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "20px"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",

                                }}
                                to="/about">About Us</NavLink>
                            <NavLink
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    marginRight: "20px"
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
                            <Button variant="primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;