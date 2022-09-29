import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import './App.css';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <Container>        
          <h1 className="section-title">Monitors</h1>
          <Row>
            {data.map((product, index) => (
              <Col md={6} lg={4} xl={3} className="mb-4" key={index}>
                <ProductCard product={product} />
              </Col>
            ))}          
          </Row>
        </Container>
      </div>          
    </div>
  );
}

export default App;
