import React from 'react';
import people from './people';

function FirstTeenager() {
  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
        <h1>Exercise 5: Find the first teenager (FirstTeenager.js)</h1>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <p>
          Name: {firstTeenager.name}, Age: {firstTeenager.age}, Occupation: {firstTeenager.occupation}
        </p>
      ) : (
        <p>No teenagers found</p>
      )}
    </div>
  );
}

export default FirstTeenager;