import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FetchAllDoctors from './FetchAllDoctors';
import { useState } from 'react';

const NewPatient = ({ parse_doctor, onConsultClick }) => {
  const [isConsulted, setIsConsulted] = useState(false);
  const cardColor = parse_doctor.isActive ? 'green' : 'red';

  const handleConsultClick = () => {
    onConsultClick(parse_doctor.doctorId);
    setIsConsulted(true);
  };

  return (
    <div>
      <br></br>
      <Card variant="outlined" sx={{ backgroundColor: cardColor }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            All Doctor Details
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
            color="success"
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

export default NewPatient;
