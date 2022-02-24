import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <LinkContainer to="/">
                <Navbar.Brand >ProShop</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link ><i className="fas fa-shopping-cart"></i>     Cart   </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link ><i className="fas fa-user"></i>   Login   </Nav.Link>
                    </LinkContainer>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
