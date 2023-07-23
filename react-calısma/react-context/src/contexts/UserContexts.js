import { createContext,useState } from "react";

const UserContexts = createContext()

export const  UserProvider = ({children}) => {
    const [name, setName] = useState("ali")
    const [surname, setSurname] = useState("durul")

    const values = {
        name,
        setName,
        surname,
        setSurname
    }

  return(
    <UserContexts.Provider value={values}>{children}</UserContexts.Provider>
  )
}



export default UserContexts;