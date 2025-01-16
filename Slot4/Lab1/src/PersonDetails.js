import React from 'react';
import people from './people';

function PersonDetails() {
  const person = people[0]; // Assuming you want to display the first person's details

  return (
    <div>
        <h1>Exercise 2: Display a person's details</h1>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;