import React from 'react'

export default function App1(props) {
 
  return (
    <div style={{fontFamily:"monospace",color:"blueviolet"}} >
      <h1>Hello {props.name} are you age is {props.age} </h1>
      {/* Hello {props.name}, you are {props.age} */}
    </div>
  )
}
// App1.defaultprops = {name:"revi",age:20};
