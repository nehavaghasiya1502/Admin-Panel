import { useState } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/DashBoard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard"); // default page

  return (
    <ThemeProvider>
      <div className="app">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

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
    </ThemeProvider>
  );
}

export default App;
