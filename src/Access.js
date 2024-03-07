import React, { useState } from 'react';

export default function Access() {
  const [user, setUser] = useState({ name: '', password: '' });
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const Login = () => {
    if (user.name === 'jhon' && user.password === 'pass1234') {
      console.log('Access granted');
      setAccessGranted(true);
    } else {
      console.log('Access denied');
      setAccessDenied(true);
    }
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
        <button onClick={Login}>Submit</button>
      </p>
      {accessGranted && <span><p style={{ color: 'green' }}>Access Granted</p></span>}
      {accessDenied && <span><p style={{ color: 'red' }}>Access Denied</p></span>}
    </>
  );
}
