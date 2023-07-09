import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffc107',
        padding: '1.5rem',
        mt: '2rem',
        textAlign: 'center',
      }}
    >
      {/* <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: '1rem' }}> */}
        Contact Us:
      {/* </Typography> */}
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>
        Address: 123 Hospital Street, City, Country
        <br />
        Phone: <Link href="tel:+1234567890">+1234567890</Link>
        <br />
        Email: <Link href="mailto:info@example.com">info@example.com</Link>
        <br />
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '1.2rem', mt: '1.5rem', mb: '0.5rem' }}>
        Follow us on:
      </Typography>
      <Typography variant="body1" color="text.secondary">
        <Link href="https://www.facebook.com">
          <FacebookIcon fontSize="large" sx={{ marginRight: '0.5rem' }} />
        </Link>
        <Link href="https://www.twitter.com">
          <TwitterIcon fontSize="large" sx={{ marginRight: '0.5rem' }} />
        </Link>
        <Link href="https://www.instagram.com">
          <InstagramIcon fontSize="large" sx={{ marginRight: '0.5rem' }} />
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
