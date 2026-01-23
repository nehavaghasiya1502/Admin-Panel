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
  Chip
} from "@mui/material";

const Orders = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  const bg = isDark
    ? "radial-gradient(circle at top, #020617, #020617)"
    : "#f1f5f9";

  const cardBg = isDark
    ? "linear-gradient(180deg, #020617, #020617)"
    : "#ffffff";

  const textMain = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#cbd5f5" : "#475569";
  const border = isDark ? "#1e293b" : "#e5e7eb";

  return (
    <Box sx={{ minHeight: "100vh", p: 4, background: bg }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{ color: textMain }}
      >
        Orders
      </Typography>

      <Card
        sx={{
          background: cardBg,
          borderRadius: 4,
          p: 2,
          boxShadow: isDark
            ? "0 0 25px rgba(99,102,241,0.15)"
            : "0 10px 25px rgba(0,0,0,0.08)"
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Order
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  User
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: textMain, fontWeight: 700 }}
                >
                  Items
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.map(o => (
                <TableRow
                  key={o.id}
                  hover
                  sx={{
                    "& td": {
                      borderBottom: `1px solid ${border}`,
                      color: textMuted
                    },
                    "&:hover": {
                      backgroundColor: isDark
                        ? "rgba(99,102,241,0.08)"
                        : "#f8fafc"
                    }
                  }}
                >
                  <TableCell>#{o.id}</TableCell>

                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Avatar
                        src={`https://i.pravatar.cc/150?img=${o.userId}`}
                        sx={{
                          width: 34,
                          height: 34,
                          border: "2px solid #6366f1"
                        }}
                      />
                      <Typography sx={{ color: textMuted }}>
                        User {o.userId}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{o.date.slice(0, 10)}</TableCell>

                  <TableCell align="center">
                    {o.products.length}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label="Pending"
                      size="small"
                      sx={{
                        background: "linear-gradient(135deg,#f59e0b,#f97316)",
                        color: "white",
                        fontWeight: 600
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
  );
};

export default Orders;
