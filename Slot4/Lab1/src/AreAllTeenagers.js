import React from 'react';
import people from './people';

function AreAllTeenagers() {
  const areAllTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      {areAllTeenagers ? (
        <p>Yes, all are teenagers.</p>
      ) : (
        <p>No, not all are teenagers.</p>
      )}
    </div>
  );
}

export default AreAllTeenagers;