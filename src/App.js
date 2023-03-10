import './App.css';
import Board from './Components/Board/BoardComponent';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Tic-Tac-Toe</h1>
          </Col>
        </Row>
      <Board />
      </Container>
    </div>
  );
}

export default App;
