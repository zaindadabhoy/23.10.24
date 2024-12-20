import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFull] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    alert(`Email: ${email}, Password: ${password}, Full Name: ${fullname}, Age: ${age}`);
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setFull('');
    setAge('');
  };

  return (
    <div>
      <h1>Admission Form:</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={(e) => setFull(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Clear</button>
    </div>
  );
}

export default Form;
