import { createContext } from "react";
import { useState } from 'react';

export const ThemeContext = createContext();

const DARK_KEY = 'isDark';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(DARK_KEY);
    return saved === 'true'; 
  });

  const toggleIsDark=()=>{
    localStorage.setItem("isDark", !isDark);
    setIsDark((prev) => !prev);
  }

  return [isDark, toggleIsDark];
}