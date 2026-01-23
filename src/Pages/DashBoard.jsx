// // import { useEffect, useState } from "react";
// // import {
// //   Box, Grid, Card, CardContent, Typography,
// //   Avatar, Chip, Table, TableBody,
// //   TableCell, TableContainer, TableHead,
// //   TableRow, Paper
// // } from "@mui/material";
// // import { useTheme } from "@mui/material/styles";

// // import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// // import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// // import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// // const DashBoard = ({ setActivePage }) => {
// //   const theme = useTheme();

// //   const [users, setUsers] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/users").then(res => res.json()).then(setUsers);
// //     fetch("https://fakestoreapi.com/products").then(res => res.json()).then(setProducts);
// //     fetch("https://fakestoreapi.com/carts").then(res => res.json()).then(setOrders);
// //   }, []);

// //   const statCardStyle = (gradient) => ({
// //     borderRadius: 4,
// //     cursor: "pointer",
// //     background: gradient,
// //     color: "#fff",
// //     transition: "0.3s",
// //     "&:hover": {
// //       transform: "translateY(-6px) scale(1.02)",
// //       boxShadow: theme.shadows[10]
// //     }
// //   });

// //   return (
// //     <Box sx={{ p: 3 }}>

// //       <Typography variant="h4" fontWeight="bold" mb={3}>
// //         Admin Dashboard
// //       </Typography>

// //       {/* ===== Summary Cards (CLICKABLE) ===== */}
// //       <Grid container spacing={3} mb={5}>

// //         <Grid item xs={12} md={4}>
// //           <Card
// //             sx={statCardStyle(
// //               theme.palette.mode === "dark"
// //                 ? "linear-gradient(135deg,#064e3b,#022c22)"
// //                 : "linear-gradient(135deg,#22c55e,#15803d)"
// //             )}
// //             onClick={() => setActivePage("users")}
// //           >
// //             <CardContent>
// //               <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 1 }}>
// //                 <PeopleAltIcon />
// //               </Avatar>
// //               <Typography>Total Users</Typography>
// //               <Typography variant="h4" fontWeight="bold">{users.length}</Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>

// //         <Grid item xs={12} md={4}>
// //           <Card
// //             sx={statCardStyle(
// //               theme.palette.mode === "dark"
// //                 ? "linear-gradient(135deg,#020617,#0f172a)"
// //                 : "linear-gradient(135deg,#3b82f6,#1d4ed8)"
// //             )}
// //             onClick={() => setActivePage("products")}
// //           >
// //             <CardContent>
// //               <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 1 }}>
// //                 <ShoppingBagIcon />
// //               </Avatar>
// //               <Typography>Total Products</Typography>
// //               <Typography variant="h4" fontWeight="bold">{products.length}</Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>

// //         <Grid item xs={12} md={4}>
// //           <Card
// //             sx={statCardStyle(
// //               theme.palette.mode === "dark"
// //                 ? "linear-gradient(135deg,#451a03,#1c0701)"
// //                 : "linear-gradient(135deg,#f59e0b,#b45309)"
// //             )}
// //             onClick={() => setActivePage("orders")}
// //           >
// //             <CardContent>
// //               <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 1 }}>
// //                 <ReceiptLongIcon />
// //               </Avatar>
// //               <Typography>Total Orders</Typography>
// //               <Typography variant="h4" fontWeight="bold">{orders.length}</Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>

// //       </Grid>

// //       {/* ===== Latest Users ===== */}
// //       <Card sx={{ borderRadius: 4, mb: 4 }}>
// //         <CardContent>
// //           <Typography variant="h6" fontWeight="bold" mb={2}>Latest Users</Typography>

// //           {users.slice(-5).map(u => (
// //             <Box key={u.id} sx={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //               py: 1,
// //               borderBottom: "1px solid",
// //               borderColor: "divider"
// //             }}>
// //               <Box display="flex" gap={2} alignItems="center">
// //                 <Avatar>{u.name.firstname[0]}</Avatar>
// //                 <Typography>{u.name.firstname} {u.name.lastname}</Typography>
// //               </Box>
// //               <Chip label={`ID: ${u.id}`} size="small" />
// //             </Box>
// //           ))}
// //         </CardContent>
// //       </Card>

// //       {/* ===== Latest Products ===== */}
// //       <Card sx={{ borderRadius: 4, mb: 5 }}>
// //         <CardContent>
// //           <Typography variant="h6" fontWeight="bold" mb={2}>Latest Products</Typography>

// //           {products.slice(-5).map(p => (
// //             <Box key={p.id} sx={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               py: 1,
// //               borderBottom: "1px solid",
// //               borderColor: "divider"
// //             }}>
// //               <Typography>{p.title}</Typography>
// //               <Chip label={`₹ ${p.price}`} color="primary" size="small" />
// //             </Box>
// //           ))}
// //         </CardContent>
// //       </Card>

// //       {/* ===== Latest Orders ===== */}
// //       <Card sx={{ borderRadius: 4 }}>
// //         <CardContent>
// //           <Typography variant="h6" fontWeight="bold" mb={2}>Latest Orders</Typography>

