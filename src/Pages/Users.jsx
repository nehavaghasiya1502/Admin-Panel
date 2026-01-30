// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Typography,
//   LinearProgress,
//   Box,
//   // useTheme,
// } from "@mui/material";

// import { SiVisa, SiStripe, SiPaypal, SiApplepay, SiMastercard } from "react-icons/si";

// const paymentIcons = {
//   visa: <SiVisa size={24} />,
//   stripe: <SiStripe size={24} />,
//   paypal: <SiPaypal size={24} />,
//   apple: <SiApplepay size={24} />,
//   mastercard: <SiMastercard size={24} />,
// };

// const countryFlags = {
//   US: "🇺🇸",
//   BR: "🇧🇷",
//   IN: "🇮🇳",
//   FR: "🇫🇷",
//   ES: "🇪🇸",
//   PL: "🇵🇱",
// };

// const Users = () => {
//   // const theme = useTheme();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const data = [
//       {
//         id: 1,
//         name: "Olivia Davis",
//         avatar: "https://i.pravatar.cc/150?img=1",
//         status: "online",
//         country: "US",
//         usage: 50,
//         payment: "mastercard",
//         lastLogin: "10 sec ago",
//       },
//       {
//         id: 2,
//         name: "Ishaan Roy",
//         avatar: "https://i.pravatar.cc/150?img=2",
//         status: "offline",
//         country: "BR",
//         usage: 22,
//         payment: "visa",
//         lastLogin: "5 minutes ago",
//       },
//       {
//         id: 3,
//         name: "Alex Brooks",
//         avatar: "https://i.pravatar.cc/150?img=3",
//         status: "away",
//         country: "IN",
//         usage: 74,
//         payment: "stripe",
//         lastLogin: "1 hour ago",
//       },
//       {
//         id: 4,
//         name: "Morgan Scott",
//         avatar: "https://i.pravatar.cc/150?img=4",
//         status: "offline",
//         country: "FR",
//         usage: 98,
//         payment: "paypal",
//         lastLogin: "Last month",
//       },
//       {
//         id: 5,
//         name: "Taylor Parker",
//         avatar: "https://i.pravatar.cc/150?img=5",
//         status: "online",
//         country: "ES",
//         usage: 22,
//         payment: "apple",
//         lastLogin: "Last week",
//       },
//       {
//         id: 6,
//         name: "Cameron Kelly",
//         avatar: "https://i.pravatar.cc/150?img=6",
//         status: "offline",
//         country: "PL",
//         usage: 43,
//         payment: "visa",
//         lastLogin: "Last week",
//       },
//     ];
//     setUsers(data);
//   }, []);

//   // Status colors
//   const statusColors = {
//     online: "#4caf50",
//     offline: "#f44336",
//     away: "#ff9800",
//   };

//   return (
//     <TableContainer component={Paper} sx={{ backgroundColor: "#1e1e2f", borderRadius: 2,marginTop: "100px" }}>
//       <Table sx={{ minWidth: 650 }} aria-label="users table"> 
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ color: "#fff" }}>User</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Country</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Usage</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Payment Method</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Activity</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>

//           {users.map((user) => (
//             <TableRow key={user.id} sx={{ "&:hover": { backgroundColor: "#2c2c3c" } }}>
//               {/* User with avatar and status */}
//               <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                 <Box position="relative">
//                   <Avatar src={user.avatar} alt={user.name} />
//                   <Box
//                     sx={{
//                       width: 12,
//                       height: 12,
//                       borderRadius: "50%",
//                       backgroundColor: statusColors[user.status],
//                       position: "absolute",
//                       bottom: 0,
//                       right: 0,
//                       border: "2px solid #1e1e2f",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Typography sx={{ color: "#fff" }}>{user.name}</Typography>
//                   <Typography variant="body2" sx={{ color: "#aaa" }}>
//                     Registered: Jan 1, 2023
//                   </Typography>
//                 </Box>
//               </TableCell>

//               {/* Country */}
//               <TableCell sx={{ color: "#fff" }}>{countryFlags[user.country]}</TableCell>

//               {/* Usage bar */}
//               <TableCell sx={{ minWidth: 150 }}>
//                 <Box display="flex" alignItems="center" gap={1}>
//                   <Typography sx={{ color: "#fff", width: 30 }}>{user.usage}%</Typography>
//                   <LinearProgress
//                     variant="determinate"
//                     value={user.usage}
//                     sx={{
//                       flex: 1,
//                       height: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#2c2c3c",
//                       "& .MuiLinearProgress-bar": {
//                         backgroundColor:
//                           user.usage > 75
//                             ? "#f44336"
//                             : user.usage > 50
//                             ? "#ff9800"
//                             : "#4caf50",
//                       },
//                     }}
//                   />
//                 </Box>
//               </TableCell>

//               {/* Payment */}
//               <TableCell sx={{ color: "#fff" }}>{paymentIcons[user.payment]}</TableCell>

//               {/* Activity */}
//               <TableCell sx={{ color: "#fff" }}>
//                 <Typography variant="body2">Last login</Typography>
//                 <Typography sx={{ fontWeight: 600 }}>{user.lastLogin}</Typography>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Users;
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

  return (
    <Box sx={{ mt: 10 }}>
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
              background: "var(--bg-card, #020617)",
              color: "inherit",
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
                "linear-gradient(145deg, var(--bg-card,#020617), var(--bg-card-2,#0f172a))",
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
                    color: "gray",
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
                  background: statusColors[user.status],
                  color: "#fff",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography fontSize={14} color="gray" mb={1}>
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
