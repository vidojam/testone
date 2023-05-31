import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
     
export default function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">  
      <Container>  
        <Navbar.Brand as={Link}>ProtoType</Navbar.Brand>  
        <Navbar.Toggle aria-controls="nav-navmenu" />  
        <Navbar.Collapse id="nav-navmenu">  
          <Nav className="ms-auto">  
            <Nav.Link href="/">Home</Nav.Link>  
            <Nav.Link href="/about">About</Nav.Link>  
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>      
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  )
}