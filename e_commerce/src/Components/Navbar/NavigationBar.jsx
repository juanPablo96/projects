import React from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/icon-cart.svg"
import "./navigationBar.css"

// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" > <img src={logo} alt="Logo Sneakers" className="navBar_logo" /> </Navbar.Brand>
          
          <Nav className="me-auto nav_links">
            <Nav.Link href="#" >Collections</Nav.Link>
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#"><img src={cart} alt="" /></Nav.Link>
          </Nav>

        </Container>
      </Navbar>

    
    </>
  );
};

export default NavigationBar;
