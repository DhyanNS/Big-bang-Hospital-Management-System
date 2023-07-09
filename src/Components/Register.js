import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Button,
  Typography,
  Container,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AirlineSeatFlatSharpIcon from '@mui/icons-material/AirlineSeatFlatSharp';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from '@mui/icons-material/Person';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500", // Orange color
    },
  },
});

function Register() {
  const [user_role, setRole] = useState("");
  const [user_gender, setGender] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Perform validation before submitting the form
    if (!data.get("firstname")) {
      setError("Please enter your first name");
      return;
    }
    if (!data.get("lastname")) {
      setError("Please enter your last name");
      return;
    }
    if (!data.get("Phonenumber")) {
      setError("Please enter your phone number");
      return;
    }
    if (!data.get("email")) {
      setError("Please enter your email address");
      return;
    }
    if (!data.get("password")) {
      setError("Please enter a password");
      return;
    }
    if (!user_role) {
      setError("Please select a role");
      return;
    }
    if (user_role === "Doctor") {
      // Perform validation for doctor fields
      if (!data.get("qualification")) {
        setError("Please enter your qualification");
        return;
      }
      if (!data.get("specialization")) {
        setError("Please enter your specialization");
        return;
      }
      if (!data.get("experience")) {
        setError("Please enter your experience");
        return;
      }
      if (!data.get("hospital")) {
        setError("Please enter the hospital name");
        return;
      }
    } else if (user_role === "Patient") {
      // Perform validation for patient fields
      if (!user_gender) {
        setError("Please select your gender");
        return;
      }
      if (!data.get("address")) {
        setError("Please enter your address");
        return;
      }
      if (!data.get("reason")) {
        setError("Please enter the reason for registration");
        return;
      }
    }

    const url = "https://localhost:7174/Register";
    const data_token = {
      userId: 0,
      userFirstName: data.get("firstname"),
      userLastName: data.get("lastname"),
      userEmail: data.get("email"),
      password: data.get("password"),
      role: user_role,
      contactNumber: data.get("Phonenumber"),
      gender: user_gender,
      address: data.get("address"),
      reason: data.get("reason"),
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };

    try {
      const response = await axios.post(url, data_token);
      // const token = response.data.token;
      // Save the token in your component state or local storage
      // ...
      setSuccess("Registration successful! You can now log in.");
      setTimeout(() => {
        navigate("/Register"); // Redirect to dashboard after a delay
      }, 3000); // Adjust the delay time if needed
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Container component="main" maxWidth="xs">
          <div className="text-center">
            <Avatar className="m-1 bg-secondary">
              <AirlineSeatFlatSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            {error && (
              <Alert severity="error" onClose={() => setError("")}>
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" onClose={() => setSuccess("")}>
                <AlertTitle>Success</AlertTitle>
                {success}
              </Alert>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Phonenumber"
              label="Phone Number"
              name="Phonenumber"
              autoComplete="tel"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"} // Updated type based on showPassword state
              id="password"
              InputProps={{ // Added InputProps to enable/disable the password visibility
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControl component="fieldset" className="my-2">
              <FormLabel component="legend">Role</FormLabel>
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={user_role}
                onChange={handleRoleChange}
              >
                <FormControlLabel
                  value="Doctor"
                  control={<Radio />}
                  label="Doctor"
                />
                <FormControlLabel
                  value="Patient"
                  control={<Radio />}
                  label="Patient"
                />
              </RadioGroup>
            </FormControl>
            {user_role === "Doctor" && (
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="qualification"
                  label="Qualification"
                  name="qualification"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="specialization"
                  label="Specialization"
                  name="specialization"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="experience"
                  label="Experience"
                  name="experience"
                  type="number"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="hospital"
                  label="Hospital Name"
                  name="hospital"
                />
              </div>
            )}
            {user_role === "Patient" && (
              <div>
                <FormControl component="fieldset" className="my-2">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={user_gender}
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="reason"
                  label="Reason for Registration"
                  name="reason"
                />
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-3"
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/Login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                {"© "}
                {new Date().getFullYear()}{" "}
                <Link color="inherit" href="/Home">
                  Your Website
                </Link>
              </Typography>
            </Box>
          </form>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Register;
