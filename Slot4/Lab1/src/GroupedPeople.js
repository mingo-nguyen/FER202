import React from 'react';
import people from './people';

function GroupedPeople() {
  const groupedPeople = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
        <h1>Exercise 8: Group People by Occupation</h1>
      <h2>Grouped People by Occupation</h2>
      {Object.keys(groupedPeople).map((occupation, index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {groupedPeople[occupation].map((person, idx) => (
              <li key={idx}>
                {person.name} - Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedPeople;