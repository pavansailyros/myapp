import React, { useRef } from 'react';

export default function App20() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'orange';
    divRef.current.style.color = 'blue'
    divRef.current.style.fontSize = '100px'

  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcom to Mars</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};