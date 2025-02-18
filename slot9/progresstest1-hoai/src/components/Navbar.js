import { Navbar, Container, Nav, Form } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#D2A679" }}>
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src="logofpt.png" alt="FPT University" height="40" className="me-2" />
          <span className="fw-bold text-danger">FPT UNIVERSITY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-dark"><i className="fas fa-home"></i> Trang chủ</Nav.Link>
            <Nav.Link href="#" className="text-dark"><i className="fas fa-book"></i> Ngành học</Nav.Link>
            <Nav.Link href="#" className="text-dark"><i className="fas fa-file-alt"></i> Tuyển sinh</Nav.Link>
            <Nav.Link href="#" className="text-dark"><i className="fas fa-list"></i> Sinh viên</Nav.Link>
          </Nav>
          <Form className="ms-3 d-flex align-items-center">
            <span className="me-2">Search:</span>
            <Form.Control type="search" className="w-auto" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;