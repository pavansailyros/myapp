import React, { useState } from 'react';

export default function Access() {
  const [user, setUser] = useState({ name: '', password: '' });

  const handleSubmit = () => {
    
    console.log('Submitted:', user);

    setUser([{ name: '', password: '' }]);
  };

  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </>
  );
}
