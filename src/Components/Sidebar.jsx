import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Sidebar = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItem = (name, label, Icon) => (
    <div
      className={`nav-item ${activePage === name ? "active" : ""}`}
      onClick={() => setActivePage(name)}
    >
      <Icon style={{ marginRight: "10px" }} />
      {label}
    </div>
  );

  return (
    <aside className={`sidebar ${theme}`}>
      <h1 className="logo">Admin Panel</h1>

      <nav>
        {navItem("dashboard", "Dashboard", DashboardIcon)}
        {navItem("all", "All", ListAltIcon)}
        {navItem("products", "Products", InventoryIcon)}
        {navItem("users", "Users", PeopleIcon)}
        {navItem("orders", "Orders", ShoppingCartIcon)}
      </nav>

      <div className="theme-box">
        <span>{theme.toUpperCase()}</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
