import { Card, Form, Button, Col } from 'react-bootstrap';

const StudentCard = ({ student }) => {
  return (
    <Col md={6} className="mb-4">
      <Card className="p-3 text-center">
        <Card.Img variant="top" src={student.image} className="rounded" alt={student.name} />
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>{student.id}</Card.Text>
          <Card.Text>{student.location}</Card.Text>
          <Form>
            <Form.Check
              inline
              type="radio"
              name={student.id}
              label="Absent"
              checked={!student.present}
            />
            <Form.Check
              inline
              type="radio"
              name={student.id}
              label="Present"
              checked={student.present}
            />
            <Button variant="warning" className="mt-2">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StudentCard;