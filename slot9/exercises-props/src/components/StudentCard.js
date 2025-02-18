import React from "react";
import { Card } from "react-bootstrap";

const StudentCard = ({ student }) => {
    return (
        <Card>
        <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text>
            {student.email}
            </Card.Text>
        </Card.Body>
        </Card>
    );
    }
    export default StudentCard;