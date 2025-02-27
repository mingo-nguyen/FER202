import React, { createContext, useState, useEffect } from "react";

// Create the theme context
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Get saved theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  // Toggle theme function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    // You could also set a data-theme attribute on the document body here
  }, [darkMode]);

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};