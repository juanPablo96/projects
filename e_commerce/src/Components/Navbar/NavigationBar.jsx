import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import "./navigationBar.css";

// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
        expand="lg"
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo Sneakers" className="navBar_logo" />{" "}
          </Navbar.Brand>

          <Nav className="me-auto nav_links">
            <Nav.Link href="#">Collections</Nav.Link>
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <img src={cart} alt="" />
            {users.map((user) => {
              return(
                
                <img className="navbar_user" src={user.picture.thumbnail} alt="" />
                
              )
              
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
