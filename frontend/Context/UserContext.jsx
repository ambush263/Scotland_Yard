import { useState, createContext } from "react";
import defaultUserData from "../Data/defaultUserData";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("userData")) || defaultUserData,
    );
    const updateUserData = (newData) => {
        setUserData(newData);
        localStorage.setItem("userData", JSON.stringify(newData));
    };
    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
