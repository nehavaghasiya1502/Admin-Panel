import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({
  activePage,
  setActivePage,
  onLogout,
  isOpen,
  closeSidebar,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItem = (name, label, Icon) => (
    <div
      className={`nav-item ${activePage === name ? "active" : ""}`}
      onClick={() => {
        setActivePage(name);
        closeSidebar(); // ✅ mobile pe click ke baad band
      }}
    >
      <Icon style={{ marginRight: "10px" }} />
      {label}
    </div>
  );

  return (
    <aside className={`sidebar ${theme} ${isOpen ? "open" : ""}`}>
      {/* LOGO (toggle me nahi jayega) */}
      <h1 className="logo">Admin Panel</h1>

      {/* PROFILE */}
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
        />
      </div>

      {/* NAV */}
      <nav className="nav-menu">
        {navItem("dashboard", "Dashboard", DashboardIcon)}
        {navItem("products", "Products", InventoryIcon)}
        {navItem("users", "Users", PeopleIcon)}
        {navItem("orders", "Orders", ShoppingCartIcon)}
      </nav>

      {/* THEME SWITCH */}
      <div className="theme-box bottom-theme">
        {theme === "dark" ? (
          <DarkModeIcon sx={{ color: "#fff" }} onClick={toggleTheme} />
        ) : (
          <LightModeIcon sx={{ color: "#000" }} onClick={toggleTheme} />
        )}

        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
