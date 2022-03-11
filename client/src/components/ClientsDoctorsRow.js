import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function ClientsDoctorsRow({clientDoctor, deleteClientDoctor}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete a client-doctor relationship?`);
        if (confirmDelete) {
            alert(`Entry deleted successfully`)
            deleteClientDoctor(clientDoctor.clientID, clientDoctor.doctorID)
        }
    }

    return(
        <tr>
            <td>{clientDoctor.clientID}</td>
            <td>{clientDoctor.doctorID}</td>

            <td><Link to={"/Clients_Doctors/Edit"} state={clientDoctor}><GrEdit /></Link></td>
            <td><GrFormTrash onClick={ () => confirmDelete()} /></td>
        </tr>
    );
};

export default ClientsDoctorsRow;