import { Container, Row } from 'react-bootstrap';
import StudentCard from './StudentCard';

const StudentsDetail = ({ students }) => {
  return (
    <Container>
      <h2 className="text-center mb-4">Students Detail</h2>
      <Row>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </Row>
    </Container>
  );
};

export default StudentsDetail;