
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, ListGroup } from 'react-bootstrap';




function CountryElement(props) {

  return (<>
          <Container className="d-flex justify-content-between" style={{width: '30rem', marginBottom: '1rem'}}>
              <ListGroup.Item className={props.name}>{props.name}</ListGroup.Item>
          <Button variant="success" href={`/seeMore/ ${props.code}`}>See more info</Button>
          </Container>
      </>
  );
}

export default CountryElement;