// //           <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
// //             <Table>
// //               <TableHead>
// //                 <TableRow>
// //                   <TableCell><b>Order</b></TableCell>
// //                   <TableCell><b>User</b></TableCell>
// //                   <TableCell><b>Date</b></TableCell>
// //                   <TableCell><b>Items</b></TableCell>
// //                   <TableCell><b>Status</b></TableCell>
// //                 </TableRow>
// //               </TableHead>

// //               <TableBody>
// //                 {orders.slice(-5).map(o => (
// //                   <TableRow key={o.id}>
// //                     <TableCell>#{o.id}</TableCell>
// //                     <TableCell>User {o.userId}</TableCell>
// //                     <TableCell>{o.date.slice(0,10)}</TableCell>
// //                     <TableCell align="center">{o.products.length}</TableCell>
// //                     <TableCell>
// //                       <Chip label="Pending" color="warning" size="small" />
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </TableContainer>
// //         </CardContent>
// //       </Card>

// //     </Box>
// //   );
// // };

// // export default DashBoard;
// import { useEffect, useState, useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Avatar
// } from "@mui/material";

// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// const DashBoard = ({ setActivePage }) => {
//   const { theme } = useContext(ThemeContext);
//   const isDark = theme === "dark";

//   const [users, setUsers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/users")
//       .then(res => res.json())
//       .then(setUsers);

//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(setProducts);

//     fetch("https://fakestoreapi.com/carts")
//       .then(res => res.json())
//       .then(setOrders);
//   }, []);

//   const pageBg = isDark ? "#020617" : "#f1f5f9";
//   const titleColor = isDark ? "#f8fafc" : "#020617";

//   const cards = [
//     {
//       title: "Total Users",
//       value: users.length,
//       icon: <PeopleAltIcon />,
//       page: "users",
//       gradient: isDark
//         ? "linear-gradient(135deg,#064e3b,#022c22)"
//         : "linear-gradient(135deg,#22c55e,#15803d)"
//     },
//     {
//       title: "Total Products",
//       value: products.length,
//       icon: <ShoppingBagIcon />,
//       page: "products",
//       gradient: isDark
//         ? "linear-gradient(135deg,#1e3a8a,#020617)"
//         : "linear-gradient(135deg,#3b82f6,#1d4ed8)"
//     },
//     {
//       title: "Total Orders",
//       value: orders.length,
//       icon: <ReceiptLongIcon />,
//       page: "orders",
//       gradient: isDark
//         ? "linear-gradient(135deg,#7c2d12,#020617)"
//         : "linear-gradient(135deg,#f59e0b,#b45309)"
//     }
//   ];

//   return (
//     <Box sx={{ minHeight: "100vh", p: 4, background: pageBg }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         mb={4}
//         sx={{ color: titleColor }}
//       >
//         Admin Dashboard
//       </Typography>

//       <Grid container spacing={4}>
//         {cards.map((card, i) => (
//           <Grid item xs={6} md={4} key={i}>
//             <Card
//               onClick={() => setActivePage(card.page)}
//               sx={{
//                 height: 500,
//                 borderRadius: 5,
//                 background: card.gradient,
//                 color: "white",
//                 cursor: "pointer",
//                 boxShadow: isDark
//                   ? "0 0 30px rgba(99,102,241,0.25)"
//                   : "0 15px 30px rgba(0,0,0,0.15)",
//                 transition: "0.3s",
//                 "&:hover": {
//                   transform: "translateY(-10px) scale(1.03)",
//                   boxShadow: isDark
//                     ? "0 0 40px rgba(99,102,241,0.45)"
//                     : "0 20px 40px rgba(0,0,0,0.25)"
//                 }
//               }}
//             >
//               <CardContent>
//                 <Avatar
//                   sx={{
//                     bgcolor: "rgba(255,255,255,0.2)",
//                     width: 60,
//                     height: 60,
//                     mb: 2
//                   }}
//                 >
//                   {card.icon}
//                 </Avatar>

//                 <Typography fontSize={18} opacity={0.9}>
//                   {card.title}
//                 </Typography>

//                 <Typography variant="h3" fontWeight="bold">
//                   {card.value}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default DashBoard;
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const DashBoard = ({ setActivePage }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users").then(res => res.json()).then(setUsers);
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(setProducts);
    fetch("https://fakestoreapi.com/carts").then(res => res.json()).then(setOrders);
  }, []);

  const pageBg = isDark ? "#020617" : "#f1f5f9";
  const titleColor = isDark ? "#f8fafc" : "#020617";

  const cards = [
    {
      title: "Total Users",
      value: users.length,
      icon: "👤",
      page: "users",
      gradient: isDark ? "linear-gradient(135deg,#064e3b,#022c22)" : "linear-gradient(135deg,#22c55e,#15803d)"
    },
    {
      title: "Total Products",
      value: products.length,
      icon: "🛍️",
      page: "products",
      gradient: isDark ? "linear-gradient(135deg,#1e3a8a,#020617)" : "linear-gradient(135deg,#3b82f6,#1d4ed8)"
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
            onClick={() => setActivePage(card.page)}
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
      ? "0 0 20px rgba(99,102,241,0.25)"  // reduced from 40px
      : "0 8px 20px rgba(0,0,0,0.1)",    // reduced from 30px
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
    </div>
  );
};

export default DashBoard;
