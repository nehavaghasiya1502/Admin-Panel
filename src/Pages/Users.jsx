import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Chip,
  Pagination,
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const statusList = ["online", "offline", "away"];
const statusColors = {
  online: "#22c55e",
  offline: "#ef4444",
  away: "#f59e0b",
};

const USERS_PER_PAGE = 8;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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
  const MAX_PAGES = 3;

  const totalPages = Math.min(
    MAX_PAGES,
    Math.ceil(filtered.length / USERS_PER_PAGE)
  );


  // const totalPages = Math.ceil(filtered.length / USERS_PER_PAGE);
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filtered.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  const { theme } = useContext(ThemeContext);

  return (
    <Box className="page-animate" sx={{ mt: 10 }}>
      {/* TOP BAR */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h5" fontWeight={700}>
          Users
        </Typography>

        <TextField
          size="small"
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{
            width: { xs: "100%", sm: 260 },
            mt: { xs: 1, sm: 0 },

            "& .MuiOutlinedInput-root": {
              borderRadius: "14px",
              background:
                theme === "dark" ? "#020617" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#020617",
              boxShadow:
                theme === "dark"
                  ? "0 8px 20px rgba(0,0,0,0.45)"
                  : "0 8px 20px rgba(0,0,0,0.08)",

              "& fieldset": {
                borderColor:
                  theme === "dark" ? "#1e293b" : "#e2e8f0",
              },

              "&:hover fieldset": {
                borderColor:
                  theme === "dark" ? "#38bdf8" : "#3b82f6",
              },

              "&.Mui-focused fieldset": {
                borderColor:
                  theme === "dark" ? "#22d3ee" : "#2563eb",
                borderWidth: "2px",
              },
            },

            "& input::placeholder": {
              color:
                theme === "dark" ? "#94a3b8" : "#64748b",
              opacity: 1,
            },
          }}
        />

      </Box>
      {/* USERS GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: "22px",
        }}
      >
        {paginatedUsers.map((user) => (
          <Box
            key={user.id}
            sx={{
              background:
                theme === "dark"
                  ? "linear-gradient(145deg, #020617, #0f172a)"
                  : "linear-gradient(145deg, #ffffff, #f1f5f9)",
              color: theme === "dark" ? "#fff" : "#020617",
              borderRadius: "22px",
              padding: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
              transition: "all .35s ease",
              cursor: "pointer",
              maxWidth: "100%",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
              },
            }}
          >
            {/* HEADER */}
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />
              <Box flex={1}>
                <Typography fontWeight={600}>{user.name}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme === "dark" ? "#9ca3af" : "#64748b",
                    fontSize: "13px",
                    wordBreak: "break-all",
                    overflowWrap: "anywhere",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>

              <Chip
                label={user.status}
                size="small"
                sx={{
                  background:
                    theme === "dark"
                      ? statusColors[user.status]
                      : statusColors[user.status] + "cc",
                  color: "#fff",
                  fontWeight: 600,
                }}
              />

            </Box>

            <Typography fontSize={14} c sx={{ color: theme === "dark" ? "#9ca3af" : "#475569" }}>
              🌍 {user.country}
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <CircularProgress
                variant="determinate"
                value={user.usage}
                size={48}
                sx={{ color: statusColors[user.status] }}
              />
              <Box>
                <Typography fontSize={13} color="gray">
                  Usage
                </Typography>
                <Typography fontWeight={600}>{user.usage}%</Typography>
              </Box>
            </Box>

            <Typography mt={2} fontSize={13} color="gray">
              Last login: {user.lastLogin}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={6}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, val) => setPage(val)}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff",
                borderRadius: "10px",
                fontWeight: 600,
              },
              "& .Mui-selected": {
                background: "linear-gradient(135deg,#3b82f6,#06b6d4)",
                color: "#fff",
              },
              "& .MuiPaginationItem-previousNext": {
                color: "#fff",
              },
            }}
          />

        </Box>
      )}
    </Box>
  );
};

export default Users;
