import { createContext, useContext, useState } from "react";
export const AthuContext = createContext()

export const useAuthContext = () => {
    return useContext(AthuContext)
}

// eslint-disable-next-line react/prop-types
export const AthuContextProvider = ({ children }) => {
    const [AthuUser, setAuthUser] = useState(() => JSON.parse(localStorage.getItem('chat-user')) || null);
    return <AthuContext.Provider value={{ AthuUser, setAuthUser }}>
        {children}
    </AthuContext.Provider>
}
