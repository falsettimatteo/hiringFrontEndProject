import React, { Component } from "react";
import {Container, Nav} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Container style={{width: '30rem',height: '5rem', color: "green"}}>
          <Nav >
              <Nav.Item>
                <Container className="d-flex justify-content-between">
                <img src="https://www.pinclipart.com/picdir/middle/557-5579047_blue-and-yellow-globe-logo-clipart.png" alt="" width="60" height="50" class="d-inline-block align-text-top"/>
     COUNTRY INFO
  <a class="navbar-brand" href="/" style={{marginLeft:'4rem'}}>HOME
    </a>
    </Container>


              </Nav.Item>
          </Nav>
      </Container>
    );
  }
}

export default NavBar;