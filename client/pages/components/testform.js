import React, { useState } from 'react';

const MonkeyAddForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState (null);

  const handleSubmit = (event) => {
    event.preventDefault();

  const newMonkey = { title, description, imageUrl };

  fetch('http://localhost:3001/api/monkeys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMonkey),
  })
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok bruh');
      }
      return response.json();
    })
    .then(data => {
      setMessage(data.message);
      setError(null);
      //Reset du formulaire
      setTitle('');
      setDescription('');
      setImageUrl('');
    })
    .catch(error => {
      setError(error.toString());
      setMessage('');
    });
  };

  return (
    <div>
      <h1>Ajouter un nouveau meme de MOKI</h1>
      {message && <p style={{color: 'green'}}>{message}</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title :</label>
          <input className="text-blue-500" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description: </label>
          <input className="text-blue-500" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Url du gif</label>
          <input className="text-blue-500" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="sumbit">Enregistrer</button>
      </form>
    </div>
  );
}

export default MonkeyAddForm;