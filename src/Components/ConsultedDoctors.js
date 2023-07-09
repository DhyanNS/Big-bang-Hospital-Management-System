import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ConsultedDoctors = ({ parse_doctor }) => {
  console.log(parse_doctor);

  const cardColor = parse_doctor.isActive ? 'green' : 'red';

  return (
    <div>
      <br />
      <Card variant="outlined" style={{ backgroundColor: cardColor }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Consulted Doctor Details
          </Typography>
          <Typography variant="h5" component="div" style={{ color: 'white' }}>
            {parse_doctor.firstName} {parse_doctor.lastName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ color: 'white' }}>
            Contact Number: {parse_doctor.contactNumber}
          </Typography>
          <Typography variant="body2" style={{ color: 'white' }}>
            E-Mail: {parse_doctor.email}
            <br />
            Specialization: {parse_doctor.specialization}
          </Typography>
          <Typography variant="body2" style={{ color: 'white' }}>
            Experience: {parse_doctor.experience}
            <br />
            Hospital: {parse_doctor.hospital}
          </Typography>
          <Typography variant="body2" style={{ color: 'white' }}>
            Qualification: {parse_doctor.qualification}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultedDoctors;
