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
