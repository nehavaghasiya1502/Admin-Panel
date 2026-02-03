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
  const [activePage, setActivePage] = useState(() => {
  return localStorage.getItem("activePage") || "all";
});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  // USERS EDIT
  const [selectedUser, setSelectedUser] = useState(null);

  // PRODUCTS STATE
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
  localStorage.setItem("activePage", activePage);
}, [activePage]);

  // LOGIN CHECK
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  // FETCH PRODUCTS
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
        });
    }
  }, [products.length]);

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  //  ADD PRODUCT
  const addProduct = (product) => {
    setProducts(prev => [{ id: Date.now(), ...product }, ...prev]);
  };

  //  UPDATE PRODUCT
  const updateProduct = (product) => {
    setProducts(prev =>
      prev.map(p => (p.id === product.id ? product : p))
    );
    setEditProduct(null);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setActivePage("all");
  };

  useEffect(() => {
  if (!activePage) {
    setActivePage("all");
  }
}, [activePage]);

  return (
    <ThemeProvider>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="app">
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            onLogout={handleLogout}
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

            {/* EDIT USER PAGE */}
            {activePage === "edit-user" && selectedUser && (
              <EditUser
                user={selectedUser}
                setUsers={setUsers}
                setActivePage={setActivePage}
              />
            )}
            {activePage === "orders" && <Orders />}
            {activePage === "users" && (
              <Users
                users={users}
                setUsers={setUsers}
                setSelectedUser={setSelectedUser} 
                setActivePage={setActivePage}     
              />
            )}

            {activePage === "all" && (
              <>
                <Dashboard />
                <Products
                  products={products}
                  setProducts={setProducts}
                  setActivePage={setActivePage}
                  setEditProduct={setEditProduct}
                />
                <Users
                  users={users}
                  setUsers={setUsers}
                  setSelectedUser={setSelectedUser}
                  setActivePage={setActivePage}
                />
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
