import React from 'react';
import people from './people';

function OldestAndYoungest() {
  const oldestPerson = people.reduce((oldest, person) => {
    return person.age > oldest.age ? person : oldest;
  }, people[0]);

  const youngestPerson = people.reduce((youngest, person) => {
    return person.age < youngest.age ? person : youngest;
  }, people[0]);

  return (
    <div>
        <h1>Exercise 9: Find the Oldest and Youngest Person</h1>
      <h2>Oldest and Youngest Person</h2>
      <p>
        <strong>Oldest Person:</strong> {oldestPerson.name} - Age: {oldestPerson.age}, Occupation: {oldestPerson.occupation}
      </p>
      <p>
        <strong>Youngest Person:</strong> {youngestPerson.name} - Age: {youngestPerson.age}, Occupation: {youngestPerson.occupation}
      </p>
    </div>
  );
}

export default OldestAndYoungest;