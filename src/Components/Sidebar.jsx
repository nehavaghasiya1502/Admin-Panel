import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


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

      {/* ✅ PROFILE TOP */}
      <div className="sidebar-profile top-profile">
        <AccountCircleIcon className="profile-avatar" />
        <div className="profile-info">
          <p className="profile-name">Admin User</p>
          <span className="profile-role">Not logged in</span>
        </div>

      </div>

      {/* MENU */}
      <nav className="nav-menu">
        {navItem("all", "All", ListAltIcon)}
        {navItem("dashboard", "Dashboard", DashboardIcon)}
        {navItem("products", "Products", InventoryIcon)}
        {navItem("users", "Users", PeopleIcon)}
        {navItem("orders", "Orders", ShoppingCartIcon)}
      </nav>

      {/* THEME BOTTOM */}
      <div className="theme-box bottom-theme">
        {theme === "dark" ? (
          <DarkModeIcon
            sx={{
              color: "#ffffff",   
              fontSize: 28
            }}
          />
        ) : (
          <LightModeIcon
            sx={{
              color: "#000000",   
              fontSize: 28
            }}
          />
        )}

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
