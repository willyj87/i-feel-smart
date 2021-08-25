import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavLayout = (): JSX.Element => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MULTIMEDIA</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/vod">VOD</Nav.Link>
                        <Nav.Link href="/epg">EPG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavLayout;
