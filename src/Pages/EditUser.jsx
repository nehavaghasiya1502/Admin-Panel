import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ThemeContext } from "../Context/ThemeContext";

const EditUser = ({ user, setUsers, setActivePage }) => {
  const { theme } = useContext(ThemeContext);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    if (user) setEditedUser(user);
  }, [user]);

  if (!editedUser) return <Typography>Loading...</Typography>;

  const handleSave = () => {
    setUsers((prev) => {
      const updated = prev.map((u) =>
        u.id === editedUser.id ? editedUser : u
      );

      localStorage.setItem("users_data", JSON.stringify(updated));
      return updated;
    });

    setActivePage("users");
  };

  return (
    <div className="page-animate">
      <Box className={`add-product-page ${theme === "dark" ? "dark" : ""}`}>
        <Box className="add-card">
          <Box className="add-header">
            <Typography variant="h5">Edit User</Typography>
          </Box>

          <Box className="form-group">
            <label>Name</label>
            <TextField
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              size="small"
              fullWidth
            />
          </Box>

          <Box className="form-group">
            <label>Email</label>
            <TextField
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              size="small"
              fullWidth
            />
          </Box>

          <Box className="form-group">
            <label>Country</label>
            <TextField
              value={editedUser.country}
              onChange={(e) => setEditedUser({ ...editedUser, country: e.target.value })}
              size="small"
              fullWidth
            />
          </Box>

          <Button className="submit-btn" onClick={handleSave}>Save</Button>
        </Box>
      </Box>
    </div>
  );
};

export default EditUser;
