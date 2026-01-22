import { useEffect, useState } from "react";

const Dashboard = ({ isDarkTheme }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));

    fetch("https://fakestoreapi.com/carts")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // Colors based on theme
  const bgColor = isDarkTheme ? "#1e1e2f" : "#f9f9f9";
  const cardBg = isDarkTheme ? "#2a2a3d" : "#fff";
  const textColor = isDarkTheme ? "#fff" : "#333";
  const borderColor = isDarkTheme ? "#444" : "#eee";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: bgColor, minHeight: "100vh", color: textColor }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ flex: 1, padding: "20px", background: "#4CAF50", color: "#fff", borderRadius: "8px" }}>
          <h3>Users</h3>
          <h2>{users.length}</h2>
        </div>
        <div style={{ flex: 1, padding: "20px", background: "#2196F3", color: "#fff", borderRadius: "8px" }}>
          <h3>Products</h3>
          <h2>{products.length}</h2>
        </div>
        <div style={{ flex: 1, padding: "20px", background: "#FF9800", color: "#fff", borderRadius: "8px" }}>
          <h3>Orders</h3>
          <h2>{orders.length}</h2>
        </div>
      </div>

      {/* Latest Users */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Latest Users</h3>
        <div style={{ background: cardBg, borderRadius: "8px", padding: "10px", boxShadow: isDarkTheme ? "0 2px 6px #000" : "0 2px 6px #ccc" }}>
          <ul>
            {users.slice(-5).map(u => (
              <li key={u.id} style={{ padding: "6px 0", borderBottom: `1px solid ${borderColor}` }}>
                {u.name.firstname} {u.name.lastname} (ID: {u.id})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Latest Products */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Latest Products</h3>
        <div style={{ background: cardBg, borderRadius: "8px", padding: "10px", boxShadow: isDarkTheme ? "0 2px 6px #000" : "0 2px 6px #ccc" }}>
          <ul>
            {products.slice(-5).map(p => (
              <li key={p.id} style={{ padding: "6px 0", borderBottom: `1px solid ${borderColor}` }}>
                {p.title} - ${p.price}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Latest Orders */}
      <div>
        <h3>Latest Orders</h3>
        <div style={{ background: cardBg, borderRadius: "8px", padding: "10px", boxShadow: isDarkTheme ? "0 2px 6px #000" : "0 2px 6px #ccc" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", color: textColor }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${borderColor}`, textAlign: "left" }}>
                <th style={{ padding: "8px" }}>Order ID</th>
                <th style={{ padding: "8px" }}>User ID</th>
                <th style={{ padding: "8px" }}>Date</th>
                <th style={{ padding: "8px" }}>Total Items</th>
                <th style={{ padding: "8px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(-5).map(o => (
                <tr key={o.id} style={{ borderBottom: `1px solid ${borderColor}` }}>
                  <td style={{ padding: "8px" }}>#{o.id}</td>
                  <td style={{ padding: "8px" }}>User {o.userId}</td>
                  <td style={{ padding: "8px" }}>{o.date.slice(0, 10)}</td>
                  <td style={{ padding: "8px", textAlign: "center" }}>{o.products.length}</td>
                  <td style={{ padding: "8px" }}>
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
    </div>
  );
};

export default Dashboard;
