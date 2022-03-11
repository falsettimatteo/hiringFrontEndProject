import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const QUERY = gql`query($code: ID!) {
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
  }`;

function SeeMore() {
  const { code } = useParams();
  const { data, loading, error } = useQuery(QUERY, {variables: {code}});
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data)
  return (
    <Container>
      <ListGroup>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
    </Container>
  );
}

export default SeeMore;
