import React from 'react';
import people from './people';

function PeopleList() {
  return (
    <div>
        <h1>Exercise 3: Display a list of people (PeopleList.js)</h1>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;