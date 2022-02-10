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
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
