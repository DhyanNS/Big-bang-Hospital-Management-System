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



  function DeactivateDoctor(){
    const [error, setError] = useState(null);
    const handleDeActivateClick = async (event) => {
    
   
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const inactivate_id = data.get("doctordeactivateid");
      const url = `https://localhost:7174/api/Admin/doctor/${inactivate_id}/setInactive`;
  
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
          console.log("Inside  200 ");
          setError("Doctor deactivated successfully");
         
        }
      } catch (error) {
        // Handle any errors
        if (error.response && error.response.status === 404) {
          setError("Doctor does not exist!");
        }
        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
          setError("You do not have permission to deactivate doctor .");
        }
      }
    };

    return(
      <div>
      {error && <Alert severity="error">{error}</Alert>}<Box sx={{ marginTop: "20px" }}>
    <Typography
      variant="subtitle2"
      component="h3"
      sx={{ marginBottom: "10px" }}
    >
      Deactivate Doctor
    </Typography>

    <Box
      component="form"
      onSubmit={handleDeActivateClick}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="doctordeactivateid"
        label="Doctor ID"
        name="doctordeactivateid"
        autoComplete="name"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Dectivate Doctor
      </Button>
    </Box>
  </Box>
  </div>)

  }

  export default DeactivateDoctor;