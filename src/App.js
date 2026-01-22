// import { ThemeProvider } from "./Context/ThemeContext";
// import Sidebar from "./Components/Sidebar";
// import Users from "./Pages/Users";
// import "./App.css";
// import Products from "./Pages/Products";
// import Orders from "./Pages/Orders";

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="app">
//         <Sidebar />
//         <main className="content">
//           <Users />
//           <Products />
//           <Orders />
//         </main>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
import { useState } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import Sidebar from "./Components/Sidebar";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import "./App.css";

function App() {
  // Add state to control active page
  const [activePage, setActivePage] = useState("all"); 

  return (
    <ThemeProvider>
      <div className="app">
        {/* Pass activePage and setter to Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <main className="content">
          {activePage === "all" || activePage === "products" ? <Products /> : null}
          {activePage === "all" || activePage === "users" ? <Users /> : null}
          {activePage === "all" || activePage === "orders" ? <Orders /> : null}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
