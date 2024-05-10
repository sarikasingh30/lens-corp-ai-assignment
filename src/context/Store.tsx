'use client';

import { createContext,useState, ReactNode} from "react";

interface MyContextProps {
    theme: string;
    toggleTheme: () => void;
  }

export const MyContext=createContext<MyContextProps>({
    theme:"dark",
    toggleTheme: () => {}
})

interface MyStateProps {
    children: ReactNode;
  }
  

export const MyState = ({children}:MyStateProps) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  };
  

  return (
    <MyContext.Provider
      value={{
        theme,
        toggleTheme,
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

