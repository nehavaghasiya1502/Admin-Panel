import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      height: "60px",
      background: theme === "light" ? "#ffffff" : "#020617",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      position: "fixed",
      left: "200px",
      right: 0,
      top: 0,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>Admin Panel</h3>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default Header;
