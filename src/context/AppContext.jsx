import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [name, setName] = useState("Budi");

    return (
        <AppContext.Provider value={{ name, setName }}>
            {children}
        </AppContext.Provider>
    );
}
export const useApp = () => useContext(AppContext);

