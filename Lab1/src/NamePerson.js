import React from 'react';
import people from './people';

function NamePerson() {
  return (
    <div>
        <h1>Exercise 1: Display a list of names</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamePerson;