import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  LinearProgress,
  Box,
  // useTheme,
} from "@mui/material";

import { SiVisa, SiStripe, SiPaypal, SiApplepay, SiMastercard } from "react-icons/si";

const paymentIcons = {
  visa: <SiVisa size={24} />,
  stripe: <SiStripe size={24} />,
  paypal: <SiPaypal size={24} />,
  apple: <SiApplepay size={24} />,
  mastercard: <SiMastercard size={24} />,
};

const countryFlags = {
  US: "🇺🇸",
  BR: "🇧🇷",
  IN: "🇮🇳",
  FR: "🇫🇷",
  ES: "🇪🇸",
  PL: "🇵🇱",
};

const Users = () => {
  // const theme = useTheme();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Olivia Davis",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "online",
        country: "US",
        usage: 50,
        payment: "mastercard",
        lastLogin: "10 sec ago",
      },
      {
        id: 2,
        name: "Ishaan Roy",
        avatar: "https://i.pravatar.cc/150?img=2",
        status: "offline",
        country: "BR",
        usage: 22,
        payment: "visa",
        lastLogin: "5 minutes ago",
      },
      {
        id: 3,
        name: "Alex Brooks",
        avatar: "https://i.pravatar.cc/150?img=3",
        status: "away",
        country: "IN",
        usage: 74,
        payment: "stripe",
        lastLogin: "1 hour ago",
      },
      {
        id: 4,
        name: "Morgan Scott",
        avatar: "https://i.pravatar.cc/150?img=4",
        status: "offline",
        country: "FR",
        usage: 98,
        payment: "paypal",
        lastLogin: "Last month",
      },
      {
        id: 5,
        name: "Taylor Parker",
        avatar: "https://i.pravatar.cc/150?img=5",
        status: "online",
        country: "ES",
        usage: 22,
        payment: "apple",
        lastLogin: "Last week",
      },
      {
        id: 6,
        name: "Cameron Kelly",
        avatar: "https://i.pravatar.cc/150?img=6",
        status: "offline",
        country: "PL",
        usage: 43,
        payment: "visa",
        lastLogin: "Last week",
      },
    ];
    setUsers(data);
  }, []);

  // Status colors
  const statusColors = {
    online: "#4caf50",
    offline: "#f44336",
    away: "#ff9800",
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#1e1e2f", borderRadius: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>User</TableCell>
            <TableCell sx={{ color: "#fff" }}>Country</TableCell>
            <TableCell sx={{ color: "#fff" }}>Usage</TableCell>
            <TableCell sx={{ color: "#fff" }}>Payment Method</TableCell>
            <TableCell sx={{ color: "#fff" }}>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} sx={{ "&:hover": { backgroundColor: "#2c2c3c" } }}>
              {/* User with avatar and status */}
              <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box position="relative">
                  <Avatar src={user.avatar} alt={user.name} />
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: statusColors[user.status],
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      border: "2px solid #1e1e2f",
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>{user.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#aaa" }}>
                    Registered: Jan 1, 2023
                  </Typography>
                </Box>
              </TableCell>

              {/* Country */}
              <TableCell sx={{ color: "#fff" }}>{countryFlags[user.country]}</TableCell>

              {/* Usage bar */}
              <TableCell sx={{ minWidth: 150 }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography sx={{ color: "#fff", width: 30 }}>{user.usage}%</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={user.usage}
                    sx={{
                      flex: 1,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#2c2c3c",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          user.usage > 75
                            ? "#f44336"
                            : user.usage > 50
                            ? "#ff9800"
                            : "#4caf50",
                      },
                    }}
                  />
                </Box>
              </TableCell>

              {/* Payment */}
              <TableCell sx={{ color: "#fff" }}>{paymentIcons[user.payment]}</TableCell>

              {/* Activity */}
              <TableCell sx={{ color: "#fff" }}>
                <Typography variant="body2">Last login</Typography>
                <Typography sx={{ fontWeight: 600 }}>{user.lastLogin}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
