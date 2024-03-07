import React from 'react'

export default function App6() {
//     const handleClick = ()=>{

//         alert("Hello World")
//     }
//   return (
//     <div>
//       <button onClick={handleClick} > click here</button>
//     </div>
//   )

const handleClick = (msg)=>{
    alert(msg);
}
return(
    <div>
        <button onClick={()=>handleClick('Hii Pavan')} >click</button>
    </div>
)
}
