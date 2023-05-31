import Gallery from "../layout/Gallery";
import Layout from "../layout/AppLayout";
import { Container, Col, Row } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
          
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus natus alias fugiat illum aliquid tenetur nemo neque quasi, distinctio amet odio officiis magni eius facere harum! Ea harum accusantium aspernatur sunt soluta nihil voluptates consectetur officia ipsa architecto error id at, corporis nesciunt nam. Numquam incidunt ut illum veritatis recusandae! In, tempore quam magni illo optio
            </p>
          </Col>
        </Row>
      </Container>
      <h2>Portfolio</h2>
      <Gallery />
    </Layout>
  )
}