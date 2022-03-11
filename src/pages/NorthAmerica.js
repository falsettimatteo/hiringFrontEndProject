import { gql, useQuery } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup } from "react-bootstrap";
import CountryElement from "../components/countryElement";

const countriesQuery = gql`
  query {
    continent(code: "NA") {
      countries {
        name
        code
      }
    }
  }
`;

function NorthAmerica() {
  const { data, loading, error } = useQuery(countriesQuery);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data.continent.countries);
  return (
    <>
      <Container>
        <ListGroup>
          {data.continent.countries.map((element) => (
            <CountryElement name={element.name} code={element.code} />
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default NorthAmerica;
