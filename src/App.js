import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";

import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/DashBoard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";

function App() {
  const [activePage, setActivePage] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔐 CHECK LOGIN FROM LOCALSTORAGE
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 🔓 LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");

    setActivePage("all");
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider>
      {!isLoggedIn ? (
        // 🔐 LOGIN (theme context available)
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        // 🔓 ADMIN PANEL
        <div className="app">
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            onLogout={handleLogout}
          />

          <main className="content">
            {activePage === "dashboard" && (
              <Dashboard setActivePage={setActivePage} />
            )}

            {activePage === "products" && <Products />}
            {activePage === "users" && <Users />}
            {activePage === "orders" && <Orders />}

            {activePage === "all" && (
              <>
                <Dashboard setActivePage={setActivePage} />
                <Products />
                <Users />
                <Orders />
              </>
            )}
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
