import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import './App.css';
// import data from "./data.json";

const url = "https://appstore.decisions.com/decisions/Primary/restapi/Flow/08daa21d-f3b7-7acd-0cd3-7603700325cf?sessionid=NS-08daa2f1-f3e7-a032-0cd3-76037003629e&outputtype=JSON";


function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(`${url}`).then((response) => {
      setData(response?.data?.Done?.OUTPUTS);
    }).catch(error => console.log(`Error: ${error}`));
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <div className="page-content">
        <Container>
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
