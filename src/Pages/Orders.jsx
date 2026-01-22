import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Orders = () => {
  const { theme } = useContext(ThemeContext); // get current theme
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // theme-based colors
  const bgColor = theme === "dark" ? "#1e1e2f" : "#f9f9f9";
  const cardBg = theme === "dark" ? "#2a2a3d" : "#fff";
  const textColor = theme === "dark" ? "#fff" : "#333";
  const borderColor = theme === "dark" ? "#444" : "#eee";
  const headerBg = theme === "dark" ? "#29293f" : "#f0f0f0";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: bgColor, minHeight: "100vh", color: textColor }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Orders</h2>

      <div style={{
        overflowX: "auto",
        background: cardBg,
        borderRadius: "8px",
        boxShadow: theme === "dark" ? "0 4px 8px rgba(0,0,0,0.5)" : "0 4px 8px rgba(0,0,0,0.05)",
        padding: "10px"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: textColor }}>
          <thead>
            <tr style={{ background: headerBg, textAlign: "left" }}>
              <th style={{ padding: "12px 8px", color: textColor }}>Order ID</th>
              <th style={{ padding: "12px 8px", color: textColor }}>User ID</th>
              <th style={{ padding: "12px 8px", color: textColor }}>Date</th>
              <th style={{ padding: "12px 8px", color: textColor }}>Total Items</th>
              <th style={{ padding: "12px 8px", color: textColor }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(o => (
              <tr
                key={o.id}
                style={{ borderBottom: `1px solid ${borderColor}`, transition: "background 0.2s", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = theme === "dark" ? "#3a3a50" : "#f9f9f9"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={{ padding: "12px 8px" }}>#{o.id}</td>
                <td style={{ padding: "12px 8px" }}>User {o.userId}</td>
                <td style={{ padding: "12px 8px" }}>{o.date.slice(0, 10)}</td>
                <td style={{ padding: "12px 8px", textAlign: "center" }}>{o.products.length}</td>
                <td style={{ padding: "12px 8px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    color: "#fff",
                    backgroundColor: "#f39c12" // orange for pending
                  }}>
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
