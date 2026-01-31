import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
// import "./Sidebar.css";


const Sidebar = ({ activePage, setActivePage, onLogout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false); 
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
    <>
      {/* HAMBURGER BUTTON */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* SIDEBAR */}
      <aside className={`sidebar ${theme} ${isOpen ? "open" : "closed"}`}>
        {/* LOGO */}
        <h1 className="logo">Admin Panel</h1>

        {/* PROFILE + LOGOUT */}
        <div className="sidebar-profile top-profile">
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon className="profile-avatar" />
            <div className="profile-info" style={{ marginLeft: "10px" }}>
              <p className="profile-name">Super Admin</p>
              <span className="profile-role">Logged in</span>
            </div>
          </div>
          <LogoutIcon
            sx={{
              color: theme === "dark" ? "#fff" : "#000",
              cursor: "pointer",
            }}
            onClick={onLogout}
            titleAccess="Logout"
          />
        </div>

        {/* NAV MENU */}
        <nav className="nav-menu">
          {navItem("all", "All", ListAltIcon)}
          {navItem("dashboard", "Dashboard", DashboardIcon)}
          {navItem("products", "Products", InventoryIcon)}
          {navItem("users", "Users", PeopleIcon)}
          {navItem("orders", "Orders", ShoppingCartIcon)}
        </nav>

        {/* THEME SWITCH */}
        <div className="theme-box bottom-theme">
          {theme === "dark" ? (
            <DarkModeIcon
              sx={{ color: "#ffffff", fontSize: 28 }}
              onClick={toggleTheme}
            />
          ) : (
            <LightModeIcon
              sx={{ color: "#000000", fontSize: 28 }}
              onClick={toggleTheme}
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
    </>
  );
};

export default Sidebar;
