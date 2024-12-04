import './App.css'
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send name to backend (Node.js + MongoDB)
      await axios.post('https://christmasgreetbackend.onrender.com/api/saveName', { name });
      setMessage(`Merry Christmas, ${name}! 🎄🎅`);
    } catch (error) {
      console.error('Error saving name:', error);
    }
  };

  return (
    <div className="App">
      <h2 className="greeting-title">Send Warm Christmas Greetings!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Send Greeting</button>
      </form>
      {message && <h1 className="message">{message}</h1>}
    </div>
  );
}

export default App;
