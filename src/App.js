import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";

import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/DashBoard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProducts";
import EditUser from "./Pages/EditUser";

function App() {
  // DEFAULT PAGE (ALL removed)
  const [activePage, setActivePage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // USERS
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // PRODUCTS
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [editProduct, setEditProduct] = useState(null);

  // LOGIN CHECK
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setActivePage("dashboard");
  };

  // ADD PRODUCT
  const addProduct = (product) => {
    setProducts(prev => [{ id: Date.now(), ...product }, ...prev]);
  };

  // UPDATE PRODUCT
  const updateProduct = (product) => {
    setProducts(prev =>
      prev.map(p => (p.id === product.id ? product : p))
    );
    setEditProduct(null);
  };

  return (
    <ThemeProvider>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="app">
          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            onLogout={handleLogout}
            isOpen={sidebarOpen}
            closeSidebar={() => setSidebarOpen(false)}
          />

          <main className="content">
            {activePage === "dashboard" && <Dashboard />}

            {activePage === "products" && (
              <Products
                products={products}
                setProducts={setProducts}
                setActivePage={setActivePage}
                setEditProduct={setEditProduct}
              />
            )}

            {activePage === "add-product" && (
              <AddProduct
                editProduct={editProduct}
                onAddProduct={addProduct}
                onUpdateProduct={updateProduct}
                setActivePage={setActivePage}
              />
            )}

            {activePage === "users" && (
              <Users
                users={users}
                setUsers={setUsers}
                setSelectedUser={setSelectedUser}
                setActivePage={setActivePage}
              />
            )}

            {activePage === "edit-user" && selectedUser && (
              <EditUser
                user={selectedUser}
                setUsers={setUsers}
                setActivePage={setActivePage}
              />
            )}

            {activePage === "orders" && <Orders />}
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
