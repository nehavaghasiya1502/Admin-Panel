import React, { useEffect, useState, useContext } from "react";
import {
  Avatar,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Chip,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip
} from "@mui/material";
import { ThemeContext } from "../Context/ThemeContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const statusList = ["online", "offline", "away"];
const statusColors = { online: "#22c55e", offline: "#ef4444", away: "#f59e0b" };

const USERS_PER_PAGE = 8;
const MAX_PAGES = 3;

const Users = ({ setActivePage, setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.users.map((u) => ({
          id: u.id,
          name: `${u.firstName} ${u.lastName}`,
          email: u.email,
          avatar: u.image,
          country: u.address.country,
          usage: Math.floor(Math.random() * 100),
          status: statusList[Math.floor(Math.random() * 3)],
          lastLogin: "Recently",
        }));
        setUsers(formatted);
      });
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.min(MAX_PAGES, Math.ceil(filtered.length / USERS_PER_PAGE));
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filtered.slice(startIndex, startIndex + USERS_PER_PAGE);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setActivePage("edit-user");
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <Box sx={{ mt: 10, px: 2 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} flexWrap="wrap" gap={2}>
        <Typography variant="h5" fontWeight={700}>Users</Typography>
        <TextField
          size="small"
          placeholder="Search users..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          sx={{
            width: { xs: "100%", sm: 260 },
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              background: theme === "dark" ? "#020617" : "#ffffff",
              color: theme === "dark" ? "#fff" : "#020617",
            },
          }}
        />
      </Box>

      {/* Users Table */}
      <TableContainer component={Paper} sx={{
        background: theme === "dark" ? "linear-gradient(145deg,#020617,#0f172a)" : "#ffffff",
        borderRadius: "16px",
        overflowX: "auto",
        boxShadow: theme === "dark" ? "0 10px 30px rgba(0,0,0,0.6)" : "0 10px 25px rgba(0,0,0,0.12)",
      }}>
        <Table>
          <TableHead>
            <TableRow>
              {["User", "Email", "Country", "Status", "Usage", "Last Login", "Actions"].map(head => (
                <TableCell key={head} sx={{
                  fontWeight: 700,
                  color: theme === "dark" ? "#e5e7eb" : "#020617",
                  borderBottom: theme === "dark" ? "1px solid #1e293b" : "1px solid #e2e8f0",
                }}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id} hover sx={{ "&:hover": { background: theme === "dark" ? "#020617" : "#f8fafc" } }}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={user.avatar} />
                    <Typography fontWeight={600} sx={{ color: theme === "dark" ? "#e5e7eb" : "#020617" }}>
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ color: theme === "dark" ? "#9ca3af" : "#475569", wordBreak: "break-all" }}>
                  {user.email}
                </TableCell>

                <TableCell fontWeight={600} sx={{ color: theme === "dark" ? "#e5e7eb" : "#020617" }}>
                  🌍 {user.country}
                </TableCell>

                <TableCell>
                  <Chip label={user.status} size="small" sx={{ background: statusColors[user.status], color: "#fff", fontWeight: 600 }} />
                </TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <CircularProgress variant="determinate" value={user.usage} size={28} sx={{
                      color: statusColors[user.status],
                      "& .MuiCircularProgress-track": { color: theme === "dark" ? "#1e293b" : "#e5e7eb" }
                    }} />
                    <Typography fontWeight={600} sx={{ color: theme === "dark" ? "#e5e7eb" : "#020617" }}>
                      {user.usage}%
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ color: "gray" }}>{user.lastLogin}</TableCell>

                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleEdit(user)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton size="small" color="error" onClick={() => handleDelete(user.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, val) => setPage(val)}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": { color: theme === "dark" ? "#fff" : "#020617", fontWeight: 600 },
              "& .Mui-selected": { background: "linear-gradient(135deg,#3b82f6,#06b6d4)", color: "#fff" },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Users;
