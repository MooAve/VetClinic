import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav'
import Home from './pages/HomePage';
import Pets from './pages/PetsPage';
import Clients from './pages/ClientsPage';
import Prescriptions from './pages/PrescriptionsPage';
import Doctors from './pages/DoctorsPage';
import Clients_Doctors from './pages/Clients_DoctorsPage';

import EditClients from './pages/EditClientsPage';
import EditDoctors from './pages/EditDoctorsPage';
import EditPets from './pages/EditPetsPage';
import EditPrescriptions from './pages/EditPrescriptionsPage';
import EditCD from './pages/EditClients_DoctorsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Pets" element={<Pets />}/>
          <Route path="/Clients" element={<Clients />}/>
          <Route path="/Prescriptions" element={<Prescriptions />}/>
          <Route path="/Doctors" element={<Doctors />}/>
          <Route path="/Clients_Doctors" element={<Clients_Doctors />}/>

          <Route path="/Clients/Edit" element={<EditClients />}/>
          <Route path="/Doctors/Edit" element={<EditDoctors />}/>
          <Route path="/Pets/Edit" element={<EditPets />}/>
          <Route path="/Prescriptions/Edit" element={<EditPrescriptions />}/>
          <Route path="/Clients_Doctors/Edit" element={<EditCD />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
