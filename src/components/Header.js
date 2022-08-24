import React from "react";

import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => (
    <Navbar bg="light" className="border-bottom py-3" expand="lg">
        <Container>
            <Navbar.Brand className="fw-bold">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>React CRUD</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/add-employee" className="btn btn-primary ms-2 mt-lg-0 mt-3" active="true">+ Add Employee</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header;