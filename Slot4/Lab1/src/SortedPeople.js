import React from 'react';
import people from './people';

function SortedPeople() {
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });

  return (
    <div>
        <h1>Exercise 7: Sort by Occupation and Then by Age</h1>
      <h2>Sorted People</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;