import React from "react";
import {ThemeProvider} from "./components/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to React!</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
