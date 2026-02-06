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
  TextField,
  Pagination,
} from "@mui/material";

const ORDERS_PER_PAGE = 6;

const statusList = ["Pending", "Shipped", "Delivered"];
const statusColor = {
  Pending: "#f59e0b",
  Shipped: "#3b82f6",
  Delivered: "#22c55e",
};

const Orders = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* FETCH ORDERS */
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => {
        const withStatus = data.map((o) => ({
          ...o,
          status: statusList[Math.floor(Math.random() * 3)],
        }));
        setOrders(withStatus);
      });
  }, []);

  /* COUNTS FOR CARDS */
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === "Pending").length;
  const shippedOrders = orders.filter(o => o.status === "Shipped").length;
  const deliveredOrders = orders.filter(o => o.status === "Delivered").length;

  /* THEME COLORS */
  const pageBg = isDark ? "#020617" : "#f1f5f9";
  const cardBg = isDark ? "#020617" : "#ffffff";
  const textMain = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#94a3b8" : "#475569";
  const border = isDark ? "#1e293b" : "#e5e7eb";
  const hoverBg = isDark ? "rgba(99,102,241,0.12)" : "#f8fafc";

  /* SEARCH */
  const filteredOrders = orders.filter((o) =>
    o.id.toString().includes(search)
  );

  /* PAGINATION */
  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const start = (page - 1) * ORDERS_PER_PAGE;
  const paginatedOrders = filteredOrders.slice(start, start + ORDERS_PER_PAGE);

  return (
    <Box sx={{ minHeight: "100vh", p: { xs: 1.5, md: 4 }, background: pageBg }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h5" fontWeight={700} sx={{ color: textMain }}>
          Orders
        </Typography>

        <TextField
          size="small"
          placeholder="Search order id..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{
            width: { xs: "100%", sm: 260 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              background: cardBg,
              color: textMain,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: border,
            },
            "& .MuiInputBase-input::placeholder": {
              color: textMuted,
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* SUMMARY CARDS */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
        }}
        gap={3}
        mb={4}
      >
        {[
          { title: "Total Orders", value: totalOrders },
          { title: "Pending", value: pendingOrders },
          { title: "Shipped", value: shippedOrders },
          { title: "Delivered", value: deliveredOrders },
        ].map((item, i) => (
          <Card
            key={i}
            sx={{
              p: 2.5,
              background: cardBg,
              borderRadius: 3,
              boxShadow: isDark
                ? "0 0 25px rgba(99,102,241,0.2)"
                : "0 10px 22px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="body2" sx={{ color: textMuted }}>
              {item.title}
            </Typography>
            <Typography variant="h5" fontWeight={700} sx={{ color: textMain }}>
              {item.value}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* ORDERS TABLE */}
      <Card
        sx={{
          background: cardBg,
          borderRadius: 4,
          boxShadow: isDark
            ? "0 0 30px rgba(99,102,241,0.18)"
            : "0 12px 28px rgba(0,0,0,0.08)",
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
                  Details
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700, display: { xs: "none", md: "table-cell" } }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700, display: { xs: "none", md: "table-cell" } }}>
                  Items
                </TableCell>
                <TableCell sx={{ color: textMain, fontWeight: 700, display: { xs: "none", md: "table-cell" } }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedOrders.map((o) => (
                <TableRow
                  key={o.id}
                  hover
                  sx={{
                    "& td": {
                      borderBottom: `1px solid ${border}`,
                      color: textMuted,
                    },
                    "&:hover": { backgroundColor: hoverBg },
                  }}
                >
                  <TableCell>#{o.id}</TableCell>

                  {/* DETAILS */}
                  <TableCell>
                    {/* DESKTOP */}
                    <Box display={{ xs: "none", md: "flex" }} gap={1.5}>
                      <Avatar
                        src={`https://i.pravatar.cc/150?img=${o.userId}`}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Typography sx={{ color: textMain }}>
                        Customer {o.userId}
                      </Typography>
                    </Box>

                    {/* MOBILE */}
                    <Box display={{ xs: "block", md: "none" }}>
                      <Typography fontWeight={600} sx={{ color: textMain }}>
                        Customer {o.userId}
                      </Typography>
                      <Typography variant="body2">
                        📅 {o.date.slice(0, 10)}
                      </Typography>
                      <Typography variant="body2">
                        📦 Items: {o.products.length}
                      </Typography>
                      <Chip
                        label={o.status}
                        size="small"
                        sx={{
                          mt: 1,
                          background: statusColor[o.status],
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  </TableCell>

                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    {o.date.slice(0, 10)}
                  </TableCell>

                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    {o.products.length}
                  </TableCell>

                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    <Chip
                      label={o.status}
                      size="small"
                      sx={{
                        background: statusColor[o.status],
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

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" py={3}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, v) => setPage(v)}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: textMain,
                  fontWeight: 600,
                },
                "& .Mui-selected": {
                  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
                  color: "#fff",
                },
              }}
            />
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Orders;
