import React, { Component } from "react";
import {Container, Nav} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Container>
          <Nav>
              <Nav.Item>
              
              <a class="navbar-brand" href="/">
      <img src="https://www.pinclipart.com/picdir/middle/557-5579047_blue-and-yellow-globe-logo-clipart.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Country INFO
    </a>


              </Nav.Item>
          </Nav>
      </Container>
    );
  }
}

export default NavBar;