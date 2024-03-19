import React from "react";
import { useState } from "react";
export default function App23() {
  const [student, setStudent] = useState({ id: 0,name:"John" });
  const updateId = (name) => {
    setStudent((prev) => ({ ...prev, name })); //no need of id:id
  };
//   const updateId = (num) => {
//     setStudent((prev) => ({ ...prev, id:num }));
//   };
  return (
    <div>
      {student.name}
      <button onClick={() => updateId("pavan")}>Update Id</button>
    </div>
  );
}