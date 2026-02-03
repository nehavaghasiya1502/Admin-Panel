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

function App() {
  const [activePage, setActivePage] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // PRODUCTS STATE (SINGLE SOURCE)
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

  // FETCH PRODUCTS (ONCE)
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

  //  ADD
  const addProduct = (product) => {
    setProducts(prev => [{ id: Date.now(), ...product }, ...prev]);
  };

  //  UPDATE
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

            {activePage === "users" && <Users />}
            {activePage === "orders" && <Orders />}

            {activePage === "all" && (
              <>
                <Dashboard />
                <Products
                  products={products}
                  setProducts={setProducts}
                  setActivePage={setActivePage}
                  setEditProduct={setEditProduct}
                />
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
