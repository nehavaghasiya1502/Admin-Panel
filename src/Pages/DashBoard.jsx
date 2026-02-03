import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import UsersPieChart from "../Charts/UsersPieChart";
import ProductsBarChart from "../Charts/ProductBarChart";
import OrdersLineChart from "../Charts/OrdersLineChart";

const DashBoard = ({ setActivePage = () => { } }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(setProducts);
    fetch("https://dummyjson.com/users?limit=24").then(res => res.json()).then(data => setUsers(data.users));
    fetch("https://fakestoreapi.com/carts").then(res => res.json()).then(setOrders);
  }, []);

  const pageBg = isDark ? "#020617" : "#f1f5f9";
  const titleColor = isDark ? "#f8fafc" : "#020617";

  const cards = [
    {
      title: "Total Products",
      value: products.length,
      icon: "🛍️",
      page: "products",
      gradient: isDark ? "linear-gradient(135deg,#1e3a8a,#020617)" : "linear-gradient(135deg,#3b82f6,#1d4ed8)"
    },
    {
      title: "Total Users",
      value: users.length,
      icon: "👤",
      page: "users",
      gradient: isDark ? "linear-gradient(135deg,#064e3b,#022c22)" : "linear-gradient(135deg,#22c55e,#15803d)"
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: "📦",
      page: "orders",
      gradient: isDark ? "linear-gradient(135deg,#7c2d12,#020617)" : "linear-gradient(135deg,#f59e0b,#b45309)"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: pageBg }}>
      <h1 style={{ color: titleColor, marginBottom: "40px" }}>Admin Dashboard</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center"
      }}>
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => setActivePage && setActivePage(card.page)}
            style={{
              flex: "1 1 300px",
              maxWidth: "350px",
              height: "400px",
              borderRadius: "15px",
              background: card.gradient,
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              boxShadow: isDark
                ? "0 0 20px rgba(99,102,241,0.25)"
                : "0 8px 20px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px) scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
          >
            <div style={{
              fontSize: "50px",
              marginBottom: "20px"
            }}>{card.icon}</div>

            <div style={{ fontSize: "20px", opacity: 0.9 }}>{card.title}</div>
            <div style={{ fontSize: "50px", fontWeight: "bold", marginTop: "10px" }}>{card.value}</div>
          </div>


        ))}
      </div>

      {/*Charts */}
      <div style={{ marginTop: "80px" }}>

        <h2 style={{ color: titleColor, marginBottom: "30px" }}>
          Dashboard Analytics
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px"
        }}>

          <div style={{
            background: isDark ? "#020617" : "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: isDark
              ? "0 0 15px rgba(99,102,241,0.2)"
              : "0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <UsersPieChart users={users} isDark={isDark} />
          </div>

          <div style={{
            background: isDark ? "#020617" : "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: isDark
              ? "0 0 15px rgba(99,102,241,0.2)"
              : "0 8px 20px rgba(0,0,0,0.08)"
          }}>
            <ProductsBarChart products={products} isDark={isDark} />
          </div>

        </div>

        <div style={{
          marginTop: "40px",
          background: isDark ? "#020617" : "#ffffff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: isDark
            ? "0 0 15px rgba(99,102,241,0.2)"
            : "0 8px 20px rgba(0,0,0,0.08)"
        }}>
          <OrdersLineChart orders={orders} isDark={isDark} />
        </div>

      </div>

    </div>
  );
};

export default DashBoard;
