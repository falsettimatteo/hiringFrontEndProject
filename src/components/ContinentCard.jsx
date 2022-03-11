import React from "react";
import {Container, Button, Card} from "react-bootstrap";

  
function ContinentCard(props){

    return (
      <Container >
          <Card style={{
    width: '15rem',
    height: '20rem',
    marginBottom: '5rem',
  }}>
        <Card.Img  variant="top"  src={props.img} style={{width: '10rem', margin: 'auto'}}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Button variant="primary" href={props.href}>{props.text}</Button>
  </Card.Body>
        </Card>
      </Container>
    );
}

export default ContinentCard;