import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function ClientsDoctorsRow({clientDoctor, deleteClientDoctor}) {
    return(
        <tr>
            <td>{clientDoctor.clientID}</td>
            <td>{clientDoctor.doctorID}</td>

            <td><Link to="/Clients_Doctors/Edit"><GrEdit /></Link></td>
            <td><GrFormTrash onClick={ () => deleteClientDoctor(clientDoctor.clientID, clientDoctor.doctorID)} /></td>
        </tr>
    );
};

export default ClientsDoctorsRow;