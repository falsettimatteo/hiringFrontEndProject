import React, { Component } from "react";
import {Container, ListGroup} from "react-bootstrap";

import { useQuery ,gql} from "@apollo/client";

const countriesQuery = gql`query{
    countries{
      name
      capital
    }
  }`

function Countries(countries) {
    const { data, loading, error } = useQuery(countriesQuery);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
        <Container>
        <ListGroup>
            {countries.map(element => <ListGroup.Item className={element.name}>{element.name}</ListGroup.Item>)}
          </ListGroup>
          </Container>
    );
}

export default Countries;