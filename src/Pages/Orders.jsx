// // import { useEffect, useState, useContext } from "react";
// // import { ThemeContext } from "../Context/ThemeContext";
// // import {
// //   Box,
// //   Typography,
// //   Card,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Avatar,
// //   Chip
// // } from "@mui/material";

// // const Orders = () => {
// //   const { theme } = useContext(ThemeContext);
// //   const isDark = theme === "dark";

// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/carts")
// //       .then(res => res.json())
// //       .then(data => setOrders(data));
// //   }, []);

// //   const bg = isDark
// //     ? "radial-gradient(circle at top, #020617, #020617)"
// //     : "#f1f5f9";

// //   const cardBg = isDark
// //     ? "linear-gradient(180deg, #020617, #020617)"
// //     : "#ffffff";

// //   const textMain = isDark ? "#f8fafc" : "#0f172a";
// //   const textMuted = isDark ? "#cbd5f5" : "#475569";
// //   const border = isDark ? "#1e293b" : "#e5e7eb";

// //   return (
// //     <Box sx={{ minHeight: "100vh", p: 4, background: bg }}>
// //       <Typography
// //         variant="h4"
// //         fontWeight="bold"
// //         mb={3}
// //         sx={{ color: textMain }}
// //       >
// //         Orders
// //       </Typography>

// //       <Card
// //         sx={{
// //           background: cardBg,
// //           borderRadius: 4,
// //           p: 2,
// //           boxShadow: isDark
// //             ? "0 0 25px rgba(99,102,241,0.15)"
// //             : "0 10px 25px rgba(0,0,0,0.08)"
// //         }}
// //       >
// //         <TableContainer>
// //           <Table>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell sx={{ color: textMain, fontWeight: 700 }}>
// //                   Order
// //                 </TableCell>
// //                 <TableCell sx={{ color: textMain, fontWeight: 700 }}>
// //                   User
// //                 </TableCell>
// //                 <TableCell sx={{ color: textMain, fontWeight: 700 }}>
// //                   Date
// //                 </TableCell>
// //                 <TableCell
// //                   align="center"
// //                   sx={{ color: textMain, fontWeight: 700 }}
// //                 >
// //                   Items
// //                 </TableCell>
// //                 <TableCell sx={{ color: textMain, fontWeight: 700 }}>
// //                   Status
// //                 </TableCell>
// //               </TableRow>
// //             </TableHead>

// //             <TableBody>
// //               {orders.map(o => (
// //                 <TableRow
// //                   key={o.id}
// //                   hover
// //                   sx={{
// //                     "& td": {
// //                       borderBottom: `1px solid ${border}`,
// //                       color: textMuted
// //                     },
// //                     "&:hover": {
// //                       backgroundColor: isDark
// //                         ? "rgba(99,102,241,0.08)"
// //                         : "#f8fafc"
// //                     }
// //                   }}
// //                 >
// //                   <TableCell>#{o.id}</TableCell>

// //                   <TableCell>
// //                     <Box display="flex" alignItems="center" gap={1.5}>
// //                       <Avatar
// //                         src={`https://i.pravatar.cc/150?img=${o.userId}`}
// //                         sx={{
// //                           width: 34,
// //                           height: 34,
// //                           border: "2px solid #6366f1"
// //                         }}
// //                       />
// //                       <Typography sx={{ color: textMuted }}>
// //                         User {o.userId}
// //                       </Typography>
// //                     </Box>
// //                   </TableCell>

// //                   <TableCell>{o.date.slice(0, 10)}</TableCell>

// //                   <TableCell align="center">
// //                     {o.products.length}
// //                   </TableCell>

// //                   <TableCell>
// //                     <Chip
// //                       label="Pending"
// //                       size="small"
// //                       sx={{
// //                         background: "linear-gradient(135deg,#f59e0b,#f97316)",
// //                         color: "white",
// //                         fontWeight: 600
// //                       }}
// //                     />
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Card>
// //     </Box>
// //   );
// // };

// // export default Orders;
// import { useEffect, useState, useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";
// import {
//   Box,
//   Typography,
//   Card,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Avatar,
//   Chip,
// } from "@mui/material";

// const Orders = () => {
//   const { theme } = useContext(ThemeContext);
//   const isDark = theme === "dark";

//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/carts")
//       .then((res) => res.json())
//       .then((data) => setOrders(data));
//   }, []);

//   /* THEME COLORS */
//   const bg = isDark ? "#020617" : "#f1f5f9";
//   const cardBg = isDark ? "#0f172a" : "#ffffff";
//   const textMain = isDark ? "#f8fafc" : "#0f172a";
//   const textMuted = isDark ? "#94a3b8" : "#475569";
//   const border = isDark ? "#1e293b" : "#e5e7eb";

//   return (
//     <Box sx={{ minHeight: "100vh", p: { xs: 2,sm: 3, md: 4 }, background: bg }}>
//       {/* PAGE HEADER */}
//       <Box mb={3}>
//         <Typography
//           variant="h5"
//           fontWeight={700}
//           sx={{ color: textMain }}
//         >
//           Orders
//         </Typography>
//         <Typography fontSize={14} sx={{ color: textMuted }}>
//           Recent customer orders
//         </Typography>
//       </Box>

