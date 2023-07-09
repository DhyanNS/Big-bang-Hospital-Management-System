import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  CardContent,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Alert from "@mui/material/Alert";

function ActivateDoctor(){
  const [error, setError] = useState(null);
  const handleActivateClick = async (event,open,handleClose) => {
    
   
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const activate_id = data.get("doctoractivateid");
    const url = `https://localhost:7174/api/Admin/doctor/${activate_id}/setActive`;

    try {
      const token=sessionStorage.getItem('token');
      console.log("Inside try block");
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setError("Doctor activated successfully");
      }
    } catch (error) {
      // Handle any errors
      if (error.response && error.response.status === 404) {
        setError("Doctor does not exist!");
      }
      if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        setError("You do not have permission to activate doctor .");
      }
    }
  };
    const [open, setOpen] = useState(false);
   
    return(
      <div>
      {error && <Alert severity="error">{error}</Alert>}
    <Box sx={{ marginTop: "20px" }}>
    <Typography
      variant="subtitle2"
      component="h3"
      sx={{ marginBottom: "10px" }}
    >
      Activate Doctor
    </Typography>

    <Box
      component="form"
      onSubmit={handleActivateClick}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="doctoractivateid"
        label="Doctor ID"
        name="doctoractivateid"
        autoComplete="name"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Activate Doctor
      </Button>
    </Box>
  </Box>
  </div>)
}

export default ActivateDoctor;