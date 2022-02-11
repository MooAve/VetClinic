import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h3>Vet Clinic Database</h3>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Pets">Pets</Link></li>
                <li><Link to="/Clients">Clients</Link></li>
                <li><Link to="/Prescriptions">Prescriptions</Link></li>
                <li><Link to="/Doctors">Doctors</Link></li>
                <li><Link to="/Clients_Doctors">Clients_Doctors</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;