//       {/* TABLE CARD */}
//       <Card
//         sx={{
//           background: cardBg,
//           borderRadius: "18px",
//           boxShadow: isDark
//             ? "0 0 30px rgba(99,102,241,0.12)"
//             : "0 15px 30px rgba(0,0,0,0.08)",
//           overflow: "hidden",
//         }}
//       >
//         <TableContainer
//           sx={{
//             overflowX: "auto",
//             "&::-webkit-scrollbar": {
//               height: "6px",
//             },
//             "&::-webkit-scrollbar-thumb": {
//               background: isDark ? "#334155" : "#cbd5f5",
//               borderRadius: "10px",
//             },
//           }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow sx={{ background: isDark ? "#020617" : "#f8fafc" }}>
//                 {["Order", "Customer", "Date", "Items", "Status"].map(
//                   (head) => (
//                     <TableCell
//                       key={head}
//                       sx={{
//                         color: textMain,
//                         fontWeight: 700,
//                         borderBottom: `1px solid ${border}`,
//                       }}
//                       align={head === "Items" ? "center" : "left"}
//                     >
//                       {head}
//                     </TableCell>
//                   )
//                 )}
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {orders.map((o) => (
//                 <TableRow
//                   key={o.id}
//                   sx={{
//                     "& td": {
//                       borderBottom: `1px solid ${border}`,
//                       color: textMuted,
//                     },
//                     "&:hover": {
//                       backgroundColor: isDark
//                         ? "rgba(99,102,241,0.08)"
//                         : "#f1f5f9",
//                     },
//                     transition: "0.3s",
//                   }}
//                 >
//                   {/* ORDER ID */}
//                   <TableCell>#{o.id}</TableCell>

//                   {/* USER */}
//                   <TableCell>
//                     <Box display="flex" alignItems="center" gap={1.5}>
//                       <Avatar
//                         src={`https://i.pravatar.cc/150?img=${o.userId}`}
//                         sx={{
//                           width: 36,
//                           height: 36,
//                           border: "2px solid #6366f1",
//                         }}
//                       />
//                       <Box>
//                         <Typography fontSize={14} color={textMain}>
//                           User {o.userId}
//                         </Typography>
//                         <Typography fontSize={12} color={textMuted}>
//                           customer@email.com
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </TableCell>

//                   {/* DATE */}
//                   <TableCell>{o.date.slice(0, 10)}</TableCell>

//                   {/* ITEMS */}
//                   <TableCell align="center">
//                     {o.products.length}
//                   </TableCell>

//                   {/* STATUS */}
//                   <TableCell>
//                     <Chip
//                       label="Pending"
//                       size="small"
//                       sx={{
//                         background:
//                           "linear-gradient(135deg,#f59e0b,#f97316)",
//                         color: "white",
//                         fontWeight: 600,
//                         borderRadius: "8px",
//                       }}
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
//     </Box>
//   );
// };

// export default Orders;
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@mui/material";

const Orders = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  /* 🎨 Theme colors */
  const pageBg = isDark ? "#020617" : "#f1f5f9";
  const cardBg = isDark ? "#020617" : "#ffffff";
  const textMain = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#cbd5f5" : "#475569";
  const border = isDark ? "#1e293b" : "#e5e7eb";
  const hoverBg = isDark ? "rgba(99,102,241,0.12)" : "#f8fafc";

  return (
    <div className="page-animate">
    <Box sx={{ minHeight: "100vh", p: { xs: 2, md: 4 }, background: pageBg }}>
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight={700}
        mb={3}
        sx={{ color: textMain,marginTop: "50px" }}
      >
        Orders
      </Typography>

      {/* Card */}
      <Card
        sx={{
          background: cardBg,          // ✅ FIX: dark me white nahi rahega
          borderRadius: 4,
          boxShadow: isDark
            ? "0 0 30px rgba(99,102,241,0.18)"
            : "0 12px 28px rgba(0,0,0,0.08)",
        }}
      >
        <TableContainer sx={{ overflowX: "auto" }}>
          <Table>
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Order
                </TableCell>

                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Customer
                </TableCell>

                <TableCell
                  sx={{
                    color: textMain,
                    fontWeight: 700,
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    color: textMain,
                    fontWeight: 700,
                    display: { xs: "none", md: "table-cell" },
                  }}
                >
                  Items
                </TableCell>

                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {orders.map((o) => (
                <TableRow
                  key={o.id}
                  sx={{
                    "& td": {
                      borderBottom: `1px solid ${border}`,
                      color: textMuted,
                    },
                    "&:hover": {
                      backgroundColor: hoverBg,
                    },
                    transition: "0.3s",
                  }}
                >
                  {/* Order */}
                  <TableCell>#{o.id}</TableCell>

                  {/* Customer */}
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar
                        src={`https://i.pravatar.cc/150?img=${o.userId}`}
                        sx={{
                          width: 34,
                          height: 34,
                          border: "2px solid #6366f1",
                        }}
                      />
                      <Typography sx={{ color: textMuted }}>
                        Customer {o.userId}
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Date */}
                  <TableCell
                    sx={{ display: { xs: "none", sm: "table-cell" } }}
                  >
                    {o.date.slice(0, 10)}
                  </TableCell>

                  {/* Items */}
                  <TableCell
                    align="center"
                    sx={{ display: { xs: "none", md: "table-cell" } }}
                  >
                    {o.products.length}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Chip
                      label="Pending"
                      size="small"
                      sx={{
                        background: isDark
                          ? "linear-gradient(135deg,#6366f1,#4f46e5)"
                          : "linear-gradient(135deg,#22c55e,#16a34a)",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
    </div>
  );
};

export default Orders;
