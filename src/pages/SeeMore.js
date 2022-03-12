import { gql, useQuery } from "@apollo/client";
import { Button } from "bootstrap";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const QUERY = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
      native
      states {
        name
      }
    }
  }
`;

function SeeMore() {
  const code = useParams();
  const noSpace = code.code.replace(/\s/g, "");
  const { data, loading, error } = useQuery(QUERY, {
    variables: { code: noSpace },
  });
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data.country);
  const languages = data.country.languages.map((l) => l.name).join(", ");
  const states = data.country.states.map((l) => l.name);

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>Name: {data.country.name}</ListGroup.Item>
        <ListGroup.Item>Capital : {data.country.capital}</ListGroup.Item>
        <ListGroup.Item>Currency: {data.country.currency}</ListGroup.Item>
        <ListGroup.Item>
          Continent: {data.country.continent.name}
        </ListGroup.Item>
        <ListGroup.Item>Languages: {languages}</ListGroup.Item>
        <ListGroup.Item>Native name: {data.country.native}</ListGroup.Item>
        <ListGroup.Item>
          Internal states:{states.lenght === undefined ? "None" : states.join(", ")}
        </ListGroup.Item>
        
      </ListGroup>
     </Container>
  );
}

export default SeeMore;
