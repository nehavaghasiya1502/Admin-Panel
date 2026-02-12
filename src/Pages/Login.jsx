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
    <div className="page-animate">
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
            variant="outlined"
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className="login-input"
            variant="outlined"
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
    </div>
  );
};

export default Login;
