import { Breadcrumb, Container } from 'react-bootstrap';

const BreadcrumbNav = () => {
  return (
    <Container className="my-3">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Students</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default BreadcrumbNav;