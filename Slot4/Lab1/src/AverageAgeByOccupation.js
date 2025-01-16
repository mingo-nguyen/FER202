import React from 'react';
import people from './people';

function AverageAgeByOccupation() {
  const occupationGroups = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person.age);
    return acc;
  }, {});

  const averageAges = Object.keys(occupationGroups).map(occupation => {
    const ages = occupationGroups[occupation];
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
    return { occupation, averageAge };
  });

  return (
    <div>
        <h1>Exercise 10: Calculate the Average Age of Each Occupation</h1>
      <h2>Average Age by Occupation</h2>
      <ul>
        {averageAges.map((item, index) => (
          <li key={index}>
            {item.occupation}: {item.averageAge.toFixed(2)} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;