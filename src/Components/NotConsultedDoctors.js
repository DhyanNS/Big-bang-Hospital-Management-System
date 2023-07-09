import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NotConsultedDoctors = ({ parse_doctor, onConsultClick }) => {
  const [isConsulted, setIsConsulted] = useState(false);
  console.log(parse_doctor);

  const cardColor = parse_doctor.isActive ? 'green' : 'red';

  const handleConsultClick = () => {
    // Invoke the provided onConsultClick function and pass the doctor ID
    onConsultClick(parse_doctor.doctorId);
    setIsConsulted(true);
  };

  return (
    <div>
      <br />
      <Card variant="outlined" sx={{ backgroundColor: cardColor }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Not Consulted Doctor Details
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component="div" style={{ marginRight: '5px' }}>
              {parse_doctor.firstName} {parse_doctor.lastName}
            </Typography>
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Contact Number: {parse_doctor.contactNumber}
          </Typography>
          <Typography variant="body2">
            E-Mail: {parse_doctor.email}
            <br />
            Specialization: {parse_doctor.specialization}
          </Typography>
          <Typography variant="body2">
            Experience: {parse_doctor.experience}
            <br />
            Hospital: {parse_doctor.hospital}
          </Typography>
          <Typography variant="body2">
            Qualification: {parse_doctor.qualification}
            <br />
          </Typography>
          <Button
            variant="contained"
            color={isConsulted ? 'success' : 'primary'}
            size="small"
            onClick={handleConsultClick}
            disabled={isConsulted}
          >
            {isConsulted ? 'Consulted' : 'Consult'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotConsultedDoctors;
