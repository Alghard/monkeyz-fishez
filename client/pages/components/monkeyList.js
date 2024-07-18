import React, { useEffect, useState } from 'react';

const MonkeyList = () => {
  const [monkeys, setMonkeys] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching mokis");
    fetch('http://localhost:3001/api/monkeys/')
      .then(response => {
        if(!response.ok) {
          throw new Error('network error');
        }
        return response.json;
      })
      .then(data => {
        console.log("Data fetched:", data);
        setMonkeys(data);
        console.log(monkeys);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>List of Monkeys</h1>
      <ul>
        {monkeys.map(monkey => (
          <li key={monkey._id}>
            <strong>Name:</strong> {monkey.title}<br />
            <strong>Age:</strong> {monkey.description}<br />
            <strong>Species:</strong> {monkey.imageUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonkeyList;