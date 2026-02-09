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
  // PAGE STATE
  const [activePage, setActivePage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // USERS
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  // LOGIN CHECK
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  // LOAD PRODUCTS (API + localStorage)
  useEffect(() => {
    const saved = localStorage.getItem("products");

    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
          const withStock = data.map(p => ({
            ...p,
            stock: Math.floor(Math.random() * 10) + 1
          }));

          setProducts(withStock);
          localStorage.setItem("products", JSON.stringify(withStock));
        });
    }
  }, []);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users_data");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      fetch("https://dummyjson.com/users?limit=100")
        .then(res => res.json())
        .then(data => {
          const formatted = data.users.map((u) => ({
            id: u.id,
            name: `${u.firstName} ${u.lastName}`,
            email: u.email,
            avatar: u.image,
            country: u.address.country,
            usage: Math.floor(Math.random() * 100),
            status: ["online", "offline", "away"][Math.floor(Math.random() * 3)],
            lastLogin: "Recently"
          }));

          setUsers(formatted);
          localStorage.setItem("users_data", JSON.stringify(formatted));
        });
    }
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setActivePage("dashboard");
  };

  // ADD PRODUCT
  const addProduct = (product) => {
    setProducts(prev => {
      const updated = [{ id: Date.now(), ...product }, ...prev];
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });
  };

  // UPDATE PRODUCT
  const updateProduct = (product) => {
    setProducts(prev => {
      const updated = prev.map(p =>
        p.id === product.id ? product : p
      );
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });

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

            {activePage === "orders" && (
              <Orders users={users} />
            )}

          </main>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
