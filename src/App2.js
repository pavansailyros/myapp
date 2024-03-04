import React from 'react';
// import Login from './Login';
// import Home from './Home';
export default function App2(props) {
  // if (props.user === ""){
  // return <Login />;
  // }

  // else {
  //   return <Home username={props.user} />;
  // }

  // return (props.user === "" ? <Login /> : <Home username={props.user}/>)
//   return (props.user === "" ?  
 
//   <div>
//   <h2>login</h2>
//   <p>
//     <input type='text' placeholder='username'></input></p>
//     <p><input type='password' placeholder='password'></input></p>
//     <p><button>submit</button></p>

  
// </div>
//   : 
//   <div>
//   Hello {props.user}
// </div>
//   )



return props.user === "" && (
 
<div>
<h2>login</h2>
<p>
  <input type='text' placeholder='username'></input></p>
  <p><input type='password' placeholder='password'></input></p>
  <p><button>submit</button></p>


</div>
 

)
}
