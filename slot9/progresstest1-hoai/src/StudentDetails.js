import React from 'react';

const StudentDetails = () => {
  const students = [
    { name: "Kayabiyu", questions: ["0x0001", "0x0002"] },
    { name: "Sahmy", questions: ["0x0003", "0x0004"] },
    { name: "Ora Yama", questions: ["0x0007", "0x0008"] },
    { name: "Ghaguchi", questions: ["0x0007", "0x0009"] },
    { name: "Qasayikin", questions: ["0x0006", "0x0005"] },
    { name: "Ushagayaka", questions: ["0x0006", "0x0005"] },
    { name: "QiYanqi", questions: ["0x0006", "0x0005"] },
  ];

  const addresses = ["Taiwan Wang", "Sangyang"];

  return (
    <div className="container mt-5">
      <h1>Students Detail</h1>
      <ul className="list-group">
        {students.map((student, index) => (
          <li key={index} className="list-group-item">
            <strong>{student.name}</strong>
            <ul>
              {student.questions.map((question, qIndex) => (
                <li key={qIndex}>Q: {question}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className="mt-4">On Address</h2>
      <ul className="list-group">
        {addresses.map((address, index) => (
          <li key={index} className="list-group-item">{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDetails;