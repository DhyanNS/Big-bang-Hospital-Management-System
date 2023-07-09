import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Login from './Components/Login';
import AdminPage from './Components/AdminPage';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayPatient from './Components/DisplayPatient';
import FetchPatients from './Components/FetchPatients';
import FetchAllDoctors from './Components/FetchAllDoctors';
import FetchConsultedDoctors from './Components/FetchConsultedDoctors';
import NotConsultedDoctors from './Components/NotConsultedDoctors';
import FetchNotConsultedDoctors from './Components/FetchNotConsultedDoctors';
import Doctor from './Components/Doctor';
import Admin from './Components/Admin';
import AddDoctor from './Components/AddDoctor';
import DeleteDoctor from './Components/DeleteDoctor';
import UpdateDoctor from './Components/UpdateDoctor';
import GetAllDoctors from './Components/GetAllDoctors';
import GetDoctorById from './Components/GetDoctorById';
import ActivateDoctor from './Components/ActivateDoctor';
import DeactivateDoctor from './Components/DeactivateDoctor';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <NavigationBar />
     
      <Container>
      <Routes>
        <Route path="/home" element={<Home/>} />
          
        <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/displaypatient" element={<FetchPatients />} />
          <Route path="/displaydoctor" element={<Doctor />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/delete-doctor" element={<DeleteDoctor />} />
          <Route path="/update-doctor" element={<UpdateDoctor />} />
          <Route path="/getall-doctor" element={<GetAllDoctors />} />
          <Route path="/get-doctor-id" element={<GetDoctorById />} />
          <Route path="/activate-doctor" element={<ActivateDoctor />} />
          <Route path="/deactivate-doctor" element={<DeactivateDoctor />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </Container>
      
    </Router>
   
  );
}

export default App
