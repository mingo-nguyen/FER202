import React, { useState, useContext } from "react";
import { CartProvider } from "./components/CartContext";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./styles.css";

// Sample dishes array
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/4.jpg",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/2.jpg",
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/1.jpg",
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/3.jpg",
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];

// Main app container
const AppContainer = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter dishes based on search term
  const filteredDishes = dishes.filter((dish) => 
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <CartProvider>
        <div className="header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <div className="App">
          <DishesList dishes={filteredDishes} />
          <Cart />
        </div>
      </CartProvider>
    </div>
  );
};

// Wrap with providers
function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;