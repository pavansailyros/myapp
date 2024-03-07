import {UserContext} from "./App11"
import { useContext } from "react";
export default function Child() {
  const {user, email} = useContext(UserContext);
  return (
    <>
    <hr></hr>
      <h2>Hello {user} from Child component</h2>
      <h3> your email is {email} from Child</h3>
    </>
  );
}