import { createContext, useState } from "react";


export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");
    
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        console.log(theme);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
