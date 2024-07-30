import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpwd, setConfpwd] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState (null);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Verifier si les mots de passe correspondent
    if (password !== confpwd) {
      setError("Les mots de passe ne correspondent pas")
      return;
    }

  const newUser = { username, email, password };

  fetch(`http://localhost:3001/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => {
      if(!response.ok) {
        return response.json().then(err => { throw new Error(err.message); });
      }
      return response.json();
    })
    .then(data => {
      setMessage(data.message);
      setError(null);
      //Reset du formulaire
      setUsername('');
      setEmail('');
      setPassword('');
      setConfpwd('');
    })
    .catch(error => {
      setError(error.toString());
      setMessage('');
    });
  };

  return (
    <div>
      <h1>Creer un nouvel utilisateur</h1>
      {message && <p style={{color: 'green'}}>{message}</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input className="text-blue-500" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input className="text-blue-500" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input className="text-blue-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirmer Mot de passe:</label>
          <input className="text-blue-500" type="password" value={confpwd} onChange={(e) => setConfpwd(e.target.value)} required />
        </div>
        <button type="sumbit">Enregistrer</button>
      </form>
    </div>
  );
}

export default SignUpForm;