import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './NavigationBar.css'; // Import the CSS file

function NavigationBar() {
  const handleLogout = () => {
    // Perform any logout logic here, such as clearing session or token

    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <AppBar position="static" className="navbar" style={{ backgroundColor: 'red' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          HOSPITAL MANAGEMENT SYSTEM
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/Home" color="inherit" startIcon={<HomeIcon style={{ color: 'yellow' }} />} className="nav-link">
          Home
        </Button>
        <Button component={Link} to="/register" color="inherit" startIcon={<SchoolIcon style={{ color: 'yellow' }} />} className="nav-link">
          Register
        </Button>
        <Button component={Link} to="/login" color="inherit" startIcon={<PersonIcon style={{ color: 'yellow' }} />} className="nav-link">
          Login
        </Button>
        <Button component={Link} to="/AboutUs" color="inherit" startIcon={<PersonIcon style={{ color: 'Black' }} />} className="nav-link">
          AboutUs
        </Button>
        <Button color="inherit" startIcon={<SupervisorAccountIcon style={{ color: 'yellow' }} />} onClick={handleLogout} className="nav-link">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
