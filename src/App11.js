import { useState, createContext, userContext } from "react";
import Child from "./Child";
export const UserContext = createContext();
export default function App11() {
  const [user, setUser] = useState("John");
  const [email, setEmail] = useState("john@gmail.com")
  const [phoneNumber,setPhoneNumber] = useState("76434567876")
  return (
    <>
    <UserContext.Provider value={{user, email}}>
      <h2>Hello {user} from App11 component</h2>
      <h3>your email is {email} from App11</h3>
      <h4>your phoneNumber is {phoneNumber} from App11</h4>
      <Child />
    </UserContext.Provider>
    </>
  );
}