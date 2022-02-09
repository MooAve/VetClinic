import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Home from './pages/Home';
import Pets from './pages/Pets';
import Clients from './pages/Clients';
import Prescriptions from './pages/Prescriptions';
import Doctors from './pages/Doctors';
import Clients_Doctors from './pages/Clients_Doctors';


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
