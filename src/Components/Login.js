import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

function validateEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password should have a minimum of 8 characters
  return password.length >= 8;
}

function isValidCredentials(email, password) {
  return validateEmail(email) && validatePassword(password);
}

function NavigateToPageBasedOnRole(token, navigate) {
  console.log('Inside navigate function');
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('decoded_token', JSON.stringify(decodedToken));

  if (decodedToken) {
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    switch (role) {
      case 'Doctor':
        navigate('/displaypatient');
        break;
      case 'Patient':
        navigate('/displaydoctor');
        break;
      case 'Admin':
        navigate('/admin');
        break;
      default:
        // Handle unrecognized roles
        break;
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00', // Green color
    },
  },
});

function Login() {
  const [error_message, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!isValidCredentials(email, password)) {
      setError('Invalid email or password.');
      return;
    }

    const url = 'https://localhost:7174/api/Token';
    const data_token = {
      userId: 0,
      userFirstName: 'string',
      userLastName: 'string',
      userEmail: email,
      password: password,
      role: 'string',
      contactNumber: 'string',
      gender: 'string',
      dateOfBirth: '2023-05-22T17:43:50.827Z',
      address: 'string',
    };

    try {
      const response = await axios.post(url, data_token);
      const token = response.data.token;
      NavigateToPageBasedOnRole(token, navigate);
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2, // Add margin bottom to create space between image and fields
            }}
          >
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="subtitle2" color="error">
              {error_message}
            </Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
