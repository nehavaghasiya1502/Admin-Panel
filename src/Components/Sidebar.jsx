// import { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";

// const Sidebar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <aside className={`sidebar ${theme}`}>
//       <h1 className="logo">Admin</h1>

//       <nav>
//         <a className="nav-item active">Users</a>
//         <a className="nav-item">Products</a>
//         <a className="nav-item">Orders</a>
//       </nav>

//       <div className="theme-box">
//         <span>{theme.toUpperCase()}</span>
//         <label className="switch">
//           <input type="checkbox" onChange={toggleTheme} />
//           <span className="slider"></span>
//         </label>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Sidebar = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className={`sidebar ${theme}`}>
      <h1 className="logo">Admin</h1>

      <nav>
        <a
          className={`nav-item ${activePage === "all" ? "active" : ""}`}
          onClick={() => setActivePage("all")}
        >
          All
        </a>
        <a
          className={`nav-item ${activePage === "products" ? "active" : ""}`}
          onClick={() => setActivePage("products")}
        >
          Products
        </a>
         <a
          className={`nav-item ${activePage === "users" ? "active" : ""}`}
          onClick={() => setActivePage("users")}
        >
          Users
        </a>
        <a
          className={`nav-item ${activePage === "orders" ? "active" : ""}`}
          onClick={() => setActivePage("orders")}
        >
          Orders
        </a>
       
      </nav>

      <div className="theme-box">
        <span>{theme.toUpperCase()}</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
          <span className="slider"></span>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
