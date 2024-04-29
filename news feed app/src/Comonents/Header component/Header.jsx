import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Cart} from 'react-bootstrap-icons';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link href="#home"><Cart/> Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;