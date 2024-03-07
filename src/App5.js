import React from 'react'

export default function App5() {
    let names = ["Mango","Orange","Apple","kiwi"]

  return (
    <b>
    {names.map((v,i)=>(
        <li key={i}>
            {v}
        </li>))}  
    </b>
  );
}
