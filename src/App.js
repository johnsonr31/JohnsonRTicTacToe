import './App.css';
import Game from './Components/Board/BoardComponent';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container className='background-image-day'>
        <Row>
          <Col className='heading'>
            <h1>Tic-Tac-Toe</h1>
          </Col>
          <br />
        </Row>
        <Row>
          <Col>
            <Game />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
