import React from 'react';
import styles from './AboutUs.module.css'; // Import the CSS file for styling

const AboutUs = () => {
  const doctors = [
    { name: 'Dr. Nagesh', specialization: 'Cardiology' },
    { name: 'Dr. Shobha', specialization: 'Pediatrics' },
    { name: 'Dr. Prathiksha', specialization: 'Orthopedics' },
    { name: 'Dr. Ashok', specialization: 'Cardiology' },
    { name: 'Dr. kumar', specialization: 'Pediatrics' },
    { name: 'Dr. Chethan', specialization: 'Orthopedics' },
    { name: 'Dr. Chandan', specialization: 'Cardiology' },
    { name: 'Dr. Revanth', specialization: 'Pediatrics' },
    { name: 'Dr. Neha', specialization: 'Orthopedics' },
    // Add more doctors and their specializations as needed
  ];

  return (
    <div>
      <h1>About Us</h1>
      <h2>Specializations</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutUs;
