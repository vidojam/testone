import { Container, Row} from "react-bootstrap";
import data from "../../data/gallery.json";
import Panel from "./Panel.jsx";

export default function List() {
  return (
    <Container>
      <Row className="g-4">
      {
        data.map((element, index) => {
          return (
              <Panel 
              key={index}
              element={element}/>
          );
        }).reverse()      
      }
      </Row>
    </Container>
    
  )
}