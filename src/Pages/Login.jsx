// // import { useState } from "react";
// // import { Box, Button, TextField, Typography, Card } from "@mui/material";

// // import {
// //   ADMIN_EMAIL,
// //   ADMIN_PASSWORD,
// //   SUPER_ADMIN_EMAIL,
// //   SUPER_ADMIN_PASSWORD,
// // } from "../auth/AuthConfig";

// // const Login = ({ setIsLoggedIn }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleLogin = () => {
// //     setError("");

// //     // Empty validation
// //     if (!email || !password) {
// //       setError("Email and password are required");
// //       return;
// //     }

// //     // Admin check
// //     const isAdmin =
// //       email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

// //     const isSuperAdmin =
// //       email === SUPER_ADMIN_EMAIL &&
// //       password === SUPER_ADMIN_PASSWORD;

// //     if (isAdmin || isSuperAdmin) {
// //       // Login success
// //       localStorage.setItem("isLoggedIn", "true");
// //       localStorage.setItem(
// //         "role",
// //         isSuperAdmin ? "super-admin" : "admin"
// //       );
// //       setIsLoggedIn(true);
// //     } else {
// //       // Invalid credentials
// //       setError("Invalid admin credentials");
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         background: "#020617",
// //       }}
// //     >
// //       <Card
// //         sx={{
// //           width: 360,
// //           p: 4,
// //           borderRadius: "16px",
// //           background: "#0f172a",
// //         }}
// //       >
// //         <Typography variant="h5" fontWeight={700} color="white" mb={3}>
// //           Admin Login
// //         </Typography>

// //         <TextField
// //           fullWidth
// //           placeholder="Email"
// //           margin="normal"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           InputProps={{ sx: { color: "white" } }}
// //         />

// //         <TextField
// //           fullWidth
// //           type="password"
// //           placeholder="Password"
// //           margin="normal"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           InputProps={{ sx: { color: "white" } }}
// //         />

// //         {error && (
// //           <Typography color="error" fontSize={14} mt={1}>
// //             {error}
// //           </Typography>
// //         )}

// //         <Button
// //           fullWidth
// //           onClick={handleLogin}
// //           sx={{
// //             mt: 3,
// //             background: "#6366f1",
// //             color: "white",
// //             fontWeight: 600,
// //             borderRadius: "10px",
// //             "&:hover": { background: "#4f46e5" },
// //           }}
// //         >
// //           Login
// //         </Button>
// //       </Card>
// //     </Box>
// //   );
// // };

// // export default Login;
// import { useState, useContext } from "react";
// import { Box, Button, TextField, Typography, Card, Divider } from "@mui/material";
// import { ThemeContext } from "../Context/ThemeContext";

// import {
//   ADMIN_EMAIL,
//   ADMIN_PASSWORD,
//   SUPER_ADMIN_EMAIL,
//   SUPER_ADMIN_PASSWORD,
// } from "../auth/AuthConfig";

// const Login = ({ setIsLoggedIn }) => {
//   const { theme } = useContext(ThemeContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = () => {
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     const isAdmin =
//       email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

//     const isSuperAdmin =
//       email === SUPER_ADMIN_EMAIL &&
//       password === SUPER_ADMIN_PASSWORD;

//     if (isAdmin || isSuperAdmin) {
//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem(
//         "role",
//         isSuperAdmin ? "super-admin" : "admin"
//       );
//       setIsLoggedIn(true);
//     } else {
//       setError("Invalid admin credentials");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background:
//           theme === "dark"
//             ? "linear-gradient(135deg, #020617, #020617)"
//             : "linear-gradient(135deg, #f8fafc, #eef2ff)",
//       }}
//     >
//       <Card
//         elevation={0}
//         sx={{
//           width: 380,
//           p: 4,
//           borderRadius: "18px",
//           background:
//             theme === "dark" ? "#0f172a" : "#ffffff",
//           boxShadow:
//             theme === "dark"
//               ? "0 20px 40px rgba(0,0,0,0.5)"
//               : "0 20px 40px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography
//           variant="h5"
//           fontWeight={700}
//           textAlign="center"
//           color={theme === "dark" ? "white" : "#020617"}
//         >
//           Admin Login
//         </Typography>

//         <Typography
//           fontSize={14}
//           textAlign="center"
//           color={theme === "dark" ? "#94a3b8" : "#64748b"}
//           mt={1}
//         >
//           Login with admin or super admin credentials
//         </Typography>

//         <Divider sx={{ my: 3 }} />

//         <TextField
//           fullWidth
//           label="Email"
//           placeholder="admin@gmail.com"
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           placeholder="••••••••"
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && (
//           <Typography color="error" fontSize={13} mt={1}>
//             {error}
//           </Typography>
//         )}

//         <Button
//           fullWidth
//           onClick={handleLogin}
//           sx={{
//             mt: 3,
//             py: 1.2,
//             borderRadius: "12px",
//             fontWeight: 600,
//             background:
//               theme === "dark"
//                 ? "linear-gradient(135deg, #6366f1, #4f46e5)"
//                 : "linear-gradient(135deg, #4f46e5, #6366f1)",
//             color: "#fff",
//             "&:hover": {
//               opacity: 0.9,
//             },
//           }}
//         >
//           Login
//         </Button>
//       </Card>
//     </Box>
//   );
// };

// export default Login;
import { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import { ThemeContext } from "../Context/ThemeContext";

import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PASSWORD,
} from "../auth/AuthConfig";

const Login = ({ setIsLoggedIn }) => {
  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const isAdmin =
      email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

    const isSuperAdmin =
      email === SUPER_ADMIN_EMAIL &&
      password === SUPER_ADMIN_PASSWORD;

    if (isAdmin || isSuperAdmin) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "role",
        isSuperAdmin ? "super-admin" : "admin"
      );
      setIsLoggedIn(true);
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <Box
      className={`login-wrapper ${theme}`}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        className="login-card"
        sx={{
          width: 380,
          p: 4,
          borderRadius: "18px",
        }}
      >
        <Typography
          className="login-title"
          variant="h5"
          fontWeight={700}
          textAlign="center"
        >
          Admin Login
        </Typography>

        <Typography
          className="login-subtitle"
          fontSize={14}
          textAlign="center"
          mt={1}
        >
          Login with admin or super admin credentials
        </Typography>

        <Divider sx={{ my: 3 }} />

        <TextField
          className="login-input"
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className="login-input"
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography className="login-error" mt={1}>
            {error}
          </Typography>
        )}

        <Button
          className="login-btn"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
