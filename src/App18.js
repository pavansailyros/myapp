
import React, { useReducer } from 'react';

function reducer(state, action) {

    if (action.type === "increment"){
        return { count: state.count + 1 };

    }
   else if (action.type === "decrement"){
    return { count: state.count - 1 };
   }
  else{
    return state;
  }
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }

}

export default function App18() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
        <input type="button" onClick={decrement} value="-"></input>
      {state.count}
      <input type="button" onClick={increment} value="+"></input>
    </div>
  );
}
