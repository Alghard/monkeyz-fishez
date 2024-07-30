import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { email, password };

    fetch('http://localhost:3001/api/auth/login', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(user),
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
        //Stocker le token JWT dans le localStorage ou le state
        localStorage.setItem('token', data.token);
      })
      .catch(error => {
        setError(error.toString());
        setMessage('');
      });
  };
  return (
    <div>
      <h1>Se connecter</h1>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <div>
          <label>Email:</label>
          <input className="text-blue-500" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input className="text-blue-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm;